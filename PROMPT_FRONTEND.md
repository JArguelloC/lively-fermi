# PROMPT PARA NETLIFY - FRONTEND GROOVE

Necesito construir un frontend de e-commerce llamado "Groove" (tienda de música/licores) 
con la siguiente arquitectura:

## ESPECIFICACIONES TÉCNICAS

**Stack**: React 18 + TypeScript + Vite + Tailwind CSS
**Routing**: React Router v6
**State Management**: Zustand (para carrito, autenticación, UI)
**Animations**: Framer Motion
**Maps**: Mapbox GL (geocodificación para Ecuador)
**Pagos**: PayPal (@paypal/react-paypal-js)
**Utilidades**: date-fns, lucide-react

## ESTRUCTURA DE CARPETAS

```
src/
├── components/
│   ├── auth/              (Login, Register, ProtectedRoute)
│   ├── ecommerce/         (ProductCard, ProductGrid, Filter)
│   ├── layout/            (Header, Footer, Navbar, SEOMeta)
│   ├── news/              (NewsCard, NewsGrid)
│   └── ui/                (Button, Modal, Loading, Toast)
├── pages/
│   ├── Home.tsx
│   ├── auth/
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── ecommerce/
│   │   ├── ProductDetail.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── Cart.tsx
│   │   └── Checkout.tsx
│   ├── news/
│   │   ├── NewsHome.tsx
│   │   └── ArticleDetail.tsx
│   ├── support/
│   │   ├── Contacto.tsx
│   │   └── EnviosDevoluciones.tsx
│   ├── Account.tsx
│   └── OrderConfirmation.tsx
├── services/
│   ├── api.service.ts     (fetch wrapper para backend)
│   ├── auth.service.ts    (login, register, JWT)
│   └── cart.service.ts    (sincronizar con backend)
├── store/
│   ├── authStore.ts       (usuario, token JWT)
│   ├── cartStore.ts       (items, totalPrice, totalItems)
│   ├── uiStore.ts         (modal, loading, notifications)
│   └── favoritesStore.ts  (favoritos del usuario)
├── types/
│   ├── product.types.ts
│   ├── order.types.ts
│   ├── user.types.ts
│   └── news.types.ts
├── utils/
│   ├── formatPrice.ts
│   ├── formatDate.ts
│   ├── slugify.ts
│   └── validators.ts      (email, contraseña, etc)
├── App.tsx
└── main.tsx
```

## FUNCIONALIDADES PRINCIPALES

### 1. AUTENTICACIÓN
- Login / Register con JWT
- Almacenar token + usuario en localStorage y Zustand
- Proteger rutas (ProtectedRoute wrapper)
- Logout y limpiar estados

### 2. PERFIL DE USUARIO
- Ver/editar perfil (nombre, foto)
- Gestionar direcciones (crear, editar, eliminar, predeterminada)
- Preferencias (tema, moneda, suscripción newsletter, géneros favoritos)
- Historial de pedidos con estados

### 3. ECOMMERCE
- Listar productos (GET /api/v1/productos con filtros)
  - Filtrar por categoría, subcategoria, precio
  - Ordenar por precio, rating, nuevo
  - Paginación
- Detalle de producto:
  - Mostrar todas las variantes (talla, color, formato)
  - Seleccionar variante antes de agregar al carrito
  - Rating y reseñas
- Agregar/quitar del carrito:
  - Validar stock de la variante seleccionada
  - Si existe artículo con mismo id_variante, sumar cantidad
  - Mostrar error si no hay stock
- Carrito persistente (localStorage + sincronizar con backend)
- Favoritos (agregar/remover productos a lista de favoritos)

### 4. CHECKOUT
- Seleccionar dirección o crear nueva:
  - Validación con Mapbox (restringir a Ecuador)
  - Guardar dirección para próximas compras
  - Marcar como predeterminada
