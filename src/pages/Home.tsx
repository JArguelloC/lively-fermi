import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Disc3, Guitar, ShoppingBag, Percent, ArrowRight, Star, Mail } from 'lucide-react'
import { mockProducts, mockBanners, formatPrice } from '../data/mockData'
import type { MockArticle } from '../data/mockData'
import WebpImage from '../components/ui/WebpImage'
import { getNewsCoverImage, NEWS_FALLBACK_IMAGE } from '../utils/newsImage'
import SEOMeta from '../components/ui/SEOMeta'
import { getArticles } from '../services/api'

const categories = [
  { name: 'Música', icon: Disc3, link: '/tienda/musica', color: 'from-purple-900 to-groove-purple' },
  { name: 'Merch', icon: ShoppingBag, link: '/tienda/merch', color: 'from-amber-900 to-groove-gold' },
  { name: 'Instrumentos', icon: Guitar, link: '/tienda/instrumentos', color: 'from-emerald-900 to-emerald-600' },
  { name: 'Ofertas', icon: Percent, link: '/tienda/ofertas', color: 'from-red-900 to-red-600' },
]

function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(i => (i + 1) % mockBanners.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const banner = mockBanners[current]
  const desktopUrl = `${banner.imageUrl}${banner.imageUrl.includes('?') ? '&' : '?'}w=1200&fm=webp`

  return (
    <section className="relative w-full h-[280px] sm:h-[380px] md:h-[550px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={banner.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${desktopUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          role="img"
          aria-label={banner.title}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12">
            <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-6xl font-display font-extrabold mb-4 max-w-xl">{banner.title}</motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-xl text-groove-text-secondary mb-8 max-w-md">{banner.subtitle}</motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
              <Link to={banner.ctaLink}
                className="inline-flex items-center gap-2 bg-groove-gold hover:bg-groove-gold-light text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105">
                {banner.ctaText} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {mockBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir al banner ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-groove-gold w-8' : 'bg-white/40 hover:bg-white/60'}`} />
        ))}
      </div>
      <button
        onClick={() => setCurrent(i => (i - 1 + mockBanners.length) % mockBanners.length)}
        aria-label="Anterior banner"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-3 rounded-full transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent(i => (i + 1) % mockBanners.length)}
        aria-label="Siguiente banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-3 rounded-full transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  )
}

