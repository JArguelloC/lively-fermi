import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SlidersHorizontal, Star, Heart, X } from 'lucide-react'
import { formatPrice } from '../../utils/formatPrice'
import { useCartStore } from '../../store/cartStore'
import { useAuthStore } from '../../store/authStore'
import { db } from '../../services/firebase'
import { collection, query, where, onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore'
import { fixProductImages } from '../../services/fixProductImages'

interface Product {
  id: string
  name: string
  slug: string
  artist?: string
  brand?: string
  price: number
  compareAtPrice?: number
  stock: number
  images: string[]
  category: string
  avgRating?: number
  reviewCount?: number
  onSale?: boolean
  discountPrice?: number
  genre?: string
}

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

export default function CategoryPage() {
  const { categoria } = useParams()
  const categoryKey = categoryMap[categoria || ''] || ''
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const addItem = useCartStore(state => state.addItem)
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const navigate = useNavigate()

  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])

  const togglePrice = (range: string) => setSelectedPrices(prev => prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range])
  const toggleGenre = (genre: string) => setSelectedGenres(prev => prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre])
  const toggleRating = (rating: number) => setSelectedRatings(prev => prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating])

  // Reparar imágenes al montar el componente
  useEffect(() => {
    fixProductImages().catch(console.error)
  }, [])

  // Cargar productos desde Firestore
  useEffect(() => {
    const productsRef = collection(db, 'products')
    let q: any = productsRef
    
    if (categoryKey) {
      q = query(productsRef, where('category', '==', categoryKey))
    }
    
    const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
      const docs = snapshot.docs.map((doc: any) => {
        const data = { id: doc.id, ...doc.data() } as any
        // Asegurar que SIEMPRE haya imágenes
        const images = data.images && Array.isArray(data.images) && data.images.length > 0 
          ? data.images 
          : [data.image || 'https://images.unsplash.com/photo-1611002214172-792c1f90b59a?w=800&h=800&fit=crop']
        return { ...data, images } as Product
      })
      console.log(`✅ ${categoryKey} cargado: ${docs.length} productos`)
      docs.forEach(p => console.log(`  - ${p.name}: ${p.images?.[0]?.substring(0, 50) || 'SIN IMAGEN'}`))
      setAllProducts(docs)
    })
    
    return () => unsubscribe()
  }, [categoryKey])

  let products = allProducts

  // Apply filters
  if (selectedPrices.length > 0) {
    products = products.filter(p => {
      return selectedPrices.some(range => {
        if (range === 'Menos de $20') return p.price < 2000;
        if (range === '$20 - $50') return p.price >= 2000 && p.price <= 5000;
        if (range === '$50 - $100') return p.price > 5000 && p.price <= 10000;
        if (range === 'Más de $100') return p.price > 10000;
        return false;
      })
    })
  }

  if (selectedGenres.length > 0) {
    products = products.filter(p => p.genre && selectedGenres.some(g => p.genre?.includes(g)))
  }

  if (selectedRatings.length > 0) {
    products = products.filter(p => selectedRatings.some(r => Math.round(p.avgRating || 0) >= r))
  }

  // Sort
  products = [...products].sort((a, b) => {
    switch (sort) {
      case 'price-asc': return a.price - b.price
      case 'price-desc': return b.price - a.price
      case 'rating': return (b.avgRating || 0) - (a.avgRating || 0)
      case 'newest': return b.id.localeCompare(a.id)
      default: return 0
    }
  })

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-display font-extrabold mb-2">
          {categoryKey ? categoryNames[categoryKey] : 'Toda la Tienda'}
        </h1>
        <p className="text-groove-text-secondary">{products.length} productos encontrados</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <button onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-groove-bg-secondary px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium hover:border-groove-gold/30 transition-colors lg:hidden">
          <SlidersHorizontal className="w-4 h-4" /> Filtros
        </button>
        <select value={sort} onChange={e => setSort(e.target.value)}
          className="bg-groove-bg-secondary border border-white/10 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-groove-gold transition-colors appearance-none cursor-pointer">
          {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div className="flex gap-8">
        {/* Filter Sidebar (desktop) */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 space-y-6">
            <div className="bg-groove-bg-secondary rounded-xl p-5 border border-white/5">
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-groove-text-secondary">Categorías</h3>
              <div className="space-y-2">
                {Object.entries(categoryNames).map(([key, name]) => (
                  <Link key={key} to={`/tienda/${Object.keys(categoryMap).find(k => categoryMap[k] === key)}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${categoryKey === key ? 'bg-groove-gold/10 text-groove-gold font-medium' : 'text-groove-text-secondary hover:text-white hover:bg-white/5'}`}>
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-groove-bg-secondary rounded-xl p-5 border border-white/5">
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-groove-text-secondary">Precio</h3>
              <div className="space-y-2 text-sm">
                {['Menos de $20', '$20 - $50', '$50 - $100', 'Más de $100'].map(range => (
                  <label key={range} className="flex items-center gap-2 text-groove-text-secondary hover:text-white cursor-pointer">
                    <input type="checkbox" className="accent-groove-gold rounded" checked={selectedPrices.includes(range)} onChange={() => togglePrice(range)} /> {range}
                  </label>
                ))}
              </div>
            </div>
            {categoryKey === 'music' && (
              <div className="bg-groove-bg-secondary rounded-xl p-5 border border-white/5">
                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-groove-text-secondary">Género</h3>
                <div className="space-y-2 text-sm">
                  {['Rock', 'Jazz', 'Electronic', 'Pop', 'Hip-Hop', 'Classical', 'Metal', 'Indie'].map(g => (
                    <label key={g} className="flex items-center gap-2 text-groove-text-secondary hover:text-white cursor-pointer">
                      <input type="checkbox" className="accent-groove-gold rounded" checked={selectedGenres.includes(g)} onChange={() => toggleGenre(g)} /> {g}
                    </label>
                  ))}
                </div>
              </div>
            )}
            <div className="bg-groove-bg-secondary rounded-xl p-5 border border-white/5">
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-groove-text-secondary">Calificación</h3>
              <div className="space-y-2 text-sm">
                {[4, 3, 2].map(s => (
                  <label key={s} className="flex items-center gap-2 text-groove-text-secondary hover:text-white cursor-pointer">
                    <input type="checkbox" className="accent-groove-gold rounded" checked={selectedRatings.includes(s)} onChange={() => toggleRating(s)} />
                    <span className="flex items-center gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className={`w-3 h-3 ${i <= s ? 'fill-groove-gold text-groove-gold' : 'text-gray-600'}`} />)}</span>
                    <span>y más</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={() => setShowFilters(false)} />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              className="absolute bottom-0 left-0 right-0 bg-groove-bg-secondary rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Filtros</h3>
                <button onClick={() => setShowFilters(false)}><X className="w-6 h-6" /></button>
              </div>
              <p className="text-groove-text-secondary text-sm">Filtros disponibles próximamente</p>
            </motion.div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={`/producto/${product.slug}`}
                  className="group block bg-groove-bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-groove-gold/20 transition-all hover:-translate-y-1">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={product.images?.[0] || 'https://images.unsplash.com/photo-1611002214172-792c1f90b59a?w=800'} alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    {product.onSale && product.compareAtPrice && (
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                      </span>
                    )}
                    {product.stock <= 5 && product.stock > 0 && (
                      <span className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">Poco stock</span>
                    )}

                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
                      className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:text-groove-gold opacity-0 group-hover:opacity-100 transition-all">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-groove-text-secondary mb-1">{product.artist || product.brand}</p>
                    <h4 className="font-semibold text-sm leading-tight mb-2 line-clamp-2 group-hover:text-groove-gold transition-colors">{product.name}</h4>
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map(s => <Star key={s} className={`w-3 h-3 ${s <= Math.round(product.avgRating || 0) ? 'fill-groove-gold text-groove-gold' : 'text-gray-600'}`} />)}
                      <span className="text-xs text-groove-text-secondary ml-1">({product.reviewCount || 0})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-groove-gold font-bold">{formatPrice(product.price)}</span>
                      {product.compareAtPrice && <span className="text-groove-text-secondary text-xs line-through">{formatPrice(product.compareAtPrice)}</span>}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          {products.length === 0 && (
            <div className="text-center py-20 text-groove-text-secondary">
              <p className="text-lg">No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
