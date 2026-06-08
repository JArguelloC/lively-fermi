import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LogOut, User as UserIcon, Mail, RotateCw } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import { verifyEmail, getCurrentUser, signOut } from '../../services/auth.service'

export default function Account() {
  const navigate = useNavigate()
  const { currentUser, token, logout, setUser } = useAuthStore()
  const [isResending, setIsResending] = useState(false)
  const [resendMessage, setResendMessage] = useState('')

  const handleLogout = async () => {
    try {
      await signOut()
      logout()
      navigate('/')
    } catch (error) {
      console.error('Error al cerrar sesión', error)
    }
  }

  const handleResendEmail = async () => {
    if (!token) return
    setIsResending(true)
    try {
      await verifyEmail(token)
      const { usuario } = await getCurrentUser(token)
      setUser(usuario, token)
      setResendMessage('✓ Tu correo ha sido verificado.')
      setTimeout(() => setResendMessage(''), 3000)
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Intenta más tarde'
      setResendMessage('❌ Error: ' + msg)
      setTimeout(() => setResendMessage(''), 3000)
    } finally {
      setIsResending(false)
    }
  }

  if (!currentUser) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-xl">Inicia sesión para ver tu perfil.</p>
      </div>
    )
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-groove-bg-secondary p-8 rounded-3xl border border-white/10 shadow-2xl"
      >
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 bg-groove-purple/20 rounded-full flex items-center justify-center mb-4 border-2 border-groove-gold">
            <UserIcon className="w-12 h-12 text-groove-gold" />
          </div>
          <h1 className="text-2xl font-display font-bold">Mi Perfil</h1>
          <p className="text-groove-text-secondary mt-1">Administra tu cuenta de Groove</p>
        </div>

        {currentUser.emailVerificado === false && (
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mb-6">
            <h3 className="text-orange-400 font-bold mb-2">Confirma tu correo electrónico</h3>
            <p className="text-xs text-orange-200 mb-3">
              Para garantizar la seguridad y poder realizar compras, por favor haz clic en el enlace que enviamos a tu correo electrónico. Si no lo ves, revisa tu carpeta de spam.
            </p>
            <button
              onClick={handleResendEmail}
              disabled={isResending}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-orange-300 rounded-lg text-xs font-medium transition-colors"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isResending ? 'animate-spin' : ''}`} />
              {isResending ? 'Enviando...' : 'Reenviar Correo de Verificación'}
            </button>
            {resendMessage && (
              <p className={`text-xs mt-2 ${resendMessage.startsWith('✓') ? 'text-green-400' : 'text-red-400'}`}>
                {resendMessage}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4 mb-8">
          <div className="bg-groove-bg-primary border border-white/5 rounded-xl p-4 flex items-center gap-4">
            <Mail className="w-5 h-5 text-groove-text-secondary" />
            <div className="text-left">
              <p className="text-xs text-groove-text-secondary font-bold uppercase">Correo Electrónico</p>
              <p className="text-sm">{currentUser.email}</p>
            </div>
          </div>
          {currentUser.nombre && (
            <div className="bg-groove-bg-primary border border-white/5 rounded-xl p-4 flex items-center gap-4">
              <UserIcon className="w-5 h-5 text-groove-text-secondary" />
              <div className="text-left">
                <p className="text-xs text-groove-text-secondary font-bold uppercase">Nombre</p>
                <p className="text-sm">{currentUser.nombre}</p>
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold py-3.5 rounded-xl transition-all"
        >
          <LogOut className="w-5 h-5" /> Cerrar Sesión
        </button>
      </motion.div>
    </div>
  )
}
