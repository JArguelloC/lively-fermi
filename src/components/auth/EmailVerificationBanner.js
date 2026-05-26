import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, RotateCw, CheckCircle } from 'lucide-react';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useAuthStore } from '../../store/authStore';
export default function EmailVerificationBanner() {
    const currentUser = useAuthStore(state => state.currentUser);
    const [isLoading, setIsLoading] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [message, setMessage] = useState('');
    // No mostrar si no hay usuario, ya está verificado, o fue dismissido
    if (!currentUser || currentUser.emailVerified || isDismissed) {
        return null;
    }
    const handleResendEmail = async () => {
        setIsLoading(true);
        try {
            if (auth.currentUser) {
                await sendEmailVerification(auth.currentUser);
                setMessage('✓ Correo de verificación reenviado. Revisa tu bandeja de entrada.');
                setTimeout(() => setMessage(''), 3000);
            }
        }
        catch (error) {
            setMessage('❌ Error al reenviar: ' + (error.message || 'Intenta más tarde'));
            setTimeout(() => setMessage(''), 3000);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx(AnimatePresence, { children: _jsxs(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: 'auto', opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { type: 'spring', damping: 25 }, className: "bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-b border-orange-500/20", children: [_jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4", children: [_jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx(Mail, { className: "w-5 h-5 text-orange-400 flex-shrink-0" }), _jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: "text-sm font-semibold text-orange-300", children: "Email no verificado" }), _jsx("p", { className: "text-xs text-orange-200 line-clamp-2", children: "Revisa tu correo (incluye spam) y confirma tu direcci\u00F3n para acceder al carrito." })] })] }), _jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [_jsxs("button", { onClick: handleResendEmail, disabled: isLoading, className: "flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/20 hover:bg-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-orange-300 rounded-lg text-xs font-medium transition-colors", children: [_jsx(RotateCw, { className: `w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}` }), isLoading ? 'Enviando...' : 'Reenviar'] }), _jsx("button", { onClick: () => setIsDismissed(true), className: "p-1.5 hover:bg-orange-500/10 rounded-lg transition-colors", "aria-label": "Dismiss banner", children: _jsx(X, { className: "w-4 h-4 text-orange-300" }) })] })] }), _jsx(AnimatePresence, { children: message && (_jsxs(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-2 text-xs text-orange-200 bg-orange-500/5", children: [message.startsWith('✓') ? (_jsx(CheckCircle, { className: "w-4 h-4 text-green-400 flex-shrink-0" })) : null, message] })) })] }) }));
}
