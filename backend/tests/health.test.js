// tests/health.test.js - Pruebas de humo del servidor (sin base de datos)
import { test } from 'node:test';
import assert from 'node:assert/strict';

process.env.NODE_ENV = 'test';

const { default: app } = await import('../src/app.js');

// Mini helper para llamar a la app de Express sin levantar un puerto real.
import http from 'node:http';

function request(method, path, { body, headers } = {}) {
  return new Promise((resolve, reject) => {
    const server = http.createServer(app);
    server.listen(0, () => {
      const { port } = server.address();
      const payload = body ? JSON.stringify(body) : null;
      const req = http.request(
        {
          host: '127.0.0.1',
          port,
          method,
          path,
          headers: {
            'Content-Type': 'application/json',
            ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {}),
            ...headers,
          },
        },
        (res) => {
          let data = '';
          res.on('data', (c) => (data += c));
          res.on('end', () => {
            server.close();
            let json = null;
            try {
              json = data ? JSON.parse(data) : null;
            } catch {
              json = data;
            }
            resolve({ status: res.statusCode, body: json });
          });
        }
      );
      req.on('error', (e) => {
        server.close();
        reject(e);
      });
      if (payload) req.write(payload);
      req.end();
    });
  });
}

test('GET /health responde 200 con status success', async () => {
  const res = await request('GET', '/health');
  assert.equal(res.status, 200);
  assert.equal(res.body.status, 'success');
});

test('Ruta inexistente responde 404 con mensaje', async () => {
  const res = await request('GET', '/api/v1/no-existe');
  assert.equal(res.status, 404);
  assert.ok(res.body.message.includes('no encontrado'));
});

test('POST /api/v1/auth/login sin credenciales responde 400', async () => {
  const res = await request('POST', '/api/v1/auth/login', { body: {} });
  assert.equal(res.status, 400);
  assert.ok(res.body.message);
});

test('GET /api/v1/auth/me sin token responde 401', async () => {
  const res = await request('GET', '/api/v1/auth/me');
  assert.equal(res.status, 401);
});

test('GET /api/v1/pedidos sin token responde 401', async () => {
  const res = await request('GET', '/api/v1/pedidos');
  assert.equal(res.status, 401);
});
