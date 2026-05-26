import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { formatPrice } from '../../data/mockData';
export default function Cart() {
    const items = useCartStore(state => state.items);
    const removeItem = useCartStore(state => state.removeItem);
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const clearCart = useCartStore(state => state.clearCart);
    // Coupon state - could be moved to store for persistence
    const subtotal = useCartStore(state => state.totalPrice);
    // Assuming we add coupon to the store later
    const discount = 0; // couponApplied ? Math.round(subtotal * 0.1) : 0
    const shipping = subtotal > 5000 ? 0 : 599;
    const total = subtotal - discount + shipping;
    const updateQty = (id, delta) => {
        const item = items.find(i => i.id === id);
        if (item) {
            updateQuantity(id, Math.max(1, item.quantity + delta));
        }
    };
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    if (items.length === 0) {
        return (_jsxs("div", { className: "min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [_jsxs("h1", { className: "text-3xl font-display font-extrabold mb-8 flex items-center gap-3", children: [_jsx(ShoppingCart, { className: "w-8 h-8 text-groove-gold" }), " Tu Carrito"] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-center py-20", children: [_jsx(ShoppingCart, { className: "w-16 h-16 text-groove-text-secondary mx-auto mb-4" }), _jsx("h2", { className: "text-xl font-bold mb-2", children: "Tu carrito est\u00E1 vac\u00EDo" }), _jsx("p", { className: "text-groove-text-secondary mb-6", children: "Explora nuestra tienda y encuentra la m\u00FAsica que amas." }), _jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 bg-groove-gold hover:bg-groove-gold-light text-black font-bold px-8 py-3 rounded-full transition-all", children: ["Seguir Comprando ", _jsx(ArrowRight, { className: "w-4 h-4" })] })] })] }));
    }
    return (_jsxs("div", { className: "min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [_jsxs("h1", { className: "text-3xl font-display font-extrabold mb-8 flex items-center gap-3", children: [_jsx(ShoppingCart, { className: "w-8 h-8 text-groove-gold" }), " Tu Carrito"] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2 space-y-4", children: items.map((item, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.05 }, className: "flex gap-4 bg-groove-bg-secondary rounded-xl p-4 border border-white/5", children: [item.images?.[0] && (_jsx("img", { src: item.images[0], alt: item.name, className: "w-24 h-24 rounded-lg object-cover flex-shrink-0" })), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx(Link, { to: `/producto/${item.slug || item.id}`, className: "font-bold hover:text-groove-gold transition-colors line-clamp-1", children: item.name }), _jsx("p", { className: "text-sm text-groove-text-secondary", children: item.artist || item.brand || 'Producto' }), _jsxs("div", { className: "flex items-center gap-4 mt-3", children: [_jsxs("div", { className: "flex items-center bg-groove-bg-primary rounded-full border border-white/10", children: [_jsx("button", { onClick: () => updateQty(item.id, -1), className: "p-2 hover:text-groove-gold", children: _jsx(Minus, { className: "w-3 h-3" }) }), _jsx("span", { className: "w-8 text-center text-sm font-medium", children: item.quantity }), _jsx("button", { onClick: () => updateQty(item.id, 1), className: "p-2 hover:text-groove-gold", children: _jsx(Plus, { className: "w-3 h-3" }) })] }), _jsx("button", { onClick: () => removeItem(item.id), className: "text-groove-text-secondary hover:text-red-500 transition-colors", children: _jsx(Trash2, { className: "w-4 h-4" }) })] })] }), _jsxs("div", { className: "text-right flex-shrink-0", children: [_jsx("p", { className: "text-groove-gold font-bold", children: formatPrice(item.price * item.quantity) }), item.quantity > 1 && _jsxs("p", { className: "text-xs text-groove-text-secondary", children: [formatPrice(item.price), " c/u"] })] })] }, item.id))) }), _jsx("div", { children: _jsxs("div", { className: "bg-groove-bg-secondary rounded-2xl p-6 border border-white/5 sticky top-24", children: [_jsx("h3", { className: "font-display font-bold text-lg mb-6", children: "Resumen del Pedido" }), _jsxs("div", { className: "space-y-3 text-sm border-b border-white/10 pb-4 mb-4", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-groove-text-secondary", children: "Subtotal" }), _jsx("span", { children: formatPrice(subtotal) })] }), discount > 0 && _jsxs("div", { className: "flex justify-between text-green-500", children: [_jsx("span", { children: "Descuento" }), _jsxs("span", { children: ["-", formatPrice(discount)] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-groove-text-secondary", children: "Env\u00EDo" }), _jsx("span", { children: shipping === 0 ? _jsx("span", { className: "text-green-500", children: "Gratis" }) : formatPrice(shipping) })] })] }), _jsxs("div", { className: "flex justify-between font-bold text-lg mb-6", children: [_jsx("span", { children: "Total" }), _jsx("span", { className: "text-groove-gold", children: formatPrice(total) })] }), _jsxs(Link, { to: "/checkout", className: "w-full flex items-center justify-center gap-2 bg-groove-gold hover:bg-groove-gold-light text-black font-bold py-4 rounded-full transition-all hover:scale-[1.02]", children: ["Proceder al Pago ", _jsx(ArrowRight, { className: "w-5 h-5" })] }), _jsx(Link, { to: "/", className: "block text-center text-sm text-groove-gold hover:underline mt-4", children: "\u2190 Seguir comprando" }), items.length > 0 && (_jsx("button", { onClick: clearCart, className: "w-full mt-4 px-4 py-2 text-xs text-groove-text-secondary hover:text-red-500 transition-colors border border-white/5 rounded-lg hover:border-red-500/30", children: "Vaciar carrito" }))] }) })] })] }));
}
