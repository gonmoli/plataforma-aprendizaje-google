import express from 'express';
import cors from 'cors';
import enrutadorAutenticacion from './routes/auth.js';

// Inicializar la aplicación de Express
const app = express();

// Configurar middlewares
app.use(cors()); // Permitir peticiones Cross-Origin
app.use(express.json()); // Analizar cuerpos de solicitudes JSON

// Montar el enrutador de autenticación bajo el prefijo /auth
app.use('/auth', enrutadorAutenticacion);

// Ruta básica para verificar que el servidor está funcionando
app.get('/salud', (req, res) => {
  res.status(200).json({ estado: 'Servidor funcionando correctamente' });
});

export default app;