- Resumen de orden:
  - Subtotal de articulos
  - Cálculo de envío ($5.99 si ≤$50, gratis si >$50)
  - Impuesto (si aplica)
  - Total
- Método de pago (tarjeta, transferencia, efectivo)
- Integración PayPal para pagos con tarjeta
- Confirmación de orden con número de pedido

### 5. CARRITO
- Listar articulos con imagen, nombre, artista, precio
- Incrementar/decrementar cantidad
- Remover item
- Mostrar subtotal y total (con envío)
- Vaciar carrito
- Ir a checkout

### 6. NOTICIAS (Artículos)
- Listar artículos publicados con paginación
- Filtrar por categoría
- Mostrar extracto, fecha, autor
- Ver detalle completo del artículo
  - Contenido (markdown o HTML)
  - Etiquetas
  - Autor y fecha de publicación
  - Contador de vistas
  - Comentarios (si usuario autenticado, mostrar form para agregar)
- Crear artículo (solo usuarios editor/admin)

### 7. COMENTARIOS
- Listar comentarios del artículo
- Agregar comentario (solo autenticados)
- Editar propio comentario
- Eliminar propio comentario

### 8. RESPONSIVE
- Mobile-first (primero diseñar para móvil)
- Breakpoints: 640px, 1024px, 1280px

## COMPONENTES CRÍTICOS

### App.tsx: Rutas principales
- Home `/`
- Explorar `/productos` (listado con filtros)
- Categoría `/categoria/:slug`
- Detalle `/producto/:slug`
- Favoritos `/favoritos` (requiere autenticación)
- Carrito `/carrito`
- Checkout `/checkout` (requiere autenticación)
- Noticias `/noticias`
- Artículo `/noticias/:slug`
- Mi Cuenta `/cuenta` (requiere autenticación)
- Mis Pedidos `/pedidos` (requiere autenticación)
- Crear Artículo `/articulos/crear` (requiere ser editor/admin)
- Login `/login`
- Register `/registro`

### SEOMeta Component
- Generar metas dinámicas (title, description, og:image, og:url)
- Usar react-helmet-async
- Aplicar a todas las páginas principales

### ProductDetail.tsx
- Mostrar todas las variantes (selectable)
- Stock disponible por variante
- Botón "Agregar al carrito" con validación
- Botón "Agregar a favoritos"
- Rating y comentarios de otros usuarios

### Checkout.tsx
- Paso 1: Seleccionar/crear dirección de envío
- Paso 2: Resumen de orden y método de pago
- Paso 3: Pago con PayPal o método seleccionado
- Paso 4: Confirmación con número de pedido
- Cálculo automático de envío según subtotal

### CartStore.ts (Zustand)
- `articulos: ArticuloCarrito[]`
- `totalArticulos: number`
- `precioTotal: number`
- `costoEnvio: number` (calculado automático)
- `addItem(articulo)` - validar stock
- `removeItem(articuloId)`
- `updateQuantity(articuloId, cantidad)` - validar stock
- `clearCart()`
- `syncState()` - calcular totales y guardar en backend

### AuthStore.ts (Zustand)
- `usuario: Usuario | null`
- `token: string | null`
- `login(correo, password)`
- `register(correo, nombre, password)`
- `logout()`
- `updatePerfil(usuario)`

### API Service (api.service.ts)
- Wrapper de fetch con JWT en headers
- Manejo de errores centralizado
- Retry logic para fallos de red
- Base URL desde .env

### DireccionesManager Component
- Listar direcciones del usuario
- Agregar nueva dirección (form con Mapbox)
- Editar dirección existente
- Marcar como predeterminada
- Eliminar dirección

## VARIABLES DE ENTORNO (.env)

```
VITE_API_URL=https://tu-backend.netlify.app/api/v1
VITE_PAYPAL_CLIENT_ID=xxxxx
VITE_MAPBOX_TOKEN=xxxxx
VITE_APP_NAME=Groove
```

