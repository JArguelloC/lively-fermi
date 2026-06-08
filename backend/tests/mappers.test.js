// tests/mappers.test.js - Pruebas unitarias de los conversores Prisma -> DTO
import { test } from 'node:test';
import assert from 'node:assert/strict';

process.env.NODE_ENV = 'test';

const { mapProducto, mapUsuario, mapPedido } = await import('../src/lib/mappers.js');

test('mapProducto convierte campos en español a inglés y agrega stock', () => {
  const dto = mapProducto({
    id: 'prod-1',
    slug: 'abbey-road',
    titulo: 'Abbey Road',
    descripcion: 'Vinilo',
    categoria: 'music',
    artista: 'The Beatles',
    album: 'Abbey Road',
    genero: ['Rock'],
    etiquetas: ['vinilo'],
    precioBase: '34.99',
    precioComparado: null,
    moneda: 'USD',
    imagenes: ['/a.webp'],
    activo: true,
    destacado: true,
    enOferta: false,
    promedioRating: '4.90',
    totalResenas: 10,
    variantes: [{ id: 'v1', nombre: 'Estándar', sku: 'X-STD', precio: '34.99', stock: 5 }],
  });

  assert.equal(dto.name, 'Abbey Road');
  assert.equal(dto.title, 'Abbey Road');
  assert.equal(dto.price, 34.99);
  assert.equal(dto.artist, 'The Beatles');
  assert.equal(dto.stock, 5);
  assert.equal(dto.isAvailable, true);
  assert.equal(dto.variants.length, 1);
  assert.equal(dto.variants[0].price, 34.99);
});

test('mapUsuario expone email/rol y verificación', () => {
  const dto = mapUsuario({
    id: 'u1',
    correo: 'a@b.com',
    nombreVisible: 'Ana',
    rol: 'cliente',
    correoVerificado: true,
  });
  assert.equal(dto.email, 'a@b.com');
  assert.equal(dto.nombre, 'Ana');
  assert.equal(dto.rol, 'cliente');
  assert.equal(dto.emailVerificado, true);
});

test('mapPedido arma dirección de envío e items', () => {
  const dto = mapPedido({
    id: 'o1',
    idUsuario: 'u1',
    estado: 'pagado',
    subtotal: '34.99',
    impuesto: '0',
    costoEnvio: '5.99',
    total: '40.98',
    envioNombre: 'Ana',
    envioLinea1: 'Calle 1',
    envioCiudad: 'Quito',
    envioEstado: 'Pichincha',
    envioCodigoPostal: '170101',
    envioPais: 'Ecuador',
    metodoPago: 'tarjeta',
    articulos: [
      { idProducto: 'p1', idVariante: 'v1', titulo: 'Abbey Road', sku: 'X-STD', precio: '34.99', cantidad: 1 },
    ],
  });
  assert.equal(dto.total, 40.98);
  assert.equal(dto.shippingAddress.city, 'Quito');
  assert.equal(dto.items[0].title, 'Abbey Road');
  assert.equal(dto.items[0].quantity, 1);
});
