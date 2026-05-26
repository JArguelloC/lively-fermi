import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, MessageSquare, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { db } from '../../services/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
function CreateNewsModal({ isOpen, onClose, userId, userName }) {
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'review',
        tags: '',
        coverImage: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            if (!formData.title.trim() || !formData.content.trim()) {
                setError('Título y contenido son requeridos');
                setIsSubmitting(false);
                return;
            }
            // Generar slug
            const slug = formData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
            const newsRef = collection(db, 'news');
            await addDoc(newsRef, {
                title: formData.title.trim(),
                slug,
                excerpt: formData.excerpt.trim(),
                content: formData.content.trim(),
                author: userName,
                authorId: userId,
                category: formData.category,
                tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
                coverImage: formData.coverImage || '/images/news/default-cover.jpg',
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now(),
                viewCount: 0,
                comments: []
            });
            console.log('✅ Noticia creada exitosamente');
            setFormData({
                title: '',
                excerpt: '',
                content: '',
                category: 'review',
                tags: '',
                coverImage: ''
            });
            onClose();
        }
        catch (err) {
            console.error('Error creando noticia:', err);
            setError('Error al crear la noticia. Por favor intenta de nuevo.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    if (!isOpen)
        return null;
    return (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: onClose, className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto", children: _jsxs(motion.div, { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, onClick: e => e.stopPropagation(), className: "bg-groove-bg-secondary rounded-2xl p-6 w-full max-w-2xl border border-groove-gold/20 max-h-[90vh] overflow-y-auto", children: [_jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [_jsx(Plus, { className: "w-6 h-6 text-groove-gold" }), "Crear Nueva Noticia"] }), error && (_jsx("div", { className: "bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 text-red-400 text-sm", children: error })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "T\u00EDtulo" }), _jsx("input", { type: "text", value: formData.title, onChange: e => setFormData({ ...formData, title: e.target.value }), placeholder: "Ej: Nuevo \u00E1lbum de The Beatles en vinilo", className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "Resumen" }), _jsx("textarea", { value: formData.excerpt, onChange: e => setFormData({ ...formData, excerpt: e.target.value }), placeholder: "Breve resumen de la noticia", rows: 2, className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "Contenido" }), _jsx("textarea", { value: formData.content, onChange: e => setFormData({ ...formData, content: e.target.value }), placeholder: "Contenido completo de la noticia", rows: 6, className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm font-mono text-xs" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "Categor\u00EDa" }), _jsxs("select", { value: formData.category, onChange: e => setFormData({ ...formData, category: e.target.value }), className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm", children: [_jsx("option", { value: "review", children: "Rese\u00F1a" }), _jsx("option", { value: "interview", children: "Entrevista" }), _jsx("option", { value: "feature", children: "Art\u00EDculo Destacado" }), _jsx("option", { value: "news", children: "Noticia" }), _jsx("option", { value: "premiere", children: "Estreno" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "URL Portada" }), _jsx("input", { type: "text", value: formData.coverImage, onChange: e => setFormData({ ...formData, coverImage: e.target.value }), placeholder: "https://...", className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "Etiquetas (separadas por comas)" }), _jsx("input", { type: "text", value: formData.tags, onChange: e => setFormData({ ...formData, tags: e.target.value }), placeholder: "vinyl, music, beatles", className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm" })] }), _jsxs("div", { className: "flex gap-4 pt-4", children: [_jsx("button", { type: "button", onClick: onClose, className: "flex-1 px-4 py-2 border border-groove-gold/30 rounded-lg hover:bg-groove-bg-primary transition-colors text-sm font-semibold", children: "Cancelar" }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "flex-1 px-4 py-2 bg-groove-gold text-black rounded-lg hover:bg-groove-gold-light disabled:opacity-50 transition-colors text-sm font-bold", children: isSubmitting ? 'Publicando...' : 'Publicar Noticia' })] })] })] }) }));
}
/**
 * ═══════════════════════════════════════════════════════════════
 * SECCIÓN DE NOTICIAS - PÁGINA PRINCIPAL
 * ═══════════════════════════════════════════════════════════════
 */
export default function NewsSection() {
    const { currentUser, isAuthenticated } = useAuthStore();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);
    // Cargar noticias desde Firestore en tiempo real
    useEffect(() => {
        setIsLoading(true);
        try {
            const newsRef = collection(db, 'news');
            const q = query(newsRef, orderBy('createdAt', 'desc'));
            const unsubscribe = onSnapshot(q, snapshot => {
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setArticles(data);
                setIsLoading(false);
                console.log(`📰 ${data.length} noticias cargadas desde Firestore`);
            });
            return () => unsubscribe();
        }
        catch (error) {
            console.error('Error cargando noticias:', error);
            setIsLoading(false);
        }
    }, []);
    if (isLoading) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("div", { className: "animate-spin", children: "\u23F3" }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-groove-bg-primary py-12", children: [_jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "mb-12 flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold mb-2", children: "Noticias de Groove" }), _jsx("p", { className: "text-groove-text-secondary", children: "Lo \u00FAltimo en m\u00FAsica, rese\u00F1as y eventos" })] }), isAuthenticated && (_jsxs("button", { onClick: () => setShowCreateModal(true), className: "flex items-center gap-2 bg-groove-gold text-black px-6 py-3 rounded-full font-bold hover:bg-groove-gold-light transition-colors", children: [_jsx(Plus, { className: "w-5 h-5" }), "Nueva Noticia"] }))] }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: articles.map((article, idx) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: idx * 0.1 }, className: "group", children: _jsx(Link, { to: `/noticias/${article.slug}`, children: _jsxs("div", { className: "bg-groove-bg-secondary rounded-xl overflow-hidden border border-groove-gold/20 hover:border-groove-gold transition-all cursor-pointer h-full flex flex-col", children: [_jsxs("div", { className: "relative w-full h-40 overflow-hidden bg-groove-bg-primary", children: [_jsx("img", { src: article.coverImage || '/images/news/default-cover.jpg', alt: article.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-groove-bg-primary/80 to-transparent" }), _jsx("span", { className: "absolute bottom-3 left-3 text-xs bg-groove-purple px-3 py-1 rounded-full font-semibold uppercase", children: article.category })] }), _jsxs("div", { className: "p-4 flex flex-col flex-1", children: [_jsx("h3", { className: "font-bold text-lg mb-2 line-clamp-2 group-hover:text-groove-gold transition-colors", children: article.title }), _jsx("p", { className: "text-sm text-groove-text-secondary mb-4 line-clamp-2 flex-1", children: article.excerpt }), _jsxs("div", { className: "flex items-center justify-between text-xs text-groove-text-secondary pt-4 border-t border-groove-gold/10", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(User, { className: "w-3 h-3" }), _jsx("span", { children: article.author })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(MessageSquare, { className: "w-3 h-3" }), _jsx("span", { children: article.comments?.length || 0 })] })] }), article.tags && article.tags.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 mt-3 pt-3 border-t border-groove-gold/10", children: article.tags.slice(0, 2).map(tag => (_jsxs("span", { className: "text-xs bg-groove-gold/10 text-groove-gold px-2 py-1 rounded", children: ["#", tag] }, tag))) }))] })] }) }) }, article.id))) }), articles.length === 0 && (_jsxs("div", { className: "text-center py-12", children: [_jsx(MessageSquare, { className: "w-16 h-16 mx-auto mb-4 text-groove-gold opacity-50" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "No hay noticias a\u00FAn" }), _jsx("p", { className: "text-groove-text-secondary", children: isAuthenticated ? '¡Sé el primero en crear una noticia!' : 'Inicia sesión para crear noticias' })] }))] }), _jsx(CreateNewsModal, { isOpen: showCreateModal, onClose: () => setShowCreateModal(false), userId: currentUser?.uid || '', userName: currentUser?.displayName || 'Anónimo' })] }));
}
