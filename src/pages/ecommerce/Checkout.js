import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * CHECKOUT PAGE - Flujo completo de compra
 *
 * CARACTERÍSTICAS:
 * ✅ Envío dinámico: >$50 = FREE, ≤$50 = $5.99
 * ✅ Mapbox Ecuador-only (countries="ec")
 * ✅ CAPA 2 (validación) + CAPA 3 (decremento atómico)
 * ✅ Cart purge en Firebase después de éxito
 * ✅ Forma de usuario específico: 5AIaouE4Eler4l4nZEpZBq6qHB43
 */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, MapPin, Check, Lock, ArrowRight, ArrowLeft, ShoppingCart, AlertCircle } from 'lucide-react';
import MapboxGeocoderComponent from '../../components/ecommerce/MapboxGeocoder';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { validateOrderStock, decrementProductStock } from '../../services/stockService';
import { auth, db } from '../../services/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
const steps = ['Envío', 'Pago', 'Confirmar'];
export default function Checkout() {
    const navigate = useNavigate();
    const { items: cartItems, totalPrice: subtotalCents, clearCart } = useCartStore();
    const { currentUser } = useAuthStore();
    const [step, setStep] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [stockError, setStockError] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');
    // ═══════════════════════════════════════════════════════════════
    // FORM STATE - Datos de envío Ecuador
    // ═══════════════════════════════════════════════════════════════
    const [shippingData, setShippingData] = useState({
        name: currentUser?.displayName || '',
        email: currentUser?.email || '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        province: '' // Ej: Pichincha, Guayas, Manabí
    });
    // ═══════════════════════════════════════════════════════════════
    // CÁLCULO DE ENVÍO DINÁMICO
    // ═══════════════════════════════════════════════════════════════
    /**
     * REGLA:
     * - Si subtotal > 5000 centavos ($50 USD) → Envío GRATIS (0)
     * - Si subtotal ≤ 5000 centavos ($50 USD) → Envío $5.99 (599 centavos)
     *
     * subtotalCents ya está en centavos (ej: 4999 = $49.99, 5001 = $50.01)
     */
    const shipping = subtotalCents > 5000 ? 0 : 599;
    const total = subtotalCents + shipping;
    // ═══════════════════════════════════════════════════════════════
    // HANDLER: Cambiar ubicación de Mapbox
    // ═══════════════════════════════════════════════════════════════
    const handleLocationSelect = (location) => {
        setShippingData({
            ...shippingData,
            address: location.address,
            city: location.city,
            zip: location.zip || ''
        });
    };
    // ═══════════════════════════════════════════════════════════════
    // HANDLER: Pago con Tarjeta
    // ═══════════════════════════════════════════════════════════════
    const handleCardPayment = async () => {
        setIsProcessing(true);
        setStockError('');
        try {
            // CAPA 2: Validar stock de todos los items ANTES de procesar pago
            console.log('🔍 CAPA 2: Validando stock...');
            const stockValidation = await validateOrderStock(cartItems);
            if (!stockValidation.valid) {
                setStockError(stockValidation.errors.join(' | '));
                setIsProcessing(false);
                return;
            }
            // Simular procesamiento de pago (2 segundos)
            console.log('💳 Procesando pago con tarjeta...');
            await new Promise(resolve => setTimeout(resolve, 2000));
            // CAPA 3: Decrementar stock de forma ATÓMICA
            console.log('⚙️  CAPA 3: Actualizando inventario (transacción atómica)...');
            const stockDecrement = await decrementProductStock(cartItems);
            if (!stockDecrement.success) {
                setStockError(stockDecrement.message || 'Error al actualizar el inventario.');
                setIsProcessing(false);
                return;
            }
            // ✅ PAGO EXITOSO + STOCK DECREMENTADO
            const orderId = `ORD-${Math.floor(Math.random() * 10000)}`;
            try {
                localStorage.setItem('lastOrderId', orderId);
                localStorage.setItem('lastPayer', shippingData.name);
            }
            catch (e) {
                console.error('Error saving order to localStorage:', e);
            }
            // Limpiar carrito LOCALMENTE
            await clearCart();
            // 🗑️ PURGAR CARRITO EN FIREBASE
            const user = auth.currentUser;
            if (user) {
                try {
                    await deleteDoc(doc(db, 'carts', user.uid));
                    console.log(`✅ Carrito purgado en Firestore para usuario ${user.uid}`);
                }
                catch (deleteError) {
                    console.error('⚠️  No se pudo eliminar carrito de Firestore:', deleteError);
                    // No es bloqueante - la orden ya está completada
                }
            }
            navigate('/order-confirmation');
        }
        catch (error) {
            console.error('❌ Error en pago con tarjeta:', error);
            setStockError('Error procesando el pago. Por favor, intenta de nuevo.');
            setIsProcessing(false);
        }
    };
    // ═══════════════════════════════════════════════════════════════
    // HANDLER: Pago con PayPal
    // ═══════════════════════════════════════════════════════════════
    const handlePayPalApprove = async (data, actions) => {
        try {
            // CAPA 2: Validar stock ANTES de procesar PayPal
            console.log('🔍 CAPA 2: Validando stock con PayPal...');
            const stockValidation = await validateOrderStock(cartItems);
            if (!stockValidation.valid) {
                setStockError(stockValidation.errors.join(' | '));
                return;
            }
            return actions.order.capture().then(async (details) => {
                try {
                    // CAPA 3: Decrementar stock de forma ATÓMICA
                    console.log('⚙️  CAPA 3: Actualizando inventario (transacción atómica)...');
                    const stockDecrement = await decrementProductStock(cartItems);
                    if (!stockDecrement.success) {
                        setStockError(stockDecrement.message || 'Error al actualizar el inventario.');
                        return;
                    }
                    // ✅ PAGO EXITOSO + STOCK DECREMENTADO
                    const payerName = details.payer?.name?.given_name || 'Cliente';
                    try {
                        localStorage.setItem('lastOrderId', details.id);
                        localStorage.setItem('lastPayer', payerName);
                    }
                    catch (e) {
                        console.error('Error saving PayPal order:', e);
                    }
                    // Limpiar carrito LOCALMENTE
                    await clearCart();
                    // 🗑️ PURGAR CARRITO EN FIREBASE
                    const user = auth.currentUser;
                    if (user) {
                        try {
                            await deleteDoc(doc(db, 'carts', user.uid));
                            console.log(`✅ Carrito purgado en Firestore para usuario ${user.uid}`);
                        }
                        catch (deleteError) {
                            console.error('⚠️  No se pudo eliminar carrito de Firestore:', deleteError);
                        }
                    }
                    navigate('/order-confirmation');
                }
                catch (error) {
                    console.error('❌ Error en aprobación PayPal:', error);
                    setStockError('Error procesando la compra. Por favor, intenta de nuevo.');
                }
            });
        }
        catch (error) {
            console.error('❌ Error con PayPal:', error);
            setStockError('Error con PayPal. Por favor, intenta de nuevo.');
        }
    };
    // ═══════════════════════════════════════════════════════════════
    // VALIDACIÓN DE FORMULARIO
    // ═══════════════════════════════════════════════════════════════
    const isFormValid = shippingData.name &&
        shippingData.email &&
        shippingData.phone &&
        shippingData.address &&
        shippingData.city &&
        shippingData.province;
    // ═══════════════════════════════════════════════════════════════
    // RENDER
    // ═══════════════════════════════════════════════════════════════
    if (!cartItems.length) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx(ShoppingCart, { className: "w-16 h-16 mx-auto mb-4 text-groove-gold opacity-50" }), _jsx("h2", { className: "text-2xl font-bold mb-4", children: "Carrito vac\u00EDo" }), _jsx(Link, { to: "/tienda", className: "text-groove-gold hover:underline", children: "Continuar comprando \u2192" })] }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-groove-bg-primary text-groove-text-primary py-8", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "mb-8", children: [_jsx("h1", { className: "text-4xl font-bold mb-2", children: "Checkout" }), _jsx("p", { className: "text-groove-text-secondary", children: "Completa tu compra de forma segura" })] }), _jsx("div", { className: "flex justify-between mb-12", children: steps.map((stepName, i) => (_jsx("div", { className: `flex-1 text-center pb-4 border-b-2 transition-colors ${i === step
                            ? 'border-groove-gold text-groove-gold'
                            : i < step
                                ? 'border-green-500 text-green-500'
                                : 'border-groove-text-secondary/30 text-groove-text-secondary'}`, children: _jsxs("div", { className: "flex items-center justify-center gap-2", children: [i < step ? (_jsx(Check, { className: "w-5 h-5" })) : (_jsx("div", { className: "w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold", children: i + 1 })), stepName] }) }, i))) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, className: "bg-groove-bg-secondary rounded-2xl p-6 border border-groove-gold/20", children: [step === 0 && (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [_jsx(MapPin, { className: "w-6 h-6 text-groove-gold" }), "Informaci\u00F3n de Env\u00EDo"] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "\uD83D\uDCCD Ubicaci\u00F3n en Ecuador" }), _jsx(MapboxGeocoderComponent, { value: shippingData.address, onChange: (addr) => setShippingData({ ...shippingData, address: addr }), onLocationSelect: handleLocationSelect }), _jsx("p", { className: "text-xs text-groove-text-secondary mt-1", children: "Solo se pueden buscar direcciones dentro de Ecuador" })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("input", { type: "text", placeholder: "Nombre completo", value: shippingData.name, onChange: (e) => setShippingData({ ...shippingData, name: e.target.value }), className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold" }), _jsx("input", { type: "email", placeholder: "Email", value: shippingData.email, onChange: (e) => setShippingData({ ...shippingData, email: e.target.value }), className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold" }), _jsx("input", { type: "tel", placeholder: "Tel\u00E9fono", value: shippingData.phone, onChange: (e) => setShippingData({ ...shippingData, phone: e.target.value }), className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold" }), _jsx("input", { type: "text", placeholder: "Direcci\u00F3n", value: shippingData.address, onChange: (e) => setShippingData({ ...shippingData, address: e.target.value }), className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold" }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx("input", { type: "text", placeholder: "Ciudad", value: shippingData.city, onChange: (e) => setShippingData({ ...shippingData, city: e.target.value }), className: "bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold" }), _jsx("input", { type: "text", placeholder: "C\u00F3digo Postal", value: shippingData.zip, onChange: (e) => setShippingData({ ...shippingData, zip: e.target.value }), className: "bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold" })] }), _jsx("input", { type: "text", placeholder: "Provincia (Ej: Pichincha, Guayas, Manab\u00ED)", value: shippingData.province, onChange: (e) => setShippingData({ ...shippingData, province: e.target.value }), className: "w-full bg-groove-bg-primary border border-groove-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-groove-gold" })] })] }), _jsxs("button", { onClick: () => setStep(1), disabled: !isFormValid, className: "w-full bg-groove-gold text-black font-bold py-3 rounded-lg hover:bg-groove-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2", children: ["Continuar ", _jsx(ArrowRight, { className: "w-4 h-4" })] })] })), step === 1 && (_jsxs("div", { className: "space-y-6", children: [_jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [_jsx(CreditCard, { className: "w-6 h-6 text-groove-gold" }), "M\u00E9todo de Pago"] }), stockError && (_jsxs("div", { className: "bg-red-500/20 border border-red-500 rounded-lg p-4 flex gap-2", children: [_jsx(AlertCircle, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }), _jsx("p", { className: "text-red-400 text-sm", children: stockError })] })), _jsxs("div", { className: "space-y-3", children: [_jsxs("label", { className: "flex items-center gap-3 p-4 border border-groove-gold/30 rounded-lg cursor-pointer hover:bg-groove-bg-primary/50", children: [_jsx("input", { type: "radio", value: "card", checked: paymentMethod === 'card', onChange: (e) => setPaymentMethod(e.target.value), className: "w-4 h-4" }), _jsx("span", { className: "font-semibold", children: "Tarjeta de Cr\u00E9dito" })] }), _jsxs("label", { className: "flex items-center gap-3 p-4 border border-groove-gold/30 rounded-lg cursor-pointer hover:bg-groove-bg-primary/50", children: [_jsx("input", { type: "radio", value: "paypal", checked: paymentMethod === 'paypal', onChange: (e) => setPaymentMethod(e.target.value), className: "w-4 h-4" }), _jsx("span", { className: "font-semibold", children: "PayPal" })] })] }), _jsxs(AnimatePresence, { children: [paymentMethod === 'card' && (_jsx(motion.button, { onClick: handleCardPayment, disabled: isProcessing, className: "w-full bg-groove-gold text-black font-bold py-3 rounded-lg hover:bg-groove-gold-light disabled:opacity-50 transition-all flex items-center justify-center gap-2", children: isProcessing ? '⏳ Procesando...' : _jsxs(_Fragment, { children: ["Pagar $", (total / 100).toFixed(2)] }) })), paymentMethod === 'paypal' && (_jsx(PayPalButtons, { createOrder: (data, actions) => {
                                                            return actions.order.create({
                                                                intent: 'CAPTURE',
                                                                purchase_units: [{ amount: { currency_code: 'USD', value: (total / 100).toString() } }]
                                                            });
                                                        }, onApprove: handlePayPalApprove }))] }), _jsxs("button", { onClick: () => setStep(0), className: "w-full text-groove-gold font-semibold py-2 flex items-center justify-center gap-2 hover:text-groove-gold-light", children: [_jsx(ArrowLeft, { className: "w-4 h-4" }), " Atr\u00E1s"] })] }))] }, step) }), _jsxs("div", { className: "bg-groove-bg-secondary rounded-2xl p-6 border border-groove-gold/20 h-fit sticky top-8", children: [_jsxs("h3", { className: "text-xl font-bold mb-6 flex items-center gap-2", children: [_jsx(ShoppingCart, { className: "w-5 h-5" }), "Resumen de Compra"] }), _jsx("div", { className: "space-y-3 mb-6 pb-6 border-b border-groove-gold/20 max-h-60 overflow-y-auto", children: cartItems.map(item => (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsxs("span", { className: "text-groove-text-secondary", children: [item.name, " x ", item.quantity] }), _jsxs("span", { className: "font-semibold", children: ["$", ((item.price * item.quantity) / 100).toFixed(2)] })] }, item.id))) }), _jsxs("div", { className: "space-y-3 mb-6", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: "Subtotal" }), _jsxs("span", { children: ["$", (subtotalCents / 100).toFixed(2)] })] }), _jsxs("div", { className: `flex justify-between text-sm ${shipping === 0 ? 'text-green-400' : ''}`, children: [_jsx("span", { children: "Env\u00EDo" }), _jsx("span", { children: shipping === 0 ? '✅ GRATIS' : `$${(shipping / 100).toFixed(2)}` })] }), subtotalCents <= 5000 && (_jsxs("p", { className: "text-xs text-groove-text-secondary", children: ["\uD83D\uDCA1 Compra por $", ((5001 - subtotalCents) / 100).toFixed(2), " m\u00E1s para env\u00EDo gratis"] })), _jsxs("div", { className: "flex justify-between text-lg font-bold border-t border-groove-gold/20 pt-3 text-groove-gold", children: [_jsx("span", { children: "Total" }), _jsxs("span", { children: ["$", (total / 100).toFixed(2)] })] })] }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-groove-text-secondary bg-groove-bg-primary rounded-lg p-3", children: [_jsx(Lock, { className: "w-4 h-4" }), _jsx("span", { children: "Transacci\u00F3n 100% segura" })] })] })] })] }) }));
}
