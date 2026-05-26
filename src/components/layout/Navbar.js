import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import { mockProducts } from '../../data/mockData';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const totalItems = useCartStore(state => state.totalItems);
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const navigate = useNavigate();
    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto';
    }, [isMenuOpen]);
    // Actualizar contador del carrito cuando totalItems cambia (estado reactivo de Zustand)
    useEffect(() => {
        const counter = document.querySelector('[data-cart-counter]');
        if (!counter)
            return;
        if (totalItems > 0) {
            counter.textContent = totalItems > 9 ? '9+' : totalItems.toString();
            counter.style.display = 'flex';
        }
        else {
            counter.style.display = 'none';
        }
    }, [totalItems]);
    const searchResults = searchQuery.trim()
        ? mockProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.artist?.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
        : [];
    const handleSearchSelect = (slug) => {
        setShowSearch(false);
        setSearchQuery('');
        navigate(`/producto/${slug}`);
    };
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: "sticky top-0 z-[100] w-full bg-groove-bg-secondary/90 backdrop-blur-md border-b border-white/5", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs("div", { className: "flex items-center gap-8", children: [_jsx(Link, { to: "/", className: "flex items-center", "aria-label": "Go to home", children: _jsx("img", { src: "/logo.png", alt: "Groove Logo", className: "h-10" }) }), _jsxs("div", { className: "hidden md:flex items-center gap-6 text-sm font-medium", children: [_jsx(Link, { to: "/tienda/musica", className: "hover:text-groove-gold transition-colors", children: "M\u00FAsica" }), _jsx(Link, { to: "/tienda/merch", className: "hover:text-groove-gold transition-colors", children: "Merch" }), _jsx(Link, { to: "/tienda/instrumentos", className: "hover:text-groove-gold transition-colors", children: "Instrumentos" }), _jsx(Link, { to: "/tienda/ofertas", className: "hover:text-groove-gold transition-colors", children: "Ofertas" }), _jsx(Link, { to: "/noticias", className: "hover:text-groove-gold transition-colors", children: "Noticias" })] })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "relative hidden md:block", children: [_jsxs("div", { className: `flex items-center bg-white/5 rounded-full px-3 py-1.5 border transition-colors ${showSearch ? 'border-groove-gold' : 'border-white/10'}`, children: [_jsx(Search, { className: "w-4 h-4 text-groove-text-secondary mr-2" }), _jsx("input", { type: "text", placeholder: "Buscar...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), onFocus: () => setShowSearch(true), onBlur: () => setTimeout(() => setShowSearch(false), 200), className: "bg-transparent border-none outline-none text-sm w-48 focus:w-64 transition-all" })] }), _jsx(AnimatePresence, { children: showSearch && searchQuery && (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10 }, className: "absolute top-full mt-2 w-full bg-groove-bg-secondary border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50", children: searchResults.length > 0 ? (_jsx("ul", { className: "py-2", children: searchResults.map(p => (_jsx("li", { children: _jsxs("button", { onClick: () => handleSearchSelect(p.slug), className: "w-full text-left px-4 py-2 hover:bg-white/5 flex flex-col transition-colors", children: [_jsx("span", { className: "text-sm font-bold text-white line-clamp-1", children: p.name }), _jsx("span", { className: "text-xs text-groove-text-secondary", children: p.artist || p.brand })] }) }, p.id))) })) : (_jsx("div", { className: "p-4 text-sm text-groove-text-secondary text-center", children: "No se encontraron resultados" })) })) })] }), _jsxs(Link, { to: "/carrito", className: "p-2 hover:bg-white/5 rounded-full transition-colors relative", "aria-label": "Cart", children: [_jsx(ShoppingCart, { className: "w-5 h-5" }), totalItems > 0 && (_jsx("span", { "data-cart-counter": true, className: "absolute -top-1 -right-1 bg-groove-gold text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full", children: totalItems > 9 ? '9+' : totalItems }))] }), _jsx(Link, { to: isAuthenticated ? "/cuenta" : "/login", className: `p-2 rounded-full transition-colors ${isAuthenticated ? 'bg-groove-gold/20 text-groove-gold hover:bg-groove-gold/30' : 'hover:bg-white/5'}`, "aria-label": "Account", children: _jsx(User, { className: "w-5 h-5" }) }), _jsx("button", { onClick: () => setIsMenuOpen(true), className: "p-2 hover:bg-white/5 rounded-full transition-colors md:hidden", "aria-label": "Open menu", children: _jsx(Menu, { className: "w-5 h-5" }) })] })] }) }) }), _jsx(AnimatePresence, { children: isMenuOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => setIsMenuOpen(false), className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] md:hidden" }), _jsxs(motion.div, { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' }, transition: { type: 'spring', damping: 25, stiffness: 200 }, className: "fixed inset-y-0 right-0 w-4/5 max-w-sm bg-groove-bg-primary border-l border-white/10 z-[200] shadow-2xl flex flex-col md:hidden", children: [_jsxs("div", { className: "p-6 border-b border-white/10 flex justify-between items-center", children: [_jsx("span", { className: "font-display font-bold text-xl text-gradient-gold", children: "Men\u00FA" }), _jsx("button", { onClick: () => setIsMenuOpen(false), className: "p-2 bg-white/5 rounded-full hover:bg-white/10", "aria-label": "Close menu", children: _jsx(X, { className: "w-5 h-5" }) })] }), _jsx("div", { className: "py-4 flex-grow", children: _jsx("nav", { className: "flex flex-col gap-2 px-4", children: [
                                            { path: '/tienda/musica', label: 'Música' },
                                            { path: '/tienda/merch', label: 'Merch' },
                                            { path: '/tienda/instrumentos', label: 'Instrumentos' },
                                            { path: '/tienda/ofertas', label: 'Ofertas Especiales' },
                                            { path: '/noticias', label: 'Noticias y Editorial' },
                                        ].map(link => (_jsx(Link, { to: link.path, onClick: () => setIsMenuOpen(false), className: "px-4 py-3 rounded-xl hover:bg-white/5 font-medium text-lg transition-colors", children: link.label }, link.path))) }) })] })] })) })] }));
}
