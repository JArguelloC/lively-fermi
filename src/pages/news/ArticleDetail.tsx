/**
 * ARTICLE DETAIL - Detalle de Noticia con Comentarios
 * Datos servidos por la API REST de Groove (Express + Prisma).
 */

import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, MessageSquare, Share2, ChevronRight, Send } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import { getArticleBySlug, postComment } from '../../services/api'
import { getNewsCoverImage, NEWS_FALLBACK_IMAGE } from '../../utils/newsImage'
import SEOMeta from '../../components/ui/SEOMeta'
import type { MockArticle, MockComment } from '../../data/mockData'

type Comment = MockComment
type Article = MockArticle

/**
 * Formatear fecha
 */
function formatDate(date: Date | string | undefined): string {
  if (!date) return ''

  try {
    const d = new Date(date)
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return ''
  }
}

/**
 * Formato de tiempo relativo
 */
function timeAgo(date: Date | string | undefined): string {
  if (!date) return ''

  try {
    const d = new Date(date)
    const now = new Date()
    const seconds = Math.floor((now.getTime() - d.getTime()) / 1000)

    if (seconds < 60) return 'hace unos segundos'
    if (seconds < 3600) return `hace ${Math.floor(seconds / 60)}m`
    if (seconds < 86400) return `hace ${Math.floor(seconds / 3600)}h`
    if (seconds < 604800) return `hace ${Math.floor(seconds / 86400)}d`

    return formatDate(date)
  } catch {
    return ''
  }
}

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { currentUser, isAuthenticated } = useAuthStore()

  // State
  const [article, setArticle] = useState<Article | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [newCommentContent, setNewCommentContent] = useState('')
  const [isLoadingArticle, setIsLoadingArticle] = useState(true)
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)
  const [error, setError] = useState('')

  // Cargar artículo desde la API REST
  useEffect(() => {
    if (!slug) return
    let cancelled = false

    const loadArticle = async () => {
      try {
        setIsLoadingArticle(true)
        const { article: data, comments: list } = await getArticleBySlug(slug)
        if (cancelled) return
        setArticle(data)
        setComments(list)
      } catch (err) {
        if (cancelled) return
        console.error('Error cargando artículo:', err)
        setError('Artículo no encontrado')
      } finally {
        if (!cancelled) setIsLoadingArticle(false)
      }
    }

    loadArticle()

    return () => {
      cancelled = true
    }
  }, [slug])

  // Agregar comentario
  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isAuthenticated || !currentUser) {
      navigate('/login')
      return
    }

    if (!newCommentContent.trim() || !article || !slug) return

    try {
      setIsSubmittingComment(true)
      const nuevo = await postComment(slug, newCommentContent.trim())
      setComments(prev => [...prev, nuevo])
      setNewCommentContent('')
    } catch (err) {
      console.error('Error agregando comentario:', err)
      setError('Error al agregar comentario')
    } finally {
      setIsSubmittingComment(false)
    }
  }

  // Loading state
  if (isLoadingArticle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-groove-bg-primary">
        <div className="animate-spin text-4xl">⏳</div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-groove-bg-primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{error || 'Artículo no encontrado'}</h2>
          <Link to="/noticias" className="text-groove-gold hover:underline">
            ← Volver a Noticias
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEOMeta 
        title={article.title}
        description={article.subtitle || `${article.title} - Lee el artículo completo en Groove Music Store.`}
        ogImage={article.coverImageUrl || 'https://groove-store.com/og-image.png'}
        ogType="article"
      />
    <div className="min-h-screen bg-groove-bg-primary text-groove-text-primary">
      {/* Cover Image */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
        <img
          src={getNewsCoverImage(article.coverImageUrl)}
          alt={article.title}
          width={1200}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.target as HTMLImageElement
            img.src = NEWS_FALLBACK_IMAGE
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-groove-bg-primary via-groove-bg-primary/30 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-32 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-groove-text-secondary mb-4"
        >
          <Link to="/noticias" className="hover:text-groove-gold transition-colors">
            Noticias
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-groove-purple">{article.category}</span>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs bg-groove-purple px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-4 leading-tight">{article.title}</h1>
          <p className="text-xl text-groove-text-secondary mb-6">{article.subtitle}</p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-groove-text-secondary mb-8 pb-8 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-groove-gold/20 flex items-center justify-center">
              <span className="font-bold text-groove-gold">{(article.authorName || 'G').charAt(0)}</span>
            </div>
            <div>
              <p className="font-semibold text-groove-text-primary">{article.authorName}</p>
              <p>{formatDate(article.publishedAt)} · {article.views || 0} vistas</p>
            </div>
          </div>
        </motion.div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {article.tags.map(tag => (
              <span key={tag} className="text-sm bg-groove-gold/10 text-groove-gold px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </motion.div>
        )}

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-groove-bg-secondary rounded-2xl p-6 md:p-10 border border-groove-gold/20 mb-12 prose prose-invert max-w-none"
        >
          <div className="whitespace-pre-wrap text-groove-text-primary leading-relaxed">{article.body}</div>
        </motion.div>

        {/* Social Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 mb-12 justify-center"
        >
          <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-groove-gold/30 hover:bg-groove-bg-secondary transition-colors">
            <Heart className="w-4 h-4" /> Like ({Math.floor(Math.random() * 500)})
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-groove-gold/30 hover:bg-groove-bg-secondary transition-colors">
            <MessageSquare className="w-4 h-4" /> {comments.length}
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-groove-gold/30 hover:bg-groove-bg-secondary transition-colors">
            <Share2 className="w-4 h-4" /> Compartir
          </button>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-groove-gold" />
            Comentarios ({comments.length})
          </h2>

          {/* Formulario de comentario (solo si autenticado) */}
          {isAuthenticated && currentUser ? (
            <form onSubmit={handleAddComment} className="bg-groove-bg-secondary rounded-xl p-6 mb-8 border border-groove-gold/20">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-groove-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-groove-gold">{currentUser.nombre?.charAt(0) || 'A'}</span>
                </div>
                <textarea
                  value={newCommentContent}
                  onChange={e => setNewCommentContent(e.target.value)}
                  placeholder="Escribe tu comentario aquí..."
                  rows={3}
                  className="flex-1 bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newCommentContent.trim() || isSubmittingComment}
                  className="flex items-center gap-2 bg-groove-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-groove-gold-light disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {isSubmittingComment ? 'Enviando...' : 'Comentar'}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-groove-bg-secondary rounded-xl p-6 mb-8 border border-groove-gold/20 text-center">
              <p className="text-groove-text-secondary mb-4">Inicia sesión para comentar</p>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-groove-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-groove-gold-light transition-colors"
              >
                Ir a Login →
              </Link>
            </div>
          )}

          {/* Lista de comentarios */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-center text-groove-text-secondary py-8">Sin comentarios aún</p>
            ) : (
              comments.map(comment => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-groove-bg-secondary rounded-lg p-4 border border-groove-gold/10"
                >
                  <div className="flex gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-groove-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-groove-gold text-xs">{(comment.userName || 'U').charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{comment.userName}</span>
                        <span className="text-xs text-groove-text-secondary">{timeAgo(comment.createdAt)}</span>
                      </div>
                      <p className="text-sm mt-1 text-groove-text-secondary">{comment.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-groove-gold/20 py-8" />
      </div>
    </div>
    </>
  )
}
