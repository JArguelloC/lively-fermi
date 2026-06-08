# PROMPT PARA VS CODE - CREAR BACKEND GROOVE (sin Firebase)

Estoy en el proyecto `c:\Users\james\Documents\antigravity\lively-fermi` que contiene:
- Frontend React/TypeScript en `src/`
- Backend Node.js sin completar en `backend_BARBOX-main/`

Necesito completar y refactorizar el backend para que funcione con Neon PostgreSQL (sin Firebase). La cadena de conexión es:

```
postgresql://neondb_owner:npg_ztY8OEi9aMJg@ep-solitary-mode-ahd4cbij-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

## REQUISITOS DEL BACKEND

### Stack
- Node.js 24.x
- Express.js
- Prisma ORM + PostgreSQL (Neon)
- TypeScript
- JWT para autenticación (sin Firebase Auth)
- bcryptjs para contraseñas

### Estructura del proyecto backend

```
backend_BARBOX-main/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── user.types.ts
│   │   ├── product.types.ts
│   │   ├── cart.types.ts
│   │   ├── order.types.ts
│   │   └── news.types.ts
│   ├── config/
│   │   ├── database.ts
│   │   ├── cors.ts
│   │   └── jwt.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   ├── validation.ts
│   │   └── roleGuard.ts
│   ├── routes/
│   │   ├── index.ts
│   │   ├── auth.routes.ts
│   │   ├── users.routes.ts
│   │   ├── products.routes.ts
│   │   ├── cart.routes.ts
│   │   ├── orders.routes.ts
│   │   ├── payments.routes.ts
│   │   ├── articles.routes.ts
│   │   └── comments.routes.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── users.controller.ts
│   │   ├── products.controller.ts
│   │   ├── cart.controller.ts
│   │   ├── orders.controller.ts
│   │   ├── payments.controller.ts
│   │   ├── articles.controller.ts
│   │   └── comments.controller.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── users.service.ts
│   │   ├── products.service.ts
│   │   ├── cart.service.ts
│   │   ├── orders.service.ts
│   │   ├── stock.service.ts
│   │   └── articles.service.ts
│   └── utils/
│       ├── validators.ts
│       ├── jwt.ts
│       ├── password.ts
│       └── errors.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── .env
├── package.json
├── tsconfig.json
└── start.ts (o server.ts)
```

### Package.json

```json
{
  "name": "groove-backend",
  "version": "1.0.0",
  "description": "Groove API - Backend con Neon PostgreSQL",
  "type": "module",
  "main": "src/server.ts",
  "engines": { "node": "24.x" },
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc && prisma generate",
    "start": "node dist/server.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate deploy",
    "prisma:studio": "prisma studio",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["groove", "ecommerce", "api"],
  "author": "James",
  "license": "MIT",
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
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.10.5",
    "@types/jsonwebtoken": "^9.0.7",
    "@types/bcryptjs": "^2.4.6",
    "prisma": "^6.19.0",
    "typescript": "^5.3.3",
    "tsx": "^4.7.0"
  }
}
```

### Prisma Schema (schema.prisma)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

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
  id              String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  correo          String   @unique
  password        String // hash bcryptjs
  nombreVisible   String?
  fotoUrl         String?
  rol             RolUsuario @default(cliente)
  creadoEn        DateTime @default(now())
  ultimoAccesoEn  DateTime?
  idClienteStripe String?

  direcciones   DireccionUsuario[]
  preferencias  PreferenciaUsuario?
  favoritos     UsuarioProductoFavorito[]
  carrito       Carrito?
  pedidos       Pedido[]
  articulos     Articulo[]
  comentarios   Comentario[]

  @@map("usuario")
}

model DireccionUsuario {
  id              String  @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  idUsuario       String  @db.Uuid
  nombreCompleto  String
  linea1          String
  linea2          String?
  ciudad          String
  estado          String
  codigoPostal    String
  pais            String
  esPredeterminada Boolean @default(false)

  usuario Usuario @relation(fields: [idUsuario], references: [id], onDelete: Cascade)

  @@map("direccion_usuario")
}

model PreferenciaUsuario {
  idUsuario          String   @id @db.Uuid
  suscritoNewsletter Boolean  @default(false)
  tema               String   @default("sistema")
  moneda             String   @default("USD")
  generosFavoritos   String[] @default([])

  usuario Usuario @relation(fields: [idUsuario], references: [id], onDelete: Cascade)

  @@map("preferencia_usuario")
}

model Producto {
  id                  String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  slug                String   @unique
  titulo              String
  descripcion         String?
  categoria           String
  subcategoria        String?
  artista             String?
  sello               String?
  fechaLanzamiento    DateTime?
  precioBase          Decimal  @db.Decimal(10, 2)
  promedioRating      Decimal? @db.Decimal(3, 2)
  totalResenas        Int      @default(0)
  imagenes            String[] @default([])
  activo              Boolean  @default(true)
  destacado           Boolean  @default(false)
  creadoEn            DateTime @default(now())
  actualizadoEn       DateTime @updatedAt

  variantes           VarianteProducto[]
  favoritos           UsuarioProductoFavorito[]
  articulosCarrito    ArticuloCarrito[]
  articulosPedido     ArticuloPedido[]

  @@index([categoria])
  @@index([slug])
  @@map("producto")
}

model VarianteProducto {
  id          String  @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  idProducto  String  @db.Uuid
  nombre      String
  sku         String  @unique
  precio      Decimal @db.Decimal(10, 2)
  stock       Int     @default(0)
  talla       String?
  color       String?
  formato     String?

  producto        Producto @relation(fields: [idProducto], references: [id], onDelete: Cascade)
  articulosCarrito ArticuloCarrito[]
  articulosPedido  ArticuloPedido[]

  @@index([idProducto])
  @@index([sku])
  @@map("variante_producto")
}

model UsuarioProductoFavorito {
  idUsuario   String   @db.Uuid
  idProducto  String   @db.Uuid
  agregadoEn  DateTime @default(now())

  usuario    Usuario   @relation(fields: [idUsuario], references: [id], onDelete: Cascade)
  producto   Producto  @relation(fields: [idProducto], references: [id], onDelete: Cascade)

  @@id([idUsuario, idProducto])
  @@map("usuario_producto_favorito")
}

model Carrito {
  idUsuario       String   @id @db.Uuid
  totalArticulos  Int      @default(0)
  precioTotal     Decimal  @default(0) @db.Decimal(10, 2)
  actualizadoEn   DateTime @updatedAt

  usuario   Usuario              @relation(fields: [idUsuario], references: [id], onDelete: Cascade)
  articulos ArticuloCarrito[]

  @@map("carrito")
}

model ArticuloCarrito {
  id          String  @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  idUsuario   String  @db.Uuid
  idProducto  String? @db.Uuid
  idVariante  String? @db.Uuid
  nombre      String
  precio      Decimal @db.Decimal(10, 2)
  cantidad    Int     @default(1)
  imagenUrl   String?
  artista     String?
  slug        String

  carrito     Carrito? @relation(fields: [idUsuario], references: [idUsuario], onDelete: Cascade)
  producto    Producto? @relation(fields: [idProducto], references: [id], onDelete: SetNull)
  variante    VarianteProducto? @relation(fields: [idVariante], references: [id], onDelete: SetNull)

  @@map("articulo_carrito")
}

model Pedido {
  id                  String        @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  idUsuario           String        @db.Uuid
  estado              EstadoPedido  @default(pendiente)
  subtotal            Decimal       @db.Decimal(10, 2)
  impuesto            Decimal       @default(0) @db.Decimal(10, 2)
  costoEnvio          Decimal       @default(0) @db.Decimal(10, 2)
  total               Decimal       @db.Decimal(10, 2)
  envioNombre         String
  envioLinea1         String
  envioLinea2         String?
  envioCiudad         String
  envioEstado         String
  envioCodigoPostal   String
  envioPais           String
  metodoPago          MetodoPago    @default(tarjeta)
  idIntentoPago       String?
  creadoEn            DateTime      @default(now())
  actualizadoEn       DateTime      @updatedAt

  usuario   Usuario            @relation(fields: [idUsuario], references: [id])
  articulos ArticuloPedido[]

  @@index([idUsuario])
  @@index([estado])
  @@map("pedido")
}

model ArticuloPedido {
  id          String  @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  idPedido    String  @db.Uuid
  idProducto  String? @db.Uuid
  idVariante  String? @db.Uuid
  titulo      String
  sku         String
  precio      Decimal @db.Decimal(10, 2)
  cantidad    Int
  imagenUrl   String?

  pedido      Pedido? @relation(fields: [idPedido], references: [id], onDelete: Cascade)
  producto    Producto? @relation(fields: [idProducto], references: [id], onDelete: SetNull)
  variante    VarianteProducto? @relation(fields: [idVariante], references: [id], onDelete: SetNull)

  @@map("articulo_pedido")
}

model Articulo {
  id            String          @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  slug          String          @unique
  titulo        String
  extracto      String?
  contenido     String
  idAutor       String          @db.Uuid
  categoria     String
  etiquetas     String[]        @default([])
  imagenPortada String?
  estado        EstadoArticulo  @default(borrador)
  publicadoEn   DateTime?
  creadoEn      DateTime        @default(now())
  actualizadoEn DateTime        @updatedAt
  vistas        Int             @default(0)

  autor         Usuario         @relation(fields: [idAutor], references: [id])
  comentarios   Comentario[]

  @@index([idAutor])
  @@index([estado])
  @@index([slug])
  @@map("articulo")
}

model Comentario {
  id            String    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  idArticulo    String    @db.Uuid
  idUsuario     String    @db.Uuid
  contenido     String
  creadoEn      DateTime  @default(now())
  actualizadoEn DateTime? @updatedAt
  editado       Boolean   @default(false)

  articulo      Articulo  @relation(fields: [idArticulo], references: [id], onDelete: Cascade)
  usuario       Usuario   @relation(fields: [idUsuario], references: [id])

  @@map("comentario")
}
```

