// src/lib/mappers.js - Convierte modelos de Prisma (DB en español) a DTOs del frontend
// El frontend de Groove consume los productos/artículos con nombres en inglés
// (name, price, etc.), así que centralizamos aquí la conversión.

const num = (value) => (value === null || value === undefined ? null : Number(value));

export function mapVariante(v) {
  return {
    id: v.id,
    name: v.nombre,
    sku: v.sku,
    price: num(v.precio),
    stock: v.stock,
    size: v.talla ?? null,
    color: v.color ?? null,
    format: v.formato ?? null,
  };
}

export function mapProducto(p) {
  const variantes = p.variantes ?? [];
  const stock = variantes.reduce((sum, v) => sum + (v.stock ?? 0), 0);
  const releaseYear =
    p.anioLanzamiento ?? (p.fechaLanzamiento ? new Date(p.fechaLanzamiento).getFullYear() : null);

  return {
    id: p.id,
    slug: p.slug,
    name: p.titulo,
    title: p.titulo,
    description: p.descripcion ?? '',
    category: p.categoria,
    subcategory: p.subcategoria ?? '',
    brand: p.sello ?? '',
    artist: p.artista ?? '',
    album: p.album ?? '',
    genre: p.genero ?? [],
    releaseYear,
    images: p.imagenes ?? [],
    price: num(p.precioBase),
    basePrice: num(p.precioBase),
    compareAtPrice: num(p.precioComparado),
    currency: p.moneda ?? 'USD',
    stock,
    isAvailable: p.activo && stock > 0,
    isActive: p.activo,
    isFeatured: p.destacado,
    isOnOffer: p.enOferta,
    avgRating: num(p.promedioRating) ?? 0,
    reviewCount: p.totalResenas ?? 0,
    tags: p.etiquetas ?? [],
    variants: variantes.map(mapVariante),
    createdAt: p.creadoEn,
    updatedAt: p.actualizadoEn,
  };
}

export function mapUsuario(u) {
  return {
    id: u.id,
    email: u.correo,
    nombre: u.nombreVisible ?? '',
    displayName: u.nombreVisible ?? '',
    rol: u.rol,
    role: u.rol,
    emailVerificado: u.correoVerificado,
    foto: u.fotoUrl ?? undefined,
    telefono: u.telefono ?? undefined,
    createdAt: u.creadoEn,
    lastLoginAt: u.ultimoAccesoEn ?? undefined,
  };
}

export function mapComentario(c) {
  return {
    id: c.id,
    articleId: c.idArticulo,
    userId: c.idUsuario,
    userName: c.usuario?.nombreVisible ?? 'Usuario',
    userAvatar: c.usuario?.fotoUrl ?? '',
    authorName: c.usuario?.nombreVisible ?? 'Usuario',
    content: c.contenido,
    body: c.contenido,
    parentId: null,
    likes: 0,
    isEdited: c.editado,
    createdAt: c.creadoEn,
    updatedAt: c.actualizadoEn ?? undefined,
  };
}

export function mapArticulo(a, { incluirContenido = true } = {}) {
  return {
    id: a.id,
    slug: a.slug,
    title: a.titulo,
    subtitle: a.extracto ?? '',
    excerpt: a.extracto ?? '',
    ...(incluirContenido ? { content: a.contenido, body: a.contenido } : {}),
    authorId: a.idAutor,
    authorName: a.autor?.nombreVisible ?? 'Redacción Groove',
    authorAvatarUrl: a.autor?.fotoUrl ?? '',
    category: a.categoria,
    tags: a.etiquetas ?? [],
    coverImage: a.imagenPortada ?? '',
    coverImageUrl: a.imagenPortada ?? '',
    status: a.estado,
    views: a.vistas,
    viewCount: a.vistas,
    commentCount: a._count?.comentarios ?? (a.comentarios ? a.comentarios.length : 0),
    comments: a.comentarios ? a.comentarios.map(mapComentario) : undefined,
    isFeatured: false,
    publishedAt: a.publicadoEn ?? a.creadoEn,
    createdAt: a.creadoEn,
    updatedAt: a.actualizadoEn,
  };
}

export function mapPedido(o) {
  return {
    id: o.id,
    userId: o.idUsuario,
    status: o.estado,
    subtotal: num(o.subtotal),
    tax: num(o.impuesto),
    shippingCost: num(o.costoEnvio),
    total: num(o.total),
    shippingAddress: {
      fullName: o.envioNombre,
      addressLine1: o.envioLinea1,
      addressLine2: o.envioLinea2 ?? undefined,
      city: o.envioCiudad,
      state: o.envioEstado,
      postalCode: o.envioCodigoPostal,
      country: o.envioPais,
    },
    paymentMethod: o.metodoPago,
    paymentIntentId: o.idIntentoPago ?? undefined,
    items: (o.articulos ?? []).map((it) => ({
      productId: it.idProducto ?? undefined,
      variantId: it.idVariante ?? undefined,
      title: it.titulo,
      sku: it.sku,
      price: num(it.precio),
      quantity: it.cantidad,
      imageUrl: it.imagenUrl ?? undefined,
    })),
    createdAt: o.creadoEn,
    updatedAt: o.actualizadoEn,
  };
}

export function mapItemCarrito(it) {
  return {
    id: it.id,
    productId: it.idProducto ?? undefined,
    variantId: it.idVariante ?? undefined,
    name: it.nombre,
    price: num(it.precio),
    quantity: it.cantidad,
    images: it.imagenUrl ? [it.imagenUrl] : [],
    artist: it.artista ?? undefined,
    slug: it.slug ?? undefined,
  };
}
