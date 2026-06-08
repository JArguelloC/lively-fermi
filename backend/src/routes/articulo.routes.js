// src/routes/articulo.routes.js
import { Router } from 'express';
import {
  listarArticulos,
  obtenerArticuloPorSlug,
  listarComentarios,
  crearComentario,
} from '../controllers/articulo.controller.js';
import { verificarToken } from '../middleware/auth.js';

const router = Router();

router.get('/', listarArticulos);
router.get('/:slug', obtenerArticuloPorSlug);
router.get('/:slug/comentarios', listarComentarios);
router.post('/:slug/comentarios', verificarToken, crearComentario);

export default router;
