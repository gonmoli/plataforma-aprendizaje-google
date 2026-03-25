import { Router } from 'express';
import { registrarUsuario, iniciarSesion } from '../controllers/auth.js';

const enrutador = Router();

// Ruta para el registro de un nuevo usuario
enrutador.post('/registro', registrarUsuario);

// Ruta para el inicio de sesión del usuario
enrutador.post('/login', iniciarSesion);

export default enrutador;
