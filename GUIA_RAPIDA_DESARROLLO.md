# 🚀 GUÍA RÁPIDA - ARQUITECTURA REFACTORIZADA GROOVE

**Para:** Desarrolladores que continúen el proyecto  
**Tiempo de lectura:** 5 minutos  
**Actualizado:** 25 de Mayo, 2026

---

## 🎯 Conceptos Clave

### 1. Estado Reactivo en Zustand

```typescript
// ✅ CORRECTO: Variables en CartState
interface CartState {
  items: CartItem[]
  totalItems: number      // ← Variable, no getter
  totalPrice: number      // ← Variable, no getter
}

// ❌ INCORRECTO: Getters estáticos
interface CartState {
  get totalItems(): number { ... }  // No reactivo
}
```

**Uso en componentes:**
```typescript
const totalItems = useCartStore(state => state.totalItems)
const totalPrice = useCartStore(state => state.totalPrice)
// React re-renderiza automáticamente cuando cambian
```

---

### 2. Sincronización Triple

**Flujo `syncState()`:**
```
items mutation
    ↓
syncState(newItems)
    ├─ Calcula: totalItems, totalPrice
    ├─ localStorage.setItem('cart', ...)
    ├─ Firebase: setDoc(..., { merge: true })
    └─ Retorna: { totalItems, totalPrice }
    
    ↓
set({ items, totalItems, totalPrice })
    ├─ Zustand notifica subscribers
    ├─ React re-renders
    └─ UI actualiza
```

**Dónde usarla:**
```typescript
addItem, removeItem, updateQuantity, clearCart, setCart
```

---

### 3. Transacciones de Stock (CAPA 3)

**NUNCA usar `writeBatch` para stock:**
```typescript
// ❌ MALO - No valida antes de escribir
const batch = writeBatch(db)
for (const item of items) {
  batch.update(doc(db, 'products', item.id), {
    stock: increment(-item.quantity)  // Sobreventa posible!
  })
}
await batch.commit()
```

**SIEMPRE usar `runTransaction`:**
```typescript
// ✅ CORRECTO - Lee, valida, luego escribe
await runTransaction(db, async (transaction) => {
  // FASE 1: Leer
  const snapshots = await Promise.all(
    items.map(item => transaction.get(doc(db, 'products', item.id)))
  )
  
  // FASE 2: Validar
  for (let i = 0; i < items.length; i++) {
    if (snapshots[i].data().stock < items[i].quantity) {
      throw new Error(`Insuficiente stock para ${items[i].name}`)
    }
  }
  
  // FASE 3: Escribir (atómico)
  for (let i = 0; i < items.length; i++) {
    transaction.update(snapshots[i].ref, {
      stock: increment(-items[i].quantity)
    })
  }
})
```

---

### 4. Error Handling en Callbacks

**Mapbox, PayPal, APIs externas:**

```typescript
// ✅ CORRECTO
geocoder.current?.on('result', (e: any) => {
  try {
    const feature = e.result
    if (!feature?.center || feature.center.length !== 2) {
      throw new Error('Invalid coordinates')
    }
    // Procesamiento seguro
  } catch (err) {
    console.error('Geocoding error:', err)
  }
})
```

```typescript
// ❌ INCORRECTO
geocoder.current?.on('result', (e: any) => {
  const center = e.result.center  // Puede crash sin try/catch
  // ...
})
```

---

### 5. Cleanup en UseEffect

**SIEMPRE limpiar listeners y resources:**

```typescript
// ✅ CORRECTO
useEffect(() => {
  const handleEvent = () => { /* ... */ }
  element.addEventListener('event', handleEvent)
  
  return () => {
    try {
      element.removeEventListener('event', handleEvent)
      element = null
    } catch (e) {
      console.error('Cleanup error:', e)
    }
  }
}, [])  // Dependencies!
```

```typescript
// ❌ INCORRECTO - Memory leak!
useEffect(() => {
  element.addEventListener('event', () => { /* ... */ })
  // Sin cleanup → listener acumula cada re-render
}, [])
```

---

## 📋 Checklist: Agregar Nueva Funcionalidad

Si necesitas agregar algo al carrito:

- [ ] ¿Es mutación de items? → Usa `syncState()`
- [ ] ¿Modifica stock? → Usa `runTransaction`
- [ ] ¿Callback externo? → Envuelve en try/catch
- [ ] ¿UseEffect? → Incluye cleanup
- [ ] ¿Getter? → Conviértelo a variable de estado
- [ ] ¿Compila? → `npm run build` debe dar 0 errores
- [ ] ¿Se sincroniza? → Verifica localStorage + Firebase

---

## 🔧 Comandos Útiles

```bash
# Compilar y detectar errores
npm run build

# Desarrollo con HMR
npm run dev

# Build + Deploy a Firebase
npm run build && firebase deploy --only hosting

# Ver logs de Firebase
firebase functions:log

# Iniciar emulador local
firebase emulators:start
```

---

## 📁 Estructura de Carpetas Clave

```
src/
├── store/
│   ├── cartStore.ts         ← ✅ Getters convertidos a estado
│   ├── authStore.ts
│   └── uiStore.ts
├── services/
│   ├── stockService.ts      ← ✅ runTransaction (2 fases)
│   ├── cartManager.ts       ← Eventos personalizados
│   └── firebase.ts
├── pages/ecommerce/
│   └── Checkout.tsx         ← ✅ Integración CAPA 2+3
└── components/
    └── layout/
        └── Navbar.tsx       ← ✅ Selector reactivo directo
```

