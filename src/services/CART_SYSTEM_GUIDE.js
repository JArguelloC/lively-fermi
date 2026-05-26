/**
 * DOCUMENTACIÓN - Sistema de Gestión de Carrito Mejorado
 * =====================================================
 *
 * PROBLEMA RESUELTO:
 * ✓ Carrito fantasma: Ahora se limpia automáticamente en la primera visita
 * ✓ Contador reactivo: Se actualiza en tiempo real sin recargar
 * ✓ Persistencia inteligente: sessionStorage + localStorage coordinados
 * ✓ Firebase sincronizado: Datos persistentes por usuario autenticado
 *
 *
 * ARQUITECTURA DEL SISTEMA
 * ========================
 *
 * 1. cartManager.ts (Módulo de utilidades)
 *    - Gestiona sesiones (primera visita vs. navegación)
 *    - Emite eventos CustomEvents para reactividad
 *    - Persiste en localStorage (anulado por Firebase para usuarios autenticados)
 *    - Proporciona funciones de suscripción a cambios
 *
 * 2. cartStore.ts (Zustand Store - Estado centralizado)
 *    - Inicializa con lógica de sesión inteligente
 *    - Emite eventos al añadir/quitar/actualizar items
 *    - Sincroniza automáticamente con Firebase (usuarios autenticados)
 *    - Persiste en localStorage (usuarios anónimos)
 *
 * 3. Navbar.tsx (Componente de visualización)
 *    - Se suscribe a eventos del carrito
 *    - Actualiza contador en tiempo real
 *    - Usa el atributo data-cart-counter para identificar el elemento
 *
 * 4. Cart.tsx (Página de carrito)
 *    - Conectado al cartStore (no más hardcoded items)
 *    - Muestra items en tiempo real
 *    - Permite agregar/quitar productos
 *
 * 5. ProductDetail.tsx (Agregar productos)
 *    - Llama a cartStore.addItem()
 *    - Emite automáticamente eventos
 *
 *
 * FLUJO DE DATOS
 * ==============
 *
 * PRIMERA VISITA:
 * 1. App.tsx carga, ejecuta initializeCart()
 * 2. sessionStorage está vacío → marca como "inicializado"
 * 3. localStorage se limpia (si hay datos de sesión anterior)
 * 4. cartStore inicia con items = []
 * 5. Usuario agrega producto → addItem() → emite evento → Navbar se actualiza
 *
 * NAVEGACIÓN EN LA MISMA SESIÓN:
 * 1. sessionStorage ya tiene "initialized"
 * 2. initializeCart() devuelve items de localStorage
 * 3. Carrito mantiene su estado
 *
 * USUARIO AUTENTICADO:
 * 1. onAuthStateChanged dispara en App.tsx
 * 2. Carga items de Firebase usando setCart()
 * 3. Todos los cambios se sincronizan a Firebase + localStorage
 *
 *
 * EVENTOS DISPONIBLES
 * ===================
 *
 * window.addEventListener('cart:itemAdded', (event) => {
 *   console.log(event.detail.items)        // Array de items
 *   console.log(event.detail.totalItems)   // Cantidad total
 *   console.log(event.detail.changedItemId) // ID del item agregado
 * })
 *
 * window.addEventListener('cart:itemRemoved', (event) => { ... })
 * window.addEventListener('cart:quantityUpdated', (event) => { ... })
 * window.addEventListener('cart:cleared', (event) => { ... })
 * window.addEventListener('cart:updated', (event) => { ... }) // Cualquier cambio
 *
 *
 * USO DEL cartManager
 * ===================
 *
 * // Suscribirse a cambios del carrito
 * import { onCartChange } from '@/services/cartManager'
 *
 * useEffect(() => {
 *   const unsubscribe = onCartChange((event) => {
 *     console.log('Carrito actualizado:', event.detail)
 *   })
 *   return () => unsubscribe()
 * }, [])
 *
 *
 * // Suscribirse específicamente a items agregados
 * import { onCartItemAdded } from '@/services/cartManager'
 *
 * useEffect(() => {
 *   const unsubscribe = onCartItemAdded((event) => {
 *     console.log('Item agregado:', event.detail.changedItemId)
 *   })
 *   return () => unsubscribe()
 * }, [])
 *
 *
 * // Limpiar sesión (al cerrar sesión)
 * import { clearSessionCart } from '@/services/cartManager'
 *
 * const handleLogout = () => {
 *   clearSessionCart() // Limpia sessionStorage y localStorage
 *   // ... resto de lógica de logout
 * }
 *
 *
 * MODIFICAR EL COMPORTAMIENTO
 * =============================
 *
 * Para cambiar la lógica de sesión, edita cartManager.ts:
 *
 * const SESSION_KEY = 'cart_session_initialized'  // Clave de sesión
 * const CART_KEY = 'cart_items'                    // Clave de almacenamiento
 *
 * Para usar solo sessionStorage (sin persistencia entre sesiones):
 * - Comenta la línea: localStorage.removeItem(CART_KEY)
 * - Cambia localStorage.getItem/setItem a sessionStorage
 *
 *
 * TESTING
 * =======
 *
 * 1. Abre DevTools → Application
 * 2. Verifica sessionStorage: {cart_session_initialized: 'true'}
 * 3. Verifica localStorage: {cart_items: '[...]'}
 * 4. Recarga la página → carrito se mantiene
 * 5. Abre nueva pestaña (nueva sesión) → carrito limpio
 * 6. Agrega producto → contador Navbar actualiza sin recargar
 *
 *
 * COMPATIBILIDAD
 * ===============
 *
 * ✓ React 18+
 * ✓ Zustand 4+
 * ✓ Firebase 9+ (con Firestore)
 * ✓ navegadores modernos (CustomEvent)
 * ✓ No requiere dependencias adicionales
 *
 */
export {};
