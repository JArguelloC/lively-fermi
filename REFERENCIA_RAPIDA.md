# 🎵 GROOVE MUSIC STORE - REFERENCIA RÁPIDA DE FLUJOS

## 📋 Índice de Documentos

### 📄 FLUJOS_DOCUMENTACION.md
- **Contenido:** Documentación textual detallada de todos los flujos
- **Para:** Lectura en profundidad, entender cada paso
- **Diagrams:** 7 diagramas Mermaid con detalles completos
  - 🔐 Flujo Autenticación
  - ✉️ Flujo Email Verification
  - 🛒 Flujo Carrito
  - 💳 Flujo Checkout
  - 🗺️ Flujo Navegación
  - 🔍 Flujo Productos
  - 🔗 Flujo Gestión de Sesión

### 🎨 FLUJOS_VISUALES.md
- **Contenido:** Diagramas visuales y arquitectura
- **Para:** Entender relaciones, arquitectura, decisiones
- **Diagrams:** 9 diagramas Mermaid visuales
  - 🏗️ Arquitectura General
  - 🎯 Flujo Crítico Usuario Nuevo → Compra
  - 📊 Diagrama de Decisiones Auth
  - 🛒 Diagrama de Interacción Carrito
  - ✉️ Polling Email Verification
  - 🔄 Ciclo de Vida Sesión
  - 🎨 Componentes y Relaciones
  - 📈 Flujo de Datos Carrito Reactivo
  - 🔐 Capas de Seguridad

---

## 🎯 CÓMO USAR ESTA DOCUMENTACIÓN

### ¿Necesitas validar la navegación?
→ Abre **FLUJOS_DOCUMENTACION.md**
→ Ve a la sección **"5. 🗺️ FLUJO DE NAVEGACIÓN GENERAL"**
→ Verifica que todas las rutas sean correctas

### ¿Necesitas entender la arquitectura?
→ Abre **FLUJOS_VISUALES.md**
→ Ve a **"🏗️ ARQUITECTURA GENERAL DEL SISTEMA"**
→ Ve a **"🎨 COMPONENTES PRINCIPALES Y RELACIONES"**

### ¿Problema con el carrito?
→ Abre **FLUJOS_DOCUMENTACION.md**
→ Ve a **"3. 🛒 FLUJO DE CARRITO DE COMPRAS"**
→ Verifica localStorage, cartStore, eventos, Firebase

### ¿Problema con email verification?
→ Abre **FLUJOS_VISUALES.md**
→ Ve a **"✉️ POLLING DE EMAIL VERIFICATION"**
→ Verifica polling cada 3 segundos, reload(), setUser()

### ¿Quieres ver flujo completo usuario nuevo?
→ Abre **FLUJOS_VISUALES.md**
→ Ve a **"🎯 FLUJO CRÍTICO: USUARIO NUEVO → COMPRA"**
→ Sequence diagram paso a paso

### ¿Necesitas entender decisiones en auth?
→ Abre **FLUJOS_VISUALES.md**
→ Ve a **"📊 DIAGRAMA DE DECISIONES: FLUJO AUTENTICACIÓN"**
→ Flowchart con todas las validaciones

---

## 🚀 RUTAS PRINCIPALES

```
Home              /
Tienda            /tienda
Categoría         /tienda/:categoria  (musica, merch, instrumentos, ofertas)
Producto          /producto/:slug
Carrito           /carrito
Checkout          /checkout
Noticias          /noticias
Artículo          /noticias/:slug
Login/Registro    /login, /registro
Mi Cuenta         /cuenta
Admin             /admin
```

---

## 🔑 COMPONENTES CRÍTICOS

### Estado Global (Zustand)
```typescript
authStore        // currentUser, isAuthenticated, isLoading
cartStore        // items, addItem, removeItem, updateQuantity, clearCart
uiStore          // Estados UI generales
```

### Servicios
```typescript
firebase.ts              // Inicialización Firebase
auth.service.ts          // signIn, signUp, signOut, resetPassword
cartManager.ts           // initializeCart, persistCart, onCartChange
emailValidator.ts        // validateEmailDomain (frontend)
```

### Componentes Especiales
```typescript
Navbar.tsx               // Navegación + contador carrito reactivo
EmailVerificationBanner  // Banner orange si email no verificado
App.tsx                  // Polling email cada 3s + onAuthStateChanged
```

---

## 🧪 TESTING MANUAL

### Test 1: Primera Visita (Carrito Fantasma)
```
1. Incognito/Nueva pestaña
2. NO loguearse
3. Ir a /tienda
4. Añadir producto
5. Verificar: Carrito solo tiene ese producto
6. Recarga página
7. Verificar: Carrito persiste en localStorage
8. Abre nueva pestaña (nueva sesión)
9. Verificar: Carrito vacío (nueva sesión)
```

### Test 2: Contador Reactivo
```
1. Ir a /producto/slug-producto
2. Click "Añadir al Carrito"
3. Observar: Contador en Navbar actualiza sin recargar
4. Abrir DevTools → Network
5. Verificar: NO hay reload, solo CustomEvent
```

