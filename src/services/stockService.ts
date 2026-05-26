/**
 * STOCK SERVICE - Control de Inventario de 3 Capas
 * 
 * ARQUITECTURA:
 * Capa 1: Verificación previa (cliente → agregar al carrito)
 * Capa 2: Validación pre-pago (checkout → antes de procesar)
 * Capa 3: Actualización atómica (post-pago → decrementar stock)
 * 
 * PRINCIPIOS:
 * ✅ Validación acumulativa (carrito + nueva cantidad)
 * ✅ SIN fallbacks permisivos
 * ✅ Transacciones atómicas (runTransaction)
 * ✅ Fail-safe: Rechazar en caso de error
 */

import { db } from './firebase'
import { doc, getDoc, runTransaction } from 'firebase/firestore'
import { CartItem } from '../store/cartStore'

interface ProductStock {
  id: string
  stock: number
  lastUpdated?: Date
  [key: string]: any
}

/**
 * ═══════════════════════════════════════════════════════════════
 * CAPA 1: VERIFICACIÓN DE DISPONIBILIDAD EN TIEMPO REAL
 * ═══════════════════════════════════════════════════════════════
 * 
 * Usado cuando el usuario intenta agregar cantidad a carrito.
 * Consulta stock actual en Firestore.
 * 
 * RESTRICTIVO: Si producto no existe, retorna available: false
 * (No hay fallback 999 permisivo)
 */
export async function checkProductStockAvailability(
  productId: string,
  quantity: number
): Promise<{
  available: boolean
  message: string
  currentStock: number
}> {
  try {
    const docRef = doc(db, 'products', productId)
    const docSnap = await getDoc(docRef)

    // ❌ RESTRICTIVO: Producto no existe en Firestore
    if (!docSnap.exists()) {
      console.warn(`⚠️  Producto no encontrado: ${productId}`)
      return {
        available: false,
        message: `Producto no registrado en el inventario. Contacta al soporte.`,
        currentStock: 0
      }
    }

    const data = docSnap.data() as ProductStock
    const currentStock = data.stock ?? 0
    const available = currentStock >= quantity

    const message = available
      ? `✅ Stock disponible: ${currentStock}`
      : `❌ Stock insuficiente. Disponibles: ${currentStock}, Solicitados: ${quantity}`

    console.log(`📦 Stock check [${productId}]: ${message}`)

    return {
      available,
      message,
      currentStock
    }
  } catch (error) {
    console.error(`🔥 Error checking stock for ${productId}:`, error)
    // Fail-safe: Rechazar en caso de error
    return {
      available: false,
      message: 'Error verificando el stock. Por favor intenta de nuevo.',
      currentStock: 0
    }
  }
}

/**
 * ═══════════════════════════════════════════════════════════════
 * CAPA 2: VALIDACIÓN COMPLETA PRE-PAGO
 * ═══════════════════════════════════════════════════════════════
 * 
 * Usado en Checkout ANTES de procesar pago.
 * Valida TODOS los items del carrito simultáneamente.
 * 
 * Retorna objeto con validez general y lista detallada de errores
 */
export async function validateOrderStock(
  cartItems: CartItem[]
): Promise<{
  valid: boolean
  errors: string[]
  itemDetails?: Array<{
    id: string
    name: string
    requested: number
    available: number
    valid: boolean
  }>
}> {
  const errors: string[] = []
  const itemDetails: Array<{
    id: string
    name: string
    requested: number
    available: number
    valid: boolean
  }> = []

  try {
    console.log(`🔍 Validando ${cartItems.length} items de carrito...`)

    // Validar cada item en paralelo
    const validationPromises = cartItems.map(async (item) => {
      const check = await checkProductStockAvailability(item.id, item.quantity)
      
      const detail = {
        id: item.id,
        name: item.name,
        requested: item.quantity,
        available: check.currentStock,
        valid: check.available
      }
      
      itemDetails.push(detail)

      if (!check.available) {
        errors.push(`${item.name}: ${check.message}`)
      }

      return check.available
    })

    await Promise.all(validationPromises)

    const isValid = errors.length === 0
    console.log(
      isValid
        ? `✅ Validación EXITOSA - Todos los items tienen stock`
        : `❌ Validación FALLIDA - ${errors.length} items sin stock suficiente`
    )

    return {
      valid: isValid,
      errors,
      itemDetails
    }
  } catch (error) {
    console.error(`🔥 Error validating order stock:`, error)
    return {
      valid: false,
      errors: ['Error fatal al validar el stock. Por favor intenta de nuevo.'],
      itemDetails
    }
  }
}