## TIPOS DE DATOS (TypeScript)

```typescript
// types/user.types.ts
export interface Usuario {
  id: string;
  correo: string;
  nombreVisible: string;
  fotoUrl?: string;
  rol: 'cliente' | 'editor' | 'admin';
  creadoEn: Date;
}

export interface DireccionUsuario {
  id: string;
  nombreCompleto: string;
  linea1: string;
  linea2?: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
  pais: string;
  esPredeterminada: boolean;
}

// types/product.types.ts
export interface Producto {
  id: string;
  slug: string;
  titulo: string;
  descripcion?: string;
  categoria: string;
  subcategoria?: string;
  artista?: string;
  sello?: string;
  precioBase: number;
  promedioRating?: number;
  totalResenas: number;
  imagenes: string[];
  activo: boolean;
  destacado: boolean;
  variantes: VarianteProducto[];
}

export interface VarianteProducto {
  id: string;
  nombre: string;
  sku: string;
  precio: number;
  stock: number;
  talla?: string;
  color?: string;
  formato?: string; // 'vinilo', 'CD', 'digital'
}

export interface ProductoFavorito {
  id: string;
  idProducto: string;
  agregadoEn: Date;
}

// types/cart.types.ts
export interface ArticuloCarrito {
  id: string;
  idProducto: string;
  idVariante: string;
  nombre: string;
  precio: number;
  cantidad: number;
  imagenUrl?: string;
  artista?: string;
  slug: string;
}

export interface Carrito {
  idUsuario: string;
  totalArticulos: number;
  precioTotal: number;
  articulos: ArticuloCarrito[];
}

// types/order.types.ts
export interface Pedido {
  id: string;
  idUsuario: string;
  estado: 'pendiente' | 'pagado' | 'enviado' | 'entregado' | 'cancelado';
  subtotal: number;
  impuesto: number;
  costoEnvio: number;
  total: number;
  envioNombre: string;
  envioLinea1: string;
  envioLinea2?: string;
  envioCiudad: string;
  envioEstado: string;
  envioCodigoPostal: string;
  envioPais: string;
  metodoPago: 'tarjeta' | 'transferencia' | 'efectivo';
  creadoEn: Date;
  articulos: ArticuloPedido[];
}

export interface ArticuloPedido {
  id: string;
  idProducto: string;
  titulo: string;
  sku: string;
  precio: number;
  cantidad: number;
  imagenUrl?: string;
}

// types/news.types.ts
export interface Articulo {
  id: string;
  slug: string;
  titulo: string;
  extracto?: string;
  contenido: string;
  idAutor: string;
  categoria: string;
  etiquetas: string[];
  imagenPortada?: string;
  estado: 'borrador' | 'publicado' | 'archivado';
  publicadoEn?: Date;
  creadoEn: Date;
  vistas: number;
}

export interface Comentario {
  id: string;
  idArticulo: string;
  idUsuario: string;
  contenido: string;
  creadoEn: Date;
  editado: boolean;
}
```

## BUILD Y DEPLOYMENT

- **Build**: `npm run build` → dist/
- **Preview**: `npm run preview`
- **Lint**: `npm run lint` (TypeScript + ESLint)
- **Deployment**: Conectado a GitHub, auto-build en push

## PACKAGE.JSON

```json
{
  "name": "groove-ecommerce",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.1",
    "@paypal/react-paypal-js": "^7.8.0",
    "mapbox-gl": "^2.15.0",
    "@mapbox/mapbox-gl-geocoder": "^5.0.1",
    "framer-motion": "^10.16.16",
    "zustand": "^4.4.1",
    "lucide-react": "^0.309.0",
    "tailwindcss": "^3.4.1",
    "date-fns": "^4.3.0"
  }
}
```

## INSTRUCCIONES FINALES

Por favor, construye este frontend con TypeScript completo, tipado, sin errores, 
y haz deploy en Netlify.
