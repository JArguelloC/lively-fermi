// src/controllers/favorito.controller.js - Productos favoritos del usuario (Groove)
import { prisma } from '../lib/prisma.js';

// GET /api/v1/favoritos  (auth) -> { favoritos: [idProducto, ...] }
export async function listarFavoritos(req, res, next) {
  try {
    const favoritos = await prisma.usuarioProductoFavorito.findMany({
      where: { idUsuario: req.usuario.id },
      select: { idProducto: true },
    });
    return res.json({ favoritos: favoritos.map((f) => f.idProducto) });
  } catch (err) {
    next(err);
  }
}

// POST /api/v1/favoritos/:idProducto/toggle  (auth) -> { favorito: boolean }
export async function alternarFavorito(req, res, next) {
  try {
    const { idProducto } = req.params;
    const idUsuario = req.usuario.id;

    const producto = await prisma.producto.findUnique({ where: { id: idProducto } });
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    const existente = await prisma.usuarioProductoFavorito.findUnique({
      where: { idUsuario_idProducto: { idUsuario, idProducto } },
    });

    if (existente) {
      await prisma.usuarioProductoFavorito.delete({
        where: { idUsuario_idProducto: { idUsuario, idProducto } },
      });
      return res.json({ favorito: false });
    }

    await prisma.usuarioProductoFavorito.create({ data: { idUsuario, idProducto } });
    return res.json({ favorito: true });
  } catch (err) {
    next(err);
  }
}