---

## 🎯 Patrón: Agregar Nuevo Campo a CartItem

```typescript
// 1. Actualizar interfaz
export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  images?: string[]
  // NUEVO CAMPO:
  discount?: number
}

// 2. Actualizar syncState si afecta totales
const syncState = async (items: CartItem[]) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  // NUEVO: aplicar descuentos
  const totalPrice = items.reduce((total, item) => {
    const itemPrice = item.price * item.quantity
    const itemDiscount = item.discount || 0
    return total + (itemPrice - itemDiscount)
  }, 0)
  // ... resto del sincronizado
}

// 3. Actualizar mutaciones si es necesario
addItem: async (item, qty = 1) => {
  // Si discount viene en item, se incluye automáticamente
  const newItems = [...current, {...item, discount: item.discount}]
  const { totalItems, totalPrice } = await syncState(newItems)
  set({ items: newItems, totalItems, totalPrice })
}
```

---

## 🐛 Debugging Común

### "Subtotal sigue siendo 0"
```
✓ Revisar que CartState tiene totalPrice: number
✓ Revisar que syncState() se llama en cada mutación
✓ Verificar que set({ ..., totalPrice }) se ejecuta
✓ Abrir DevTools → Redux tab → ver estado
```

### "Mapbox congela la app"
```
✓ Revisar que cleanup retorna() está en useEffect
✓ Verificar try/catch en event handlers
✓ Revisar que map.current.remove() se ejecuta
✓ Abrir DevTools → Performance tab → profila
```

### "Stock permite sobreventa"
```
✓ Revisar que usan runTransaction, no writeBatch
✓ Verificar FASE 1 valida antes de FASE 2
✓ Abrir Firebase Console → ver documentos
✓ Simular compra simultánea de 2+ usuarios
```

### "Counter no se actualiza"
```
✓ Revisar que useEffect en Navbar tiene [totalItems]
✓ Verificar que totalItems viene de useCartStore
✓ Revisar que syncState() calcula correctamente
✓ Limpiar caché: Ctrl+Shift+Delete
```

---

## 📊 Testing Manual (Checklist)

```
[ ] Agregar 1 producto → Counter = 1, subtotal correcto
[ ] Agregar 3 más del mismo → Counter = 4, subtotal = 4x
[ ] Cambiar cantidad a 2 → Counter = 2, subtotal actualiza
[ ] Quitar producto → Counter = 1, subtotal actualiza
[ ] Vaciar carrito → Counter desaparece, subtotal = 0
[ ] Cerrar sesión/volver → Carrito persiste (localStorage)
[ ] Ir a checkout → Mapbox funciona sin freeze
[ ] Buscar dirección → Auto-fill de Provincia/Ciudad
[ ] Pagar → Stock decrementa en Firebase
[ ] Pagar mismo producto 2x (usuarios distintos) → 1 éxito, 1 error
```

---

## 🚨 Red Flags (No Hagas Esto)

| ❌ Malo | ✅ Correcto |
|---------|-----------|
| `writeBatch` para stock | `runTransaction` con 2 fases |
| Getter para estado reactivo | Variable en CartState |
| Sin cleanup en useEffect | Cleanup completo con try/catch |
| `.querySelector()` ad-hoc | Selector Zustand + React render |
| Eventos sin try/catch | Try/catch envuelto |
| `localStorage` sin try | Manejo de errores |
| Mutación sin persistencia | `syncState()` unificado |

---

## 💡 Tips Profesionales

1. **Zustand Selectors Son Gratis**
   ```typescript
   const totalItems = useCartStore(state => state.totalItems)
   // No hay performance penalty, React optimiza
   ```

2. **Firebase Merge es Tu Amigo**
   ```typescript
   setDoc(docRef, { totalItems, totalPrice }, { merge: true })
   // No sobrescribe otros campos del documento
   ```

3. **Transaction Retry es Automático**
   ```typescript
   // Si 2 usuarios escriben al mismo tiempo, Firestore reintentar
   // No necesitas código manual de retry
   ```

4. **Error Handling Descriptivo**
   ```typescript
   // Throwable errors en transaction se propagan
   throw new Error(`Stock: solicitado ${qty}, disponible ${stock}`)
   // El usuario ve exactamente qué pasó
   ```

5. **Cleanup Triple en Mapbox**
   ```typescript
   // 1. Remove listeners (geocoder.off)
   // 2. Remove map handlers (map.off)
   // 3. Destruir instancia (map.remove)
   // Todo en try/catch
   ```

---

## 📞 Contacto & Escalado

Si encuentras un problema que no pueda solucionar:

1. **Revisar REFACTORIZACION_INTEGRAL_SENIOR.md** - Detalles técnicos
2. **Revisar RESUMEN_SENIOR_COMPLETADO.md** - Flujos completos
3. **Revisar test manual checklist** - Reproducir problema
4. **Abrir DevTools** - Redux, Network, Performance tabs

---

## 🏆 Mantén la Calidad

```
La refactorización estableció estándares:
- 0 TypeScript errors
- 100% sincronización (Zustand/localStorage/Firebase)
- Atomicidad garantizada en operaciones críticas
- Memory leaks prevenidos
- Errores descriptivos al usuario

Mantén estos estándares en futuras funcionalidades.
```

---

**Documento Control:**  
- Versión: 1.0  
- Última actualización: 2026-05-25  
- Autor: GitHub Copilot (Senior Refactor)  
- Status: ✅ LISTO PARA USAR
