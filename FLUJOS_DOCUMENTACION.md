# Groove Music Store - Documentación de Flujos de Aplicación

## 📊 Índice de Flujos

1. **Flujo de Autenticación** - Login, Registro, Recuperación
2. **Flujo de Verificación de Email** - Validación automática
3. **Flujo de Carrito de Compras** - Añadir, actualizar, persistencia
4. **Flujo de Checkout** - Pago y confirmación
5. **Flujo de Navegación General** - Estructura de páginas
6. **Flujo de Productos** - Búsqueda, categorías, detalles
7. **Flujo de Gestión de Sesión** - Autenticación y datos

---

## 1. 🔐 FLUJO DE AUTENTICACIÓN

```mermaid
graph TD
    A[Usuario Visita App] --> B{¿Autenticado?}
    B -->|No| C[Página Pública]
    B -->|Sí| D[Mostrar Datos Usuario]
    
    C --> E{Usuario elige...}
    E -->|Login| F["Ir a /login"]
    E -->|Registro| G["Ir a /login<br/>con modo registro"]
    E -->|Olvidó contraseña| H["Ir a /login<br/>con modo reset"]
    
    F --> F1["Validar email<br/>(formato)"]
    F1 --> F2["Validar contraseña<br/>(mín 12 caracteres)"]
    F2 --> F3["Consultar Firebase Auth"]
    F3 --> F4{¿Credenciales<br/>válidas?}
    F4 -->|Sí| F5["Redirigir a /"]
    F4 -->|No| F6["Mostrar error"]
    F6 --> F1
    
    G --> G1["Validar nombre<br/>(mín 3 caracteres)"]
    G1 --> G2["Validar email<br/>(no desechable)"]
    G2 --> G3{Email<br/>válido?}
    G3 -->|No| G4["Mostrar error<br/>dominio rechazado"]
    G4 --> G1
    G3 -->|Sí| G5["Validar contraseña<br/>(fuerza mín)"]
    G5 --> G6["Crear usuario Firebase"]
    G6 --> G7["Enviar email verificación"]
    G7 --> G8["Guardar en Firestore"]
    G8 --> G9["Redirigir a Home"]
    G9 --> G10["Mostrar banner<br/>email pendiente"]
    
    H --> H1["Validar email"]
    H1 --> H2{Email<br/>existe?}
    H2 -->|Sí| H3["Enviar reset link"]
    H3 --> H4["Mostrar confirmación"]
    H2 -->|No| H5["Mostrar error"]
    
    D --> D1["Mostrar opción<br/>Mi Cuenta"]
    D1 --> D2["Opción Logout"]
    D2 --> D3["Cerrar sesión Firebase"]
    D3 --> D4["Limpiar store auth"]
    D4 --> D5["Redirigir a /"]
```

---

## 2. ✉️ FLUJO DE VERIFICACIÓN DE EMAIL

```mermaid
graph TD
    A["Usuario registra cuenta"] --> B["Firebase envía email<br/>de verificación"]
    B --> C["Mostrar banner naranja<br/>en toda la app"]
    C --> D["App inicia polling<br/>cada 3 segundos"]
    
    D --> E{Usuario hace<br/>click en email?}
    E -->|Sí| F["Firebase verifica email"]
    F --> G["Polling detecta cambio"]
    G --> H["user.emailVerified = true"]
    H --> I["Banner desaparece<br/>automáticamente"]
    I --> J["Acceso completo<br/>al carrito/checkout"]
    
    E -->|No| K["Usuario en página"]
    K --> K1{¿Necesita<br/>reenviar?}
    K1 -->|Sí| K2["Click botón<br/>Reenviar"]
    K2 --> K3["sendEmailVerification()"]
    K3 --> K4["Toast: ✓ Enviado"]
    K4 --> D
    
    K1 -->|Navegar| K5["Puede usar app<br/>con restricciones"]
    K5 --> K6{¿Intenta<br/>checkout?}
    K6 -->|Sí| K7["Mostrar advertencia<br/>Verifica tu correo"]
    K7 --> K8["Link a /cuenta<br/>para reenviar"]
    K6 -->|No| K9["Continúa navegando"]
```

---

## 3. 🛒 FLUJO DE CARRITO DE COMPRAS

