// src/app.js - Configuración de la aplicación Express sin .listen()

import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { corsConfig } from "./config/cors.js";
import { correlationId } from "./middleware/correlation.js";
import { helmetMiddleware, apiLimiter } from "./middleware/security.js";

// Cargar variables de entorno
dotenv.config();

const app = express();

// Confiar en el proxy (necesario en Vercel / entornos detrás de proxy)
app.set('trust proxy', 1);

// ========== MIDDLEWARE GLOBAL ==========

// 1. CORS - DEBE IR PRIMERO
app.use(cors(corsConfig));

// 2. Headers de seguridad (Helmet)
app.use(helmetMiddleware);

// 3. Rate Limiting - Limitar SOLO rutas sensibles
app.use('/api/v1/auth', apiLimiter);
app.use('/api/v1/pedidos', apiLimiter);


// 4. Parsear JSON
app.use(express.json());

// 5. Correlation ID para trazabilidad
app.use(correlationId);

// 6. Logger optimizado con medición de latencia (sin memory leak)
const logRequest = (req, res, next) => {
  const start = Date.now();
  const time = new Date().toISOString();
  console.log(`[${time}] → ${req.method} ${req.url}`);
  const onFinish = () => {
    const duration = Date.now() - start;
    console.log(`[${time}] ← ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
  };
  res.once('finish', onFinish);
  res.once('close', () => {
    res.removeListener('finish', onFinish);
  });
  next();
};

app.use(logRequest);

// 7. Servir archivos estáticos (imágenes)
app.use('/public', express.static(path.join(process.cwd(), 'public')));

// ========== RUTAS ==========

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// API versionada
app.use('/api/v1', routes);
// Compat sin versión
app.use('/api', routes);

// ========== MANEJO DE ERRORES ==========

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({
    message: `Endpoint no encontrado: ${req.method} ${req.url}`
  });
});

// Error handler global
app.use((err, req, res, next) => {
  console.error('🔥 Error:', err.message);
  console.error(err.stack);

  let statusCode = 500;
  let message = 'Error interno del servidor';

  if (err.code === 'P2002') {
    statusCode = 409;
    message = 'Ya existe un registro con esos datos';
  } else if (err.code === 'P2025') {
    statusCode = 404;
    message = 'Registro no encontrado';
  } else if (err.code?.startsWith('P2')) {
    statusCode = 400;
    message = 'Error en la operación de base de datos';
  }

  if (err.message.includes('CORS')) {
    statusCode = 403;
    message = err.message;
  }

  res.status(statusCode).json({
    message,
    error: process.env.NODE_ENV === 'production' ? undefined : err.message
  });
});

export default app;
