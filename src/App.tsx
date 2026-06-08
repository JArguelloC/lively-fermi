import { Suspense, lazy, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import { useAuthStore } from './store/authStore'
import { useCartStore, type CartItem } from './store/cartStore'
import { useFavoritesStore } from './store/favoritesStore'
import { useUiStore } from './store/uiStore'
import { useInitializeProducts } from './hooks/useInitializeProducts'
import { fixProductImages } from './services/fixProductImages'

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

function mergeCartItems(baseItems: CartItem[], incomingItems: CartItem[]) {
  const mergedItems = new Map<string, CartItem>()

  const addItems = (items: CartItem[]) => {
    items.forEach((item) => {
      const existingItem = mergedItems.get(item.id)

      if (existingItem) {
        mergedItems.set(item.id, {
          ...existingItem,
          ...item,
          quantity: existingItem.quantity + item.quantity,
        })
        return
      }

      mergedItems.set(item.id, { ...item })
    })
  }

  addItems(baseItems)
  addItems(incomingItems)

  return Array.from(mergedItems.values())
}

function serializeCartItems(items: CartItem[]) {
  return items
    .slice()
    .sort((left, right) => left.id.localeCompare(right.id))
    .map((item) => ({
      id: item.id,
      productId: item.productId ?? null,
      variantId: item.variantId ?? null,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      slug: item.slug ?? null,
      artist: item.artist ?? null,
      brand: item.brand ?? null,
      images: item.images ?? [],
    }))
}

function areCartItemsEqual(leftItems: CartItem[], rightItems: CartItem[]) {
  return JSON.stringify(serializeCartItems(leftItems)) === JSON.stringify(serializeCartItems(rightItems))
}

function App() {
  const setUser = useAuthStore(state => state.setUser)
  const setLoading = useAuthStore(state => state.setLoading)
  const notifications = useUiStore(state => state.notifications)
  const removeNotification = useUiStore(state => state.removeNotification)
  const firebaseRef = useRef<{ auth?: any; db?: any }>({})
  
  // ✅ Inicializar productos en Firestore al cargar la app
  const { isInitialized } = useInitializeProducts()

  // ✅ Reparar imágenes de productos al iniciar (solo en desarrollo)
  useEffect(() => {
    if (import.meta.env.DEV) {
      fixProductImages().catch(err => console.error('Fix images error:', err))
    }
  }, [])

  useEffect(() => {
    let unsubscribe: (() => void) | undefined
    let isMounted = true

    async function initFirebaseAuth() {
      try {
        const [{ auth, db }, { onAuthStateChanged }, { doc, getDoc }] = await Promise.all([
          import('./services/firebase'),
          import('firebase/auth'),
          import('firebase/firestore'),
        ])

        if (!isMounted) return
        firebaseRef.current = { auth, db }

        unsubscribe = onAuthStateChanged(auth, async (user) => {
          setUser(user)
          setLoading(false)

          if (user) {
            try {
              const localCartItems = useCartStore.getState().items
              const cartDoc = await getDoc(doc(db, 'carts', user.uid))
              const remoteCartItems = cartDoc.exists() && Array.isArray(cartDoc.data().items)
                ? (cartDoc.data().items as CartItem[])
                : []

              const cartToRestore = remoteCartItems.length > 0 && !areCartItemsEqual(localCartItems, remoteCartItems)
                ? mergeCartItems(remoteCartItems, localCartItems)
                : localCartItems

              if (cartToRestore.length > 0) {
                await useCartStore.getState().setCart(cartToRestore)
              }

              await useFavoritesStore.getState().loadFavorites(user.uid)
            } catch (error) {
              console.error('Error fetching user data from Firebase:', error)
            }
          } else {
            useFavoritesStore.getState().clearFavorites()
          }
        })
      } catch (error) {
        console.error('Firebase initialization failed:', error)
      }
    }

    initFirebaseAuth()

    return () => {
      isMounted = false
      unsubscribe?.()
    }
  }, [setUser, setLoading])

  // Polling automático para verificar email (cada 30 segundos) - reducir frecuencia para evitar exceso de llamadas
  useEffect(() => {
    const pollInterval = setInterval(async () => {
      const user = firebaseRef.current.auth?.currentUser
      if (user && !user.emailVerified) {
        try {
          await user.reload()
          if (user.emailVerified) {
            setUser(user)
          }
        } catch (error) {
          // Silent fail - es normal que falle ocasionalmente
        }
      }
    }, 30000)

    return () => clearInterval(pollInterval)
  }, [setUser])

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
