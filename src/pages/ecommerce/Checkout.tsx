/**
 * CHECKOUT PAGE - Flujo completo de compra
 *
 * CARACTERÍSTICAS:
 * - Envío dinámico: >$50 = GRATIS, ≤$50 = $5.99
 * - Mapbox Ecuador-only (countries="ec")
 * - Validación de tarjeta en tiempo real (número/Luhn, MM/AA, CVC/CVV)
 * - El pedido se crea vía API REST; el backend valida y descuenta stock de forma atómica
 */

import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, MapPin, Check, Lock, ArrowRight, ArrowLeft, ShoppingCart, AlertCircle, CheckCircle2 } from 'lucide-react'
import SEOMeta from '../../components/ui/SEOMeta'
import MapboxGeocoderComponent from '../../components/ecommerce/MapboxGeocoder'
import { useCartStore } from '../../store/cartStore'
import { useAuthStore } from '../../store/authStore'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { createOrder, type CreateOrderInput } from '../../services/api'
import {
  formatCardNumber,
  formatExpiry,
  detectCardType,
  validateCardNumber,
  validateExpiry,
  validateCVC,
  validateCardName,
} from '../../utils/cardValidation'

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
  const location = useLocation()
  const { items: cartItems, totalPrice: subtotalCents, clearCart } = useCartStore()
  const { currentUser } = useAuthStore()
  const isGuest = new URLSearchParams(location.search).get('mode') === 'guest'
  const [step, setStep] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [stockError, setStockError] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')

  // ═══════════════════════════════════════════════════════════════
  // FORM STATE - Datos de envío Ecuador
  // ═══════════════════════════════════════════════════════════════
  const [shippingData, setShippingData] = useState<ShippingFormData>({
    name: currentUser?.nombre || '',
    email: currentUser?.email || '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    province: '' // Ej: Pichincha, Guayas, Manabí
  })

  // ═══════════════════════════════════════════════════════════════
  // FORM STATE - Datos de la tarjeta (validación en tiempo real)
  // ═══════════════════════════════════════════════════════════════
  const [cardData, setCardData] = useState({ number: '', name: '', expiry: '', cvc: '' })
  const [cardTouched, setCardTouched] = useState({ number: false, name: false, expiry: false, cvc: false })

  const cardType = useMemo(() => detectCardType(cardData.number), [cardData.number])

  const cardErrors = useMemo(
    () => ({
      number: validateCardNumber(cardData.number),
      name: validateCardName(cardData.name),
      expiry: validateExpiry(cardData.expiry),
      cvc: validateCVC(cardData.cvc, cardType.type),
    }),
    [cardData, cardType.type]
  )

  const isCardValid = !cardErrors.number && !cardErrors.name && !cardErrors.expiry && !cardErrors.cvc

  // Estado visual de cada campo: idle (neutro), valid (verde) o invalid (rojo).
  const cardFieldState = (field: keyof typeof cardData): 'idle' | 'valid' | 'invalid' => {
    const hasValue = cardData[field].length > 0
    const showError = cardTouched[field] || hasValue
    if (showError && cardErrors[field]) return 'invalid'
    if (hasValue && !cardErrors[field]) return 'valid'
    return 'idle'
  }

  const cardBorderClass = (field: keyof typeof cardData): string => {
    const state = cardFieldState(field)
    if (state === 'invalid') return 'border-red-500 focus:border-red-500'
    if (state === 'valid') return 'border-green-500 focus:border-green-500'
    return 'border-groove-gold/30 focus:border-groove-gold'
  }

  const handleCardChange = (field: keyof typeof cardData, raw: string) => {
    let value = raw
    if (field === 'number') value = formatCardNumber(raw)
    else if (field === 'expiry') value = formatExpiry(raw)
    else if (field === 'cvc') value = raw.replace(/\D/g, '').slice(0, cardType.cvcLength)
    setCardData((prev) => ({ ...prev, [field]: value }))
  }

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
  // Construir el payload del pedido para la API REST
  // ═══════════════════════════════════════════════════════════════
  const buildOrderInput = (metodoPago: string, paymentIntentId?: string): CreateOrderInput => ({
    items: cartItems.map(item => ({
      productId: item.productId,
      variantId: item.variantId,
      quantity: item.quantity,
      name: item.name,
    })),
    shipping: {
      fullName: shippingData.name,
      addressLine1: shippingData.address,
      city: shippingData.city,
      state: shippingData.province,
      postalCode: shippingData.zip,
      country: 'Ecuador',
    },
    paymentMethod: metodoPago,
    paymentIntentId,
  })

  // ═══════════════════════════════════════════════════════════════
  // HANDLER: Pago con Tarjeta
  // ═══════════════════════════════════════════════════════════════
  const handleCardPayment = async () => {
    // Marca todos los campos como tocados para mostrar errores pendientes
    setCardTouched({ number: true, name: true, expiry: true, cvc: true })
    if (!isCardValid) return

    setIsProcessing(true)
    setStockError('')

    try {
      // Simular procesamiento de pago (2 segundos)
      await new Promise(resolve => setTimeout(resolve, 2000))

      // El backend valida el stock y lo decrementa de forma atómica
      const pedido = await createOrder(buildOrderInput('card'))

      try {
        localStorage.setItem('lastOrderId', pedido.id)
        localStorage.setItem('lastPayer', shippingData.name)
      } catch (e) {
        console.error('Error saving order to localStorage:', e)
      }

      await clearCart()
      navigate('/order-confirmation')
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Error procesando el pago. Por favor, intenta de nuevo.'
      console.error('Error en pago con tarjeta:', error)
      setStockError(msg)
      setIsProcessing(false)
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // HANDLER: Pago con PayPal (tras capturar la orden)
  // ═══════════════════════════════════════════════════════════════
  const finishPayPalOrder = async (paymentIntentId: string | undefined, payerName: string) => {
    try {
      // El backend valida el stock y lo decrementa de forma atómica
      const pedido = await createOrder(buildOrderInput('paypal', paymentIntentId))

      try {
        localStorage.setItem('lastOrderId', pedido.id)
        localStorage.setItem('lastPayer', payerName || shippingData.name || 'Cliente')
      } catch (e) {
        console.error('Error saving PayPal order:', e)
      }

      await clearCart()
      navigate('/order-confirmation')
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Error con PayPal. Por favor, intenta de nuevo.'
      console.error('Error con PayPal:', error)
      setStockError(msg)
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // VALIDACIÓN DE FORMULARIO
  // ═══════════════════════════════════════════════════════════════
  const isFormValid = useMemo(() => {
    return (
      shippingData.name.trim().length > 0 &&
      shippingData.email.trim().length > 0 &&
      shippingData.phone.trim().length > 0 &&
      shippingData.address.trim().length > 0 &&
      shippingData.city.trim().length > 0 &&
      shippingData.province.trim().length > 0
    )
  }, [shippingData])

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

                      {/* Campo de Email unificado (Adaptable para Invitado o Autenticado) */}
                      <div className="space-y-1">
                        {isGuest && (
                          <label className="text-xs font-bold uppercase text-groove-text-secondary block ml-1">
                            Correo Electrónico para Notificaciones *
                          </label>
                        )}
                        <input
                          type="email"
                          placeholder="Email"
                          required={isGuest}
                          value={shippingData.email}
                          onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                          disabled={!isGuest && !!currentUser}
                          className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>

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
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        {/* Datos de la tarjeta con validación en tiempo real */}
                        <div>
                          <label htmlFor="card-number" className="block text-sm font-semibold mb-1">
                            Número de tarjeta
                          </label>
                          <div className="relative">
                            <input
                              id="card-number"
                              type="text"
                              inputMode="numeric"
                              autoComplete="cc-number"
                              placeholder="1234 5678 9012 3456"
                              value={cardData.number}
                              onChange={(e) => handleCardChange('number', e.target.value)}
                              onBlur={() => setCardTouched((p) => ({ ...p, number: true }))}
                              aria-invalid={cardFieldState('number') === 'invalid'}
                              className={`w-full bg-groove-bg-primary border rounded-lg px-4 py-3 pr-24 focus:outline-none transition-colors ${cardBorderClass('number')}`}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                              {cardType.label && (
                                <span className="text-xs font-semibold text-groove-text-secondary">{cardType.label}</span>
                              )}
                              {cardFieldState('number') === 'valid' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                              {cardFieldState('number') === 'invalid' && <AlertCircle className="w-4 h-4 text-red-500" />}
                            </div>
                          </div>
                          {cardFieldState('number') === 'invalid' && (
                            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {cardErrors.number}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="card-name" className="block text-sm font-semibold mb-1">
                            Nombre del titular
                          </label>
                          <div className="relative">
                            <input
                              id="card-name"
                              type="text"
                              autoComplete="cc-name"
                              placeholder="Como aparece en la tarjeta"
                              value={cardData.name}
                              onChange={(e) => handleCardChange('name', e.target.value)}
                              onBlur={() => setCardTouched((p) => ({ ...p, name: true }))}
                              aria-invalid={cardFieldState('name') === 'invalid'}
                              className={`w-full bg-groove-bg-primary border rounded-lg px-4 py-3 pr-10 focus:outline-none transition-colors ${cardBorderClass('name')}`}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              {cardFieldState('name') === 'valid' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                              {cardFieldState('name') === 'invalid' && <AlertCircle className="w-4 h-4 text-red-500" />}
                            </div>
                          </div>
                          {cardFieldState('name') === 'invalid' && (
                            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {cardErrors.name}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="card-expiry" className="block text-sm font-semibold mb-1">
                              Expiración (MM/AA)
                            </label>
                            <div className="relative">
                              <input
                                id="card-expiry"
                                type="text"
                                inputMode="numeric"
                                autoComplete="cc-exp"
                                placeholder="MM/AA"
                                value={cardData.expiry}
                                onChange={(e) => handleCardChange('expiry', e.target.value)}
                                onBlur={() => setCardTouched((p) => ({ ...p, expiry: true }))}
                                aria-invalid={cardFieldState('expiry') === 'invalid'}
                                className={`w-full bg-groove-bg-primary border rounded-lg px-4 py-3 pr-10 focus:outline-none transition-colors ${cardBorderClass('expiry')}`}
                              />
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                {cardFieldState('expiry') === 'valid' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                {cardFieldState('expiry') === 'invalid' && <AlertCircle className="w-4 h-4 text-red-500" />}
                              </div>
                            </div>
                            {cardFieldState('expiry') === 'invalid' && (
                              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {cardErrors.expiry}
                              </p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="card-cvc" className="block text-sm font-semibold mb-1">
                              {cardType.type === 'amex' ? 'CVV (4 dígitos)' : 'CVC/CVV'}
                            </label>
                            <div className="relative">
                              <input
                                id="card-cvc"
                                type="text"
                                inputMode="numeric"
                                autoComplete="cc-csc"
                                placeholder={cardType.type === 'amex' ? '1234' : '123'}
                                value={cardData.cvc}
                                onChange={(e) => handleCardChange('cvc', e.target.value)}
                                onBlur={() => setCardTouched((p) => ({ ...p, cvc: true }))}
                                aria-invalid={cardFieldState('cvc') === 'invalid'}
                                className={`w-full bg-groove-bg-primary border rounded-lg px-4 py-3 pr-10 focus:outline-none transition-colors ${cardBorderClass('cvc')}`}
                              />
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                {cardFieldState('cvc') === 'valid' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                {cardFieldState('cvc') === 'invalid' && <AlertCircle className="w-4 h-4 text-red-500" />}
                              </div>
                            </div>
                            {cardFieldState('cvc') === 'invalid' && (
                              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {cardErrors.cvc}
                              </p>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={handleCardPayment}
                          disabled={isProcessing || !isCardValid}
                          className="w-full bg-groove-gold text-black font-bold py-3 rounded-lg hover:bg-groove-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                        >
                          {isProcessing ? '⏳ Procesando...' : <>Pagar ${(total / 100).toFixed(2)}</>}
                        </button>
                      </motion.div>
                    )}
                    {paymentMethod === 'paypal' && (
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            intent: 'CAPTURE',
                            purchase_units: [{ amount: { currency_code: 'USD', value: (total / 100).toString() } }]
                          })
                        }}
                        onApprove={async (_data, actions) => {
                          const details = await actions.order!.capture()
                          const payerName = details?.payer?.name?.given_name || ''
                          await finishPayPalOrder(details?.id, payerName)
                        }}
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
