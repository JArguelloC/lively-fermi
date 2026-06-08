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

// POST /api/v1/pedidos  (auth)
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

    const pedido = await prisma.$transaction(async (tx) => {
      let subtotal = 0;
      const articulos = [];

      for (const item of items) {
        const cantidad = Number(item.quantity ?? item.cantidad ?? 0);
        if (!cantidad || cantidad < 1) {
          throw Object.assign(new Error('Cantidad inválida en un artículo'), { status: 400 });
        }

        // Resolver variante: por id explícito o la primera del producto
        let variante = null;
        if (item.variantId) {
          variante = await tx.varianteProducto.findUnique({
            where: { id: item.variantId },
            include: { producto: true },
          });
        } else if (item.productId) {
          variante = await tx.varianteProducto.findFirst({
            where: { idProducto: item.productId },
            include: { producto: true },
          });
        }

        if (!variante) {
          throw Object.assign(new Error(`Producto no disponible: ${item.name ?? item.productId}`), {
            status: 400,
          });
        }
        if (variante.stock < cantidad) {
          throw Object.assign(
            new Error(`Stock insuficiente para "${variante.producto.titulo}". Disponibles: ${variante.stock}`),
            { status: 409 }
          );
        }

        await tx.varianteProducto.update({
          where: { id: variante.id },
          data: { stock: { decrement: cantidad } },
        });

        const precio = Number(variante.precio);
        subtotal += precio * cantidad;
        articulos.push({
          idProducto: variante.idProducto,
          idVariante: variante.id,
          titulo: variante.producto.titulo,
          sku: variante.sku,
          precio,
          cantidad,
          imagenUrl: variante.producto.imagenes?.[0] ?? null,
        });
      }

      const costoEnvio = subtotal > ENVIO_GRATIS_DESDE ? 0 : COSTO_ENVIO;
      const impuesto = 0;
      const total = subtotal + costoEnvio + impuesto;

      return tx.pedido.create({
        data: {
          idUsuario: req.usuario.id,
          estado: 'pagado',
          subtotal,
          impuesto,
          costoEnvio,
          total,
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
    });

    return res.status(201).json({ pedido: mapPedido(pedido) });
  } catch (err) {
    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    }
    next(err);
  }
}

// GET /api/v1/pedidos  (auth) -> pedidos del usuario
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

// GET /api/v1/pedidos/:id  (auth)
export async function obtenerPedido(req, res, next) {
  try {
    const pedido = await prisma.pedido.findUnique({
      where: { id: req.params.id },
      include: { articulos: true },
    });
    if (!pedido || pedido.idUsuario !== req.usuario.id) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    return res.json({ pedido: mapPedido(pedido) });
  } catch (err) {
    next(err);
  }
}
