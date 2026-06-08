// src/routes/auth.routes.js
import { Router } from 'express';
import {
  register,
  login,
  me,
  updateProfile,
  requestResetPassword,
  verifyEmail,
} from '../controllers/auth.controller.js';
import { verificarToken, verificarTokenOpcional } from '../middleware/auth.js';

const router = Router();

router.post('/register', register);
router.post('/registro', register); // alias en español
router.post('/login', login);
router.get('/me', verificarToken, me);
router.put('/profile', verificarToken, updateProfile);
router.post('/request-reset-password', requestResetPassword);
router.post('/verify-email', verificarTokenOpcional, verifyEmail);

export default router;
