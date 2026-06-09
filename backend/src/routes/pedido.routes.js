// src/routes/pedido.routes.js
import { Router } from 'express';
import {
  crearPedido,
  listarMisPedidos,
  obtenerPedido,
} from '../controllers/pedido.controller.js';
import { verificarToken, verificarTokenOpcional } from '../middleware/auth.js';

const router = Router();

// Permite crear pedidos a Invitados y a Usuarios Registrados
router.post('/', verificarTokenOpcional, crearPedido);

// Obligatorio: Solo usuarios autenticados pueden ver SU historial completo de pedidos
router.get('/', verificarToken, listarMisPedidos);

// Opcional: Permite a los invitados ver su pantalla de éxito usando el ID del pedido
router.get('/:id', verificarTokenOpcional, obtenerPedido); // <-- CAMBIADO A OPCIONAL

export default router;