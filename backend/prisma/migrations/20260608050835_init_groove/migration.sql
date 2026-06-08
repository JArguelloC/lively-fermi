-- CreateEnum
CREATE TYPE "rol_usuario" AS ENUM ('cliente', 'editor', 'admin');

-- CreateEnum
CREATE TYPE "estado_pedido" AS ENUM ('pendiente', 'pagado', 'enviado', 'entregado', 'cancelado');

-- CreateEnum
CREATE TYPE "estado_articulo" AS ENUM ('borrador', 'publicado', 'archivado');

-- CreateEnum
CREATE TYPE "metodo_pago" AS ENUM ('tarjeta', 'transferencia', 'efectivo');

-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "correo" TEXT NOT NULL,
    "hash_contrasena" TEXT,
    "nombre_visible" TEXT,
    "foto_url" TEXT,
    "telefono" TEXT,
    "rol" "rol_usuario" NOT NULL DEFAULT 'cliente',
    "correo_verificado" BOOLEAN NOT NULL DEFAULT false,
    "creado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimo_acceso_en" TIMESTAMPTZ(6),
    "id_cliente_stripe" TEXT,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "direccion_usuario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_usuario" UUID NOT NULL,
    "nombre_completo" TEXT NOT NULL,
    "linea1" TEXT NOT NULL,
    "linea2" TEXT,
    "ciudad" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "codigo_postal" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "es_predeterminada" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "direccion_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "preferencia_usuario" (
    "id_usuario" UUID NOT NULL,
    "suscrito_newsletter" BOOLEAN NOT NULL DEFAULT false,
    "tema" TEXT NOT NULL DEFAULT 'sistema',
    "moneda" TEXT NOT NULL DEFAULT 'USD',
    "generos_favoritos" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "preferencia_usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "producto" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "slug" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "categoria" TEXT NOT NULL,
    "subcategoria" TEXT,
    "artista" TEXT,
    "album" TEXT,
    "sello" TEXT,
    "genero" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "etiquetas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "fecha_lanzamiento" DATE,
    "anio_lanzamiento" INTEGER,
    "precio_base" DECIMAL(10,2) NOT NULL,
    "precio_comparado" DECIMAL(10,2),
    "en_oferta" BOOLEAN NOT NULL DEFAULT false,
    "moneda" TEXT NOT NULL DEFAULT 'USD',
    "promedio_rating" DECIMAL(3,2),
    "total_resenas" INTEGER NOT NULL DEFAULT 0,
    "imagenes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "destacado" BOOLEAN NOT NULL DEFAULT false,
    "creado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variante_producto" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_producto" UUID NOT NULL,
    "nombre" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "talla" TEXT,
    "color" TEXT,
    "formato" TEXT,

    CONSTRAINT "variante_producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario_producto_favorito" (
    "id_usuario" UUID NOT NULL,
    "id_producto" UUID NOT NULL,
    "agregado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_producto_favorito_pkey" PRIMARY KEY ("id_usuario","id_producto")
);

