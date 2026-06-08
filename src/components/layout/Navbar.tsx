import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'
import { useAuthStore } from '../../store/authStore'
import { mockProducts } from '../../data/mockData'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const mobileSearchInputRef = useRef<HTMLInputElement | null>(null)
  const totalItems = useCartStore(state => state.totalItems)
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const navigate = useNavigate()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen || showMobileSearch) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [isMenuOpen, showMobileSearch])

  useEffect(() => {
    if (showMobileSearch) {
      const timer = window.setTimeout(() => {
        mobileSearchInputRef.current?.focus()
        mobileSearchInputRef.current?.select()
      }, 50)

      return () => window.clearTimeout(timer)
    }
  }, [showMobileSearch])

  // Actualizar contador del carrito cuando totalItems cambia (estado reactivo de Zustand)
  useEffect(() => {
    const counter = document.querySelector('[data-cart-counter]') as HTMLElement
    if (!counter) return
    
    if (totalItems > 0) {
      counter.textContent = totalItems > 9 ? '9+' : totalItems.toString()
      counter.style.display = 'flex'
    } else {
      counter.style.display = 'none'
    }
  }, [totalItems])

  const searchResults = searchQuery.trim() 
    ? mockProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.artist?.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : []

  const handleSearchSelect = (slug: string) => {
    setShowSearch(false)
    setSearchQuery('')
    navigate(`/producto/${slug}`)
  }

  return (
    <>
    <nav className="sticky top-0 z-[100] w-full bg-groove-bg-secondary/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center" aria-label="Ir a inicio">
              <img src="/logo.png" srcSet="/logo.png 32w, /logo.png 48w" sizes="(max-width: 640px) 32px, 48px" alt="Groove Logo" width={32} height={32} loading="eager" className="h-8 sm:h-10 w-auto" decoding="async" />
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link to="/tienda/musica" className="hover:text-groove-gold transition-colors">Música</Link>
              <Link to="/tienda/merch" className="hover:text-groove-gold transition-colors">Merch</Link>
              <Link to="/tienda/instrumentos" className="hover:text-groove-gold transition-colors">Instrumentos</Link>
              <Link to="/tienda/ofertas" className="hover:text-groove-gold transition-colors">Ofertas</Link>
              <Link to="/noticias" className="hover:text-groove-gold transition-colors">Noticias</Link>
            </div>
          </div>

          {/* Desktop Search & Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <div className={`flex items-center bg-white/5 rounded-full px-3 py-1.5 border transition-colors ${showSearch ? 'border-groove-gold' : 'border-white/10'}`}>
                <Search className="w-4 h-4 text-groove-text-secondary mr-2" />
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  aria-label="Buscar productos"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearch(true)}
                  onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                  className="bg-transparent border-none outline-none text-sm w-40 sm:w-48 focus:w-64 transition-all"
                />
              </div>
              
              {/* Search Autocomplete Dropdown */}
              <AnimatePresence>
                {showSearch && searchQuery && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 w-full bg-groove-bg-secondary border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                    {searchResults.length > 0 ? (
                      <ul className="py-2">
                        {searchResults.map(p => (
                          <li key={p.id}>
                            <button onClick={() => handleSearchSelect(p.slug)} className="w-full text-left px-4 py-2 hover:bg-white/5 flex flex-col transition-colors">
                              <span className="text-sm font-bold text-white line-clamp-1">{p.name}</span>
                              <span className="text-xs text-groove-text-secondary">{p.artist || p.brand}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="p-4 text-sm text-groove-text-secondary text-center">No se encontraron resultados</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/carrito" className="p-2 hover:bg-white/5 rounded-full transition-colors relative" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span data-cart-counter className="absolute -top-1 -right-1 bg-groove-gold text-black text-[11px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </Link>
            
            <Link to={isAuthenticated ? "/cuenta" : "/login"} className={`p-2 rounded-full transition-colors ${isAuthenticated ? 'bg-groove-gold/20 text-groove-gold hover:bg-groove-gold/30' : 'hover:bg-white/5'}`} aria-label="Account">
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile Search + Menu Toggle */}
            <button
              onClick={() => {
                setIsMenuOpen(false)
                setShowMobileSearch(true)
              }}
              className="p-2 hover:bg-white/5 rounded-full transition-colors md:hidden"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="p-2 hover:bg-white/5 rounded-full transition-colors md:hidden" 
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-groove-bg-primary border-l border-white/10 z-[200] shadow-2xl flex flex-col md:hidden"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <span className="font-display font-bold text-xl text-gradient-gold">Menú</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 flex-grow">
                <nav className="flex flex-col gap-2 px-4">
                  {[
                    { path: '/tienda/musica', label: 'Música' },
                    { path: '/tienda/merch', label: 'Merch' },
                    { path: '/tienda/instrumentos', label: 'Instrumentos' },
                    { path: '/tienda/ofertas', label: 'Ofertas Especiales' },
                    { path: '/noticias', label: 'Noticias y Editorial' },
                  ].map(link => (
                    <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-3 rounded-xl hover:bg-white/5 font-medium text-lg transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              
            </motion.div>
          </>
        )}
      </AnimatePresence>

        {/* Mobile Search Overlay */}
        <AnimatePresence>
          {showMobileSearch && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setShowMobileSearch(false)}
                className="fixed inset-0 bg-black/50 z-[180] md:hidden"
              />

              <motion.div
                initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
                className="fixed top-16 left-3 right-3 z-[190] md:hidden bg-groove-bg-primary border border-white/10 rounded-2xl p-4 shadow-2xl max-h-[calc(100vh-5rem)] overflow-hidden"
              >
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                  <Search className="w-4 h-4 text-groove-text-secondary flex-shrink-0" />
                  <input
                    ref={mobileSearchInputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar productos..."
                    aria-label="Buscar productos"
                    inputMode="search"
                    className="flex-1 bg-transparent border-none outline-none text-sm min-w-0"
                  />
                  <button onClick={() => setShowMobileSearch(false)} className="p-2 rounded-full hover:bg-white/5" aria-label="Cerrar búsqueda">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {searchQuery && (
                  <div className="mt-3 max-h-[60vh] overflow-auto pr-1">
                    {searchResults.length > 0 ? (
                      <ul className="space-y-1 pb-2">
                        {searchResults.map(p => (
                          <li key={p.id}>
                            <button onClick={() => handleSearchSelect(p.slug)} className="w-full text-left px-2 py-2 hover:bg-white/5 rounded-md">
                              <div className="text-sm font-medium">{p.name}</div>
                              <div className="text-xs text-groove-text-secondary">{p.artist || p.brand}</div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-groove-text-secondary p-2">No se encontraron resultados</div>
                    )}
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
    </>
  )
}
