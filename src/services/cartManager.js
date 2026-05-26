/**
 * Cart Manager - Gestión centralizada del carrito con eventos reactivos y persistencia inteligente
 */
// Custom events
export const CART_EVENTS = {
    ITEM_ADDED: 'cart:itemAdded',
    ITEM_REMOVED: 'cart:itemRemoved',
    QUANTITY_UPDATED: 'cart:quantityUpdated',
    CART_CLEARED: 'cart:cleared',
    CART_UPDATED: 'cart:updated'
};
/**
 * Emite un evento personalizado del carrito
 */
export const emitCartEvent = (eventName, items, action, changedItemId) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const event = new CustomEvent(eventName, {
        detail: {
            items,
            totalItems,
            action,
            changedItemId
        }
    });
    window.dispatchEvent(event);
};
/**
 * Inicializa el carrito con lógica de sesión
 * - Primera visita: carrito vacío
 * - Navegación: mantiene el estado
 * - Usuario autenticado: carga desde Firebase (manejado en App.tsx)
 */
export const initializeCart = () => {
    const SESSION_KEY = 'cart_session_initialized';
    const CART_KEY = 'cart_items';
    // Si es la primera visita en esta sesión, limpiar carrito
    if (!sessionStorage.getItem(SESSION_KEY)) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        localStorage.removeItem(CART_KEY); // Limpia localStorage de sesiones anteriores
        return [];
    }
    // Si no, recuperar carrito existente
    try {
        const stored = localStorage.getItem(CART_KEY);
        return stored ? JSON.parse(stored) : [];
    }
    catch {
        return [];
    }
};
/**
 * Persiste el carrito en localStorage
 */
export const persistCart = (items) => {
    try {
        localStorage.setItem('cart_items', JSON.stringify(items));
    }
    catch (error) {
        console.error('Error persisting cart:', error);
    }
};
/**
 * Limpia el carrito de sessionStorage (cierre de sesión)
 */
export const clearSessionCart = () => {
    sessionStorage.removeItem('cart_session_initialized');
    localStorage.removeItem('cart_items');
};
/**
 * Suscribirse a eventos del carrito
 */
export const onCartChange = (callback) => {
    window.addEventListener(CART_EVENTS.CART_UPDATED, callback);
    // Retornar función para desuscribirse
    return () => {
        window.removeEventListener(CART_EVENTS.CART_UPDATED, callback);
    };
};
/**
 * Suscribirse a cambios específicos del carrito
 */
export const onCartItemAdded = (callback) => {
    window.addEventListener(CART_EVENTS.ITEM_ADDED, callback);
    return () => window.removeEventListener(CART_EVENTS.ITEM_ADDED, callback);
};
/**
 * Obtener contador actual del carrito desde el DOM
 */
export const getCartCounterElement = () => {
    return document.querySelector('[data-cart-counter]');
};
/**
 * Actualizar contador visual del carrito
 */
export const updateCartCounter = (totalItems) => {
    const counter = getCartCounterElement();
    if (counter) {
        if (totalItems > 0) {
            counter.textContent = totalItems > 9 ? '9+' : totalItems.toString();
            counter.style.display = 'flex';
        }
        else {
            counter.style.display = 'none';
        }
    }
};
/**
 * Validar que un producto puede ser agregado
 */
export const validateCartItem = (item) => {
    return !!(item.id && item.name && item.price && item.quantity);
};
