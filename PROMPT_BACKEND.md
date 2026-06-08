# PROMPT PARA NETLIFY - BACKEND GROOVE

Necesito construir un API REST idéntico a un proyecto de e-commerce llamado "Groove" 
que está actualmente desplegado pero necesita ser reconstruido con la siguiente stack:

## ESPECIFICACIONES TÉCNICAS

**Stack**: Node.js 24.x + Express + Prisma ORM + PostgreSQL (Neon)
**Base de datos**: Neon (ya conectada, DATABASE_URL listo)
**Seguridad**: CORS, Helmet, Rate Limiting (200 req/15min)
**Autenticación**: JWT (jsonwebtoken)
**Validación**: Contraseñas con bcryptjs

## MODELOS PRINCIPALES (Base de datos Neon - PostgreSQL)

### Enums
- `rol_usuario`: 'cliente', 'editor', 'admin'
- `estado_pedido`: 'pendiente', 'pagado', 'enviado', 'entregado', 'cancelado'
- `estado_articulo`: 'borrador', 'publicado', 'archivado'
- `metodo_pago`: 'tarjeta', 'transferencia', 'efectivo'

### Tablas

1. **usuario** (id UUID, correo UNIQUE, nombre_visible, foto_url, rol, creado_en, ultimo_acceso_en, id_cliente_stripe)

2. **direccion_usuario** (id UUID, id_usuario FK, nombre_completo, linea1, linea2, ciudad, estado, codigo_postal, pais, es_predeterminada)

3. **preferencia_usuario** (id_usuario PK FK, suscrito_newsletter, tema, moneda, generos_favoritos TEXT[])

4. **producto** (id UUID, slug UNIQUE, titulo, descripcion, categoria, subcategoria, artista, sello, fecha_lanzamiento, precio_base, promedio_rating, total_resenas, imagenes TEXT[], activo, destacado, creado_en, actualizado_en)

5. **variante_producto** (id UUID, id_producto FK, nombre, sku UNIQUE, precio, stock, talla, color, formato)

6. **usuario_producto_favorito** (id_usuario FK, id_producto FK, agregado_en) - Relación M:N

7. **carrito** (id_usuario PK FK, total_articulos, precio_total, actualizado_en)

8. **articulo_carrito** (id UUID, id_usuario FK, id_producto FK, id_variante FK, nombre, precio, cantidad, imagen_url, artista, slug)

9. **pedido** (id UUID, id_usuario FK, estado, subtotal, impuesto, costo_envio, total, envio_nombre, envio_linea1, envio_linea2, envio_ciudad, envio_estado, envio_codigo_postal, envio_pais, metodo_pago, id_intento_pago, creado_en, actualizado_en)

10. **articulo_pedido** (id UUID, id_pedido FK, id_producto FK, id_variante FK, titulo, sku, precio, cantidad, imagen_url)

11. **articulo** (id UUID, slug UNIQUE, titulo, extracto, contenido, id_autor FK, categoria, etiquetas TEXT[], imagen_portada, estado, publicado_en, creado_en, actualizado_en, vistas)

12. **comentario** (id UUID, id_articulo FK, id_usuario FK, contenido, creado_en, actualizado_en, editado)

## RUTAS API REQUERIDAS

### AUTH
- POST /api/v1/auth/register → Crear usuario (correo, nombre_visible, contraseña)
- POST /api/v1/auth/login → Retornar JWT + usuario
- GET /api/v1/auth/me → Verificar usuario autenticado (requiere JWT)
- POST /api/v1/auth/logout

### USUARIOS
- GET /api/v1/usuarios/:id → Obtener datos de usuario
- PUT /api/v1/usuarios/:id → Actualizar perfil
- GET /api/v1/usuarios/:id/direcciones → Listar direcciones del usuario
- POST /api/v1/usuarios/:id/direcciones → Crear dirección
- PUT /api/v1/usuarios/:id/direcciones/:direccionId → Actualizar dirección
- DELETE /api/v1/usuarios/:id/direcciones/:direccionId → Eliminar dirección
- GET /api/v1/usuarios/:id/preferencias → Obtener preferencias
- PUT /api/v1/usuarios/:id/preferencias → Actualizar preferencias
- GET /api/v1/usuarios/:id/favoritos → Listar productos favoritos
- POST /api/v1/usuarios/:id/favoritos/:productoId → Agregar favorito
- DELETE /api/v1/usuarios/:id/favoritos/:productoId → Remover favorito

### PRODUCTOS
- GET /api/v1/productos → Listar (filtros: categoria, subcategoria, precio_min, precio_max, ordenar, pagina)
- GET /api/v1/productos/:id → Detalle de producto
- GET /api/v1/productos/:id/variantes → Listar variantes de producto
- GET /api/v1/productos/slug/:slug → Obtener por slug
- GET /api/v1/categorias → Listar categorías disponibles

### CARRITO (requiere autenticación)
- GET /api/v1/carrito → Obtener carrito del usuario
- POST /api/v1/carrito/articulos → Agregar artículo al carrito (validar stock)
- PUT /api/v1/carrito/articulos/:articuloId → Actualizar cantidad
- DELETE /api/v1/carrito/articulos/:articuloId → Remover artículo
- DELETE /api/v1/carrito → Vaciar carrito
- POST /api/v1/carrito/validar → Validar stock antes de checkout

### PEDIDOS (requiere autenticación)
- POST /api/v1/pedidos → Crear pedido (decrementar stock, crear articulos_pedido)
- GET /api/v1/pedidos → Historial de pedidos del usuario
- GET /api/v1/pedidos/:id → Detalle de pedido
- PUT /api/v1/pedidos/:id → Actualizar estado (admin)

