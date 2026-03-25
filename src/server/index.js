import app from './app.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Asegurarnos de que las variables de entorno están cargadas
dotenv.config({ path: path.join(__dirname, '.env') });

const PUERTO = process.env.PORT || 3000;

// Iniciar el servidor escuchando en el puerto configurado
app.listen(PUERTO, () => {
  console.log(`🚀 Servidor ejecutándose en el puerto ${PUERTO}`);
  console.log(`Documentación disponible en español como requiere Antigravity.`);
});
