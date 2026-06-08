// src/routes/producto.routes.js
import { Router } from 'express';
import {
  listarProductos,
  obtenerProductoPorSlug,
  obtenerProductoPorId,
} from '../controllers/producto.controller.js';

const router = Router();

router.get('/', listarProductos);
router.get('/id/:id', obtenerProductoPorId);
router.get('/:slug', obtenerProductoPorSlug);

export default router;
