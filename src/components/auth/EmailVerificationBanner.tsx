import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, X, RotateCw, CheckCircle } from 'lucide-react'
import { verifyEmail, getCurrentUser } from '../../services/auth.service'
import { useAuthStore } from '../../store/authStore'

export default function EmailVerificationBanner() {
  const currentUser = useAuthStore(state => state.currentUser)
  const token = useAuthStore(state => state.token)
  const setUser = useAuthStore(state => state.setUser)
  const [isLoading, setIsLoading] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [message, setMessage] = useState('')

  // No mostrar si no hay usuario, ya está verificado, o fue dismissido
  if (!currentUser || currentUser.emailVerificado || isDismissed) {
    return null
  }

  const handleResendEmail = async () => {
    if (!token) return
    setIsLoading(true)
    try {
      await verifyEmail(token)
      const { usuario } = await getCurrentUser(token)
      setUser(usuario, token)
      setMessage('✓ Tu correo ha sido verificado.')
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Intenta más tarde'
      setMessage('❌ Error al verificar: ' + msg)
      setTimeout(() => setMessage(''), 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-b border-orange-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
            <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-orange-300">Email no verificado</p>
              <p className="text-xs text-orange-200 line-clamp-2">
                Revisa tu correo (incluye spam) y confirma tu dirección para acceder al carrito.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 mt-3 sm:mt-0">
            <button
              onClick={handleResendEmail}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500/20 hover:bg-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-orange-300 rounded-lg text-xs sm:text-sm font-medium transition-colors"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Verificando...' : 'Verificar ahora'}
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 hover:bg-orange-500/10 rounded-lg transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4 text-orange-300" />
            </button>
          </div>
        </div>

        {/* Message Toast */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm text-orange-200 bg-orange-500/5"
            >
              {message.startsWith('✓') ? (
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              ) : null}
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