/**
 * ═══════════════════════════════════════════════════════════════
 * CAPA 3: ACTUALIZACIÓN ATÓMICA POST-PAGO
 * ═══════════════════════════════════════════════════════════════
 * 
 * Usado DESPUÉS de procesar pago exitosamente.
 * Utiliza Firestore runTransaction para ATOMICIDAD garantizada.
 * 
 * DOS FASES ESTRICTAS:
 * 
 * FASE 1 (LECTURA + VALIDACIÓN):
 * - Lee stock actual de TODOS los productos
 * - Verifica disponibilidad suficiente
 * - Si hay rotura, lanza error SIN actualizar nada
 * - Se reintenta automáticamente si hay conflicto concurrente
 * 
 * FASE 2 (ACTUALIZACIÓN):
 * - Si todas validaciones pasan, decrementa stock
 * - Garantiza: NO hay sobreventa
 * - Transacción falla completamente o éxito completo
 */
export async function decrementProductStock(
  cartItems: CartItem[]
): Promise<{
  success: boolean
  message: string
  itemsProcessed?: number
  timestamp?: Date
}> {
  if (!cartItems || cartItems.length === 0) {
    return {
      success: false,
      message: 'No hay items para procesar'
    }
  }

  try {
    console.log(`⚙️  Iniciando transacción de decremento de stock para ${cartItems.length} items...`)

    const result = await runTransaction(db, async (transaction) => {
      // ═════════════════════════════════════════════════════════════
      // FASE 1: LECTURA Y VALIDACIÓN
      // ═════════════════════════════════════════════════════════════
      console.log('📖 FASE 1: Leyendo stock actual de productos...')

      const productDocs = await Promise.all(
        cartItems.map(item => transaction.get(doc(db, 'products', item.id)))
      )

      const updatesQueue: Array<{
        ref: ReturnType<typeof doc>
        newStock: number
        originalStock: number
        itemName: string
      }> = []

      // Validar que hay stock suficiente para CADA item
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        const productSnap = productDocs[i]

        // Si producto no existe, es fallo crítico
        if (!productSnap.exists()) {
          throw new Error(
            `❌ ROLLBACK: Producto '${item.name}' (${item.id}) no existe en inventario. ` +
            `Compra cancelada para evitar inconsistencias.`
          )
        }

        const productData = productSnap.data() as ProductStock
        const currentStock = productData.stock ?? 0

        // Validar que hay stock suficiente
        if (currentStock < item.quantity) {
          throw new Error(
            `❌ ROLLBACK: Stock insuficiente para '${item.name}'. ` +
            `Disponible: ${currentStock}, Solicitado: ${item.quantity}. ` +
            `Compra completamente cancelada.`
          )
        }

        const newStock = currentStock - item.quantity
        updatesQueue.push({
          ref: doc(db, 'products', item.id),
          newStock,
          originalStock: currentStock,
          itemName: item.name
        })

        console.log(`✅ Validado: ${item.name} | Stock: ${currentStock} → ${newStock}`)
      }

      // ═════════════════════════════════════════════════════════════
      // FASE 2: ACTUALIZACIÓN ATÓMICA
      // ═════════════════════════════════════════════════════════════
      console.log('✏️  FASE 2: Actualizando stock de forma ATÓMICA...')

      for (const update of updatesQueue) {
        transaction.update(update.ref, {
          stock: update.newStock,
          lastUpdated: new Date()
        })
        console.log(`📉 ${update.itemName}: ${update.originalStock} - ${cartItems.find(i => i.id === update.ref.id)?.quantity} = ${update.newStock}`)
      }

      return {
        itemsProcessed: updatesQueue.length,
        summary: updatesQueue
      }
    })

    console.log(`✅ TRANSACCIÓN EXITOSA: ${result.itemsProcessed} productos actualizados atomicamente`)

    return {
      success: true,
      message: `✅ Stock actualizado exitosamente para ${result.itemsProcessed} productos`,
      itemsProcessed: result.itemsProcessed,
      timestamp: new Date()
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error(`🔥 TRANSACCIÓN FALLIDA: ${errorMessage}`)

    return {
      success: false,
      message: `❌ Error actualizando inventario: ${errorMessage}`,
      timestamp: new Date()
    }
  }
}

/**
 * UTILIDAD: Obtener stock actual de un producto
 * Útil para logs, debugging, UI en tiempo real
 */
export async function getCurrentProductStock(productId: string): Promise<number | null> {
  try {
    const docRef = doc(db, 'products', productId)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
      return null
    }

    return (docSnap.data() as ProductStock).stock ?? 0
  } catch (error) {
    console.error(`Error getting current stock for ${productId}:`, error)
    return null
  }
}
