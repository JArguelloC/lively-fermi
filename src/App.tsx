import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import EmailVerificationBanner from './components/auth/EmailVerificationBanner'
import { auth, db } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useAuthStore } from './store/authStore'
import { useCartStore } from './store/cartStore'
import { useInitializeProducts } from './hooks/useInitializeProducts'
import { fixProductImages } from './services/fixProductImages'

const Home = lazy(() => import('./pages/Home'))
const CategoryPage = lazy(() => import('./pages/ecommerce/CategoryPage'))
const ProductDetail = lazy(() => import('./pages/ecommerce/ProductDetail'))
const Cart = lazy(() => import('./pages/ecommerce/Cart'))
const Checkout = lazy(() => import('./pages/ecommerce/Checkout'))
const OrderConfirmation = lazy(() => import('./pages/ecommerce/OrderConfirmation'))
const NewsHome = lazy(() => import('./pages/news/NewsHome'))
const ArticleDetail = lazy(() => import('./pages/news/ArticleDetail'))
const Login = lazy(() => import('./pages/auth/Login'))
const Account = lazy(() => import('./pages/auth/Account'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))

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
  
  // ✅ Inicializar productos en Firestore al cargar la app
  const { isInitialized } = useInitializeProducts()

  // ✅ Reparar imágenes de productos al iniciar
  useEffect(() => {
    fixProductImages().catch(err => console.error('Fix images error:', err))
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      setLoading(false)

      if (user) {
        try {
          const cartDoc = await getDoc(doc(db, 'carts', user.uid))
          if (cartDoc.exists()) {
            const data = cartDoc.data()
            if (data.items && Array.isArray(data.items)) {
              useCartStore.getState().setCart(data.items)
            }
          }
        } catch (error) {
          console.error("Error fetching cart from Firebase:", error)
        }
      }
    })
    return () => unsubscribe()
  }, [setUser, setLoading])

  // Polling automático para verificar email (cada 3 segundos)
  useEffect(() => {
    const pollInterval = setInterval(async () => {
      const user = auth.currentUser
      if (user && !user.emailVerified) {
        try {
          await user.reload()
          // Si se verificó, actualizar el store
          if (user.emailVerified) {
            setUser(user)
          }
        } catch (error) {
          // Silent fail - es normal que falle ocasionalmente
        }
      }
    }, 3000)

    return () => clearInterval(pollInterval)
  }, [])

  return (
    <PayPalScriptProvider options={{ "clientId": "test", currency: "USD", components: "buttons" }}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <EmailVerificationBanner />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tienda" element={<CategoryPage />} />
                <Route path="/tienda/:categoria" element={<CategoryPage />} />
                <Route path="/producto/:slug" element={<ProductDetail />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/noticias" element={<NewsHome />} />
                <Route path="/noticias/:slug" element={<ArticleDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Login />} />
                <Route path="/cuenta" element={<Account />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </PayPalScriptProvider>
  )
}

export default App
