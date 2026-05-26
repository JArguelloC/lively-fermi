/**
 * SCRIPT DE INICIALIZACIÓN DE PRODUCTOS EN FIRESTORE
 * 
 * Este script poblará automáticamente la colección 'products' en Firestore
 * con los datos de mockData.ts, asegurando que la validación de stock funcione
 * sin fallbacks permisivos.
 * 
 * EJECUCIÓN:
 * npx ts-node src/scripts/initializeFirestoreProducts.ts
 * 
 * O desde Firebase Console:
 * firebase functions:shell
 * > initProducts()
 */

import { db } from '../services/firebase'
import { doc, setDoc, collection, writeBatch } from 'firebase/firestore'
import { mockProducts } from '../data/mockData'

interface ProductDocument {
  id: string
  name: string
  stock: number
  price: number
  lastUpdated: Date
  category: string
  slug: string
}

/**
 * Inicializar la colección 'products' con stock desde mockData
 * IMPORTANTE: Esta función DEBE ejecutarse antes de permitir compras
 */
export async function initializeProductsInFirestore(): Promise<{
  success: boolean
  message: string
  productsCreated: number
  productsUpdated: number
}> {
  try {
    console.log('🚀 Iniciando sincronización de productos a Firestore...')
    
    // Usar writeBatch para operaciones eficientes
    const batch = writeBatch(db)
    let createdCount = 0
    let updatedCount = 0

    // Mapear todos los productos de mockData al formato de Firestore
    for (const mockProduct of mockProducts) {
      const productDoc: ProductDocument = {
        id: mockProduct.id,
        name: mockProduct.name,
        stock: mockProduct.stock, // Usar el stock definido en mockData
        price: mockProduct.price,
        category: mockProduct.category,
        slug: mockProduct.slug,
        lastUpdated: new Date()
      }

      const docRef = doc(db, 'products', mockProduct.id)
      batch.set(docRef, productDoc, { merge: true })
      
      createdCount++
    }

    // Ejecutar batch
    await batch.commit()
    
    console.log(`✅ Sincronización completada: ${createdCount} productos`)
    
    return {
      success: true,
      message: `Se sincronizaron ${createdCount} productos a Firestore`,
      productsCreated: createdCount,
      productsUpdated: updatedCount
    }
  } catch (error) {
    console.error('❌ Error durante la sincronización:', error)
    return {
      success: false,
      message: `Error: ${error instanceof Error ? error.message : 'Error desconocido'}`,
      productsCreated: 0,
      productsUpdated: 0
    }
  }
}

/**
 * Sincronizar carrito de usuario específico a Firestore
 * Usuario testing: 5AIaouE4Eler4l4nZEpZBq6qHB43
 */
export async function syncUserCartToFirestore(userId: string, cartItems: any[]): Promise<boolean> {
  try {
    const cartRef = doc(db, 'carts', userId)
    
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    
    await setDoc(cartRef, {
      items: cartItems,
      totalItems,
      totalPrice,
      updatedAt: new Date()
    }, { merge: true })
    
    console.log(`✅ Carrito sincronizado para usuario ${userId}`)
    return true
  } catch (error) {
    console.error('❌ Error sincronizando carrito:', error)
    return false
  }
}

/**
 * Función helper: Obtener productos por categoría
 */
export function getProductsByCategory(category: string) {
  return mockProducts.filter(p => p.category === category)
}

/**
 * Función helper: Obtener stock actual de un producto
 */
export function getProductStock(productId: string): number {
  const product = mockProducts.find(p => p.id === productId)
  return product ? product.stock : 0
}

// Si se ejecuta directamente
if (require.main === module) {
  initializeProductsInFirestore().then(result => {
    console.log(JSON.stringify(result, null, 2))
    process.exit(result.success ? 0 : 1)
  })
}

export default initializeProductsInFirestore
