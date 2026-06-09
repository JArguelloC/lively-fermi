import { useState, useEffect, useCallback, useRef } from 'react'
import { getProducts } from '../services/api'
import { mockProducts, type MockProduct } from '../data/mockData'

function filterMock(category: string, page: number, limit: number, prices: string[], genres: string[]) {
  let filtered = (!category || category === 'all' || category === 'todos')
    ? mockProducts
    : mockProducts.filter(p => p.category === category)
  
  const start = (page - 1) * limit
  return { items: filtered.slice(start, start + limit), total: filtered.length }
}

export function useProducts(
  category: string = 'all', 
  itemsPerPage = 8, 
  prices: string[] = [], 
  genres: string[] = []
) {
  const [products, setProducts] = useState<MockProduct[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    setProducts([])
    setPage(1)
    setHasMore(true)
    setIsLoading(true)
    setError(null)
  }, [category, prices, genres])

  const fetchPage = useCallback(async (pageToFetch: number) => {
    // Si ya estamos cargando más, no duplicar petición
    if (pageToFetch > 1 && isLoadingMore) return; 

    abortRef.current?.abort()
    abortRef.current = new AbortController()

    if (pageToFetch === 1) setIsLoading(true)
    else setIsLoadingMore(true)

    try {
      const items = await getProducts(category, pageToFetch, itemsPerPage, prices, genres)
      setProducts(prev => pageToFetch === 1 ? items : [...prev, ...items])
      setHasMore(items.length >= itemsPerPage)
    } catch (err: any) {
      if (err?.name === 'AbortError') return 
      console.warn('Backend offline, usando mock:', err)
      const { items: mockItems, total } = filterMock(category, pageToFetch, itemsPerPage, prices, genres)
      setProducts(prev => pageToFetch === 1 ? mockItems : [...prev, ...mockItems])
      const totalLoaded = (pageToFetch - 1) * itemsPerPage + mockItems.length
      setHasMore(totalLoaded < total)
      setError(err as Error)
    } finally {
      setIsLoading(false)
      setIsLoadingMore(false)
    }
  }, [category, itemsPerPage, prices, genres])

  useEffect(() => {
    fetchPage(page)
  }, [page, fetchPage])

  const loadMore = useCallback(() => {
    if (!isLoading && !isLoadingMore && hasMore) {
      setPage(prev => prev + 1)
    }
  }, [isLoading, isLoadingMore, hasMore])

  return { products, isLoading, isLoadingMore, hasMore, loadMore, error } as const
}