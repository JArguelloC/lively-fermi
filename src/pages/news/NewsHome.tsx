/**
 * NEWS SECTION - Listado de noticias/artículos servido por la API REST de Groove.
 * Los artículos se obtienen de `GET /api/v1/articulos` (Express + Prisma).
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageSquare, User } from 'lucide-react'
import { getArticles } from '../../services/api'
import { getNewsCoverImage, NEWS_FALLBACK_IMAGE } from '../../utils/newsImage'
import SEOMeta from '../../components/ui/SEOMeta'
import type { MockArticle } from '../../data/mockData'

export default function NewsSection() {
  const [articles, setArticles] = useState<MockArticle[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setIsLoading(true)

    getArticles()
      .then((data) => {
        if (cancelled) return
        setArticles(data)
        setIsLoading(false)
      })
      .catch((error) => {
        if (cancelled) return
        console.error('Error cargando noticias:', error)
        setArticles([])
        setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-groove-gold border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      <SEOMeta
        title="Noticias de Groove"
        description="Últimas noticias, reseñas musicales y eventos exclusivos de Groove Music Store. Descubre lo más nuevo en música, vinilos e instrumentos."
      />
      <div className="min-h-screen bg-groove-bg-primary py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-2">Noticias de Groove</h1>
            <p className="text-groove-text-secondary">Lo último en música, reseñas y eventos</p>
          </motion.div>

          {/* Grid de noticias */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/noticias/${article.slug}`}>
                  <div className="bg-groove-bg-secondary rounded-xl overflow-hidden border border-groove-gold/20 hover:border-groove-gold transition-all cursor-pointer h-full flex flex-col">
                    {/* Cover Image */}
                    <div className="relative w-full h-40 overflow-hidden bg-groove-bg-primary">
                      <img
                        src={getNewsCoverImage(article.coverImageUrl)}
                        alt={article.title}
                        width={640}
                        height={240}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement
                          img.src = NEWS_FALLBACK_IMAGE
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-groove-bg-primary/80 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-xs bg-groove-purple px-3 py-1 rounded-full font-semibold uppercase">
                        {article.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-groove-gold transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-groove-text-secondary mb-4 line-clamp-2 flex-1">
                        {article.subtitle}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-groove-text-secondary pt-4 border-t border-groove-gold/10">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{article.authorName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          <span>{article.commentCount || 0}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-groove-gold/10">
                          {article.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs bg-groove-gold/10 text-groove-gold px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {articles.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-groove-gold opacity-50" />
              <h3 className="text-xl font-bold mb-2">No hay noticias aún</h3>
              <p className="text-groove-text-secondary">Vuelve pronto para descubrir las novedades.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
