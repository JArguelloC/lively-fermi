import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Copy, Home, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import SEOMeta from '../../components/ui/SEOMeta'

export default function OrderConfirmation() {
  const navigate = useNavigate()
  const [orderId, setOrderId] = useState<string | null>(null)
  const [payer, setPayer] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [redirecting, setRedirecting] = useState(false)

  useEffect(() => {
    // Verificar si el orderId existe en localStorage
    const savedOrderId = localStorage.getItem('lastOrderId')
    const savedPayer = localStorage.getItem('lastPayer')

    if (savedOrderId) {
      setOrderId(savedOrderId)
      if (savedPayer) setPayer(savedPayer)
    } else {
      // Si no existe en localStorage, redirigir a inicio
      setRedirecting(true)
      const redirectTimer = setTimeout(() => {
        navigate('/')
      }, 2000)

      return () => clearTimeout(redirectTimer)
    }

    // Limpiar localStorage después de mostrar los datos
    const cleanupTimer = setTimeout(() => {
      localStorage.removeItem('lastOrderId')
      localStorage.removeItem('lastPayer')
    }, 5000)

    return () => clearTimeout(cleanupTimer)
  }, [navigate])

  const handleCopyOrderId = () => {
    if (orderId) {
      navigator.clipboard.writeText(orderId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (redirecting) {
    return (
      <>
        <SEOMeta
          title="Confirmación de Pedido"
          description="Tu pedido se está procesando en Groove Music Store. Serás redirigido a la página de inicio en breve."
        />
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <ShoppingBag className="w-16 h-16 text-groove-text-secondary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No se encontró número de pedido</h2>
            <p className="text-groove-text-secondary mb-6">Redirigiendo a la página de inicio...</p>
          </motion.div>
        </div>
      </>
    )
  }

  if (!orderId) {
    return (
      <>
        <SEOMeta
          title="Confirmación de Pedido"
          description="Tu pedido se está procesando en Groove Music Store. Verifica tu número de pedido y confírmalo desde aquí."
        />
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-groove-gold/20 border-t-groove-gold rounded-full animate-spin" />
        </div>
      </>
    )
  }

  return (
    <>
      <SEOMeta
        title="Confirmación de Pedido"
        description="Gracias por comprar en Groove Music Store. Aquí puedes ver el número de pedido y copiarlo para tu seguimiento."
      />
      <div className="min-h-[70vh] max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-groove-gold/20 blur-xl rounded-full" />
            <CheckCircle className="w-20 h-20 text-groove-gold relative" />
          </div>
        </motion.div>

        <h1 className="text-4xl font-display font-extrabold mb-3">¡Pedido Confirmado!</h1>
        <p className="text-groove-text-secondary text-lg mb-8">
          Tu compra se ha procesado exitosamente. Recibirás un correo de confirmación en breve.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-groove-bg-secondary rounded-2xl p-8 border border-white/5 mb-8"
      >
        <div className="mb-8 pb-8 border-b border-white/10">
          <h2 className="text-sm font-semibold text-groove-text-secondary mb-4 uppercase tracking-wide">Número de Pedido</h2>
          <div className="flex items-center justify-between bg-groove-bg-primary rounded-xl p-4 border border-white/10">
            <span className="font-mono text-lg font-bold text-groove-gold">{orderId}</span>
            <button
              onClick={handleCopyOrderId}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                copied
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-groove-gold/10 text-groove-gold hover:bg-groove-gold/20'
              }`}
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>

        {payer && (
          <div className="mb-8 pb-8 border-b border-white/10">
            <h2 className="text-sm font-semibold text-groove-text-secondary mb-4 uppercase tracking-wide">Cliente</h2>
            <p className="text-lg font-medium">{payer}</p>
          </div>
        )}

        <div>
          <h2 className="text-sm font-semibold text-groove-text-secondary mb-4 uppercase tracking-wide">¿Qué sigue?</h2>
          <ul className="space-y-3 text-sm text-groove-text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-groove-gold font-bold mt-1">1.</span>
              <span>Revisa tu correo electrónico para recibir la confirmación del pedido con los detalles del envío.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-groove-gold font-bold mt-1">2.</span>
              <span>Tu pedido será empaquetado y preparado para envío en las próximas 24 horas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-groove-gold font-bold mt-1">3.</span>
              <span>Recibirás un número de seguimiento para monitorear tu envío en tiempo real.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-groove-gold font-bold mt-1">4.</span>
              <span>Si tienes preguntas, puedes contactarnos desde tu cuenta o a través del correo electrónico de soporte.</span>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 justify-center"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-groove-gold hover:bg-groove-gold-light text-black font-bold px-8 py-3 rounded-full transition-all hover:scale-[1.02]"
        >
          <Home className="w-5 h-5" />
          Volver al Inicio
        </button>
        <button
          onClick={() => navigate('/tienda')}
          className="flex items-center gap-2 border border-groove-gold/30 text-groove-gold hover:bg-groove-gold/10 font-bold px-8 py-3 rounded-full transition-all"
        >
          <ShoppingBag className="w-5 h-5" />
          Continuar Comprando
        </button>
      </motion.div>

      <div className="mt-12 text-center text-xs text-groove-text-secondary">
        <p>Gracias por tu compra. Estamos felices de servirte.</p>
      </div>
      </div>
    </>
  )
}