```mermaid
graph TD
    A["Usuario navegando"] --> B["Usuario abre ProductDetail"]
    B --> C{¿Autenticado?}
    C -->|No| C1["Redirigir a /login"]
    C -->|Sí| D["Mostrar producto<br/>+ botón Añadir"]
    
    D --> E["Usuario selecciona<br/>cantidad"]
    E --> F["Click: Añadir al carrito"]
    F --> F1["cartStore.addItem()"]
    F1 --> F2["Guardar en localStorage"]
    F2 --> F3["Emitir evento<br/>CART_UPDATED"]
    F3 --> F4["Navbar detecta evento"]
    F4 --> F5["Contador se actualiza<br/>en TIEMPO REAL"]
    F5 --> F6["Mostrar toast: ✓ Añadido"]
    
    F1 --> G{Usuario<br/>autenticado?}
    G -->|Sí| G1["pushToFirebase()"]
    G1 --> G2["Guardar en Firestore"]
    G -->|No| G3["Carrito local<br/>solamente"]
    
    H["Usuario abre /carrito"] --> H1["Cargar items del store"]
    H1 --> H2["Mostrar cada item<br/>con cantidad"]
    H2 --> H3{Usuario actualiza<br/>cantidad?}
    H3 -->|Sí| H4["updateQuantity()"]
    H4 --> F2
    
    H3 -->|Eliminar| H5["removeItem()"]
    H5 --> F2
    H5 --> F3
    
    H3 -->|Vaciar| H6["clearCart()"]
    H6 --> H7["Limpiar localStorage<br/>y Firestore"]
    H7 --> H8["Mostrar carrito vacío"]
    
    H2 --> I["Mostrar resumen<br/>Subtotal, Envío, Total"]
    I --> J["Calcular envío<br/>gratis si > $5000"]
    
    J --> K["Click: Proceder Pago"]
    K --> K1{¿Email<br/>verificado?}
    K1 -->|No| K2["Mostrar advertencia<br/>+ link a /cuenta"]
    K1 -->|Sí| K3["Redirigir a /checkout"]
```

---

## 4. 💳 FLUJO DE CHECKOUT Y PAGO

```mermaid
graph TD
    A["Usuario abre /checkout"] --> A1{¿Carrito<br/>vacío?}
    A1 -->|Sí| A2["Mostrar: No hay productos"]
    A2 --> A3["Link a /tienda"]
    
    A1 -->|No| B{¿Autenticado?}
    B -->|No| B1["Mostrar: Inicia sesión"]
    B -->|Sí| C["Mostrar PASO 1: Envío"]
    
    C --> C1["Validar campos:<br/>Nombre, Dirección, etc."]
    C1 --> C2{¿Datos<br/>válidos?}
    C2 -->|No| C3["Mostrar errores<br/>en campos"]
    C3 --> C1
    C2 -->|Sí| C4["Guardar datos envío"]
    C4 --> C5["Ir a PASO 2: Pago"]
    
    C5 --> D["Mostrar opciones:<br/>Tarjeta o PayPal"]
    D --> D1{Usuario<br/>elige...}
    
    D1 -->|Tarjeta| D2["Mostrar formulario<br/>Número, Fecha, CVC"]
    D2 --> D3["Validar tarjeta<br/>(16 dígitos, MM/AA)"]
    D3 --> D4{¿Datos<br/>válidos?}
    D4 -->|No| D5["Mostrar errores"]
    D5 --> D3
    D4 -->|Sí| D6["Ir a PASO 3"]
    
    D1 -->|PayPal| D7["Mostrar botón PayPal"]
    D7 --> D8["Usuario autoriza<br/>en PayPal"]
    D8 --> D9["PayPal retorna token"]
    D9 --> D6
    
    D6 --> E["Mostrar PASO 3: Confirmar"]
    E --> E1["Mostrar resumen completo:<br/>- Items<br/>- Datos envío<br/>- Método pago<br/>- Total"]
    E1 --> E2["Click: Confirmar Compra"]
    
    E2 --> E3{¿Email<br/>no verificado?}
    E3 -->|Sí| E4["Mostrar banner amarillo<br/>Recomendación verificar"]
    E4 --> E5{Usuario<br/>continúa?}
    E5 -->|No| E6["Ir a /cuenta"]
    E5 -->|Sí| E7["Procesar pago"]
    E3 -->|No| E7
    
    E7 --> E8["Llamar API pago<br/>procesarPayment()"]
    E8 --> E9{¿Pago<br/>aprobado?}
    E9 -->|No| E10["Mostrar: Pago rechazado"]
    E10 --> E11["Volver a paso 2"]
    E9 -->|Sí| E12["clearCart()"]
    E12 --> E13["Redirigir a<br/>order-confirmation"]
    E13 --> E14["Mostrar: ✓ Compra exitosa"]
```

---

## 5. 🗺️ FLUJO DE NAVEGACIÓN GENERAL

