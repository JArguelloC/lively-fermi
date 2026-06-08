// src/controllers/articulo.controller.js - Noticias/artículos y comentarios (Groove)
import { prisma } from '../lib/prisma.js';
import { mapArticulo, mapComentario } from '../lib/mappers.js';

// GET /api/v1/articulos?categoria=
export async function listarArticulos(req, res, next) {
  try {
    const { categoria } = req.query;
    const where = { estado: 'publicado' };
    if (categoria && categoria !== 'all' && categoria !== 'todos') {
      where.categoria = categoria;
    }

    const articulos = await prisma.articulo.findMany({
      where,
      include: { autor: true, _count: { select: { comentarios: true } } },
      orderBy: [{ publicadoEn: 'desc' }, { creadoEn: 'desc' }],
    });

    return res.json({ articulos: articulos.map((a) => mapArticulo(a, { incluirContenido: false })) });
  } catch (err) {
    next(err);
  }
}

// GET /api/v1/articulos/:slug  (incrementa vistas)
export async function obtenerArticuloPorSlug(req, res, next) {
  try {
    const articulo = await prisma.articulo.findUnique({
      where: { slug: req.params.slug },
      include: {
        autor: true,
        comentarios: { include: { usuario: true }, orderBy: { creadoEn: 'desc' } },
      },
    });
    if (!articulo || articulo.estado !== 'publicado') {
      return res.status(404).json({ message: 'Artículo no encontrado' });
    }

    await prisma.articulo.update({
      where: { id: articulo.id },
      data: { vistas: { increment: 1 } },
    });

    return res.json({ articulo: mapArticulo({ ...articulo, vistas: articulo.vistas + 1 }) });
  } catch (err) {
    next(err);
  }
}

// GET /api/v1/articulos/:slug/comentarios
export async function listarComentarios(req, res, next) {
  try {
    const articulo = await prisma.articulo.findUnique({ where: { slug: req.params.slug } });
    if (!articulo) {
      return res.status(404).json({ message: 'Artículo no encontrado' });
    }
    const comentarios = await prisma.comentario.findMany({
      where: { idArticulo: articulo.id },
      include: { usuario: true },
      orderBy: { creadoEn: 'desc' },
    });
    return res.json({ comentarios: comentarios.map(mapComentario) });
  } catch (err) {
    next(err);
  }
}

// POST /api/v1/articulos/:slug/comentarios  (auth)
export async function crearComentario(req, res, next) {
  try {
    const { contenido } = req.body ?? {};
    if (!contenido || !String(contenido).trim()) {
      return res.status(400).json({ message: 'El comentario no puede estar vacío' });
    }
    const articulo = await prisma.articulo.findUnique({ where: { slug: req.params.slug } });
    if (!articulo) {
      return res.status(404).json({ message: 'Artículo no encontrado' });
    }

    const comentario = await prisma.comentario.create({
      data: {
        idArticulo: articulo.id,
        idUsuario: req.usuario.id,
        contenido: String(contenido).trim(),
      },
      include: { usuario: true },
    });

    return res.status(201).json({ comentario: mapComentario(comentario) });
  } catch (err) {
    next(err);
  }
}
