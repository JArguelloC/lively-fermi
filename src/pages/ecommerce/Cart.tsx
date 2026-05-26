import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Trash2, Minus, Plus, ArrowRight } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'
import { formatPrice } from '../../data/mockData'

export default function Cart() {
  const items = useCartStore(state => state.items)
  const removeItem = useCartStore(state => state.removeItem)
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const clearCart = useCartStore(state => state.clearCart)

  // Coupon state - could be moved to store for persistence
  const subtotal = useCartStore(state => state.totalPrice)
  
  // Assuming we add coupon to the store later
  const discount = 0 // couponApplied ? Math.round(subtotal * 0.1) : 0
  const shipping = subtotal > 5000 ? 0 : 599
  const total = subtotal - discount + shipping

  const updateQty = (id: string, delta: number) => {
    const item = items.find(i => i.id === id)
    if (item) {
      updateQuantity(id, Math.max(1, item.quantity + delta))
    }
  }

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (items.length === 0) {
    return (
      <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-display font-extrabold mb-8 flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-groove-gold" /> Tu Carrito
        </h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-center py-20">
          <ShoppingCart className="w-16 h-16 text-groove-text-secondary mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Tu carrito está vacío</h2>
          <p className="text-groove-text-secondary mb-6">Explora nuestra tienda y encuentra la música que amas.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-groove-gold hover:bg-groove-gold-light text-black font-bold px-8 py-3 rounded-full transition-all">
            Seguir Comprando <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-display font-extrabold mb-8 flex items-center gap-3">
        <ShoppingCart className="w-8 h-8 text-groove-gold" /> Tu Carrito
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="flex gap-4 bg-groove-bg-secondary rounded-xl p-4 border border-white/5">
              {item.images?.[0] && (
                <img src={item.images[0]} alt={item.name} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <Link to={`/producto/${item.slug || item.id}`} className="font-bold hover:text-groove-gold transition-colors line-clamp-1">
                  {item.name}
                </Link>
                <p className="text-sm text-groove-text-secondary">{item.artist || item.brand || 'Producto'}</p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center bg-groove-bg-primary rounded-full border border-white/10">
                    <button onClick={() => updateQty(item.id, -1)} className="p-2 hover:text-groove-gold">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="p-2 hover:text-groove-gold">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-groove-text-secondary hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-groove-gold font-bold">{formatPrice(item.price * item.quantity)}</p>
                {item.quantity > 1 && <p className="text-xs text-groove-text-secondary">{formatPrice(item.price)} c/u</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <div>
          <div className="bg-groove-bg-secondary rounded-2xl p-6 border border-white/5 sticky top-24">
            <h3 className="font-display font-bold text-lg mb-6">Resumen del Pedido</h3>

            <div className="space-y-3 text-sm border-b border-white/10 pb-4 mb-4">
              <div className="flex justify-between"><span className="text-groove-text-secondary">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              {discount > 0 && <div className="flex justify-between text-green-500"><span>Descuento</span><span>-{formatPrice(discount)}</span></div>}
              <div className="flex justify-between"><span className="text-groove-text-secondary">Envío</span><span>{shipping === 0 ? <span className="text-green-500">Gratis</span> : formatPrice(shipping)}</span></div>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span className="text-groove-gold">{formatPrice(total)}</span>
            </div>

            <Link to="/checkout"
              className="w-full flex items-center justify-center gap-2 bg-groove-gold hover:bg-groove-gold-light text-black font-bold py-4 rounded-full transition-all hover:scale-[1.02]">
              Proceder al Pago <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/" className="block text-center text-sm text-groove-gold hover:underline mt-4">
              ← Seguir comprando
            </Link>
            
            {items.length > 0 && (
              <button onClick={clearCart}
                className="w-full mt-4 px-4 py-2 text-xs text-groove-text-secondary hover:text-red-500 transition-colors border border-white/5 rounded-lg hover:border-red-500/30">
                Vaciar carrito
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
