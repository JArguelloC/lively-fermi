import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, ShieldAlert } from 'lucide-react'
import SEOMeta from '../../components/ui/SEOMeta'
import { useAuthStore } from '../../store/authStore'
import { signIn, signUp, resetPassword } from '../../services/auth.service'
import { validateEmailDomain } from '../../services/emailValidator'
import zxcvbn from 'zxcvbn'

const NAME_ALLOWED_CHARACTERS = /[^\p{L} '-]/gu

const sanitizeName = (value: string) => value.replace(NAME_ALLOWED_CHARACTERS, '').replace(/\s{2,}/g, ' ')

const validateEmailLive = (email: string) => {
  if (!email.trim()) return ''
  return validateEmailDomain(email).reason || ''
}

const validatePasswordLive = (password: string, isRegisterMode: boolean, strengthScore: number, strengthWarning: string) => {
  if (!password) return ''
  if (password.length < 12) return 'La contraseña debe tener al menos 12 caracteres por seguridad.'
  if (isRegisterMode && strengthScore < 3) return strengthWarning || 'La contraseña es demasiado débil o común.'
  return ''
}

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { setUser: setAuthUser } = useAuthStore()
  const [isRegister, setIsRegister] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({ name: '', email: '', password: '', general: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [forgotPassword, setForgotPassword] = useState(false)
  const [resetSent, setResetSent] = useState(false)
  const redirectTo = (location.state as { from?: string } | null)?.from || '/'
  
  const seo = (
    <SEOMeta
      title={isRegister ? 'Registro' : 'Iniciar sesión'}
      description={isRegister
        ? 'Crea tu cuenta en Groove Music Store para comprar, guardar favoritos y seguir tu pedido.'
        : 'Inicia sesión en Groove Music Store para continuar con tu compra y acceder a tu cuenta.'
      }
    />
  )
  
  // Nivel de fuerza de contraseña
  const [passStrength, setPassStrength] = useState<{ score: number; feedback: { warning: string; suggestions: string[] } }>({ score: 0, feedback: { warning: '', suggestions: [] } })

  // Evaluar contraseña en tiempo real
  useEffect(() => {
    if (formData.password) {
      setPassStrength(zxcvbn(formData.password))
    } else {
      setPassStrength({ score: 0, feedback: { warning: '', suggestions: [] } })
    }
  }, [formData.password])

  const validate = () => {
    let isValid = true
    const newErrors = { name: '', email: '', password: '', general: '' }

    if (isRegister) {
      const trimmedName = formData.name.trim()

      if (!trimmedName) {
        newErrors.name = 'El nombre es obligatorio'
        isValid = false
      } else if (trimmedName.length < 3) {
        newErrors.name = 'Ingresa tu nombre real (mínimo 3 caracteres)'
        isValid = false
      } else if (!/^[\p{L}]+(?:[ '-][\p{L}]+)*$/u.test(trimmedName)) {
        newErrors.name = 'El nombre solo puede contener letras, espacios, apóstrofes o guiones'
        isValid = false
      }
    }

    const emailValidation = validateEmailDomain(formData.email)
    if (!emailValidation.valid) {
      newErrors.email = emailValidation.reason || 'Debes ingresar un formato válido (ej. correo@dominio.com)'
      isValid = false
    }

    if (!forgotPassword) {
      const passwordValidation = validatePasswordLive(
        formData.password,
        isRegister,
        passStrength.score,
        passStrength.feedback.warning || ''
      )

      if (passwordValidation) {
        newErrors.password = passwordValidation
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    setErrors({ ...errors, general: '' })

    try {
      if (forgotPassword) {
        await resetPassword(formData.email)
        setResetSent(true)
      } else if (isRegister) {
        const emailValidation = validateEmailDomain(formData.email)
        
        if (!emailValidation.valid) {
          setErrors({ ...errors, email: emailValidation.reason || 'Email inválido' })
          setIsLoading(false)
          return
        }

        const response = await signUp({
          nombre: formData.name,
          email: formData.email,
          password: formData.password
        })

        setAuthUser(response.usuario, response.token)
        alert('¡Cuenta creada! Te hemos enviado un correo de verificación.')
        navigate(redirectTo)
      } else {
        const response = await signIn(formData.email, formData.password)
        setAuthUser(response.usuario, response.token)
        navigate(redirectTo)
      }
    } catch (error) {
      console.error(error)
      const msg = error instanceof Error ? error.message : 'Ocurrió un error. Verifica tus datos.'
      setErrors({ ...errors, general: msg })
    } finally {
      setIsLoading(false)
    }
  }

  // Colores para el medidor de fuerza
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-400', 'bg-green-500']
  const strengthText = ['Muy Débil', 'Débil', 'Regular', 'Fuerte', 'Muy Fuerte']

  const handleNameChange = (value: string) => {
    const sanitizedName = sanitizeName(value)
    setFormData(prev => ({ ...prev, name: sanitizedName }))

    if (!isRegister || forgotPassword) return

    const trimmedName = sanitizedName.trim()

    if (!trimmedName) {
      setErrors(prev => ({ ...prev, name: '' }))
      return
    }

    if (trimmedName.length < 3) {
      setErrors(prev => ({ ...prev, name: 'Ingresa tu nombre real (mínimo 3 caracteres)' }))
      return
    }

    if (!/^[\p{L}]+(?:[ '-][\p{L}]+)*$/u.test(trimmedName)) {
      setErrors(prev => ({ ...prev, name: 'El nombre solo puede contener letras, espacios, apóstrofes o guiones' }))
      return
    }

    setErrors(prev => ({ ...prev, name: '' }))
  }

  const handleEmailChange = (value: string) => {
    const normalizedEmail = value.replace(/\s+/g, '').toLowerCase()
    setFormData(prev => ({ ...prev, email: normalizedEmail }))
    setErrors(prev => ({ ...prev, email: validateEmailLive(normalizedEmail) }))
  }

  const handlePasswordChange = (value: string) => {
    setFormData(prev => ({ ...prev, password: value }))

    if (forgotPassword) {
      setErrors(prev => ({ ...prev, password: '' }))
      return
    }

    if (!value) {
      setErrors(prev => ({ ...prev, password: '' }))
      return
    }

    const passwordStrength = zxcvbn(value)
    setErrors(prev => ({
      ...prev,
      password: validatePasswordLive(value, isRegister, passwordStrength.score, passwordStrength.feedback.warning || '')
    }))
  }

  return (
    <>
      {seo}
      <div className="min-h-screen flex items-center justify-center p-4 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-groove-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-groove-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-groove-bg-secondary/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img src="/logo.png" srcSet="/logo.png 140w, /logo.png 280w" sizes="(max-width: 640px) 140px, 280px" alt="Groove Logo" width={140} height={56} loading="lazy" className="h-14 mx-auto" />
          </Link>
          <h1 className="text-2xl font-display font-bold">
            {forgotPassword ? 'Recuperar Contraseña' : isRegister ? 'Únete a Groove' : 'Inicia Sesión'}
          </h1>
          <p className="text-groove-text-secondary text-sm mt-2">
            {forgotPassword ? 'Te enviaremos un enlace para restaurar tu acceso.' : isRegister ? 'Descubre la mejor música y merch exclusiva.' : 'Bienvenido de vuelta a tu espacio musical.'}
          </p>
        </div>

        {resetSent ? (
          <div className="text-center p-6 bg-green-500/10 border border-green-500/20 rounded-xl mb-6 text-green-400">
            Enlace de recuperación enviado. Revisa tu bandeja de entrada.
            <button onClick={() => {setForgotPassword(false); setResetSent(false)}} className="block mt-4 text-white hover:underline mx-auto">
              Volver al Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {errors.general && <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm text-center">{errors.general}</div>}

            <AnimatePresence>
              {isRegister && !forgotPassword && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-groove-text-secondary" />
                      <input type="text" placeholder="Nombre completo" required minLength={3} maxLength={60} value={formData.name} onChange={e => handleNameChange(e.target.value)}
                        inputMode="text"
                        autoComplete="name"
                        className={`w-full bg-groove-bg-primary border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-groove-gold transition-colors`} />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1 px-2">{errors.name}</p>}
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-groove-text-secondary" />
                <input type="email" placeholder="Correo electrónico" required pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" title="Ingresa un formato válido (ej. correo@dominio.com)" value={formData.email} onChange={e => handleEmailChange(e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                  className={`w-full bg-groove-bg-primary border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-groove-gold transition-colors`} />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1 px-2">{errors.email}</p>}
            </div>

            {!forgotPassword && (
              <div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-groove-text-secondary" />
                  <input type={showPassword ? "text" : "password"} placeholder="Contraseña" required minLength={12} value={formData.password} onChange={e => handlePasswordChange(e.target.value)}
                    autoComplete={isRegister ? 'new-password' : 'current-password'}
                    className={`w-full bg-groove-bg-primary border ${errors.password ? 'border-red-500' : 'border-white/10'} rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:border-groove-gold transition-colors`} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-groove-text-secondary hover:text-white">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* Medidor de Fuerza de Contraseña (Solo Registro) */}
                {isRegister && formData.password.length > 0 && (
                  <div className="mt-3 px-1">
                    <div className="flex gap-1 h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-1">
                      {[0,1,2,3].map(index => (
                        <div key={index} className={`flex-1 h-full transition-colors duration-300 ${passStrength.score > index ? strengthColors[passStrength.score] : 'bg-transparent'}`} />
                      ))}
                    </div>
                    <div className="flex justify-between items-start mt-1">
                      <p className={`text-xs font-bold ${passStrength.score < 3 ? 'text-red-400' : 'text-green-400'}`}>
                        {strengthText[passStrength.score]}
                      </p>
                      <p className="text-[10px] text-groove-text-secondary text-right max-w-[60%] leading-tight">
                        {passStrength.feedback.warning || (passStrength.score < 3 ? 'Añade más palabras o símbolos.' : '')}
                      </p>
                    </div>
                  </div>
                )}
                
                {errors.password && <p className="text-red-500 text-xs mt-1 px-2 flex gap-1 items-center"><ShieldAlert className="w-3 h-3"/> {errors.password}</p>}
                
                {!isRegister && (
                  <div className="flex justify-end mt-2">
                    <button type="button" onClick={() => setForgotPassword(true)} className="text-xs text-groove-text-secondary hover:text-groove-gold hover:underline">
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                )}
              </div>
            )}

            <button type="submit" disabled={isLoading} className="w-full flex items-center justify-center gap-2 bg-groove-gold hover:bg-groove-gold-light text-black font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02]">
              {isLoading ? 'Verificando y Cargando...' : forgotPassword ? 'Enviar Enlace' : isRegister ? 'Crear Cuenta Segura' : 'Iniciar Sesión'} 
              {!isLoading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>
        )}

        {!forgotPassword && (
          <div className="mt-8 text-center text-sm text-groove-text-secondary">
            {isRegister ? '¿Ya tienes una cuenta?' : '¿Aún no tienes cuenta?'}
            <button onClick={() => {setIsRegister(!isRegister); setErrors({name: '', email: '', password: '', general: ''})}} className="ml-2 text-groove-gold hover:underline font-bold">
              {isRegister ? 'Inicia sesión' : 'Regístrate'}
            </button>
          </div>
        )}
        
        {forgotPassword && !resetSent && (
          <div className="mt-8 text-center">
            <button onClick={() => setForgotPassword(false)} className="text-sm text-groove-gold hover:underline font-bold">
              Volver al inicio de sesión
            </button>
          </div>
        )}
      </motion.div>
    </div>
    </>
  )
}
