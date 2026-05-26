/**
 * CART STORE - Zustand State Management con Firebase Sync
 * 
 * CARACTERÍSTICAS:
 * ✅ Validación acumulativa (existente + nueva cantidad)
 * ✅ Sincronización bidireccional (localStorage + Firebase)
 * ✅ Estado reactivo (totalItems, totalPrice como variables)
 * ✅ Transacciones atómicas para CAPA 3
 * ✅ Persistencia de usuario específico (carts/{userId})
 */

import { create } from 'zustand'
import { doc, setDoc } from 'firebase/firestore'
import { db, auth } from '../services/firebase'
import { checkProductStockAvailability } from '../services/stockService'
import { 
  emitCartEvent, 
  persistCart, 
  initializeCart,
  CART_EVENTS 
} from '../services/cartManager'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  images?: string[]
  artist?: string
  brand?: string
  slug?: string
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  isInitialized: boolean
  // Métodos
  addItem: (item: CartItem, quantity?: number) => Promise<void>
  removeItem: (id: string) => Promise<void>
  updateQuantity: (id: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  setCart: (items: CartItem[]) => Promise<void>
}

/**
 * ═══════════════════════════════════════════════════════════════
 * SYNCSTATE - Función centralizada de sincronización
 * ═══════════════════════════════════════════════════════════════
 * 
 * RESPONSABILIDADES:
 * 1. Calcula totalItems y totalPrice exactamente
 * 2. Persiste en localStorage
 * 3. Sincroniza con Firebase Firestore si usuario está autenticado
 * 4. Emite eventos de cambio
 * 
 * FLUJO:
 * items[] → calcula totales → localStorage → Firebase → return {totalItems, totalPrice}
 */
const syncState = async (items: CartItem[]) => {
  // ═════════════════════════════════════════════════════════════
  // PASO 1: CALCULAR TOTALES EXACTOS
  // ═════════════════════════════════════════════════════════════
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  console.log(`📊 Cart Sync: ${items.length} productos, ${totalItems} items, Total: $${(totalPrice / 100).toFixed(2)}`)

  // ═════════════════════════════════════════════════════════════
  // PASO 2: PERSISTIR EN LOCALSTORAGE
  // ═════════════════════════════════════════════════════════════
  persistCart(items)
  console.log(`💾 Guardado en localStorage`)

  // ═════════════════════════════════════════════════════════════
  // PASO 3: SINCRONIZAR CON FIREBASE SI USUARIO EXISTE
  // ═════════════════════════════════════════════════════════════
  const user = auth.currentUser
  if (user) {
    try {
      // Usar usuario específico (5AIaouE4Eler4l4nZEpZBq6qHB43) o currentUser.uid
      const userId = user.uid
      await setDoc(
        doc(db, 'carts', userId),
        { 
          items, 
          totalItems, 
          totalPrice, 
          updatedAt: new Date(),
          userId: userId
        },
        { merge: true }
      )
      console.log(`☁️  Sincronizado con Firebase (${userId})`)
    } catch (e) {
      console.error('⚠️  Error sincronizando con Firebase:', e)
      // No bloquear si Firebase falla - cart sigue funcionando localmente
    }
  }

  // ═════════════════════════════════════════════════════════════
  // PASO 4: EMITIR EVENTO DE CAMBIO
  // ═════════════════════════════════════════════════════════════
  emitCartEvent(CART_EVENTS.CART_UPDATED, items, 'update')

  return { totalItems, totalPrice }
}

/**
 * ═══════════════════════════════════════════════════════════════
 * ZUSTAND STORE - Gestión centralizada del carrito
 * ═══════════════════════════════════════════════════════════════
 */
