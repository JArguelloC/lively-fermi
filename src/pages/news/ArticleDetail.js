import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * ARTICLE DETAIL - Detalle de Noticia con Comentarios Persistentes
 *
 * CARACTERÍSTICAS:
 * ✅ Carga artículo desde Firestore
 * ✅ Comentarios persistentes (userId, nombre, contenido, timestamp)
 * ✅ Solo usuarios autenticados pueden comentar
 * ✅ Comentarios se guardan en subcarpeta del artículo
 * ✅ Reactividad en tiempo real
 */
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, Share2, ChevronRight, Send } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import { db } from '../../services/firebase';
import { collection, query, where, getDocs, updateDoc, doc, arrayUnion, onSnapshot, Timestamp } from 'firebase/firestore';
/**
 * Formatear fecha
 */
function formatDate(date) {
    if (!date)
        return '';
    try {
        const d = date instanceof Timestamp ? date.toDate() : new Date(date);
        return d.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    catch {
        return '';
    }
}
/**
 * Formato de tiempo relativo
 */
function timeAgo(date) {
    if (!date)
        return '';
    try {
        const d = date instanceof Timestamp ? date.toDate() : new Date(date);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);
        if (seconds < 60)
            return 'hace unos segundos';
        if (seconds < 3600)
            return `hace ${Math.floor(seconds / 60)}m`;
        if (seconds < 86400)
            return `hace ${Math.floor(seconds / 3600)}h`;
        if (seconds < 604800)
            return `hace ${Math.floor(seconds / 86400)}d`;
        return formatDate(date);
    }
    catch {
        return '';
    }
}
export default function ArticleDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { currentUser, isAuthenticated } = useAuthStore();
    const { addItem } = useCartStore();
    // State
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const [newCommentContent, setNewCommentContent] = useState('');
    const [isLoadingArticle, setIsLoadingArticle] = useState(true);
    const [isSubmittingComment, setIsSubmittingComment] = useState(false);
    const [error, setError] = useState('');
    // Cargar artículo desde Firestore
    useEffect(() => {
        if (!slug)
            return;
        const loadArticle = async () => {
            try {
                setIsLoadingArticle(true);
                const newsRef = collection(db, 'news');
                const q = query(newsRef, where('slug', '==', slug));
                const snapshot = await getDocs(q);
                if (snapshot.empty) {
                    setError('Artículo no encontrado');
                    return;
                }
                const doc = snapshot.docs[0];
                const articleData = { id: doc.id, ...doc.data() };
                setArticle(articleData);
                setComments(articleData.comments || []);
                console.log(`📰 Artículo cargado: ${articleData.title}`);
                // Suscribirse a cambios en tiempo real
                const unsubscribe = onSnapshot(doc.ref, updatedDoc => {
                    const updated = { id: updatedDoc.id, ...updatedDoc.data() };
                    setArticle(updated);
                    setComments(updated.comments || []);
                });
                return () => unsubscribe();
            }
            catch (err) {
                console.error('Error cargando artículo:', err);
                setError('Error cargando el artículo');
            }
            finally {
                setIsLoadingArticle(false);
            }
        };
        loadArticle();
    }, [slug]);
    // Agregar comentario
    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!isAuthenticated || !currentUser) {
            navigate('/login');
            return;
        }
        if (!newCommentContent.trim())
            return;
        if (!article)
            return;
        try {
            setIsSubmittingComment(true);
            const newComment = {
                id: `comment-${Date.now()}`,
                userId: currentUser.uid,
                authorName: currentUser.displayName || 'Anónimo',
                content: newCommentContent.trim(),
                createdAt: Timestamp.now()
            };
            // Actualizar artículo agregando comentario
            const articleRef = doc(db, 'news', article.id);
            await updateDoc(articleRef, {
                comments: arrayUnion(newComment)
            });
            console.log('✅ Comentario agregado');
            setNewCommentContent('');
        }
        catch (err) {
            console.error('Error agregando comentario:', err);
            setError('Error al agregar comentario');
        }
        finally {
            setIsSubmittingComment(false);
        }
    };
    // Loading state
    if (isLoadingArticle) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-groove-bg-primary", children: _jsx("div", { className: "animate-spin text-4xl", children: "\u23F3" }) }));
    }
    if (error || !article) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-groove-bg-primary", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: error || 'Artículo no encontrado' }), _jsx(Link, { to: "/noticias", className: "text-groove-gold hover:underline", children: "\u2190 Volver a Noticias" })] }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-groove-bg-primary text-groove-text-primary", children: [_jsxs("div", { className: "relative w-full h-[350px] md:h-[500px] overflow-hidden", children: [_jsx("img", { src: article.coverImage || '/images/news/default-cover.jpg', alt: article.title, className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-groove-bg-primary via-groove-bg-primary/30 to-transparent" })] }), _jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 -mt-32 relative z-10", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "flex items-center gap-2 text-sm text-groove-text-secondary mb-4", children: [_jsx(Link, { to: "/noticias", className: "hover:text-groove-gold transition-colors", children: "Noticias" }), _jsx(ChevronRight, { className: "w-4 h-4" }), _jsx("span", { className: "text-groove-purple", children: article.category })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [_jsx("span", { className: "text-xs bg-groove-purple px-3 py-1 rounded-full font-semibold uppercase tracking-wider", children: article.category }), _jsx("h1", { className: "text-3xl md:text-5xl font-bold mt-4 mb-4 leading-tight", children: article.title }), _jsx("p", { className: "text-xl text-groove-text-secondary mb-6", children: article.excerpt }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-groove-text-secondary mb-8 pb-8 border-b border-white/10", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-groove-gold/20 flex items-center justify-center", children: _jsx("span", { className: "font-bold text-groove-gold", children: article.author.charAt(0) }) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-groove-text-primary", children: article.author }), _jsxs("p", { children: [formatDate(article.createdAt), " \u00B7 ", article.viewCount || 0, " vistas"] })] })] })] }), article.tags && article.tags.length > 0 && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "flex flex-wrap gap-2 mb-8", children: article.tags.map(tag => (_jsxs("span", { className: "text-sm bg-groove-gold/10 text-groove-gold px-3 py-1 rounded-full", children: ["#", tag] }, tag))) })), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "bg-groove-bg-secondary rounded-2xl p-6 md:p-10 border border-groove-gold/20 mb-12 prose prose-invert max-w-none", children: _jsx("div", { className: "whitespace-pre-wrap text-groove-text-primary leading-relaxed", children: article.content }) }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, className: "flex gap-4 mb-12 justify-center", children: [_jsxs("button", { className: "flex items-center gap-2 px-6 py-2 rounded-full border border-groove-gold/30 hover:bg-groove-bg-secondary transition-colors", children: [_jsx(Heart, { className: "w-4 h-4" }), " Like (", Math.floor(Math.random() * 500), ")"] }), _jsxs("button", { className: "flex items-center gap-2 px-6 py-2 rounded-full border border-groove-gold/30 hover:bg-groove-bg-secondary transition-colors", children: [_jsx(MessageSquare, { className: "w-4 h-4" }), " ", comments.length] }), _jsxs("button", { className: "flex items-center gap-2 px-6 py-2 rounded-full border border-groove-gold/30 hover:bg-groove-bg-secondary transition-colors", children: [_jsx(Share2, { className: "w-4 h-4" }), " Compartir"] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, className: "mb-12", children: [_jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [_jsx(MessageSquare, { className: "w-6 h-6 text-groove-gold" }), "Comentarios (", comments.length, ")"] }), isAuthenticated && currentUser ? (_jsxs("form", { onSubmit: handleAddComment, className: "bg-groove-bg-secondary rounded-xl p-6 mb-8 border border-groove-gold/20", children: [_jsxs("div", { className: "flex gap-4 mb-4", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-groove-gold/20 flex items-center justify-center flex-shrink-0", children: _jsx("span", { className: "font-bold text-groove-gold", children: currentUser.displayName?.charAt(0) || 'A' }) }), _jsx("textarea", { value: newCommentContent, onChange: e => setNewCommentContent(e.target.value), placeholder: "Escribe tu comentario aqu\u00ED...", rows: 3, className: "flex-1 bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-2 focus:outline-none focus:border-groove-gold text-sm resize-none" })] }), _jsx("div", { className: "flex justify-end", children: _jsxs("button", { type: "submit", disabled: !newCommentContent.trim() || isSubmittingComment, className: "flex items-center gap-2 bg-groove-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-groove-gold-light disabled:opacity-50 transition-colors", children: [_jsx(Send, { className: "w-4 h-4" }), isSubmittingComment ? 'Enviando...' : 'Comentar'] }) })] })) : (_jsxs("div", { className: "bg-groove-bg-secondary rounded-xl p-6 mb-8 border border-groove-gold/20 text-center", children: [_jsx("p", { className: "text-groove-text-secondary mb-4", children: "Inicia sesi\u00F3n para comentar" }), _jsx(Link, { to: "/login", className: "inline-flex items-center gap-2 bg-groove-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-groove-gold-light transition-colors", children: "Ir a Login \u2192" })] })), _jsx("div", { className: "space-y-4", children: comments.length === 0 ? (_jsx("p", { className: "text-center text-groove-text-secondary py-8", children: "Sin comentarios a\u00FAn" })) : (comments.map(comment => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "bg-groove-bg-secondary rounded-lg p-4 border border-groove-gold/10", children: _jsxs("div", { className: "flex gap-3 mb-2", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-groove-gold/20 flex items-center justify-center flex-shrink-0", children: _jsx("span", { className: "font-bold text-groove-gold text-xs", children: comment.authorName.charAt(0) }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-semibold text-sm", children: comment.authorName }), _jsx("span", { className: "text-xs text-groove-text-secondary", children: timeAgo(comment.createdAt) })] }), _jsx("p", { className: "text-sm mt-1 text-groove-text-secondary", children: comment.content })] })] }) }, comment.id)))) })] }), _jsx("div", { className: "border-t border-groove-gold/20 py-8" })] })] }));
}
