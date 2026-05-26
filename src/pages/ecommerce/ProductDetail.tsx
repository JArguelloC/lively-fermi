import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Star, ChevronRight, Truck, ShieldCheck, CheckCircle } from 'lucide-react'
import { formatPrice } from '../../data/mockData'
import { useCartStore } from '../../store/cartStore'
import { useAuthStore } from '../../store/authStore'
import { db } from '../../services/firebase'
import { collection, query, where, getDocs, onSnapshot, Query } from 'firebase/firestore'

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
  description: string
  category: string
  subcategory: string
  avgRating?: number
  reviewCount?: number
  onSale?: boolean
  discountPrice?: number
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const addItem = useCartStore(state => state.addItem)
  
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [qty, setQty] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [added, setAdded] = useState(false)
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const navigate = useNavigate()

  // Cargar producto desde Firestore
  useEffect(() => {
    if (!slug) return

    const loadProduct = async () => {
      try {
        const productsRef = collection(db, 'products')
        const q = query(productsRef, where('slug', '==', slug))
        const snapshot = await getDocs(q)

        if (!snapshot.empty) {
          const doc = snapshot.docs[0]
          const productData = { id: doc.id, ...doc.data() } as Product
          setProduct(productData)
          setQty(1)
          setSelectedImage(0)
          setAdded(false)

          // Cargar productos relacionados
          const relatedQuery = query(productsRef, where('category', '==', productData.category))
          const unsubscribe = onSnapshot(relatedQuery, (relSnapshot) => {
            const related = relSnapshot.docs
              .map(doc => ({ id: doc.id, ...doc.data() } as Product))
              .filter(p => p.id !== productData.id)
              .slice(0, 4)
            setRelatedProducts(related)
          })

          // Suscribirse a cambios en tiempo real del producto actual
          const productRef = snapshot.docs[0].ref
          const productUnsubscribe = onSnapshot(productRef, (doc) => {
            if (doc.exists()) {
              setProduct({ id: doc.id, ...doc.data() } as Product)
            }
          })

          setIsLoading(false)
          return () => {
            unsubscribe()
            productUnsubscribe()
          }
        } else {
          setProduct(null)
          setIsLoading(false)
        }
      } catch (err) {
        console.error('Error cargando producto:', err)
        setProduct(null)
        setIsLoading(false)
      }
    }

    loadProduct()
  }, [slug])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-groove-bg-primary">
        <div className="animate-spin text-4xl">⏳</div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold bg-groove-bg-primary">
        <div className="text-center">
          <p className="mb-4">Producto no encontrado</p>
          <Link to="/tienda" className="text-groove-gold hover:underline">← Volver a la tienda</Link>
        </div>
      </div>
    )
  }

  const handleQtyChange = (val: string) => {
    let num = parseInt(val)
    if (isNaN(num) || num < 1) num = 1
    if (num > product.stock) num = product.stock
    setQty(num)
  }

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    await addItem({ 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      quantity: qty, 
      images: product.images,
      artist: product.artist,
      brand: product.brand,
      slug: product.slug
    })
    
    setAdded(true)
    setTimeout(() => setAdded(false), 3000)
  }

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      navigate('/login')
    } else {
      alert("Producto añadido a favoritos.")
    }
  }

  // Calcular precio con descuento si está en oferta
  const displayPrice = product.onSale ? product.discountPrice : product.price
  const compareAtPrice = product.onSale ? product.price : null

  return (
    <div className="min-h-screen bg-groove-bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-groove-text-secondary mb-8">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to={`/tienda/${product.category}`} className="hover:text-white transition-colors capitalize">{product.category}</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-groove-bg-secondary rounded-2xl overflow-hidden border border-white/5 relative">
              <motion.img 
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.images[selectedImage] || ''} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.onSale && (
                <div className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm">
                  OFERTA
                </div>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-groove-gold' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="mb-6">
              <p className="text-groove-gold font-bold mb-2">{product.artist || product.brand}</p>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold mb-4 leading-tight">{product.name}</h1>
              
              <div className="flex items-center gap-4 text-sm text-groove-text-secondary mb-6">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold ml-1">{product.avgRating || 0}</span>
                </div>
                <span>({product.reviewCount || 0} reseñas)</span>
                <span className="capitalize border border-white/10 px-2 py-1 rounded">{product.subcategory}</span>
              </div>

              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-bold">{formatPrice(displayPrice || 0)}</span>
                {compareAtPrice && <span className="text-xl text-groove-text-secondary line-through mb-1">{formatPrice(compareAtPrice)}</span>}
              </div>
            </div>

            <div className="text-groove-text-secondary leading-relaxed mb-8 space-y-4">
              {product.description && product.description.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="bg-groove-bg-secondary border border-white/5 rounded-2xl p-6 mb-8">
              {product.stock <= 5 && product.stock > 0 && (
                <div className="text-red-400 font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  📦 ¡Solo quedan {product.stock} en stock!
                </div>
              )}
              
              <div className="flex items-end gap-4 mb-6">
                <div>
                  <label className="block text-xs text-groove-text-secondary mb-2 font-medium">CANTIDAD</label>
                  <div className="flex items-center bg-groove-bg-primary rounded-xl border border-white/10 overflow-hidden h-12 w-32">
                    <button onClick={() => handleQtyChange(String(qty - 1))} className="flex-1 hover:text-groove-gold transition-colors text-lg font-medium">-</button>
                    <input 
                      type="text" 
                      value={qty} 
                      onChange={(e) => handleQtyChange(e.target.value)}
                      className="w-10 text-center bg-transparent focus:outline-none font-bold"
                    />
                    <button onClick={() => handleQtyChange(String(qty + 1))} className="flex-1 hover:text-groove-gold transition-colors text-lg font-medium">+</button>
                  </div>
                </div>
                <button 
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`flex-1 h-12 flex items-center justify-center gap-2 font-bold rounded-xl transition-all ${
                    added ? 'bg-green-500 text-white' : 
                    product.stock === 0 ? 'bg-white/5 text-white/30 cursor-not-allowed' : 
                    'bg-groove-gold hover:bg-groove-gold-light text-black hover:scale-[1.02]'
                  }`}
                >
                  {added ? <><CheckCircle className="w-5 h-5" /> ¡Añadido!</> : 
                   product.stock === 0 ? 'Agotado' : <><ShoppingCart className="w-5 h-5" /> Agregar al Carrito</>}
                </button>
                <button onClick={handleFavoriteClick} className="h-12 w-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-groove-text-secondary hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-sm text-groove-text-secondary">
                <p className="flex items-center gap-2"><Truck className="w-4 h-4 text-groove-gold" /> Envío gratis en pedidos sobre $5,000 MXN</p>
                <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-groove-gold" /> Garantía Groove de 30 días</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-white/5">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Productos similares que te podrían interesar</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/producto/${p.slug}`}
                  className="group bg-groove-bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-groove-gold/30 transition-all hover:-translate-y-1">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={p.images?.[0] || ''} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-sm leading-tight mb-2 line-clamp-2">{p.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-groove-gold font-bold">{formatPrice(p.price)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

