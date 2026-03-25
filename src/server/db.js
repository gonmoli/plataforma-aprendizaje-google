import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno desde .env
dotenv.config({ path: path.join(__dirname, '.env') });

const { Pool } = pg;

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

/**
 * Ejecuta una consulta SQL parametrizada
 * @param {string} texto - La consulta SQL
 * @param {Array} parametros - Los parámetros para la consulta
 * @returns {Promise<Object>} El resultado de la consulta
 */
export const consultar = async (texto, parametros) => {
  try {
    const inicio = Date.now();
    const resultado = await pool.query(texto, parametros);
    const duracion = Date.now() - inicio;
    console.log('Consulta ejecutada', { texto, duracion, filas: resultado.rowCount });
    return resultado;
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
    throw error;
  }
};

export {
  pool
};

export default {
  consultar,
  pool
};
