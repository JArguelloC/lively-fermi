import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, User as UserIcon, Mail, RotateCw } from 'lucide-react';
import { sendEmailVerification } from 'firebase/auth';
import { useAuthStore } from '../../store/authStore';
import { auth } from '../../services/firebase';
export default function Account() {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuthStore();
    const [isResending, setIsResending] = useState(false);
    const [resendMessage, setResendMessage] = useState('');
    const handleLogout = async () => {
        try {
            await auth.signOut();
            logout();
            navigate('/');
        }
        catch (error) {
            console.error('Error al cerrar sesión', error);
        }
    };
    const handleResendEmail = async () => {
        setIsResending(true);
        try {
            if (auth.currentUser) {
                await sendEmailVerification(auth.currentUser);
                setResendMessage('✓ Correo de verificación reenviado exitosamente');
                setTimeout(() => setResendMessage(''), 3000);
            }
        }
        catch (error) {
            setResendMessage('❌ Error: ' + (error.message || 'Intenta más tarde'));
            setTimeout(() => setResendMessage(''), 3000);
        }
        finally {
            setIsResending(false);
        }
    };
    if (!currentUser) {
        return (_jsx("div", { className: "min-h-[60vh] flex items-center justify-center", children: _jsx("p", { className: "text-xl", children: "Inicia sesi\u00F3n para ver tu perfil." }) }));
    }
    return (_jsx("div", { className: "min-h-[70vh] flex items-center justify-center p-4", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "w-full max-w-md bg-groove-bg-secondary p-8 rounded-3xl border border-white/10 shadow-2xl", children: [_jsxs("div", { className: "flex flex-col items-center text-center mb-8", children: [_jsx("div", { className: "w-24 h-24 bg-groove-purple/20 rounded-full flex items-center justify-center mb-4 border-2 border-groove-gold", children: _jsx(UserIcon, { className: "w-12 h-12 text-groove-gold" }) }), _jsx("h1", { className: "text-2xl font-display font-bold", children: "Mi Perfil" }), _jsx("p", { className: "text-groove-text-secondary mt-1", children: "Administra tu cuenta de Groove" })] }), currentUser.emailVerified === false && (_jsxs("div", { className: "bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mb-6", children: [_jsx("h3", { className: "text-orange-400 font-bold mb-2", children: "Confirma tu correo electr\u00F3nico" }), _jsx("p", { className: "text-xs text-orange-200 mb-3", children: "Para garantizar la seguridad y poder realizar compras, por favor haz clic en el enlace que enviamos a tu correo electr\u00F3nico. Si no lo ves, revisa tu carpeta de spam." }), _jsxs("button", { onClick: handleResendEmail, disabled: isResending, className: "flex items-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-orange-300 rounded-lg text-xs font-medium transition-colors", children: [_jsx(RotateCw, { className: `w-3.5 h-3.5 ${isResending ? 'animate-spin' : ''}` }), isResending ? 'Enviando...' : 'Reenviar Correo de Verificación'] }), resendMessage && (_jsx("p", { className: `text-xs mt-2 ${resendMessage.startsWith('✓') ? 'text-green-400' : 'text-red-400'}`, children: resendMessage }))] })), _jsxs("div", { className: "space-y-4 mb-8", children: [_jsxs("div", { className: "bg-groove-bg-primary border border-white/5 rounded-xl p-4 flex items-center gap-4", children: [_jsx(Mail, { className: "w-5 h-5 text-groove-text-secondary" }), _jsxs("div", { className: "text-left", children: [_jsx("p", { className: "text-xs text-groove-text-secondary font-bold uppercase", children: "Correo Electr\u00F3nico" }), _jsx("p", { className: "text-sm", children: currentUser.email })] })] }), currentUser.displayName && (_jsxs("div", { className: "bg-groove-bg-primary border border-white/5 rounded-xl p-4 flex items-center gap-4", children: [_jsx(UserIcon, { className: "w-5 h-5 text-groove-text-secondary" }), _jsxs("div", { className: "text-left", children: [_jsx("p", { className: "text-xs text-groove-text-secondary font-bold uppercase", children: "Nombre" }), _jsx("p", { className: "text-sm", children: currentUser.displayName })] })] }))] }), _jsxs("button", { onClick: handleLogout, className: "w-full flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold py-3.5 rounded-xl transition-all", children: [_jsx(LogOut, { className: "w-5 h-5" }), " Cerrar Sesi\u00F3n"] })] }) }));
}
