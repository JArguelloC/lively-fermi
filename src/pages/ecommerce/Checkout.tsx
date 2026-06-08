/**
 * CHECKOUT PAGE - Flujo completo de compra
 * 
 * CARACTERÍSTICAS:
 * ✅ Envío dinámico: >$50 = FREE, ≤$50 = $5.99
 * ✅ Mapbox Ecuador-only (countries="ec")
 * ✅ CAPA 2 (validación) + CAPA 3 (decremento atómico)
 * ✅ Cart purge en Firebase después de éxito
 * ✅ Forma de usuario específico: 5AIaouE4Eler4l4nZEpZBq6qHB43
 */

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, MapPin, Check, Lock, ArrowRight, ArrowLeft, ShieldCheck, ShoppingCart, AlertCircle } from 'lucide-react'
import SEOMeta from '../../components/ui/SEOMeta'
import MapboxGeocoderComponent from '../../components/ecommerce/MapboxGeocoder'
import { formatPrice } from '../../data/mockData'
import { useCartStore } from '../../store/cartStore'
import { useAuthStore } from '../../store/authStore'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { validateOrderStock, decrementProductStock } from '../../services/stockService'
import { auth, db } from '../../services/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

const steps = ['Envío', 'Pago', 'Confirmar']

interface ShippingFormData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  zip: string
  province: string // Cambio de "state" a "province" para Ecuador
}

