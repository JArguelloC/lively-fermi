// src/routes/index.js - Agregador de rutas (Groove)

import { Router } from 'express';

import authRoutes from './auth.routes.js';
import productoRoutes from './producto.routes.js';
import articuloRoutes from './articulo.routes.js';
import favoritoRoutes from './favorito.routes.js';
import pedidoRoutes from './pedido.routes.js';

const router = Router();

// Autenticación y cuenta
router.use('/auth', authRoutes);

// Catálogo de productos
router.use('/productos', productoRoutes);

// Noticias / artículos (+ comentarios)
router.use('/articulos', articuloRoutes);

// Favoritos del usuario
router.use('/favoritos', favoritoRoutes);

// Pedidos / checkout
router.use('/pedidos', pedidoRoutes);

export default router;
