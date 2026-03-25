import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { consultar } from '../db.js';

// Obtenemos el secreto de JWT de las variables de entorno
const secretoJWT = process.env.JWT_SECRET;

/**
 * Controlador para registrar un nuevo usuario en la base de datos
 */
export const registrarUsuario = async (req, res) => {
  const { correo, contraseña } = req.body;

  if (!correo || !contraseña) {
    return res.status(400).json({ error: 'El correo y la contraseña son obligatorios' });
  }

  try {
    // Verificar si el usuario ya existe
    const usuarioExistente = await consultar('SELECT id FROM usuarios WHERE correo = $1', [correo]);
    if (usuarioExistente.rows && usuarioExistente.rows.length > 0) {
      return res.status(409).json({ error: 'El usuario con ese correo ya existe' });
    }

    // Hashear la contraseña con un factor de costo de 10
    const saltRounds = 10;
    const contraseñaHasheada = await bcrypt.hash(contraseña, saltRounds);

    // Insertar el nuevo usuario usando consultas parametrizadas para evitar SQL Injection
    const resultado = await consultar(
      'INSERT INTO usuarios (correo, contraseña) VALUES ($1, $2) RETURNING id, correo, fecha_creacion',
      [correo, contraseñaHasheada]
    );

    const nuevoUsuario = resultado.rows[0];

    // Respondemos con el usuario creado (sin incluir la contraseña)
    res.status(201).json({
      mensaje: 'Usuario registrado exitosamente',
      usuario: nuevoUsuario
    });
  } catch (error) {
    console.error('Error en el registro de usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor al registrar el usuario' });
  }
};

/**
 * Controlador para iniciar sesión y obtener un token JWT
 */
export const iniciarSesion = async (req, res) => {
  const { correo, contraseña } = req.body;

  if (!correo || !contraseña) {
    return res.status(400).json({ error: 'El correo y la contraseña son obligatorios' });
  }

  try {
    // Buscar al usuario por correo
    const resultado = await consultar('SELECT * FROM usuarios WHERE correo = $1', [correo]);
    const usuario = resultado.rows ? resultado.rows[0] : null;

    if (!usuario) {
      // Devolvemos 401 si el usuario no existe para no revelar información específica
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Comparar la contraseña proporcionada con la guardada en la base de datos
    const esContraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!esContraseñaValida) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Generar el JSON Web Token con la información básica del usuario
    const payload = {
      id: usuario.id,
      correo: usuario.correo
    };

    // Firmar el token con expiración de 24 horas
    const token = jwt.sign(payload, secretoJWT, { expiresIn: '24h' });

    res.status(200).json({
      mensaje: 'Inicio de sesión exitoso',
      token,
      usuario: {
        id: usuario.id,
        correo: usuario.correo
      }
    });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor al iniciar sesión' });
  }
};
