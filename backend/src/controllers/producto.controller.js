// src/controllers/producto.controller.js - Catálogo de productos (Groove)
import { prisma } from '../lib/prisma.js';
import { mapProducto } from '../lib/mappers.js';

const incluirVariantes = { variantes: true };

// GET /api/v1/productos?categoria=&destacado=&busqueda=
export async function listarProductos(req, res, next) {
  try {
    const { categoria, destacado, busqueda } = req.query;
    const where = { activo: true };

    if (categoria && categoria !== 'all' && categoria !== 'todos') {
      where.categoria = categoria;
    }
    if (destacado === 'true') {
      where.destacado = true;
    }
    if (busqueda) {
      where.OR = [
        { titulo: { contains: String(busqueda), mode: 'insensitive' } },
        { artista: { contains: String(busqueda), mode: 'insensitive' } },
        { album: { contains: String(busqueda), mode: 'insensitive' } },
      ];
    }

    const productos = await prisma.producto.findMany({
      where,
      include: incluirVariantes,
      orderBy: { creadoEn: 'desc' },
    });

    return res.json({ productos: productos.map(mapProducto) });
  } catch (err) {
    next(err);
  }
}

// GET /api/v1/productos/:slug
export async function obtenerProductoPorSlug(req, res, next) {
  try {
    const producto = await prisma.producto.findUnique({
      where: { slug: req.params.slug },
      include: incluirVariantes,
    });
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.json({ producto: mapProducto(producto) });
  } catch (err) {
    next(err);
  }
}

// GET /api/v1/productos/id/:id
export async function obtenerProductoPorId(req, res, next) {
  try {
    const producto = await prisma.producto.findUnique({
      where: { id: req.params.id },
      include: incluirVariantes,
    });
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.json({ producto: mapProducto(producto) });
  } catch (err) {
    next(err);
  }
}
