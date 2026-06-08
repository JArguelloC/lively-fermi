// prisma/seed.js - Siembra la base de datos de Groove con el catálogo de demo.
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const prisma = new PrismaClient();
const __dirname = dirname(fileURLToPath(import.meta.url));

const data = JSON.parse(readFileSync(join(__dirname, 'data', 'groove-seed.json'), 'utf-8'));

const DEMO_PASSWORD = 'Groove2025!demo'; // >= 12 caracteres (cumple validación del frontend)

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

async function main() {
  console.log('🌱 Sembrando base de datos Groove...');

  // Limpieza idempotente (orden por dependencias)
  await prisma.comentario.deleteMany();
  await prisma.articuloPedido.deleteMany();
  await prisma.pedido.deleteMany();
  await prisma.articuloCarrito.deleteMany();
  await prisma.carrito.deleteMany();
  await prisma.usuarioProductoFavorito.deleteMany();
  await prisma.articulo.deleteMany();
  await prisma.varianteProducto.deleteMany();
  await prisma.producto.deleteMany();
  await prisma.preferenciaUsuario.deleteMany();
  await prisma.direccionUsuario.deleteMany();
  await prisma.usuario.deleteMany();

  // ── Usuarios base ──────────────────────────────────────────
  const hash = await bcrypt.hash(DEMO_PASSWORD, 10);

  const admin = await prisma.usuario.create({
    data: {
      correo: 'admin@groove.com',
      hashContrasena: hash,
      nombreVisible: 'Admin Groove',
      rol: 'admin',
      correoVerificado: true,
      preferencias: { create: {} },
    },
  });

  const editor = await prisma.usuario.create({
    data: {
      correo: 'redaccion@groove.com',
      hashContrasena: hash,
      nombreVisible: 'Redacción Groove',
      rol: 'editor',
      correoVerificado: true,
      preferencias: { create: {} },
    },
  });

  await prisma.usuario.create({
    data: {
      correo: 'cliente@groove.com',
      hashContrasena: hash,
      nombreVisible: 'Cliente Demo',
      rol: 'cliente',
      correoVerificado: true,
      preferencias: { create: {} },
    },
  });

  console.log(`✅ Usuarios: admin@groove.com / redaccion@groove.com / cliente@groove.com (pass: ${DEMO_PASSWORD})`);

  // ── Productos + variante por defecto ───────────────────────
  for (const p of data.products) {
    await prisma.producto.create({
      data: {
        slug: p.slug,
        titulo: p.name,
        descripcion: p.description ?? '',
        categoria: p.category,
        subcategoria: p.subcategory ?? null,
        artista: p.artist ?? null,
        album: p.album ?? null,
        sello: p.brand ?? null,
        genero: p.genre ?? [],
        etiquetas: p.tags ?? [],
        anioLanzamiento: p.releaseYear ?? null,
        precioBase: p.price,
        precioComparado: p.compareAtPrice ?? null,
        enOferta: Boolean(p.isOnOffer),
        moneda: p.currency ?? 'USD',
        promedioRating: p.avgRating ?? null,
        totalResenas: p.reviewCount ?? 0,
        imagenes: p.images ?? [],
        activo: p.isAvailable !== false,
        destacado: Boolean(p.isFeatured),
        variantes: {
          create: {
            nombre: 'Estándar',
            sku: `${p.id}-STD`,
            precio: p.price,
            stock: p.stock ?? 0,
          },
        },
      },
    });
  }
  console.log(`✅ Productos: ${data.products.length}`);

  // ── Artículos (noticias) ───────────────────────────────────
  const articleIdMap = {}; // mockId -> realId
  for (const a of data.articles) {
    const creado = await prisma.articulo.create({
      data: {
        slug: a.slug,
        titulo: a.title,
        extracto: a.subtitle ?? null,
        contenido: a.body ?? '',
        idAutor: editor.id,
        categoria: a.category,
        etiquetas: a.tags ?? [],
        imagenPortada: a.coverImageUrl ?? null,
        estado: 'publicado',
        publicadoEn: a.publishedAt ? new Date(a.publishedAt) : new Date(),
        vistas: a.views ?? 0,
      },
    });
    articleIdMap[a.id] = creado.id;
  }
  console.log(`✅ Artículos: ${data.articles.length}`);

  // ── Usuarios de comentarios + comentarios ──────────────────
  const commentUserCache = {};
  async function usuarioComentario(nombre, avatar) {
    if (commentUserCache[nombre]) return commentUserCache[nombre];
    const correo = `${slugify(nombre)}@groove.fans`;
    const u = await prisma.usuario.upsert({
      where: { correo },
      update: {},
      create: { correo, nombreVisible: nombre, fotoUrl: avatar ?? null, rol: 'cliente' },
    });
    commentUserCache[nombre] = u.id;
    return u.id;
  }

  let totalComentarios = 0;
  for (const c of data.comments) {
    const idArticulo = articleIdMap[c.articleId];
    if (!idArticulo) continue;
    const idUsuario = await usuarioComentario(c.userName, c.userAvatar);
    await prisma.comentario.create({
      data: {
        idArticulo,
        idUsuario,
        contenido: c.body,
        creadoEn: c.createdAt ? new Date(c.createdAt) : new Date(),
      },
    });
    totalComentarios++;
  }
  console.log(`✅ Comentarios: ${totalComentarios}`);

  console.log('🌳 Seed completado.');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