### Archivo .env

```
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://neondb_owner:npg_ztY8OEi9aMJg@ep-solitary-mode-ahd4cbij-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
DIRECT_URL=postgresql://neondb_owner:npg_ztY8OEi9aMJg@ep-solitary-mode-ahd4cbij-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require
JWT_SECRET=tu_secreto_super_seguro_aqui_cambia_en_produccion
JWT_EXPIRATION=7d
CORS_ORIGIN=http://localhost:5173,https://tu-frontend.netlify.app
```

## FUNCIONALIDADES PRINCIPALES A IMPLEMENTAR

1. **Auth**: login, register, me, logout con JWT (sin Firebase)
2. **Usuarios**: CRUD de perfil, direcciones, preferencias, favoritos
3. **Productos**: listar, detalle, filtros, variantes con stock
4. **Carrito**: agregar, actualizar cantidad, remover, validar stock, limpiar
5. **Pedidos**: crear (con validación de stock de 3 capas), listar, detalle, actualizar estado
6. **Stock**: validación en 3 capas (add-to-cart, checkout, post-pago con transacción PostgreSQL)
7. **Envío**: cálculo automático ($5.99 si ≤$50, gratis si >$50)
8. **Pagos**: mock de PayPal (puente para procesar después)
9. **Artículos**: CRUD de noticias con estado (borrador, publicado, archivado)
10. **Comentarios**: listar, agregar, editar, eliminar (solo autenticados)

