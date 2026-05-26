import { useState, useEffect } from 'react'
import { collection, onSnapshot, query, where, CollectionReference, Query } from 'firebase/firestore'
import { db } from '../services/firebase'
import { mockProducts } from '../data/mockData'

export function useProducts(category?: string) {
  const [products, setProducts] = useState(mockProducts)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    try {
      // Fetch from Firestore
      const productsRef = collection(db, 'products')
      let q: CollectionReference | Query = productsRef

      if (category && category !== 'all') {
        q = query(productsRef, where('category', '==', category))
      }

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const firebaseProducts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as any),
          }))

          if (firebaseProducts.length > 0) {
            // Map Firebase products to app format
            const mapped = firebaseProducts.map((p) => ({
              id: p.id || p.slug,
              name: p.name,
              slug: p.slug,
              description: p.description || '',
              category: p.category,
              subcategory: p.subcategory || '',
              brand: p.brand || '',
              artist: p.artist || '',
              album: p.album || '',
              genre: p.genre || [],
              releaseYear: p.releaseYear || new Date().getFullYear(),
              images: p.images || [],
              price: p.price,
              compareAtPrice: p.onSale ? p.discountPrice : null,
              currency: 'USD',
              stock: p.stock || 0,
              isAvailable: (p.stock || 0) > 0,
              isFeatured: false,
              isOnOffer: p.onSale || false,
              avgRating: p.avgRating || 0,
              reviewCount: p.reviewCount || 0,
              tags: [p.subcategory || p.category],
            }))
            setProducts(mapped)
            console.log(`✅ ${mapped.length} productos cargados desde Firestore`)
          } else {
            // Fallback a mockData si Firestore está vacío
            const filtered = category && category !== 'all' 
              ? mockProducts.filter(p => p.category === category)
              : mockProducts
            setProducts(filtered)
            console.log(`⚠️  Usando mockData (${filtered.length} productos)`)
          }
          setIsLoading(false)
        },
        (err) => {
          console.warn('Error Firestore, usando mockData:', err)
          const filtered = category && category !== 'all'
            ? mockProducts.filter(p => p.category === category)
            : mockProducts
          setProducts(filtered)
          setError(null)
          setIsLoading(false)
        }
      )

      return () => unsubscribe()
    } catch (err) {
      console.warn('Error configurando Firestore, usando mockData:', err)
      const filtered = category && category !== 'all'
        ? mockProducts.filter(p => p.category === category)
        : mockProducts
      setProducts(filtered)
      setError(null)
      setIsLoading(false)
    }
  }, [category])

  return { products, isLoading, error }
}
