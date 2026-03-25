import supertest from 'supertest';
import app from '../app.js';
import { consultar, pool } from '../db.js';

const request = supertest(app);

// Usar un correo único para cada corrida de prueba para evitar colisiones
const correoPrueba = `test_${Date.now()}@google.com`;
const contraseñaPrueba = 'secreto123';

describe('Endpoints de Autenticación', () => {

  // Limpiar el usuario de prueba después de las pruebas
  afterAll(async () => {
    try {
      await consultar('DELETE FROM usuarios WHERE correo = $1', [correoPrueba]);
    } catch (e) {
      console.error('Error limpiando base de datos después de las pruebas:', e);
    }
    await pool.end();
  });

  describe('POST /auth/registro', () => {
    it('debería registrar un nuevo usuario exitosamente', async () => {
      const respuesta = await request
        .post('/auth/registro')
        .send({
          correo: correoPrueba,
          contraseña: contraseñaPrueba
        });

      expect(respuesta.status).toBe(201);
      expect(respuesta.body).toHaveProperty('mensaje', 'Usuario registrado exitosamente');
      expect(respuesta.body.usuario).toHaveProperty('id');
      expect(respuesta.body.usuario).toHaveProperty('correo', correoPrueba);
      // No debería devolver la contraseña
      expect(respuesta.body.usuario).not.toHaveProperty('contraseña');
    });

    it('debería fallar al intentar registrar un usuario con el mismo correo', async () => {
      const respuesta = await request
        .post('/auth/registro')
        .send({
          correo: correoPrueba,
          contraseña: 'otra_contraseña'
        });

      expect(respuesta.status).toBe(409);
      expect(respuesta.body).toHaveProperty('error', 'El usuario con ese correo ya existe');
    });

    it('debería fallar si faltan datos', async () => {
      const respuesta = await request
        .post('/auth/registro')
        .send({ correo: 'solocorreo@google.com' });

      expect(respuesta.status).toBe(400);
      expect(respuesta.body).toHaveProperty('error', 'El correo y la contraseña son obligatorios');
    });
  });

  describe('POST /auth/login', () => {
    it('debería iniciar sesión exitosamente y devolver un JWT', async () => {
      const respuesta = await request
        .post('/auth/login')
        .send({
          correo: correoPrueba,
          contraseña: contraseñaPrueba
        });

      expect(respuesta.status).toBe(200);
      expect(respuesta.body).toHaveProperty('mensaje', 'Inicio de sesión exitoso');
      expect(respuesta.body).toHaveProperty('token');
      expect(respuesta.body.usuario).toHaveProperty('correo', correoPrueba);
    });

    it('debería fallar con credenciales inválidas (contraseña incorrecta)', async () => {
      const respuesta = await request
        .post('/auth/login')
        .send({
          correo: correoPrueba,
          contraseña: 'contraseña_incorrecta'
        });

      expect(respuesta.status).toBe(401);
      expect(respuesta.body).toHaveProperty('error', 'Credenciales inválidas');
    });

    it('debería fallar si el usuario no existe', async () => {
      const respuesta = await request
        .post('/auth/login')
        .send({
          correo: 'no_existo@google.com',
          contraseña: 'password123'
        });

      expect(respuesta.status).toBe(401);
      expect(respuesta.body).toHaveProperty('error', 'Credenciales inválidas');
    });
  });

});
