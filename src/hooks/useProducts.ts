import { useState, useEffect } from 'react'
import { getProducts } from '../services/api'
import { mockProducts, type MockProduct } from '../data/mockData'

export function useProducts(category?: string) {
  const [products, setProducts] = useState<MockProduct[]>(mockProducts)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false
    setIsLoading(true)
    setError(null)

    getProducts(category)
      .then((data) => {
        if (cancelled) return
        setProducts(data.length > 0 ? data : filterMock(category))
        setIsLoading(false)
      })
      .catch((err) => {
        if (cancelled) return
        // Fallback a datos locales si la API no está disponible.
        console.error('Error cargando productos desde la API:', err)
        setProducts(filterMock(category))
        setError(null)
        setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [category])

  return { products, isLoading, error }
}

function filterMock(category?: string): MockProduct[] {
  return category && category !== 'all'
    ? mockProducts.filter((p) => p.category === category)
    : mockProducts
}
