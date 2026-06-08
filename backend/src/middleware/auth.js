// src/middleware/auth.js - Autenticación JWT (Groove)
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-groove-secret-change-me';
const JWT_EXPIRES = process.env.JWT_EXPIRES || '7d';

/**
 * Genera un token JWT a partir de un payload { id, rol }.
 */
export function generarToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
}

/**
 * Middleware: exige un token válido. Coloca { id, rol } en req.usuario.
 */
export function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No autenticado: token no proporcionado' });
  }

  const token = authHeader.slice(7);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = { id: decoded.id, rol: decoded.rol };
    next();
  } catch (error) {
    const expirado = error.name === 'TokenExpiredError';
    return res.status(401).json({ message: expirado ? 'Token expirado' : 'Token inválido' });
  }
}

/**
 * Middleware: verifica el token si existe, pero no lo exige.
 */
export function verificarTokenOpcional(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    req.usuario = null;
    return next();
  }

  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET);
    req.usuario = { id: decoded.id, rol: decoded.rol };
  } catch {
    req.usuario = null;
  }
  next();
}

/**
 * Middleware factory: exige uno de los roles indicados.
 */
export function requiereRol(...roles) {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(401).json({ message: 'No autenticado' });
    }
    if (!roles.includes(req.usuario.rol)) {
      return res.status(403).json({ message: 'Acceso denegado: permisos insuficientes' });
    }
    next();
  };
}

export default { generarToken, verificarToken, verificarTokenOpcional, requiereRol };
