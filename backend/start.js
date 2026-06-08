// start.js - Servidor para desarrollo local
import dotenv from 'dotenv';
import app from './src/app.js';
import prisma from './src/lib/prisma.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Iniciar servidor
const server = app.listen(PORT, async () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📍 Entorno: ${process.env.NODE_ENV || 'development'}`);
  
  try {
    // Probar una consulta simple a la base de datos
    const result = await prisma.$queryRaw`SELECT current_database(), current_user`;
    console.log('✅ Conectado a la base de datos PostgreSQL');
    console.log('📊 Base de datos:', result[0]);
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
  }
});

// Manejo de cierre graceful
process.on('SIGTERM', async () => {
  console.log('⚠️ SIGTERM recibido. Cerrando servidor...');
  server.close(async () => {
    await prisma.$disconnect();
    console.log('✅ Servidor cerrado correctamente');
    process.exit(0);
  });
});

process.on('SIGINT', async () => {
  console.log('\n⚠️ SIGINT recibido. Cerrando servidor...');
  server.close(async () => {
    await prisma.$disconnect();
    console.log('✅ Servidor cerrado correctamente');
    process.exit(0);
  });
});
