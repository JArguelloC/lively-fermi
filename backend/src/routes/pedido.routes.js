// src/routes/pedido.routes.js
import { Router } from 'express';
import {
  crearPedido,
  listarMisPedidos,
  obtenerPedido,
} from '../controllers/pedido.controller.js';
import { verificarToken } from '../middleware/auth.js';

const router = Router();

router.post('/', verificarToken, crearPedido);
router.get('/', verificarToken, listarMisPedidos);
router.get('/:id', verificarToken, obtenerPedido);

export default router;