```mermaid
graph TD
    A["App carga"] --> A1["onAuthStateChanged()"]
    A1 --> A2{¿Usuario<br/>autenticado?}
    A2 -->|No| A3["authStore.isAuthenticated = false"]
    A2 -->|Sí| A4["authStore.isAuthenticated = true"]
    A4 --> A5["Cargar carrito de Firebase"]
    A5 --> A6["cartStore.setCart()"]
    
    A3 --> B["Renderizar Navbar"]
    B --> B1["Mostrar botón Login/Registro"]
    B1 --> B2["Mostrar carrito<br/>(vacío o con datos)"]
    B2 --> B3["Mostrar noticias<br/>y tienda públicos"]
    
    A4 --> C["Mostrar Navbar"]
    C --> C1["Mostrar botón Mi Cuenta"]
    C1 --> C2["Mostrar carrito<br/>personalizado"]
    
    D["Usuario navega"] --> D1{Destino?}
    D1 -->|/| E1["Home<br/>- Productos destacados<br/>- Newsletter<br/>- Noticias"]
    D1 -->|/tienda| E2["CategoryPage<br/>- Todos los productos<br/>- Filtros"]
    D1 -->|/tienda/:categoria| E3["CategoryPage<br/>- Categoría específica<br/>- Filtros"]
    D1 -->|/producto/:slug| E4["ProductDetail<br/>- Detalles producto<br/>- Opción añadir"]
    D1 -->|/noticias| E5["NewsHome<br/>- Artículos recientes<br/>- Búsqueda"]
    D1 -->|/noticias/:slug| E6["ArticleDetail<br/>- Artículo completo<br/>- Comentarios"]
    D1 -->|/carrito| E7["Cart<br/>- Items<br/>- Resumen<br/>- Proceder pago"]
    D1 -->|/checkout| E8["Checkout<br/>- 3 pasos<br/>- Pago"]
    D1 -->|/login| E9["Login<br/>- Iniciar sesión<br/>- Registro<br/>- Recuperar pwd"]
    D1 -->|/cuenta| E10["Account<br/>- Perfil usuario<br/>- Verificar email<br/>- Logout"]
    D1 -->|/admin| E11["AdminDashboard<br/>- Estadísticas<br/>- Gestión"]
    
    E1 --> F["EmailVerificationBanner<br/>muestra si email<br/>no verificado"]
    E2 --> F
    E3 --> F
    E4 --> F
    E7 --> F
    E8 --> F
```

---

## 6. 🔍 FLUJO DE PRODUCTOS Y BÚSQUEDA

```mermaid
graph TD
    A["Usuario en tienda"] --> B["Busca productos"]
    B --> B1{¿Cómo<br/>busca?}
    
    B1 -->|Categoría| B2["Click en navegación<br/>Música/Merch/etc"]
    B2 --> B3["URL: /tienda/:categoria"]
    B3 --> B4["Filtrar mockProducts<br/>por category"]
    B4 --> B5["Mostrar productos"]
    
    B1 -->|Buscador| B6["Escribir en search box<br/>navbar"]
    B6 --> B7["Auto-completar dropdown<br/>mostrando resultados"]
    B7 --> B8["Click en resultado"]
    B8 --> B9["Redirigir a<br/>ProductDetail"]
    
    B1 -->|Ordenar| B10["Usar select Sort"]
    B10 --> B11{Opción?}
    B11 -->|Destacados| B12["sort por isFeatured"]
    B11 -->|Novedades| B13["sort por releaseYear"]
    B11 -->|Precio ↓| B14["sort price ASC"]
    B11 -->|Precio ↑| B15["sort price DESC"]
    B11 -->|Rating| B16["sort avgRating DESC"]
    B12 --> B5
    B13 --> B5
    B14 --> B5
    B15 --> B5
    B16 --> B5
    
    B1 -->|Filtrar| B17["Usar panel filters<br/>Precio, Género, Rating"]
    B17 --> B18["Actualizar products array"]
    B18 --> B5
    
    B5 --> C["Mostrar grid<br/>con cards"]
    C --> C1["Cada card muestra:<br/>- Imagen<br/>- Nombre<br/>- Artista<br/>- Rating<br/>- Precio<br/>- Botón Añadir"]
    C1 --> C2{Usuario<br/>interactúa?}
    C2 -->|Click card| C3["Redirigir a<br/>ProductDetail"]
    C2 -->|Click Añadir| C4{¿Autenticado?}
    C4 -->|No| C5["Redirigir a /login"]
    C4 -->|Sí| C6["addToCart()"]
    C6 --> C7["Mostrar toast ✓"]
    C2 -->|Click favorito| C8{¿Autenticado?}
    C8 -->|No| C9["Redirigir a /login"]
    C8 -->|Sí| C10["Guardar favorito"]
    
    C3 --> D["Mostrar ProductDetail<br/>- Galería imágenes<br/>- Información completa<br/>- Reseñas<br/>- Productos relacionados<br/>- Selector cantidad"]
    D --> D1["Usuario selecciona qty"]
    D1 --> D2["Click Añadir Carrito"]
    D2 --> C6
```

---

## 7. 🔗 FLUJO DE GESTIÓN DE SESIÓN Y DATOS

