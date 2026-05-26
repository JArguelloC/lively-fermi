import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, ShieldAlert } from 'lucide-react'
import { auth, db } from '../../services/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { validateEmailDomain } from '../../services/emailValidator'
import zxcvbn from 'zxcvbn'

export default function Login() {
  const navigate = useNavigate()
  const [isRegister, setIsRegister] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({ name: '', email: '', password: '', general: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [forgotPassword, setForgotPassword] = useState(false)
  const [resetSent, setResetSent] = useState(false)
  
  // Nivel de fuerza de contraseña
  const [passStrength, setPassStrength] = useState<{score: number, feedback: any}>({ score: 0, feedback: { warning: '', suggestions: [] } })

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
      if (!formData.name.trim()) {
        newErrors.name = 'El nombre es obligatorio'
        isValid = false
      } else if (formData.name.trim().length < 3) {
        newErrors.name = 'Ingresa tu nombre real (mínimo 3 caracteres)'
        isValid = false
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio'
      isValid = false
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Debes ingresar un formato válido (ej. correo@dominio.com)'
      isValid = false
    }

    if (!forgotPassword) {
      if (!formData.password) {
        newErrors.password = 'La contraseña es obligatoria'
        isValid = false
      } else if (formData.password.length < 12) {
        newErrors.password = 'La contraseña debe tener al menos 12 caracteres por seguridad.'
        isValid = false
      } else if (isRegister && passStrength.score < 3) {
        newErrors.password = passStrength.feedback.warning || 'La contraseña es demasiado débil o común.'
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
        await sendPasswordResetEmail(auth, formData.email)
        setResetSent(true)
      } else if (isRegister) {
        // 1. Validar Dominio de Correo (versión local)
        const emailValidation = validateEmailDomain(formData.email)
        
        if (!emailValidation.valid) {
          setErrors({ ...errors, email: emailValidation.reason || 'Email inválido' })
          setIsLoading(false)
          return
        }

        // 2. Crear el usuario
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        
        // 3. Enviar correo de verificación de Firebase
        await sendEmailVerification(userCredential.user)

        // 4. Guardar datos en Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name: formData.name,
          email: formData.email,
          createdAt: new Date()
        })
        
        // Mostrar éxito y permitir navegación
        alert('¡Cuenta creada! Te hemos enviado un correo de verificación. Puedes navegar por el sitio mientras lo validas.')
        navigate('/')
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
        // Permitir login incluso sin verificación (mostrar banner en lugar de bloqueo)
        navigate('/')
      }
    } catch (error: any) {
      console.error(error)
      setErrors({ ...errors, general: error.message || 'Ocurrió un error. Verifica tus datos.' })
    } finally {
      setIsLoading(false)
    }
  }

  // Colores para el medidor de fuerza
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-400', 'bg-green-500']
  const strengthText = ['Muy Débil', 'Débil', 'Regular', 'Fuerte', 'Muy Fuerte']

  return (
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
            <img src="/logo.png" alt="Groove Logo" className="h-14 mx-auto" />
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
                    <input type="text" placeholder="Nombre completo" required minLength={3} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className={`w-full bg-groove-bg-primary border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-groove-gold transition-colors`} />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1 px-2">{errors.name}</p>}
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-groove-text-secondary" />
                <input type="email" placeholder="Correo electrónico" required pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" title="Ingresa un formato válido (ej. correo@dominio.com)" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className={`w-full bg-groove-bg-primary border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-groove-gold transition-colors`} />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1 px-2">{errors.email}</p>}
            </div>

            {!forgotPassword && (
              <div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-groove-text-secondary" />
                  <input type={showPassword ? "text" : "password"} placeholder="Contraseña" required minLength={12} value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}
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
  )
}