function ProductCardMini({ product }: { product: typeof mockProducts[0] }) {
  return (
    <Link to={`/producto/${product.slug}`}
      className="group flex-shrink-0 w-[220px] bg-groove-bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-groove-gold/30 transition-all hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <WebpImage
          src={product.images[0] || '/images/placeholder.svg'}
          alt={product.name}
          width={220}
          height={220}
          sizes="(max-width: 640px) 100vw, 220px"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/images/placeholder.svg';
          }}
        />
        {product.stock <= 0 ? (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Sin stock
          </span>
        ) : product.stock <= 5 ? (
          <span className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Poco stock
          </span>
        ) : null}
        {product.isOnOffer && product.compareAtPrice && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-groove-text-secondary mb-1">{product.artist || product.brand}</p>
        <h4 className="font-semibold text-sm leading-tight mb-2 line-clamp-2">{product.name}</h4>
        <div className="flex items-center gap-1 mb-2">
          {[1,2,3,4,5].map(s => <Star key={s} className={`w-3 h-3 ${s <= Math.round(product.avgRating) ? 'fill-groove-gold text-groove-gold' : 'text-gray-600'}`} />)}
          <span className="text-xs text-groove-text-secondary ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-groove-gold font-bold">{formatPrice(product.price)}</span>
          {product.compareAtPrice && <span className="text-groove-text-secondary text-xs line-through">{formatPrice(product.compareAtPrice)}</span>}
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  const featuredProducts = mockProducts.filter(p => p.isFeatured)
  const offerProducts = mockProducts.filter(p => p.isOnOffer)
  const [newsArticles, setNewsArticles] = useState<MockArticle[]>([])

  useEffect(() => {
    let cancelled = false
    getArticles()
      .then(data => {
        if (!cancelled) setNewsArticles(data.slice(0, 4))
      })
      .catch(err => {
        console.error('Error cargando noticias:', err)
        if (!cancelled) setNewsArticles([])
      })
    return () => {
      cancelled = true
    }
  }, [])

  const featuredArticle = newsArticles[0]
  const recentArticles = newsArticles.slice(1, 4)

  return (
    <div className="min-h-screen">
      <SEOMeta 
        title="Tienda de Música, Vinilos e Instrumentos"
        description="Groove Music Store - Tu tienda especializada en música, vinilos, instrumentos musicales y el mejor merchandising de artistas. Envíos rápidos y productos auténticos."
      />
      {/* 1. Hero Banner */}
      <HeroBanner />

      {/* 2. Categorías */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Explora por categoría</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={cat.link}
                className={`group flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br ${cat.color} border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 min-h-[180px]`}>
                <cat.icon className="w-12 h-12 mb-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-all" />
                <h3 className="text-lg font-bold">{cat.name}</h3>
                <span className="text-sm text-white/60 group-hover:text-groove-gold transition-colors mt-1">Explorar →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Nuevos Lanzamientos */}
      <section className="py-16 bg-groove-bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold">Nuevos Lanzamientos</h2>
            <Link to="/tienda/musica" className="text-groove-gold hover:text-groove-gold-light flex items-center gap-1 text-sm font-medium">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin">
            {featuredProducts.map(p => <ProductCardMini key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* 4. Artículo Destacado */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold">Noticias</h2>
            <Link to="/noticias" className="text-groove-gold hover:text-groove-gold-light flex items-center gap-1 text-sm font-medium">
              Ir a noticias <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link to={`/noticias/${featuredArticle.slug}`}
              className="group relative rounded-2xl overflow-hidden h-[220px] md:h-[400px]">
              <img
                src={getNewsCoverImage(featuredArticle.coverImageUrl)}
                alt={featuredArticle.title}
                width={1200}
                height={500}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  img.src = NEWS_FALLBACK_IMAGE
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs bg-groove-purple px-3 py-1 rounded-full font-medium mb-3 inline-block">{featuredArticle.category}</span>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-groove-gold transition-colors">{featuredArticle.title}</h3>
                <p className="text-groove-text-secondary text-sm line-clamp-2">{featuredArticle.subtitle}</p>
              </div>
            </Link>
            <div className="flex flex-col gap-4">
              {recentArticles.map(article => (
                <Link key={article.id} to={`/noticias/${article.slug}`}
                  className="group flex gap-4 bg-groove-bg-secondary rounded-xl p-4 border border-white/5 hover:border-groove-gold/20 transition-all">
                  <img
                    src={getNewsCoverImage(article.coverImageUrl)}
                    alt={article.title}
                    width={112}
                    height={112}
                    loading="lazy"
                    className="w-28 h-28 object-cover rounded-lg flex-shrink-0"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement
                      img.src = NEWS_FALLBACK_IMAGE
                    }}
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs text-groove-purple font-medium mb-1">{article.category}</span>
                    <h4 className="font-bold text-sm mb-1 group-hover:text-groove-gold transition-colors line-clamp-2">{article.title}</h4>
                    <p className="text-xs text-groove-text-secondary line-clamp-2">{article.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Ofertas Especiales */}
      <section className="py-16 bg-gradient-to-b from-groove-bg-primary to-groove-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-2 text-center">🔥 Ofertas Especiales</h2>
          <p className="text-groove-text-secondary text-center mb-8">Aprovecha descuentos exclusivos en productos seleccionados</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {offerProducts.map(p => (
              <Link key={p.id} to={`/producto/${p.slug}`}
                className="group bg-groove-bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-groove-gold/30 transition-all hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.images[0] || '/images/placeholder.svg'} alt={p.name} width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" 
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = '/images/placeholder.svg';
                    }}
                  />
                  {p.stock <= 0 ? (
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Sin stock
                    </span>
                  ) : p.stock <= 5 ? (
                    <span className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Poco stock
                    </span>
                  ) : null}
                  {p.compareAtPrice && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{Math.round((1 - p.price / p.compareAtPrice) * 100)}%
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-sm leading-tight mb-2 line-clamp-2">{p.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-groove-gold font-bold">{formatPrice(p.price)}</span>
                    {p.compareAtPrice && <span className="text-groove-text-secondary text-xs line-through">{formatPrice(p.compareAtPrice)}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Top Vendidos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-groove-bg-secondary/80 border border-white/10 rounded-[40px] shadow-2xl shadow-black/20 p-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-groove-gold/15 text-groove-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
                Top 10
              </span>
              <h2 className="mt-4 text-4xl font-display font-bold text-white">Los Más Vendidos</h2>
              <p className="mt-3 text-groove-text-secondary text-base leading-7">
                Los productos que más buscan nuestros clientes, con calificaciones altas y estilo Groove. Ideal para encontrar lo mejor del catálogo en un solo lugar.
              </p>
            </div>
            <Link to="/tienda" className="inline-flex items-center gap-2 rounded-full bg-groove-gold px-6 py-3 text-sm font-bold text-black hover:bg-groove-gold-light transition-all">
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts.sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 10).map((p, i) => (
              <div key={p.id} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-groove-bg-primary shadow-[0_20px_80px_-45px_rgba(0,0,0,0.8)] transition-transform hover:-translate-y-1">
                <span className="absolute -top-3 -left-3 z-10 bg-groove-gold text-black text-xs font-extrabold w-9 h-9 rounded-full flex items-center justify-center shadow-lg shadow-groove-gold/20">
                  {i + 1}
                </span>
                <ProductCardMini product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Newsletter */}
      <section className="py-16 bg-gradient-to-r from-groove-purple/20 to-groove-gold/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Mail className="w-12 h-12 text-groove-gold mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold mb-2">Suscríbete a nuestro Newsletter</h2>
          <p className="text-groove-text-secondary mb-8">Recibe novedades musicales, ofertas exclusivas y noticias de primera mano directamente en tu correo.</p>
          <form className="flex gap-3 max-w-md mx-auto" onSubmit={e => { e.preventDefault(); alert('¡Gracias por suscribirte al boletín!'); }}>
            <input type="email" placeholder="tu@email.com" required
              className="flex-1 bg-groove-bg-primary border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-groove-gold transition-colors" />
            <button type="submit"
              className="bg-groove-gold hover:bg-groove-gold-light text-black font-bold px-8 py-3 rounded-full transition-all hover:scale-105">
              Suscribirme
            </button>
          </form>
          <p className="text-xs text-groove-text-secondary mt-4">
            Nota: Esto es solo para recibir correos. Para comprar y guardar favoritos, debes registrarte en la sección superior.
          </p>
        </div>
      </section>
    </div>
  )
}
