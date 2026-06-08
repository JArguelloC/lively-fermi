import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import { useAuthStore } from './store/authStore'
import { useFavoritesStore } from './store/favoritesStore'
import { useUiStore } from './store/uiStore'
import { getCurrentUser } from './services/auth.service'

const Navbar = lazy(() => import('./components/layout/Navbar'))
const Footer = lazy(() => import('./components/layout/Footer'))
const EmailVerificationBanner = lazy(() => import('./components/auth/EmailVerificationBanner'))
const Home = lazy(() => import('./pages/Home'))
const CategoryPage = lazy(() => import('./pages/ecommerce/CategoryPage'))
const ProductDetail = lazy(() => import('./pages/ecommerce/ProductDetail.tsx'))
const Cart = lazy(() => import('./pages/ecommerce/Cart'))
const Checkout = lazy(() => import('./pages/ecommerce/Checkout.tsx'))
const OrderConfirmation = lazy(() => import('./pages/ecommerce/OrderConfirmation'))
const NewsHome = lazy(() => import('./pages/news/NewsHome'))
const ArticleDetail = lazy(() => import('./pages/news/ArticleDetail'))
const Login = lazy(() => import('./pages/auth/Login'))
const Account = lazy(() => import('./pages/auth/Account'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const Contacto = lazy(() => import('./pages/support/Contacto'))
const EnviosDevoluciones = lazy(() => import('./pages/support/EnviosDevoluciones'))

function LoadingSpinner() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-groove-gold/20 border-t-groove-gold rounded-full animate-spin" />
    </div>
  )
}

function App() {
  const setUser = useAuthStore(state => state.setUser)
  const setLoading = useAuthStore(state => state.setLoading)
  const notifications = useUiStore(state => state.notifications)
  const removeNotification = useUiStore(state => state.removeNotification)

  // Restaurar sesión desde el token JWT guardado y validar contra la API REST.
  useEffect(() => {
    let isMounted = true

    async function restoreSession() {
      const token = localStorage.getItem('authToken')
      if (!token) {
        setLoading(false)
        return
      }

      try {
        const { usuario } = await getCurrentUser(token)
        if (!isMounted) return
        setUser(usuario, token)
        await useFavoritesStore.getState().loadFavorites(usuario.id)
      } catch (error) {
        if (!isMounted) return
        console.error('Sesión no válida, cerrando:', error)
        localStorage.removeItem('authToken')
        localStorage.removeItem('currentUser')
        setUser(null)
        useFavoritesStore.getState().clearFavorites()
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    restoreSession()

    return () => {
      isMounted = false
    }
  }, [setUser, setLoading])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
        </Suspense>
        <Suspense fallback={null}>
          <EmailVerificationBanner />
        </Suspense>
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tienda" element={<CategoryPage />} />
                <Route path="/tienda/:categoria" element={<CategoryPage />} />
                <Route path="/producto/:slug" element={<ProductDetail />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/noticias" element={<NewsHome />} />
                <Route path="/noticias/:slug" element={<ArticleDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Login />} />
                <Route path="/cuenta" element={<Account />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/envios" element={<EnviosDevoluciones />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </Suspense>
          </main>
          <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 p-2">
            {notifications.map((notification) => (
              <NotificationToast
                key={notification.id}
                notification={notification}
                onClose={() => removeNotification(notification.id)}
              />
            ))}
          </div>
          <Suspense fallback={<LoadingSpinner />}>
            <Footer />
          </Suspense>
        </div>
      </BrowserRouter>
    )
  }
  
  function NotificationToast({ notification, onClose }: { notification: { id: string; message: string; type: 'success' | 'error' | 'info' | 'warning' }; onClose: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 3200)
    return () => window.clearTimeout(timer)
  }, [notification.id, onClose])

  const colorClass = notification.type === 'success'
    ? 'bg-emerald-500/95 text-white border-emerald-300/50'
    : notification.type === 'error'
      ? 'bg-red-500/95 text-white border-red-300/50'
      : notification.type === 'warning'
        ? 'bg-yellow-500/95 text-black border-yellow-300/50'
        : 'bg-slate-900/95 text-white border-slate-500/40'

  return (
    <div className={`w-full max-w-sm rounded-2xl border p-4 shadow-2xl backdrop-blur-xl ${colorClass}`} role="status">
      <div className="text-sm font-semibold">{notification.message}</div>
    </div>
  )
}

export default App
