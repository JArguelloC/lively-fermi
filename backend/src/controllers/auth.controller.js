// src/controllers/auth.controller.js - Autenticación de usuarios (Groove)
import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma.js';
import { generarToken } from '../middleware/auth.js';
import { mapUsuario } from '../lib/mappers.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function respuestaSesion(usuario) {
  const token = generarToken({ id: usuario.id, rol: usuario.rol });
  return { token, usuario: mapUsuario(usuario) };
}

// POST /api/v1/auth/register
export async function register(req, res, next) {
  try {
    const { nombre, email, password } = req.body ?? {};

    if (!nombre || !email || !password) {
      return res.status(400).json({ message: 'Nombre, email y contraseña son obligatorios' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ message: 'El email no tiene un formato válido' });
    }
    if (String(password).length < 8) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres' });
    }

    const correo = String(email).toLowerCase().trim();
    const existente = await prisma.usuario.findUnique({ where: { correo } });
    if (existente) {
      return res.status(409).json({ message: 'Ya existe una cuenta con ese correo' });
    }

    const hashContrasena = await bcrypt.hash(String(password), 10);
    const usuario = await prisma.usuario.create({
      data: {
        correo,
        hashContrasena,
        nombreVisible: String(nombre).trim(),
        rol: 'cliente',
        correoVerificado: false,
        preferencias: { create: {} },
      },
    });

    return res.status(201).json(respuestaSesion(usuario));
  } catch (err) {
    next(err);
  }
}

// POST /api/v1/auth/login
export async function login(req, res, next) {
  try {
    const body = req.body ?? {};
    const email = body.email ?? body.correo ?? body.usuario;
    const { password } = body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
    }

    const correo = String(email).toLowerCase().trim();
    const usuario = await prisma.usuario.findUnique({ where: { correo } });
    if (!usuario || !usuario.hashContrasena) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const valido = await bcrypt.compare(String(password), usuario.hashContrasena);
    if (!valido) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    await prisma.usuario.update({
      where: { id: usuario.id },
      data: { ultimoAccesoEn: new Date() },
    });

    return res.json(respuestaSesion(usuario));
  } catch (err) {
    next(err);
  }
}

// GET /api/v1/auth/me
export async function me(req, res, next) {
  try {
    const usuario = await prisma.usuario.findUnique({ where: { id: req.usuario.id } });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.json({ usuario: mapUsuario(usuario) });
  } catch (err) {
    next(err);
  }
}

// PUT /api/v1/auth/profile
export async function updateProfile(req, res, next) {
  try {
    const { nombre, telefono, foto } = req.body ?? {};
    const data = {};
    if (nombre !== undefined) data.nombreVisible = String(nombre).trim();
    if (telefono !== undefined) data.telefono = telefono ? String(telefono).trim() : null;
    if (foto !== undefined) data.fotoUrl = foto ? String(foto).trim() : null;

    const usuario = await prisma.usuario.update({ where: { id: req.usuario.id }, data });
    return res.json({ usuario: mapUsuario(usuario) });
  } catch (err) {
    next(err);
  }
}

// POST /api/v1/auth/request-reset-password
export async function requestResetPassword(req, res) {
  // Respuesta neutral: no revelamos si el correo existe (anti-enumeración).
  return res.json({
    message: 'Si el correo existe, te enviaremos instrucciones para restablecer la contraseña.',
  });
}

// POST /api/v1/auth/verify-email
export async function verifyEmail(req, res, next) {
  try {
    if (req.usuario?.id) {
      const usuario = await prisma.usuario.update({
        where: { id: req.usuario.id },
        data: { correoVerificado: true },
      });
      return res.json({ message: 'Correo verificado', usuario: mapUsuario(usuario) });
    }
    return res.json({ message: 'Solicitud de verificación recibida' });
  } catch (err) {
    next(err);
  }
}