-- CreateTable
CREATE TABLE "carrito" (
    "id_usuario" UUID NOT NULL,
    "total_articulos" INTEGER NOT NULL DEFAULT 0,
    "precio_total" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "actualizado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "carrito_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "articulo_carrito" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_usuario" UUID NOT NULL,
    "id_producto" UUID,
    "id_variante" UUID,
    "nombre" TEXT NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,
    "imagen_url" TEXT,
    "artista" TEXT,
    "slug" TEXT,

    CONSTRAINT "articulo_carrito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_usuario" UUID NOT NULL,
    "estado" "estado_pedido" NOT NULL DEFAULT 'pendiente',
    "subtotal" DECIMAL(10,2) NOT NULL,
    "impuesto" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "costo_envio" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "total" DECIMAL(10,2) NOT NULL,
    "envio_nombre" TEXT NOT NULL,
    "envio_linea1" TEXT NOT NULL,
    "envio_linea2" TEXT,
    "envio_ciudad" TEXT NOT NULL,
    "envio_estado" TEXT NOT NULL,
    "envio_codigo_postal" TEXT NOT NULL,
    "envio_pais" TEXT NOT NULL,
    "metodo_pago" "metodo_pago" NOT NULL DEFAULT 'tarjeta',
    "id_intento_pago" TEXT,
    "creado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articulo_pedido" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_pedido" UUID NOT NULL,
    "id_producto" UUID,
    "id_variante" UUID,
    "titulo" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "imagen_url" TEXT,

    CONSTRAINT "articulo_pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articulo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "slug" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "extracto" TEXT,
    "contenido" TEXT NOT NULL,
    "id_autor" UUID NOT NULL,
    "categoria" TEXT NOT NULL,
    "etiquetas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "imagen_portada" TEXT,
    "estado" "estado_articulo" NOT NULL DEFAULT 'borrador',
    "publicado_en" TIMESTAMPTZ(6),
    "creado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vistas" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "articulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comentario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_articulo" UUID NOT NULL,
    "id_usuario" UUID NOT NULL,
    "contenido" TEXT NOT NULL,
    "creado_en" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMPTZ(6),
    "editado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "comentario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_key" ON "usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "producto_slug_key" ON "producto"("slug");

-- CreateIndex
CREATE INDEX "producto_categoria_idx" ON "producto"("categoria");

-- CreateIndex
CREATE INDEX "producto_slug_idx" ON "producto"("slug");

-- CreateIndex
CREATE INDEX "producto_activo_idx" ON "producto"("activo");

-- CreateIndex
CREATE INDEX "producto_destacado_idx" ON "producto"("destacado");

-- CreateIndex
CREATE UNIQUE INDEX "variante_producto_sku_key" ON "variante_producto"("sku");

-- CreateIndex
CREATE INDEX "variante_producto_id_producto_idx" ON "variante_producto"("id_producto");

-- CreateIndex
CREATE INDEX "variante_producto_sku_idx" ON "variante_producto"("sku");

-- CreateIndex
CREATE INDEX "usuario_producto_favorito_id_usuario_idx" ON "usuario_producto_favorito"("id_usuario");

-- CreateIndex
CREATE INDEX "usuario_producto_favorito_id_producto_idx" ON "usuario_producto_favorito"("id_producto");

-- CreateIndex
CREATE INDEX "articulo_carrito_id_usuario_idx" ON "articulo_carrito"("id_usuario");

-- CreateIndex
CREATE INDEX "pedido_id_usuario_idx" ON "pedido"("id_usuario");

-- CreateIndex
CREATE INDEX "pedido_estado_idx" ON "pedido"("estado");

-- CreateIndex
CREATE INDEX "articulo_pedido_id_pedido_idx" ON "articulo_pedido"("id_pedido");

-- CreateIndex
CREATE UNIQUE INDEX "articulo_slug_key" ON "articulo"("slug");

-- CreateIndex
CREATE INDEX "articulo_id_autor_idx" ON "articulo"("id_autor");

-- CreateIndex
CREATE INDEX "articulo_estado_idx" ON "articulo"("estado");

-- CreateIndex
CREATE INDEX "articulo_slug_idx" ON "articulo"("slug");

-- CreateIndex
CREATE INDEX "comentario_id_articulo_idx" ON "comentario"("id_articulo");

-- CreateIndex
CREATE INDEX "comentario_id_usuario_idx" ON "comentario"("id_usuario");

-- AddForeignKey
ALTER TABLE "direccion_usuario" ADD CONSTRAINT "direccion_usuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "preferencia_usuario" ADD CONSTRAINT "preferencia_usuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variante_producto" ADD CONSTRAINT "variante_producto_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_producto_favorito" ADD CONSTRAINT "usuario_producto_favorito_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_producto_favorito" ADD CONSTRAINT "usuario_producto_favorito_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrito" ADD CONSTRAINT "carrito_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articulo_carrito" ADD CONSTRAINT "articulo_carrito_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "carrito"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articulo_carrito" ADD CONSTRAINT "articulo_carrito_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articulo_carrito" ADD CONSTRAINT "articulo_carrito_id_variante_fkey" FOREIGN KEY ("id_variante") REFERENCES "variante_producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articulo_pedido" ADD CONSTRAINT "articulo_pedido_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articulo_pedido" ADD CONSTRAINT "articulo_pedido_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articulo_pedido" ADD CONSTRAINT "articulo_pedido_id_variante_fkey" FOREIGN KEY ("id_variante") REFERENCES "variante_producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articulo" ADD CONSTRAINT "articulo_id_autor_fkey" FOREIGN KEY ("id_autor") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_id_articulo_fkey" FOREIGN KEY ("id_articulo") REFERENCES "articulo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