export default function Checkout() {
  const navigate = useNavigate()
  const { items: cartItems, totalPrice: subtotalCents, clearCart } = useCartStore()
  const { currentUser } = useAuthStore()
  const [step, setStep] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [stockError, setStockError] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')

  // ═══════════════════════════════════════════════════════════════
  // FORM STATE - Datos de envío Ecuador
  // ═══════════════════════════════════════════════════════════════
  const [shippingData, setShippingData] = useState<ShippingFormData>({
    name: currentUser?.displayName || '',
    email: currentUser?.email || '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    province: '' // Ej: Pichincha, Guayas, Manabí
  })

  // ═══════════════════════════════════════════════════════════════
  // CÁLCULO DE ENVÍO DINÁMICO
  // ═══════════════════════════════════════════════════════════════
  /**
   * REGLA:
   * - Si subtotal > 5000 centavos ($50 USD) → Envío GRATIS (0)
   * - Si subtotal ≤ 5000 centavos ($50 USD) → Envío $5.99 (599 centavos)
   * 
   * subtotalCents ya está en centavos (ej: 4999 = $49.99, 5001 = $50.01)
   */
  const shipping = subtotalCents > 5000 ? 0 : 599
  const total = subtotalCents + shipping

  // ═══════════════════════════════════════════════════════════════
  // HANDLER: Cambiar ubicación de Mapbox
  // ═══════════════════════════════════════════════════════════════
  const handleLocationSelect = (location: { address: string; city: string; zip?: string }) => {
    setShippingData({
      ...shippingData,
      address: location.address,
      city: location.city,
      zip: location.zip || ''
    })
  }

  // ═══════════════════════════════════════════════════════════════
  // HANDLER: Pago con Tarjeta
  // ═══════════════════════════════════════════════════════════════
  const handleCardPayment = async () => {
    setIsProcessing(true)
    setStockError('')

    try {
      // CAPA 2: Validar stock de todos los items ANTES de procesar pago
      console.log('🔍 CAPA 2: Validando stock...')
      const stockValidation = await validateOrderStock(cartItems)

      if (!stockValidation.valid) {
        setStockError(stockValidation.errors.join(' | '))
        setIsProcessing(false)
        return
      }

      // Simular procesamiento de pago (2 segundos)
      console.log('💳 Procesando pago con tarjeta...')
      await new Promise(resolve => setTimeout(resolve, 2000))

      // CAPA 3: Decrementar stock de forma ATÓMICA
      console.log('⚙️  CAPA 3: Actualizando inventario (transacción atómica)...')
      const stockDecrement = await decrementProductStock(cartItems)

      if (!stockDecrement.success) {
        setStockError(stockDecrement.message || 'Error al actualizar el inventario.')
        setIsProcessing(false)
        return
      }

      // ✅ PAGO EXITOSO + STOCK DECREMENTADO
      const orderId = `ORD-${Math.floor(Math.random() * 10000)}`
      try {
        localStorage.setItem('lastOrderId', orderId)
        localStorage.setItem('lastPayer', shippingData.name)
      } catch (e) {
        console.error('Error saving order to localStorage:', e)
      }

      // Limpiar carrito LOCALMENTE
      await clearCart()

      // 🗑️ PURGAR CARRITO EN FIREBASE
      const user = auth.currentUser
      if (user) {
        try {
          await deleteDoc(doc(db, 'carts', user.uid))
          console.log(`✅ Carrito purgado en Firestore para usuario ${user.uid}`)
        } catch (deleteError) {
          console.error('⚠️  No se pudo eliminar carrito de Firestore:', deleteError)
          // No es bloqueante - la orden ya está completada
        }
      }

      navigate('/order-confirmation')
    } catch (error) {
      console.error('❌ Error en pago con tarjeta:', error)
      setStockError('Error procesando el pago. Por favor, intenta de nuevo.')
      setIsProcessing(false)
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // HANDLER: Pago con PayPal
  // ═══════════════════════════════════════════════════════════════
  const handlePayPalApprove = async (data: any, actions: any) => {
    try {
      // CAPA 2: Validar stock ANTES de procesar PayPal
      console.log('🔍 CAPA 2: Validando stock con PayPal...')
      const stockValidation = await validateOrderStock(cartItems)

      if (!stockValidation.valid) {
        setStockError(stockValidation.errors.join(' | '))
        return
      }

      return actions.order.capture().then(async (details: any) => {
        try {
          // CAPA 3: Decrementar stock de forma ATÓMICA
          console.log('⚙️  CAPA 3: Actualizando inventario (transacción atómica)...')
          const stockDecrement = await decrementProductStock(cartItems)

          if (!stockDecrement.success) {
            setStockError(stockDecrement.message || 'Error al actualizar el inventario.')
            return
          }

          // ✅ PAGO EXITOSO + STOCK DECREMENTADO
          const payerName = details.payer?.name?.given_name || 'Cliente'
          try {
            localStorage.setItem('lastOrderId', details.id)
            localStorage.setItem('lastPayer', payerName)
          } catch (e) {
            console.error('Error saving PayPal order:', e)
          }

          // Limpiar carrito LOCALMENTE
          await clearCart()

          // 🗑️ PURGAR CARRITO EN FIREBASE
          const user = auth.currentUser
          if (user) {
            try {
              await deleteDoc(doc(db, 'carts', user.uid))
              console.log(`✅ Carrito purgado en Firestore para usuario ${user.uid}`)
            } catch (deleteError) {
              console.error('⚠️  No se pudo eliminar carrito de Firestore:', deleteError)
            }
          }

          navigate('/order-confirmation')
        } catch (error) {
          console.error('❌ Error en aprobación PayPal:', error)
          setStockError('Error procesando la compra. Por favor, intenta de nuevo.')
        }
      })
    } catch (error) {
      console.error('❌ Error con PayPal:', error)
      setStockError('Error con PayPal. Por favor, intenta de nuevo.')
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // VALIDACIÓN DE FORMULARIO
  // ═══════════════════════════════════════════════════════════════
  const isFormValid =
    shippingData.name &&
    shippingData.email &&
    shippingData.phone &&
    shippingData.address &&
    shippingData.city &&
    shippingData.province

  // ═══════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════
  if (!cartItems.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-groove-gold opacity-50" />
          <h2 className="text-2xl font-bold mb-4">Carrito vacío</h2>
          <Link to="/tienda" className="text-groove-gold hover:underline">
            Continuar comprando →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <PayPalScriptProvider options={{ "client-id": "test", currency: "USD", components: "buttons" }}>
      <>
        <SEOMeta 
          title="Checkout Seguro"
          description="Completa tu compra en Groove: envío a Ecuador, múltiples formas de pago, y protección de datos."
        />
        <div className="min-h-screen bg-groove-bg-primary text-groove-text-primary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-groove-text-secondary">Completa tu compra de forma segura</p>
        </motion.div>

        {/* Steps Indicator */}
        <div className="flex justify-between mb-12">
          {steps.map((stepName, i) => (
            <div
              key={i}
              className={`flex-1 text-center pb-4 border-b-2 transition-colors ${
                i === step
                  ? 'border-groove-gold text-groove-gold'
                  : i < step
                  ? 'border-green-500 text-green-500'
                  : 'border-groove-text-secondary/30 text-groove-text-secondary'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {i < step ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold">{i + 1}</div>
                )}
                {stepName}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-groove-bg-secondary rounded-2xl p-6 border border-groove-gold/20"
            >
              {/* STEP 1: ENVÍO */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-groove-gold" />
                      Información de Envío
                    </h2>

                    {/* Mapbox Geocoder - Ecuador only */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold mb-2">📍 Ubicación en Ecuador</label>
                      <MapboxGeocoderComponent 
                        value={shippingData.address}
                        onChange={(addr) => setShippingData({ ...shippingData, address: addr })}
                        onLocationSelect={handleLocationSelect} 
                      />
                      <p className="text-xs text-groove-text-secondary mt-1">Solo se pueden buscar direcciones dentro de Ecuador</p>
                    </div>

                    {/* Formulario de envío */}
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Nombre completo"
                        value={shippingData.name}
                        onChange={(e) => setShippingData({ ...shippingData, name: e.target.value })}
                        className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={shippingData.email}
                        onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                        className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold"
                      />
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        value={shippingData.phone}
                        onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                        className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold"
                      />
                      <input
                        type="text"
                        placeholder="Dirección"
                        value={shippingData.address}
                        onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                        className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Ciudad"
                          value={shippingData.city}
                          onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                          className="bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold"
                        />
                        <input
                          type="text"
                          placeholder="Código Postal"
                          value={shippingData.zip}
                          onChange={(e) => setShippingData({ ...shippingData, zip: e.target.value })}
                          className="bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Provincia (Ej: Pichincha, Guayas, Manabí)"
                        value={shippingData.province}
                        onChange={(e) => setShippingData({ ...shippingData, province: e.target.value })}
                        className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold"
                      />
                    </div>
                  </div>

                  {/* Botón Siguiente */}
                  <button
                    onClick={() => setStep(1)}
                    disabled={!isFormValid}
                    className="w-full bg-groove-gold text-black font-bold py-3 rounded-lg hover:bg-groove-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    Continuar <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2: PAGO */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-groove-gold" />
                    Método de Pago
                  </h2>

                  {stockError && (
                    <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 flex gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-400 text-sm">{stockError}</p>
                    </div>
                  )}

                  {/* Radio buttons */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border border-groove-gold/30 rounded-lg cursor-pointer hover:bg-groove-bg-primary/50">
                      <input
                        type="radio"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="font-semibold">Tarjeta de Crédito</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-groove-gold/30 rounded-lg cursor-pointer hover:bg-groove-bg-primary/50">
                      <input
                        type="radio"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="font-semibold">PayPal</span>
                    </label>
                  </div>

                  {/* Método seleccionado */}
                  <AnimatePresence>
                    {paymentMethod === 'card' && (
                      <motion.button
                        onClick={handleCardPayment}
                        disabled={isProcessing}
                        className="w-full bg-groove-gold text-black font-bold py-3 rounded-lg hover:bg-groove-gold-light disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                      >
                        {isProcessing ? '⏳ Procesando...' : <>Pagar ${(total / 100).toFixed(2)}</>}
                      </motion.button>
                    )}
                    {paymentMethod === 'paypal' && (
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            intent: 'CAPTURE',
                            purchase_units: [{ amount: { currency_code: 'USD', value: (total / 100).toString() } }]
                          })
                        }}
                        onApprove={handlePayPalApprove}
                      />
                    )}
                  </AnimatePresence>

                  {/* Botón Atrás */}
                  <button
                    onClick={() => setStep(0)}
                    className="w-full text-groove-gold font-semibold py-2 flex items-center justify-center gap-2 hover:text-groove-gold-light"
                  >
                    <ArrowLeft className="w-4 h-4" /> Atrás
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="bg-groove-bg-secondary rounded-2xl p-6 border border-groove-gold/20 h-fit sticky top-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Resumen de Compra
            </h3>

            {/* Items */}
            <div className="space-y-3 mb-6 pb-6 border-b border-groove-gold/20 max-h-60 overflow-y-auto">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-groove-text-secondary">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-semibold">${((item.price * item.quantity) / 100).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${(subtotalCents / 100).toFixed(2)}</span>
              </div>
              <div className={`flex justify-between text-sm ${shipping === 0 ? 'text-green-400' : ''}`}>
                <span>Envío</span>
                <span>{shipping === 0 ? '✅ GRATIS' : `$${(shipping / 100).toFixed(2)}`}</span>
              </div>
              {subtotalCents <= 5000 && (
                <p className="text-xs text-groove-text-secondary">
                  💡 Compra por ${((5001 - subtotalCents) / 100).toFixed(2)} más para envío gratis
                </p>
              )}
              <div className="flex justify-between text-lg font-bold border-t border-groove-gold/20 pt-3 text-groove-gold">
                <span>Total</span>
                <span>${(total / 100).toFixed(2)}</span>
              </div>
            </div>

            {/* Security badge */}
            <div className="flex items-center gap-2 text-xs text-groove-text-secondary bg-groove-bg-primary rounded-lg p-3">
              <Lock className="w-4 h-4" />
              <span>Transacción 100% segura</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    </PayPalScriptProvider>
  )
}
