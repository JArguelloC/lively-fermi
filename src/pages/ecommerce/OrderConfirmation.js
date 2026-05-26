import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Copy, Home, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
export default function OrderConfirmation() {
    const navigate = useNavigate();
    const [orderId, setOrderId] = useState(null);
    const [payer, setPayer] = useState(null);
    const [copied, setCopied] = useState(false);
    const [redirecting, setRedirecting] = useState(false);
    useEffect(() => {
        // Verificar si el orderId existe en localStorage
        const savedOrderId = localStorage.getItem('lastOrderId');
        const savedPayer = localStorage.getItem('lastPayer');
        if (savedOrderId) {
            setOrderId(savedOrderId);
            if (savedPayer)
                setPayer(savedPayer);
        }
        else {
            // Si no existe en localStorage, redirigir a inicio
            setRedirecting(true);
            const redirectTimer = setTimeout(() => {
                navigate('/');
            }, 2000);
            return () => clearTimeout(redirectTimer);
        }
        // Limpiar localStorage después de mostrar los datos
        const cleanupTimer = setTimeout(() => {
            localStorage.removeItem('lastOrderId');
            localStorage.removeItem('lastPayer');
        }, 5000);
        return () => clearTimeout(cleanupTimer);
    }, [navigate]);
    const handleCopyOrderId = () => {
        if (orderId) {
            navigator.clipboard.writeText(orderId);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };
    if (redirecting) {
        return (_jsx("div", { className: "min-h-[70vh] flex flex-col items-center justify-center p-4", children: _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-center", children: [_jsx(ShoppingBag, { className: "w-16 h-16 text-groove-text-secondary mx-auto mb-4" }), _jsx("h2", { className: "text-2xl font-bold mb-2", children: "No se encontr\u00F3 n\u00FAmero de pedido" }), _jsx("p", { className: "text-groove-text-secondary mb-6", children: "Redirigiendo a la p\u00E1gina de inicio..." })] }) }));
    }
    if (!orderId) {
        return (_jsx("div", { className: "min-h-[70vh] flex items-center justify-center", children: _jsx("div", { className: "w-10 h-10 border-4 border-groove-gold/20 border-t-groove-gold rounded-full animate-spin" }) }));
    }
    return (_jsxs("div", { className: "min-h-[70vh] max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.4 }, className: "text-center mb-12", children: [_jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.2, type: 'spring', stiffness: 200 }, className: "flex justify-center mb-6", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 bg-groove-gold/20 blur-xl rounded-full" }), _jsx(CheckCircle, { className: "w-20 h-20 text-groove-gold relative" })] }) }), _jsx("h1", { className: "text-4xl font-display font-extrabold mb-3", children: "\u00A1Pedido Confirmado!" }), _jsx("p", { className: "text-groove-text-secondary text-lg mb-8", children: "Tu compra se ha procesado exitosamente. Recibir\u00E1s un correo de confirmaci\u00F3n en breve." })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "bg-groove-bg-secondary rounded-2xl p-8 border border-white/5 mb-8", children: [_jsxs("div", { className: "mb-8 pb-8 border-b border-white/10", children: [_jsx("h2", { className: "text-sm font-semibold text-groove-text-secondary mb-4 uppercase tracking-wide", children: "N\u00FAmero de Pedido" }), _jsxs("div", { className: "flex items-center justify-between bg-groove-bg-primary rounded-xl p-4 border border-white/10", children: [_jsx("span", { className: "font-mono text-lg font-bold text-groove-gold", children: orderId }), _jsxs("button", { onClick: handleCopyOrderId, className: `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${copied
                                            ? 'bg-green-500/20 text-green-400'
                                            : 'bg-groove-gold/10 text-groove-gold hover:bg-groove-gold/20'}`, children: [_jsx(Copy, { className: "w-4 h-4" }), copied ? 'Copiado!' : 'Copiar'] })] })] }), payer && (_jsxs("div", { className: "mb-8 pb-8 border-b border-white/10", children: [_jsx("h2", { className: "text-sm font-semibold text-groove-text-secondary mb-4 uppercase tracking-wide", children: "Cliente" }), _jsx("p", { className: "text-lg font-medium", children: payer })] })), _jsxs("div", { children: [_jsx("h2", { className: "text-sm font-semibold text-groove-text-secondary mb-4 uppercase tracking-wide", children: "\u00BFQu\u00E9 sigue?" }), _jsxs("ul", { className: "space-y-3 text-sm text-groove-text-secondary", children: [_jsxs("li", { className: "flex items-start gap-3", children: [_jsx("span", { className: "text-groove-gold font-bold mt-1", children: "1." }), _jsx("span", { children: "Revisa tu correo electr\u00F3nico para recibir la confirmaci\u00F3n del pedido con los detalles del env\u00EDo." })] }), _jsxs("li", { className: "flex items-start gap-3", children: [_jsx("span", { className: "text-groove-gold font-bold mt-1", children: "2." }), _jsx("span", { children: "Tu pedido ser\u00E1 empaquetado y preparado para env\u00EDo en las pr\u00F3ximas 24 horas." })] }), _jsxs("li", { className: "flex items-start gap-3", children: [_jsx("span", { className: "text-groove-gold font-bold mt-1", children: "3." }), _jsx("span", { children: "Recibir\u00E1s un n\u00FAmero de seguimiento para monitorear tu env\u00EDo en tiempo real." })] }), _jsxs("li", { className: "flex items-start gap-3", children: [_jsx("span", { className: "text-groove-gold font-bold mt-1", children: "4." }), _jsx("span", { children: "Si tienes preguntas, puedes contactarnos desde tu cuenta o a trav\u00E9s del correo electr\u00F3nico de soporte." })] })] })] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "flex gap-4 justify-center", children: [_jsxs("button", { onClick: () => navigate('/'), className: "flex items-center gap-2 bg-groove-gold hover:bg-groove-gold-light text-black font-bold px-8 py-3 rounded-full transition-all hover:scale-[1.02]", children: [_jsx(Home, { className: "w-5 h-5" }), "Volver al Inicio"] }), _jsxs("button", { onClick: () => navigate('/tienda'), className: "flex items-center gap-2 border border-groove-gold/30 text-groove-gold hover:bg-groove-gold/10 font-bold px-8 py-3 rounded-full transition-all", children: [_jsx(ShoppingBag, { className: "w-5 h-5" }), "Continuar Comprando"] })] }), _jsx("div", { className: "mt-12 text-center text-xs text-groove-text-secondary", children: _jsx("p", { children: "Gracias por tu compra. Estamos felices de servirte." }) })] }));
}
