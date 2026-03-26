// Archivo modificado por KAIROS para simular PostgreSQL en memoria
// (Workaround para levantar el entorno sin Docker/Postgres nativo)

let usuarios = [];
let nextId = 1;

export const consultar = async (texto, parametros) => {
  try {
    const inicio = Date.now();
    let rows = [];
    
    if (texto.includes('CREATE TABLE')) {
      rows = [];
    } else if (texto.startsWith('SELECT id FROM usuarios WHERE correo')) {
      const user = usuarios.find(u => u.correo === parametros[0]);
      rows = user ? [{ id: user.id }] : [];
    } else if (texto.startsWith('INSERT INTO usuarios')) {
      const newUser = {
        id: nextId++,
        correo: parametros[0],
        contraseña: parametros[1], // ya viene hasheada de auth.js
        fecha_creacion: new Date()
      };
      usuarios.push(newUser);
      rows = [newUser];
    } else if (texto.startsWith('SELECT * FROM usuarios WHERE correo')) {
      const user = usuarios.find(u => u.correo === parametros[0]);
      rows = user ? [user] : [];
    }

    const duracion = Date.now() - inicio;
    console.log('Consulta ejecutada (Simulada)', { texto, duracion, filas: rows.length });
    
    return { rows, rowCount: rows.length };
  } catch (error) {
    console.error('Error al ejecutar la consulta simulada:', error);
    throw error;
  }
};

export const pool = {
  end: async () => { console.log('Mock pool closed'); }
};

export default {
  consultar,
  pool
};
