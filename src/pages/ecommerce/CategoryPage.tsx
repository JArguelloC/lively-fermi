import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, Star, X } from 'lucide-react'
import { useProducts } from '../../hooks/useProducts'
import { useCartStore } from '../../store/cartStore'
import { useUiStore } from '../../store/uiStore'
import { ProductCard } from '../../components/ecommerce/ProductCard'
import SEOMeta from '../../components/ui/SEOMeta'

const categoryMap: Record<string, string> = {
  musica: 'music', merch: 'merch', instrumentos: 'instruments', ofertas: 'offers'
}
const categoryNames: Record<string, string> = {
  music: 'Música', merch: 'Merch', instruments: 'Instrumentos', offers: 'Ofertas'
}
const sortOptions = [
  { value: 'featured', label: 'Destacados' },
  { value: 'newest', label: 'Novedades' },
  { value: 'price-asc', label: 'Precio: Menor a Mayor' },
  { value: 'price-desc', label: 'Precio: Mayor a Menor' },
  { value: 'rating', label: 'Mejor Valorados' },
]

// FIX 3: Mínimo de scroll para considerar que es el usuario quien disparó
const MIN_SCROLL_Y = 100

export default function CategoryPage() {
  const { categoria } = useParams()
  const categoryKey = categoryMap[categoria || ''] || ''
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const addItem = useCartStore(state => state.addItem)
  const addNotification = useUiStore(state => state.addNotification)

  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])

  const { products, isLoading, isLoadingMore, hasMore, loadMore } = useProducts(
    categoryKey || 'all', 
    8, 
    selectedPrices, 
    selectedGenres
  )
  
  const observerRef = useRef<IntersectionObserver | null>(null)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  const togglePrice = (range: string) => setSelectedPrices(prev => prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range])
  const toggleGenre = (genre: string) => setSelectedGenres(prev => prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre])
  const toggleRating = (rating: number) => setSelectedRatings(prev => prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating])

  // FIX 1 + 3: Callback de intersección con guardia de scroll y desconexión inmediata
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (!entry.isIntersecting) return

    // FIX 3: Ignorar si el scroll no es de origen humano
    if (window.scrollY < MIN_SCROLL_Y) return

    // FIX 1: Desconectar ANTES de pedir más datos — mata el bucle
    observerRef.current?.disconnect()
    observerRef.current = null

    loadMore()
  }, [loadMore])

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    // Solo observar si hay más datos y no estamos en medio de una carga
    if (!hasMore || isLoadingMore) return

    const sentinel = sentinelRef.current
    if (!sentinel) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Desconexión inmediata al detectar el centinela
          observerRef.current?.disconnect()
          loadMore()
        }
      },
      { rootMargin: '200px', threshold: 0.1 }
    )

    observerRef.current.observe(sentinel)
    return () => observerRef.current?.disconnect()
  }, [hasMore, isLoadingMore, loadMore])

  const handleAddToCart = (product: any) => {
    const productName = product.title || product.name || 'Producto'
    addItem({
      id: product.id,
      productId: product.id,
      name: productName,
      price: product.price,
      quantity: 1,
      images: [product.images?.[0] || '/images/placeholder.svg'],
    })
    addNotification({
      type: 'success',
      message: `${productName} añadido al carrito`
    })
  }

  const categoryTitle = categoryKey ? categoryNames[categoryKey] : 'Toda la Tienda'

  return (
    <>
      <SEOMeta title={categoryTitle} description="Catálogo optimizado de Groove." />
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-x-hidden">

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold mb-2 leading-tight text-white">
            {categoryTitle}
          </h1>
          <p className="text-sm sm:text-base text-groove-text-secondary">
            {isLoading && products.length === 0 ? 'Cargando catálogo...' : `${products.length} productos mostrados`}
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex w-full sm:w-auto items-center justify-center gap-2 bg-groove-bg-secondary px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium hover:border-groove-gold/30 text-white lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filtros
          </button>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="w-full sm:w-auto bg-groove-bg-secondary border border-white/10 rounded-full px-5 py-2.5 text-sm text-white focus:outline-none focus:border-groove-gold cursor-pointer"
          >
            {sortOptions.map(o => (
              <option key={o.value} value={o.value} className="bg-groove-bg-secondary">{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Escritorio */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-groove-bg-secondary rounded-xl p-5 border border-white/5">
                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-groove-text-secondary">Precio</h3>
                <div className="space-y-2 text-sm text-groove-text-secondary">
                  {['Menos de $20', '$20 - $50', '$50 - $100', 'Más de $100'].map(range => (
                    <label key={range} className="flex items-center gap-2 hover:text-white cursor-pointer">
                      <input
                        type="checkbox"
                        className="accent-groove-gold rounded"
                        checked={selectedPrices.includes(range)}
                        onChange={() => togglePrice(range)}
                      /> {range}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid de Productos */}
          <div className="flex-1">
            {isLoading && products.length === 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse bg-groove-bg-secondary rounded-2xl aspect-[3/4] border border-white/5" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                {products.map((product) => (
                  <motion.div key={product.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
                    <ProductCard product={product as any} onAddToCart={handleAddToCart} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Paginación */}
            {hasMore && products.length > 0 && (
              <div className="mt-8">
                {/* Escritorio: botón manual */}
                <div className="hidden md:flex justify-center">
                  <button
                    onClick={loadMore}
                    disabled={isLoadingMore}
                    className="px-8 py-2.5 rounded-full font-bold border-2 border-groove-gold text-groove-gold hover:bg-groove-gold hover:text-black transition-all disabled:opacity-50"
                  >
                    {isLoadingMore ? 'Cargando...' : 'Cargar más'}
                  </button>
                </div>

                {/* Móvil: sentinel con altura fija, fuera del grid de imágenes */}
                <div className="block md:hidden">
                  <div
                    ref={sentinelRef}
                    style={{ height: '1px', width: '100%', marginTop: '48px' }}
                    aria-hidden="true"
                  />
                  {isLoadingMore && (
                    <div className="flex items-center justify-center py-4">
                      <div className="w-6 h-6 border-2 border-groove-gold border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}