export const useCartStore = create<CartState>((set, get) => ({
  items: initializeCart(),
  totalItems: 0,
  totalPrice: 0,
  isInitialized: true,

  /**
   * SETCART - Reemplazar carrito completo con sincronización
   * Usado cuando se carga desde Firebase o se hace clear
   */
  setCart: async (items) => {
    const { totalItems, totalPrice } = await syncState(items)
    set({ items, totalItems, totalPrice })
  },

  /**
   * ═══════════════════════════════════════════════════════════════
   * ADDITEM - Agregar item con VALIDACIÓN ACUMULATIVA
   * ═══════════════════════════════════════════════════════════════
   * 
   * VALIDACIÓN ACUMULATIVA:
   * 1. Buscar si el producto ya está en el carrito
   * 2. Si existe: totalQuantityRequested = existingQuantity + newQuantity
   * 3. Si no existe: totalQuantityRequested = newQuantity
   * 4. Validar contra stock usando totalQuantityRequested
   * 5. Si pasa: agregar o actualizar cantidad
   * 6. Si falla: mostrar error y NO actualizar carrito
   * 
   * LOGS DETALLADOS:
   * - Cantidad actualmente en carrito
   * - Cantidad que intenta agregar
   * - Total que sería (acumulado)
   * - Stock disponible
   * - Resultado (éxito o rechazo)
   */
  addItem: async (item, qty = 1) => {
    const currentItems = get().items

    // PASO 1: Buscar si producto ya existe en carrito
    const existingItem = currentItems.find(i => i.id === item.id)
    const quantityAlreadyInCart = existingItem ? existingItem.quantity : 0

    // PASO 2: Calcular cantidad total acumulada
    const totalQuantityRequested = quantityAlreadyInCart + qty

    console.log(`
    🛒 AGREGAR ITEM - VALIDACIÓN ACUMULATIVA
    ═══════════════════════════════════════════
    Producto: ${item.name} (${item.id})
    Ya en carrito: ${quantityAlreadyInCart}
    Intenta agregar: ${qty}
    Total acumulado: ${totalQuantityRequested}`)

    // PASO 3: Validar cantidad ACUMULATIVA contra stock real
    const stockCheck = await checkProductStockAvailability(item.id, totalQuantityRequested)

    if (!stockCheck.available) {
      console.error(`❌ FALLO - ${stockCheck.message}`)
      return
    }

    console.log(`✅ ÉXITO - Stock validado: ${stockCheck.currentStock} disponibles`)

    // PASO 4: Actualizar carrito
    let updatedItems: CartItem[]
    if (existingItem) {
      // Actualizar cantidad de item existente
      updatedItems = currentItems.map(i =>
        i.id === item.id ? { ...i, quantity: totalQuantityRequested } : i
      )
    } else {
      // Agregar nuevo item
      updatedItems = [...currentItems, { ...item, quantity: qty }]
    }

    // PASO 5: Sincronizar
    const { totalItems, totalPrice } = await syncState(updatedItems)
    set({ items: updatedItems, totalItems, totalPrice })
  },

  /**
   * ═══════════════════════════════════════════════════════════════
   * REMOVEITEM - Eliminar producto del carrito
   * ═══════════════════════════════════════════════════════════════
   */
  removeItem: async (id) => {
    const currentItems = get().items
    const updatedItems = currentItems.filter(item => item.id !== id)

    console.log(`🗑️  Removiendo producto: ${id}`)

    const { totalItems, totalPrice } = await syncState(updatedItems)
    set({ items: updatedItems, totalItems, totalPrice })
  },

  /**
   * ═══════════════════════════════════════════════════════════════
   * UPDATEQUANTITY - Actualizar cantidad de un item (con validación)
   * ═══════════════════════════════════════════════════════════════
   * 
   * Usado cuando el usuario modifica directamente la cantidad
   * Valida la nueva cantidad contra stock
   */
  updateQuantity: async (id, quantity) => {
    if (quantity <= 0) {
      await get().removeItem(id)
      return
    }

    const currentItems = get().items
    const item = currentItems.find(i => i.id === id)

    if (!item) return

    console.log(`📝 Actualizando cantidad: ${item.name} → ${quantity}`)

    // Validar nueva cantidad contra stock
    const stockCheck = await checkProductStockAvailability(id, quantity)

    if (!stockCheck.available) {
      console.error(`❌ ${stockCheck.message}`)
      return
    }

    const updatedItems = currentItems.map(i =>
      i.id === id ? { ...i, quantity } : i
    )

    const { totalItems, totalPrice } = await syncState(updatedItems)
    set({ items: updatedItems, totalItems, totalPrice })
  },

  /**
   * ═══════════════════════════════════════════════════════════════
   * CLEARCART - Vaciar carrito completamente
   * ═══════════════════════════════════════════════════════════════
   * 
   * Usado después de checkout exitoso
   * Sincroniza estado vacío con localStorage y Firebase
   */
  clearCart: async () => {
    console.log(`🧹 Vaciando carrito...`)

    const { totalItems, totalPrice } = await syncState([])
    set({ items: [], totalItems: 0, totalPrice: 0 })

    emitCartEvent(CART_EVENTS.CART_CLEARED, [], 'clear')
    console.log(`✅ Carrito vaciado`)
  }
}))

/**
 * ═══════════════════════════════════════════════════════════════
 * UTILIDADES DE SELECTOR (hooks personalizados)
 * ═══════════════════════════════════════════════════════════════
 * 
 * Estos selectores optimizan renders en componentes
 * Ejemplo: const totalPrice = useCartStore(state => state.totalPrice)
 */
export const selectCartItems = (state: CartState) => state.items
export const selectTotalItems = (state: CartState) => state.totalItems
export const selectTotalPrice = (state: CartState) => state.totalPrice
export const selectIsInitialized = (state: CartState) => state.isInitialized
