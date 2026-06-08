/**
 * NEWS SECTION - Sistema completo de noticias con Firestore
 * 
 * CARACTERÍSTICAS:
 * ✅ Conectado 100% con Firestore (colección 'news')
 * ✅ Comentarios persistentes (userId, nombre, content, timestamp)
 * ✅ Panel de creación para usuarios autenticados
 * ✅ Modal/Ventana para crear nuevas noticias
 * ✅ Reactividad en tiempo real
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plus, MessageSquare, Calendar, User } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import { db } from '../../services/firebase'
import { getNewsCoverImage, NEWS_FALLBACK_IMAGE } from '../../utils/newsImage'
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
  Timestamp,
  DocumentData
} from 'firebase/firestore'

/**
 * TIPOS DE DATOS
 */
interface NewsArticle extends DocumentData {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  authorId: string
  category: string
  tags: string[]
  coverImage?: string
  createdAt: Timestamp | Date
  updatedAt?: Timestamp | Date
  viewCount?: number
  comments?: NewsComment[]
}

interface NewsComment {
  id: string
  userId: string
  authorName: string
  content: string
  createdAt: Timestamp | Date
}

/**
 * ═══════════════════════════════════════════════════════════════
 * MODAL DE CREACIÓN DE NOTICIAS
 * ═══════════════════════════════════════════════════════════════
 */
interface CreateNewsModalProps {
  isOpen: boolean
  onClose: () => void
  userId: string
  userName: string
}

function CreateNewsModal({ isOpen, onClose, userId, userName }: CreateNewsModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'review',
    tags: '',
    coverImage: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      if (!formData.title.trim() || !formData.content.trim()) {
        setError('Título y contenido son requeridos')
        setIsSubmitting(false)
        return
      }

      // Generar slug
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')

      const newsRef = collection(db, 'news')
      await addDoc(newsRef, {
        title: formData.title.trim(),
        slug,
        excerpt: formData.excerpt.trim(),
        content: formData.content.trim(),
        author: userName,
        authorId: userId,
        category: formData.category,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
        coverImage: formData.coverImage || NEWS_FALLBACK_IMAGE,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        viewCount: 0,
        comments: []
      })

      console.log('✅ Noticia creada exitosamente')
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        category: 'review',
        tags: '',
        coverImage: ''
      })
      onClose()
    } catch (err) {
      console.error('Error creando noticia:', err)
      setError('Error al crear la noticia. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={e => e.stopPropagation()}
        className="bg-groove-bg-secondary rounded-2xl p-6 w-full max-w-2xl border border-groove-gold/20 max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Plus className="w-6 h-6 text-groove-gold" />
          Crear Nueva Noticia
        </h2>

        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Título */}
          <div>
            <label className="block text-sm font-semibold mb-2">Título</label>
            <input
              type="text"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              placeholder="Ej: Nuevo álbum de The Beatles en vinilo"
              className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold mb-2">Resumen</label>
            <textarea
              value={formData.excerpt}
              onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Breve resumen de la noticia"
              rows={2}
              className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold mb-2">Contenido</label>
            <textarea
              value={formData.content}
              onChange={e => setFormData({ ...formData, content: e.target.value })}
              placeholder="Contenido completo de la noticia"
              rows={6}
              className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm font-mono text-xs"
            />
          </div>

          {/* Categoría */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2">Categoría</label>
              <select
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm"
              >
                <option value="review">Reseña</option>
                <option value="interview">Entrevista</option>
                <option value="feature">Artículo Destacado</option>
                <option value="news">Noticia</option>
                <option value="premiere">Estreno</option>
              </select>
            </div>

            {/* Cover Image URL */}
            <div>
              <label className="block text-sm font-semibold mb-2">URL Portada</label>
              <input
                type="text"
                value={formData.coverImage}
                onChange={e => setFormData({ ...formData, coverImage: e.target.value })}
                placeholder="https://..."
                className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold mb-2">Etiquetas (separadas por comas)</label>
            <input
              type="text"
              value={formData.tags}
              onChange={e => setFormData({ ...formData, tags: e.target.value })}
              placeholder="vinyl, music, beatles"
              className="w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm"
            />
          </div>

          {/* Botones */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-groove-gold/30 rounded-lg hover:bg-groove-bg-primary transition-colors text-sm font-semibold"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-groove-gold text-black rounded-lg hover:bg-groove-gold-light disabled:opacity-50 transition-colors text-sm font-bold"
            >
              {isSubmitting ? 'Publicando...' : 'Publicar Noticia'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

/**
 * ═══════════════════════════════════════════════════════════════
 * SECCIÓN DE NOTICIAS - PÁGINA PRINCIPAL
 * ═══════════════════════════════════════════════════════════════
 */
export default function NewsSection() {
  const { currentUser, isAuthenticated } = useAuthStore()
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)

  // Cargar noticias desde Firestore en tiempo real
  useEffect(() => {
    setIsLoading(true)

    try {
      const newsRef = collection(db, 'news')
      const q = query(newsRef, orderBy('createdAt', 'desc'))

      const unsubscribe = onSnapshot(q, snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as NewsArticle))
        setArticles(data)
        setIsLoading(false)
        console.log(`📰 ${data.length} noticias cargadas desde Firestore`)
      })

      return () => unsubscribe()
    } catch (error) {
      console.error('Error cargando noticias:', error)
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin">⏳</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-groove-bg-primary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">Noticias de Groove</h1>
            <p className="text-groove-text-secondary">Lo último en música, reseñas y eventos</p>
          </div>

          {/* Botón crear noticia (solo para usuarios autenticados) */}
          {isAuthenticated && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 bg-groove-gold text-black px-6 py-3 rounded-full font-bold hover:bg-groove-gold-light transition-colors"
            >
              <Plus className="w-5 h-5" />
              Nueva Noticia
            </button>
          )}
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
                      src={getNewsCoverImage(article.coverImage)}
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
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-groove-text-secondary pt-4 border-t border-groove-gold/10">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>{article.comments?.length || 0}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-groove-gold/10">
                        {article.tags.slice(0, 2).map(tag => (
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
            <p className="text-groove-text-secondary">
              {isAuthenticated ? '¡Sé el primero en crear una noticia!' : 'Inicia sesión para crear noticias'}
            </p>
          </div>
        )}
      </div>

      {/* Modal de creación */}
      <CreateNewsModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        userId={currentUser?.uid || ''}
        userName={currentUser?.displayName || 'Anónimo'}
      />
    </div>
  )
}
