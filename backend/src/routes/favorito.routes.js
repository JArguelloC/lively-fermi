// src/routes/favorito.routes.js
import { Router } from 'express';
import { listarFavoritos, alternarFavorito } from '../controllers/favorito.controller.js';
import { verificarToken } from '../middleware/auth.js';

const router = Router();

router.get('/', verificarToken, listarFavoritos);
router.post('/:idProducto/toggle', verificarToken, alternarFavorito);

export default router;