```mermaid
graph TD
    A["App inicia"] --> A1["Firebase.initializeApp()"]
    A1 --> A2["onAuthStateChanged listener"]
    A2 --> A3{¿Usuario<br/>almacenado?}
    
    A3 -->|No| A4["currentUser = null"]
    A4 --> A5["authStore.isAuthenticated = false"]
    
    A3 -->|Sí| A6["currentUser = user"]
    A6 --> A7["authStore.isAuthenticated = true"]
    A7 --> A8["Cargar carrito Firebase<br/>doc(db, 'carts', uid)"]
    A8 --> A9{¿Carrito<br/>existe?}
    A9 -->|No| A10["cartStore.items = []"]
    A9 -->|Sí| A11["cartStore.setCart(items)"]
    
    A11 --> B["Iniciar polling<br/>email verification<br/>cada 3s"]
    B --> B1{user.emailVerified?}
    B1 -->|true| B2["user.reload()"]
    B2 --> B3["Actualizar store auth"]
    B3 --> B4["Banner desaparece"]
    B1 -->|false| B5["Seguir escaneando"]
    
    C["Usuario agrega producto"] --> C1["addItem()"]
    C1 --> C2["Actualizar cartStore"]
    C2 --> C3{¿Usuario<br/>autenticado?}
    C3 -->|Sí| C4["pushToFirebase()"]
    C4 --> C5["Actualizar Firestore<br/>en tiempo real"]
    C3 -->|No| C6["Solo localStorage"]
    C2 --> C7["Emitir CustomEvent"]
    C7 --> C8["Navbar detecta evento"]
    C8 --> C9["Actualizar contador"]
    
    D["Usuario cierra sesión"] --> D1["logout()"]
    D1 --> D2["auth.signOut()"]
    D2 --> D3["authStore.logout()"]
    D3 --> D4["currentUser = null"]
    D4 --> D5["Redirigir a /"]
    D5 --> D6["cartStore se vacía"]
    
    E["Usuario cierra app"] --> E1["localStorage persiste<br/>carrito local"]
    E1 --> E2["sessionStorage marca<br/>sesión activa"]
    E2 --> E3["Usuario regresa<br/>mismo día"]
    E3 --> E4["initializeCart()"]
    E4 --> E5["Recupera carrito<br/>de localStorage"]
    
    F["Usuario abre<br/>nueva pestaña<br/>nueva sesión"] --> F1["sessionStorage = {}"]
    F1 --> F2["initializeCart()"]
    F2 --> F3["localStorage se limpia"]
    F3 --> F4["cartStore = []"]
```

---

## 🎯 RESUMEN DE RUTAS

| Ruta | Componente | Público | Requiere Auth | Descripción |
|------|-----------|---------|---------------|-------------|
| `/` | Home | ✅ | ❌ | Página de inicio |
| `/tienda` | CategoryPage | ✅ | ❌ | Todos los productos |
| `/tienda/:categoria` | CategoryPage | ✅ | ❌ | Productos por categoría |
| `/producto/:slug` | ProductDetail | ✅ | ❌ | Detalles del producto |
| `/carrito` | Cart | ✅ | ❌ | Carrito de compras |
| `/checkout` | Checkout | ❌ | ✅ | Proceso de compra |
| `/noticias` | NewsHome | ✅ | ❌ | Lista de noticias |
| `/noticias/:slug` | ArticleDetail | ✅ | ❌ | Artículo completo |
| `/login` | Login | ✅ | ❌ | Login/Registro/Recovery |
| `/registro` | Login | ✅ | ❌ | Alias para registro |
| `/cuenta` | Account | ❌ | ✅ | Perfil del usuario |
| `/admin` | AdminDashboard | ❌ | ✅ | Panel administrador |

---

## 📱 RESPONSIVIDAD

- **Desktop**: Todos los elementos visibles, menú horizontal
- **Tablet**: Menú parcial, sidebar colapsable
- **Móvil**: Menú hamburguesa, diseño responsive

---

## ⚙️ CONFIGURACIÓN CRÍTICA

### Firebase Auth
- Email/Contraseña habilitado
- Verificación de email requerida (pero no bloquea acceso)
- Reset password implementado

### Firestore
- Colección `users` - Datos de usuario
- Colección `carts` - Carrito persistente por UID
- Colección `products` - Catálogo (mock en client)

### Estado Global (Zustand)
- `authStore` - Usuario actual, autenticación
- `cartStore` - Items, total, operaciones CRUD
- `uiStore` - Estado UI (modal, sidebar, etc.)

### Eventos (CustomEvents)
- `cart:itemAdded` - Producto añadido
- `cart:itemRemoved` - Producto removido
- `cart:updated` - Cualquier cambio carrito

---

Última actualización: **Mayo 23, 2026**
