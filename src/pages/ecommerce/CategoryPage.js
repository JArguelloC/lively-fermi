import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Star, Heart, X } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import { db } from '../../services/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { fixProductImages } from '../../services/fixProductImages';
const categoryMap = {
    musica: 'music', merch: 'merch', instrumentos: 'instruments', ofertas: 'offers'
};
const categoryNames = {
    music: 'Música', merch: 'Merch', instruments: 'Instrumentos', offers: 'Ofertas'
};
const sortOptions = [
    { value: 'featured', label: 'Destacados' },
    { value: 'newest', label: 'Novedades' },
    { value: 'price-asc', label: 'Precio: Menor a Mayor' },
    { value: 'price-desc', label: 'Precio: Mayor a Menor' },
    { value: 'rating', label: 'Mejor Valorados' },
];
export default function CategoryPage() {
    const { categoria } = useParams();
    const categoryKey = categoryMap[categoria || ''] || '';
    const [sort, setSort] = useState('featured');
    const [showFilters, setShowFilters] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const addItem = useCartStore(state => state.addItem);
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const navigate = useNavigate();
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const togglePrice = (range) => setSelectedPrices(prev => prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]);
    const toggleGenre = (genre) => setSelectedGenres(prev => prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]);
    const toggleRating = (rating) => setSelectedRatings(prev => prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]);
    // Reparar imágenes al montar el componente
    useEffect(() => {
        fixProductImages().catch(console.error);
    }, []);
    // Cargar productos desde Firestore
    useEffect(() => {
        const productsRef = collection(db, 'products');
        let q = productsRef;
        if (categoryKey) {
            q = query(productsRef, where('category', '==', categoryKey));
        }
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const docs = snapshot.docs.map((doc) => {
                const data = { id: doc.id, ...doc.data() };
                // Asegurar que SIEMPRE haya imágenes
                const images = data.images && Array.isArray(data.images) && data.images.length > 0
                    ? data.images
                    : [data.image || 'https://images.unsplash.com/photo-1611002214172-792c1f90b59a?w=800&h=800&fit=crop'];
                return { ...data, images };
            });
            console.log(`✅ ${categoryKey} cargado: ${docs.length} productos`);
            docs.forEach(p => console.log(`  - ${p.name}: ${p.images?.[0]?.substring(0, 50) || 'SIN IMAGEN'}`));
            setAllProducts(docs);
        });
        return () => unsubscribe();
    }, [categoryKey]);
    let products = allProducts;
    // Apply filters
    if (selectedPrices.length > 0) {
        products = products.filter(p => {
            return selectedPrices.some(range => {
                if (range === 'Menos de $20')
                    return p.price < 2000;
                if (range === '$20 - $50')
                    return p.price >= 2000 && p.price <= 5000;
                if (range === '$50 - $100')
                    return p.price > 5000 && p.price <= 10000;
                if (range === 'Más de $100')
                    return p.price > 10000;
                return false;
            });
        });
    }
    if (selectedGenres.length > 0) {
        products = products.filter(p => p.genre && selectedGenres.some(g => p.genre?.includes(g)));
    }
    if (selectedRatings.length > 0) {
        products = products.filter(p => selectedRatings.some(r => Math.round(p.avgRating || 0) >= r));
    }
    // Sort
    products = [...products].sort((a, b) => {
        switch (sort) {
            case 'price-asc': return a.price - b.price;
            case 'price-desc': return b.price - a.price;
            case 'rating': return (b.avgRating || 0) - (a.avgRating || 0);
            case 'newest': return b.id.localeCompare(a.id);
            default: return 0;
        }
    });
    return (_jsxs("div", { className: "min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-4xl font-display font-extrabold mb-2", children: categoryKey ? categoryNames[categoryKey] : 'Toda la Tienda' }), _jsxs("p", { className: "text-groove-text-secondary", children: [products.length, " productos encontrados"] })] }), _jsxs("div", { className: "flex items-center justify-between mb-6 gap-4", children: [_jsxs("button", { onClick: () => setShowFilters(!showFilters), className: "flex items-center gap-2 bg-groove-bg-secondary px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium hover:border-groove-gold/30 transition-colors lg:hidden", children: [_jsx(SlidersHorizontal, { className: "w-4 h-4" }), " Filtros"] }), _jsx("select", { value: sort, onChange: e => setSort(e.target.value), className: "bg-groove-bg-secondary border border-white/10 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-groove-gold transition-colors appearance-none cursor-pointer", children: sortOptions.map(o => _jsx("option", { value: o.value, children: o.label }, o.value)) })] }), _jsxs("div", { className: "flex gap-8", children: [_jsx("aside", { className: "hidden lg:block w-64 flex-shrink-0", children: _jsxs("div", { className: "sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 space-y-6", children: [_jsxs("div", { className: "bg-groove-bg-secondary rounded-xl p-5 border border-white/5", children: [_jsx("h3", { className: "font-bold mb-4 text-sm uppercase tracking-wider text-groove-text-secondary", children: "Categor\u00EDas" }), _jsx("div", { className: "space-y-2", children: Object.entries(categoryNames).map(([key, name]) => (_jsx(Link, { to: `/tienda/${Object.keys(categoryMap).find(k => categoryMap[k] === key)}`, className: `block px-3 py-2 rounded-lg text-sm transition-colors ${categoryKey === key ? 'bg-groove-gold/10 text-groove-gold font-medium' : 'text-groove-text-secondary hover:text-white hover:bg-white/5'}`, children: name }, key))) })] }), _jsxs("div", { className: "bg-groove-bg-secondary rounded-xl p-5 border border-white/5", children: [_jsx("h3", { className: "font-bold mb-4 text-sm uppercase tracking-wider text-groove-text-secondary", children: "Precio" }), _jsx("div", { className: "space-y-2 text-sm", children: ['Menos de $20', '$20 - $50', '$50 - $100', 'Más de $100'].map(range => (_jsxs("label", { className: "flex items-center gap-2 text-groove-text-secondary hover:text-white cursor-pointer", children: [_jsx("input", { type: "checkbox", className: "accent-groove-gold rounded", checked: selectedPrices.includes(range), onChange: () => togglePrice(range) }), " ", range] }, range))) })] }), categoryKey === 'music' && (_jsxs("div", { className: "bg-groove-bg-secondary rounded-xl p-5 border border-white/5", children: [_jsx("h3", { className: "font-bold mb-4 text-sm uppercase tracking-wider text-groove-text-secondary", children: "G\u00E9nero" }), _jsx("div", { className: "space-y-2 text-sm", children: ['Rock', 'Jazz', 'Electronic', 'Pop', 'Hip-Hop', 'Classical', 'Metal', 'Indie'].map(g => (_jsxs("label", { className: "flex items-center gap-2 text-groove-text-secondary hover:text-white cursor-pointer", children: [_jsx("input", { type: "checkbox", className: "accent-groove-gold rounded", checked: selectedGenres.includes(g), onChange: () => toggleGenre(g) }), " ", g] }, g))) })] })), _jsxs("div", { className: "bg-groove-bg-secondary rounded-xl p-5 border border-white/5", children: [_jsx("h3", { className: "font-bold mb-4 text-sm uppercase tracking-wider text-groove-text-secondary", children: "Calificaci\u00F3n" }), _jsx("div", { className: "space-y-2 text-sm", children: [4, 3, 2].map(s => (_jsxs("label", { className: "flex items-center gap-2 text-groove-text-secondary hover:text-white cursor-pointer", children: [_jsx("input", { type: "checkbox", className: "accent-groove-gold rounded", checked: selectedRatings.includes(s), onChange: () => toggleRating(s) }), _jsx("span", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map(i => _jsx(Star, { className: `w-3 h-3 ${i <= s ? 'fill-groove-gold text-groove-gold' : 'text-gray-600'}` }, i)) }), _jsx("span", { children: "y m\u00E1s" })] }, s))) })] })] }) }), showFilters && (_jsxs("div", { className: "fixed inset-0 z-50 lg:hidden", children: [_jsx("div", { className: "absolute inset-0 bg-black/60", onClick: () => setShowFilters(false) }), _jsxs(motion.div, { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' }, className: "absolute bottom-0 left-0 right-0 bg-groove-bg-secondary rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h3", { className: "font-bold text-lg", children: "Filtros" }), _jsx("button", { onClick: () => setShowFilters(false), children: _jsx(X, { className: "w-6 h-6" }) })] }), _jsx("p", { className: "text-groove-text-secondary text-sm", children: "Filtros disponibles pr\u00F3ximamente" })] })] })), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6", children: products.map((product, i) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.05 }, children: _jsxs(Link, { to: `/producto/${product.slug}`, className: "group block bg-groove-bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-groove-gold/20 transition-all hover:-translate-y-1", children: [_jsxs("div", { className: "relative aspect-square overflow-hidden", children: [_jsx("img", { src: product.images?.[0] || 'https://images.unsplash.com/photo-1611002214172-792c1f90b59a?w=800', alt: product.name, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500", loading: "lazy" }), product.onSale && product.compareAtPrice && (_jsxs("span", { className: "absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full", children: ["-", Math.round((1 - product.price / product.compareAtPrice) * 100), "%"] })), product.stock <= 5 && product.stock > 0 && (_jsx("span", { className: "absolute top-3 right-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full", children: "Poco stock" })), _jsx("button", { onClick: (e) => { e.preventDefault(); e.stopPropagation(); }, className: "absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:text-groove-gold opacity-0 group-hover:opacity-100 transition-all", children: _jsx(Heart, { className: "w-4 h-4" }) })] }), _jsxs("div", { className: "p-4", children: [_jsx("p", { className: "text-xs text-groove-text-secondary mb-1", children: product.artist || product.brand }), _jsx("h4", { className: "font-semibold text-sm leading-tight mb-2 line-clamp-2 group-hover:text-groove-gold transition-colors", children: product.name }), _jsxs("div", { className: "flex items-center gap-1 mb-2", children: [[1, 2, 3, 4, 5].map(s => _jsx(Star, { className: `w-3 h-3 ${s <= Math.round(product.avgRating || 0) ? 'fill-groove-gold text-groove-gold' : 'text-gray-600'}` }, s)), _jsxs("span", { className: "text-xs text-groove-text-secondary ml-1", children: ["(", product.reviewCount || 0, ")"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-groove-gold font-bold", children: formatPrice(product.price) }), product.compareAtPrice && _jsx("span", { className: "text-groove-text-secondary text-xs line-through", children: formatPrice(product.compareAtPrice) })] })] })] }) }, product.id))) }), products.length === 0 && (_jsx("div", { className: "text-center py-20 text-groove-text-secondary", children: _jsx("p", { className: "text-lg", children: "No se encontraron productos en esta categor\u00EDa." }) }))] })] })] }));
}
