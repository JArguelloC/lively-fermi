// src/controllers/pedido.controller.js - Pedidos / checkout (Groove)
import { prisma } from '../lib/prisma.js';
import { mapPedido } from '../lib/mappers.js';

const ENVIO_GRATIS_DESDE = 5000; // centavos ($50)
const COSTO_ENVIO = 599; // centavos ($5.99)

const METODOS = {
  card: 'tarjeta',
  credit_card: 'tarjeta',
  tarjeta: 'tarjeta',
  paypal: 'transferencia',
  transferencia: 'transferencia',
  efectivo: 'efectivo',
};

// POST /api/v1/pedidos  (Permite Invitados y Usuarios Autenticados)
export async function crearPedido(req, res, next) {
  try {
    const { items, shipping, paymentMethod, paymentIntentId } = req.body ?? {};

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'El pedido no contiene artículos' });
    }
    if (!shipping || !shipping.fullName || !shipping.addressLine1 || !shipping.city) {
      return res.status(400).json({ message: 'Faltan datos de envío obligatorios' });
    }

    const metodoPago = METODOS[paymentMethod] ?? 'tarjeta';
    
    // Si req.usuario existe (inyectado por verificarTokenOpcional), tomamos su id; si no, es null (Invitado)
    const idUsuario = req.usuario ? req.usuario.id : null;

    // AÑADIMOS LA CONFIGURACIÓN DE TIMEOUT AL FINAL DE LA TRANSACCIÓN
    const pedido = await prisma.$transaction(async (tx) => {
      let subtotal = 0;
      const articulos = [];

      for (const item of items) {
        // 1. Buscar el Producto según el modelo 'Producto'
        const prod = await tx.producto.findUnique({
          where: { id: item.productId },
        });
        if (!prod) {
          const err = new Error(`El producto con ID ${item.productId} no existe`);
          err.status = 404;
          throw err;
        }

        // 2. Buscar la Variante según el modelo 'VarianteProducto'
        const variante = await tx.varianteProducto.findUnique({
          where: { id: item.variantId },
        });
        if (!variante) {
          const err = new Error(`La variante con ID ${item.variantId} no existe`);
          err.status = 404;
          throw err;
        }

        // 3. Validar relación lógica
        if (variante.idProducto !== prod.id) {
          const err = new Error(`La variante no corresponde al producto`);
          err.status = 400;
          throw err;
        }

        // 4. Verificar disponibilidad utilizando 'stock'
        if (variante.stock < item.quantity) {
          const err = new Error(`Stock insuficiente para ${prod.titulo} (${variante.nombre})`);
          err.status = 400;
          throw err;
        }

        // 5. Decrementar el stock de la variante de forma atómica
        await tx.varianteProducto.update({
          where: { id: item.variantId },
          data: { stock: { decrement: item.quantity } },
        });

        // 6. Calcular precio en centavos usando 'precioBase'
        const precioCentavos = Math.round(Number(prod.precioBase) * 100);
        subtotal += precioCentavos * item.quantity;

        // Estructura de guardado
        articulos.push({
          idProducto: prod.id,
          idVariante: variante.id,
          cantidad: item.quantity,
          precio: precioCentavos, 
          titulo: prod.titulo,
          sku: variante.sku,
        });
      }

      const envio = subtotal > ENVIO_GRATIS_DESDE ? 0 : COSTO_ENVIO;
      const total = subtotal + envio;

      // 7. Registrar la cabecera del pedido
      return await tx.pedido.create({
        data: {
          idUsuario: idUsuario, 
          subtotal: subtotal,
          costoEnvio: envio, 
          total: total,
          envioNombre: shipping.fullName,
          envioLinea1: shipping.addressLine1, 
          envioLinea2: shipping.addressLine2 ?? null, 
          envioCiudad: shipping.city,
          envioEstado: shipping.state ?? '',
          envioCodigoPostal: shipping.postalCode ?? '',
          envioPais: shipping.country ?? 'Ecuador',
          metodoPago,
          idIntentoPago: paymentIntentId ?? null,
          articulos: { create: articulos },
        },
        include: { articulos: true },
      });
    }, {
      maxWait: 5000,  // Espera hasta 5 segundos para conectar
      timeout: 15000  // Da hasta 15 segundos para procesar toda la transacción
    }); // <-- AQUÍ SE APLICÓ LA SOLUCIÓN

    return res.status(201).json({ pedido: mapPedido(pedido) });
  } catch (err) {
    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    }
    next(err);
  }
}

// GET /api/v1/pedidos (Requiere autenticación estricta para el historial de un usuario)
export async function listarMisPedidos(req, res, next) {
  try {
    const pedidos = await prisma.pedido.findMany({
      where: { idUsuario: req.usuario.id },
      include: { articulos: true },
      orderBy: { creadoEn: 'desc' },
    });
    return res.json({ pedidos: pedidos.map(mapPedido) });
  } catch (err) {
    next(err);
  }
}

// GET /api/v1/pedidos/:id (Protección de rutas de órdenes)
export async function obtenerPedido(req, res, next) {
  try {
    const pedido = await prisma.pedido.findUnique({
      where: { id: req.params.id },
      include: { articulos: true },
    });

    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }

    if (pedido.idUsuario && (!req.usuario || pedido.idUsuario !== req.usuario.id)) {
      return res.status(403).json({ message: 'No tienes permisos para ver este pedido' });
    }

    return res.json({ pedido: mapPedido(pedido) });
  } catch (err) {
    next(err);
  }
}