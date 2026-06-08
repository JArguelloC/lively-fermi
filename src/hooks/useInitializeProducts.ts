/**
 * Hook: useInitializeProducts
 * 
 * Inicializa automáticamente la colección 'products' en Firestore
 * al cargar la aplicación por primera vez.
 * 
 * Esto previene el fallback permisivo de stock y garantiza que
 * la validación de inventario funcione correctamente.
 * 
 * USAGE en App.tsx:
 * useInitializeProducts()
 */

import { useEffect, useState } from 'react'
import { db } from '../services/firebase'
import { collection, getDocs, writeBatch, doc } from 'firebase/firestore'
import { mockProducts } from '../data/mockData'

export function useInitializeProducts() {
  const [isInitialized, setIsInitialized] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!import.meta.env.DEV) {
      setIsInitialized(true)
      return
    }

    const initializeProducts = async () => {
      try {
        // Verificar si la colección 'products' existe y tiene documentos
        const productsRef = collection(db, 'products')
        const snapshot = await getDocs(productsRef)

        // Si no hay productos o hay menos que en mockData, sincronizar
        if (snapshot.size < mockProducts.length) {
          
          const batch = writeBatch(db)
          
          for (const mockProduct of mockProducts) {
            const productRef = doc(db, 'products', mockProduct.id)
            batch.set(productRef, {
              id: mockProduct.id,
              name: mockProduct.name,
              stock: mockProduct.stock,
              price: mockProduct.price,
              category: mockProduct.category,
              slug: mockProduct.slug,
              lastUpdated: new Date()
            }, { merge: true })
          }

          await batch.commit()
        }

        setIsInitialized(true)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
        setError(errorMessage)
        // No fallar la app, solo loguear el error
        setIsInitialized(true)
      }
    }

    // Ejecutar una sola vez
    initializeProducts()
  }, [])

  return { isInitialized, error }
}

export default useInitializeProducts
