PROMPT PARA REPLIT IA - PROYECTO GROOVE (BACKEND + FRONTEND)

Objetivo: Clonar el repositorio existente, adaptar el backend a Neon PostgreSQL (cadena proporcionada), generar/ajustar el esquema Prisma a partir del DDL, y dejar un monorepo listo para ejecutar en Replit (backend + frontend). El proyecto UI ya está en el repo y debe mantenerse.

Repositorio base (usar como fuente):
https://github.com/JamesAC77/Groove-Website.git

Replit project (nombre / url):
Groove Website
https://replit.com/join/kksjdnehsk-jamesarguello63

Cadena de conexión Neon (usar exactamente):
DATABASE_URL=postgresql://neondb_owner:npg_ztY8OEi9aMJg@ep-solitary-mode-ahd4cbij-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

REQUISITOS PRINCIPALES (instrucciones precisas para Replit IA):
1) Clona el repo `JamesAC77/Groove-Website.git` en el workspace.
2) Detecta las carpetas `backend` y `frontend` (si no existen, usar la estructura ya presente en el repo raíz: `backend_BARBOX-main/` y `src/` del frontend). Conserva todo el código existente y respeta el diseño UI.
3) Configura variables de entorno en Replit:
   - `DATABASE_URL` = (cadena Neon arriba)
   - `JWT_SECRET` = generar valor seguro para producción
   - `VITE_API_URL` = Replit URL del backend (ej: https://<tu-backend>.replit.app/api/v1)
   - `VITE_PAYPAL_CLIENT_ID`, `VITE_MAPBOX_TOKEN` (vacíos si no disponibles)
4) Backend: usar Node.js 24.x, Express, Prisma.
   - Ejecutar `npx prisma introspect` para generar `schema.prisma` desde la base Neon si la base existe.
   - Si se prefiere, usar el DDL adjunto (`groove_ddl.sql`) como referencia para construir `schema.prisma`.
   - Generar Prisma Client: `npx prisma generate`.
   - Aplicar migraciones si hay migraciones locales: `npx prisma migrate deploy` (si corresponde).
5) Asegura las rutas REST descritas en el repo y completa las que falten según el modelo (auth, usuarios, productos, carrito, pedidos, pagos, articulos, comentarios).
6) Implementar la lógica crítica: validación de stock por `variante_producto.stock`, sumar cantidades iguales en carrito, cálculo de envío ($5.99 si subtotal ≤ $50, gratis si > $50), creación de pedido con snapshot de artículos y decremento atómico de stock (transacción PostgreSQL).
7) Frontend: mantener el UI del repo. Asegurar que todas las llamadas apunten a `VITE_API_URL`.
   - Tipado TypeScript: crear/ajustar tipos según el esquema de Neon (Usuario, DireccionUsuario, Producto, VarianteProducto, Carrito, ArticuloCarrito, Pedido, Articulo, Comentario).
8) Scripts de ejecución en Replit:
   - Backend: `npm install && npx prisma generate && npm start` (o `node start.js` según repo)
   - Frontend: `npm install && npm run build && npm run preview` (o `npm run dev` para desarrollo)
9) Tests básicos: añadir un script `smoke` para verificar endpoints principales (auth login, listar productos, carrito).
10) Entregar: commit de cambios en una rama nueva `replit-adapt` y abrir un PR en el repo (o crear una copia y dejar instrucciones de deploy en `README_REPLIT.md`).

SOBRE EL SCHEMA PRISMA (ejemplo inicial — adaptar con `prisma introspect` si la DB ya tiene datos)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum RolUsuario { cliente editor admin }
enum EstadoPedido { pendiente pagado enviado entregado cancelado }
enum EstadoArticulo { borrador publicado archivado }
enum MetodoPago { tarjeta transferencia efectivo }

model Usuario {
  id                  String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  correo              String   @unique
  nombreVisible       String?
  fotoUrl             String?
  rol                 RolUsuario @default(cliente)
  creadoEn            DateTime @default(now())
  ultimoAccesoEn      DateTime?
  idClienteStripe     String?
  direcciones         DireccionUsuario[]
  preferencias         PreferenciaUsuario?
  favoritos           UsuarioProductoFavorito[]
  carrito             Carrito?
  pedidos             Pedido[]
  articulos           Articulo[]
  comentarios         Comentario[]
}

// Resto de modelos: DireccionUsuario, PreferenciaUsuario, Producto, VarianteProducto, UsuarioProductoFavorito, Carrito, ArticuloCarrito, Pedido, ArticuloPedido, Articulo, Comentario
```

INSTRUCCIONES ADICIONALES PARA REPLIT IA
- Evitar exponer `DATABASE_URL` en commits públicos. Ponerlo solo en variables de entorno de Replit.
- Generar README con pasos para reproducir localmente y en Replit (comandos `npm install`, `npx prisma generate`, `npm start`, etc.).
- Si el repo ya contiene código equivalente, enfocar en adaptar integraciones (Prisma -> Neon), no en reescribir UI.

SALIDA ESPERADA (deliverable)
1. Rama `replit-adapt` con cambios mínimos en el repo: `README_REPLIT.md`, `prisma/schema.prisma` (si se generó/ajustó), scripts de `start` y `build` compatibles con Replit.
2. Archivo `PROMPT_REPLIT.md` (este archivo) en la raíz del repo.
3. Instrucciones para ejecutar localmente y en Replit.

FIN DEL PROMPT - Ejecuta las tareas anteriores y confirma con un commit y push a `replit-adapt`.