## COMANDOS INICIALES PARA EMPEZAR

```bash
cd backend_BARBOX-main
npm install
npx prisma generate
npm run dev
```

Crea todo el backend desde cero siguiendo esta arquitectura. Mantén la estructura de tipos, servicios, controladores, routes y middleware como se describe arriba. Elimina cualquier referencia a Firebase del código existente y reemplázalo con autenticación JWT pura (bcryptjs para contraseñas, jsonwebtoken para tokens).

## CONSIDERACIONES IMPORTANTES

- NO generar seed data (ya existen datos de la tienda actual)
- El backend debe estar listo para deploy en Netlify Functions + PostgreSQL Neon
- Asegurar que todas las respuestas sean JSON
- Implementar manejo de errores robusto
- Rate limiting en rutas sensibles
- CORS configurado para frontend en Netlify

## CONFIGURACIÓN NETLIFY

Crear archivo `netlify.toml` en raíz del proyecto:

```toml
[build]
  command = "npm run build"
  functions = "backend_BARBOX-main/dist"
  publish = "dist"

[dev]
  command = "npm run dev"

[[redirects]]
  from = "/api/v1/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

Deliverable: Backend completo en TypeScript, tipado, sin errores, listo para:
1. Ejecutar localmente con `npm run dev`
2. Desplegar en Netlify con `npm run build`
3. Conectar con el frontend React existente en `src/`