### PAGOS
- POST /api/v1/pagos/procesar → Procesar pago (tarjeta, transferencia, etc)
- GET /api/v1/pagos/intento/:intentoId → Verificar estado de pago

### NOTICIAS (artículos)
- GET /api/v1/articulos → Listar (publicados, con paginación)
- GET /api/v1/articulos/:id → Detalle de artículo
- GET /api/v1/articulos/slug/:slug → Obtener por slug
- POST /api/v1/articulos → Crear (requiere autenticación, rol editor/admin)
- PUT /api/v1/articulos/:id → Actualizar (requiere ser autor o admin)
- DELETE /api/v1/articulos/:id → Eliminar (requiere ser autor o admin)

### COMENTARIOS
- GET /api/v1/articulos/:id/comentarios → Listar comentarios
- POST /api/v1/articulos/:id/comentarios → Agregar comentario (requiere autenticación)
- PUT /api/v1/comentarios/:comentarioId → Actualizar comentario (requiere ser autor)
- DELETE /api/v1/comentarios/:comentarioId → Eliminar comentario (requiere ser autor o admin)

## LÓGICA CRÍTICA

### 1. Validación de Stock (3 capas)
- **Capa 1**: Verificar `variante_producto.stock` al agregar al `articulo_carrito`
- **Capa 2**: Validar cantidad total (suma de todos los articulos_carrito) antes de procesar pago
- **Capa 3**: Decrementar stock atómicamente en transacción PostgreSQL después de pago exitoso

### 2. Carrito
- Validar cantidad TOTAL = cantidad existente en articulos_carrito + cantidad nueva
- Si existe artículo_carrito con mismo id_variante, sumar cantidades
- Actualizar carrito.total_articulos y carrito.precio_total
- Usar ON CASCADE DELETE para mantener integridad

### 3. Envío
- Si subtotal > $50 USD → costo_envio = 0 (gratis)
- Si subtotal ≤ $50 USD → costo_envio = $5.99
- Guardar en pedido.costo_envio

### 4. Pedido (Creación)
1. Crear registro en `pedido` (estado='pendiente')
2. Iterar articulos_carrito y crear registros en `articulo_pedido` (snapshot de datos)
3. Copiar dirección a campos `envio_*` en pedido (desnormalización)
4. Después de pago exitoso:
   - Actualizar pedido.estado = 'pagado'
   - Decrementar variante_producto.stock (transacción)
   - Limpiar articulos_carrito para ese usuario
5. Si pago falla: pedido permanece en 'pendiente' o se cancela

### 5. Favoritos
- Relación M:N en `usuario_producto_favorito`
- Timestamps para ordenar por recientes
- ON CASCADE DELETE

### 6. Artículos (Noticias)
- Estado: 'borrador', 'publicado', 'archivado'
- Solo listar en frontend si estado='publicado'
- id_autor vinculado a usuario (no guardar nombre, es dependencia transitiva)
- Etiquetas y categoría para búsqueda/filtrado
- vistas contador para estadísticas

### 7. Comentarios
- Vinculados a articulo.id y usuario.id
- Solo usuarios autenticados pueden comentar
- Soft-delete considerado (no eliminar, marcar como editado y vaciar contenido)

### 8. Timestamps Automáticos
- Funciones Trigger (`fn_actualizar_timestamp`) en PostgreSQL
- actualizado_en se actualiza automáticamente en UPDATE
- No necesita lógica en Node.js

## DEPLOYMENT

- **Base de datos**: Neon PostgreSQL (DATABASE_URL, DIRECT_URL)
- **ORM**: Prisma (schema.prisma ya generado desde Neon introspect)
- **Build steps**:
  1. `npm install`
  2. `prisma generate` (generar Prisma Client)
  3. `prisma migrate deploy` (aplicar migraciones pendientes)
- **Server**: Node.js 24.x + Express
- **Puerto**: 3000 (Netlify lo mapea automáticamente)
- **Variables de entorno**:
  - DATABASE_URL (Neon)
  - DIRECT_URL (para Prisma en Netlify)
  - JWT_SECRET
  - NODE_ENV=production

## ESTRUCTURA PRISMA SCHEMA

```prisma
// Basado en DDL de Neon
// Usar: npx prisma introspect (si necesita sincronizar)

enum RolUsuario {
  cliente
  editor
  admin
}

enum EstadoPedido {
  pendiente
  pagado
  enviado
  entregado
  cancelado
}

enum EstadoArticulo {
  borrador
  publicado
  archivado
}

enum MetodoPago {
  tarjeta
  transferencia
  efectivo
}

model Usuario {
  id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  correo String @unique
  nombreVisible String?
  fotoUrl String?
  rol RolUsuario @default(cliente)
  creadoEn DateTime @default(now())
  ultimoAccesoEn DateTime?
  idClienteStripe String?

  direcciones DireccionUsuario[]
  preferencias PreferenciaUsuario?
  favoritos UsuarioProductoFavorito[]
  carrito Carrito?
  pedidos Pedido[]
  articulos Articulo[]
  comentarios Comentario[]
}

// ... (continuar con los modelos restantes)
```

## ARCHIVO PACKAGE.JSON

```json
{
  "name": "groove-backend",
  "version": "1.0.0",
  "type": "module",
  "engines": { "node": "24.x" },
  "scripts": {
    "build": "prisma generate && prisma migrate deploy",
    "start": "node start.js",
    "dev": "node start.js"
  },
  "dependencies": {
    "@prisma/client": "^6.19.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.18.0",
    "express-rate-limit": "^8.2.1",
    "helmet": "^8.1.0",
    "jsonwebtoken": "^9.0.0",
    "multer": "^1.4.5-lts.1"
  }
}
```

## INSTRUCCIONES FINALES

Por favor, construye el proyecto con esta estructura y haz deploy en Netlify.