### Test 3: Email Verification
```
1. Registrarse con email real
2. Observar: Banner naranja aparece
3. NO hacer click email aún
4. Ir a /cuenta
5. Click "Reenviar Email"
6. Esperar 3 segundos
7. Recibir segundo email
8. Click link en email
9. Observar: Banner desaparece automáticamente (polling)
```

### Test 4: Checkout sin Email Verificado
```
1. Registrar sin verificar email
2. Agregar productos
3. Ir a /checkout
4. Mostrar advertencia (no bloquea)
5. Mostrar link a /cuenta
6. Click link
7. Reenviar email
8. Verificar email
9. Volver a /checkout
10. Banner desaparece
```

### Test 5: Persistencia Firebase
```
1. Loguearse
2. Agregar producto A
3. DevTools → Firestore
4. Verificar: doc(carts/{uid}) tiene items
5. Recarga página
6. Verificar: Carrito carga desde Firebase
7. Agregar producto B
8. Verificar: Firebase actualiza en tiempo real
```

---

## ⚠️ PUNTOS CRÍTICOS A VERIFICAR

- [ ] sessionStorage marca sesión activa
- [ ] localStorage limpia en nueva sesión
- [ ] CustomEvents se emiten en addItem/removeItem
- [ ] Navbar escucha CustomEvents (sin props)
- [ ] Polling email cada 3 segundos en App.tsx
- [ ] Firebase sync solo para usuarios autenticados
- [ ] Redirecciones correctas post-login
- [ ] Banner email desaparece cuando emailVerified=true
- [ ] Botón reenviar email en /cuenta y banner
- [ ] Carrito persiste sin usuario logueado

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile:    < 768px    (md)
Tablet:    768px      (lg)
Desktop:   1024px     (xl)
Large:     1280px     (2xl)
```

---

## 🔗 INTEGRACIONES EXTERNAS

### Firebase
- **Authentication:** Email/Password, verificación, reset
- **Firestore:** users, carts (colecciones)
- **Storage:** (configurado pero no usado)

### PayPal
- **Script Provider:** En App.tsx
- **Buttons Component:** En Checkout.tsx
- **Test Mode:** clientId="test"

### Librerías Clave
- **React Router:** v6 (lazy loading)
- **Zustand:** v5 (state management)
- **Tailwind CSS:** v3.4 (styling)
- **Framer Motion:** v11 (animaciones)
- **Lucide React:** v0.460 (iconos)
- **zxcvbn:** v4.4.2 (password strength)

---

## 📊 ESTADÍSTICAS

| Métrica | Valor |
|---------|-------|
| Rutas | 12 |
| Componentes | 30+ |
| Stores Zustand | 3 |
| CustomEvents | 5 |
| Firestore Collections | 3 |
| LocalStorage Keys | 2 |
| SessionStorage Keys | 1 |
| Email Validations | 2 |

---

## 🎯 PRÓXIMAS MEJORAS (ROADMAP)

- [ ] Fragmentación de código (code splitting)
- [ ] Lazy loading imágenes
- [ ] Service Worker (PWA)
- [ ] Wishlist/Favoritos
- [ ] Reviews y ratings
- [ ] Sistema de cupones activo
- [ ] Historial de órdenes
- [ ] Notificaciones push
- [ ] Analytics (Google Analytics)
- [ ] Multi-idioma (i18n)

---

## 🆘 TROUBLESHOOTING RÁPIDO

### Carrito vacío después de recargar
```
1. Verificar: localStorage → DevTools → Application
2. Verificar: sessionStorage tiene 'cart_session_initialized'
3. Si no: Nueva sesión, carrito limpiado (correcto)
4. Si sí: cartStore no carga de localStorage
5. Revisar: initializeCart() en cartStore.ts
```

### Contador no se actualiza
```
1. Verificar: CustomEvent se emite en addItem()
2. Verificar: Navbar tiene listener onCartChange
3. Verificar: DOM tiene selector [data-cart-counter]
4. Revisar: DevTools → Console, buscar errores
5. Si error: Verificar imports de cartManager
```

### Email no se verifica
```
1. Verificar: Firebase Auth tiene verificación habilitada
2. Verificar: Email llegó (revisar spam)
3. Verificar: Polling activo en App.tsx
4. Verificar: user.reload() se ejecuta
5. Si no: Verificar onAuthStateChanged en App.tsx
```

### Firebase no sincroniza carrito
```
1. Verificar: Usuario autenticado (auth.currentUser)
2. Verificar: Firestore rules permiten escritura
3. Verificar: doc(db, 'carts', user.uid) existe
4. Revisar: pushToFirebase() en cartStore
5. DevTools → Firestore → carts collection
```

---

## 📞 CONTACTO / SOPORTE

**Repositorio:** Antigravity  
**Proyecto:** Lively Fermi  
**Deploy:** https://groove-d9207.web.app  
**Firebase Project:** groove-d9207  

---

**Última actualización:** Mayo 23, 2026  
**Estado:** ✅ Producción en vivo  
**Versión:** 1.0.0  
