// src/lib/prisma.js - Cliente Prisma (singleton)
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

// En entorno de pruebas no inicializamos Prisma: exportamos un stub que falla
// si alguien intenta tocar la base de datos. Así el import de la app no requiere DB.
function crearStub() {
  return new Proxy(
    {},
    {
      get() {
        throw new Error('Prisma está deshabilitado en pruebas (NODE_ENV=test).');
      },
    }
  );
}

const prisma =
  process.env.NODE_ENV === 'test'
    ? crearStub()
    : globalForPrisma.prisma ?? new PrismaClient({ log: ['error'] });

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  globalForPrisma.prisma = prisma;
}

export { prisma };
export default prisma;
