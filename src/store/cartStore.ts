import { create } from 'zustand'

export interface CartItem {
  id: string
  productId?: string
  variantId?: string
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
  addItem: (item: CartItem, quantity?: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  setCart: (items: CartItem[]) => void
  loadFromStorage: () => void
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'

export const useCartStore = create<CartState>((set) => {
  const syncToStorage = (items: CartItem[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    localStorage.setItem('cart', JSON.stringify(items))
    set({ items, totalPrice: total, totalItems: count })
  }

  return {
    items: [],
    totalItems: 0,
    totalPrice: 0,

    addItem: (item, quantity = 1) => set((state) => {
      const existingItem = state.items.find(i => i.id === item.id)
      const newItems = existingItem
        ? state.items.map(i => i.id === item.id 
          ? { ...i, quantity: i.quantity + quantity }
          : i)
        : [...state.items, { ...item, quantity }]
      syncToStorage(newItems)
      return {}
    }),

    removeItem: (id) => set((state) => {
      const newItems = state.items.filter(i => i.id !== id)
      syncToStorage(newItems)
      return {}
    }),

    updateQuantity: (id, quantity) => set((state) => {
      if (quantity <= 0) {
        const newItems = state.items.filter(i => i.id !== id)
        syncToStorage(newItems)
      } else {
        const newItems = state.items.map(i => i.id === id ? { ...i, quantity } : i)
        syncToStorage(newItems)
      }
      return {}
    }),

    clearCart: () => {
      localStorage.removeItem('cart')
      set({ items: [], totalPrice: 0, totalItems: 0 })
    },

    setCart: (items) => {
      syncToStorage(items)
    },

    loadFromStorage: () => {
      const stored = localStorage.getItem('cart')
      if (stored) {
        try {
          const items = JSON.parse(stored)
          syncToStorage(items)
        } catch {
          localStorage.removeItem('cart')
        }
      }
    }
  }
})
