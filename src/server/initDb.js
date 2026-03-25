import db from './db.js';

/**
 * Inicializa la base de datos creando la tabla de usuarios si no existe.
 */
const inicializarBaseDeDatos = async () => {
  const crearTablaUsuarios = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      correo VARCHAR(255) UNIQUE NOT NULL,
      contraseña VARCHAR(255) NOT NULL,
      fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.consultar(crearTablaUsuarios);
    console.log('Tabla "usuarios" creada o verificada exitosamente.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  } finally {
    // Cerramos el pool de conexiones al terminar
    await db.pool.end();
  }
};

inicializarBaseDeDatos();
