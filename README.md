# Plataforma Aprendizaje Google

Una plataforma ed-tech cinemática, impulsada por IA, construida para integrar y dominar el ecosistema de herramientas de desarrollo autónomo: **Antigravity**, **Stitch**, y **Jules**.

## Visión General del Sistema
La plataforma está diseñada con una arquitectura moderna de Front-End React.js implementando técnicas visuales avanzadas (*Glassmorphism*, paletas inmersivas oscuras) derivadas explícitamente de bocetos generados con IA (Stitch).

El servidor Backend opera en **Node.js con Express**, utilizando autenticación JWT de última generación y almacenamiento relacional de alta integridad estructural.

### Los Tres Pilares:
1. **Antigravity:** El IDE del futuro y entorno agéntico avanzado.
2. **Stitch:** Herramienta de traducción de bocetos y UI artificial a renderizado frontend real en React.
3. **Jules:** El ingeniero autónomo en la nube para el despliegue automático del backend y conexión con repositorios GitHub.

---

## Instrucciones de Instalación

### 1. Requisitos Previos
- [Node.js](https://nodejs.org/) (versión v18+ recomendada)
- Git 

### 2. Clonar el repositorio
```bash
git clone https://github.com/gonmoli/plataforma-aprendizaje-google.git
cd plataforma-aprendizaje-google
```

### 3. Instalación Cero-Fricción
En la raíz del proyecto, instala todas las dependencias del frontend web web (React, React Router) y las del servidor Node.js que Jules aprovisionó:
```bash
npm install
```

### 4. Configurar Entorno
Para arrancar el backend necesitas configurar variables de entorno. Renombra o copia el archivo base de Jules `src/server/.env.example` a `src/server/.env` e incluye tu información:
```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=jules_secret
DB_NAME=postgres
JWT_SECRET=tu_secreto_mas_seguro_aqui
```

### 5. Iniciar la Base de Datos
Antes de levantar el servidor por primera vez, construye la tabla relacional de Usuarios:
```bash
node src/server/initDb.js
```

### 6. Levantar Servidores en Paralelo
Tienes que ejecutar dos procesos de terminal separados para mantener ambos lados del puente escuchando e interactuando:

**Terminal 1 (Base de Datos y API - Puerto 3000):**
```bash
npm run server
```

**Terminal 2 (Interfaz Gráfica Dev Server - Puerto 5173):**
```bash
npm run dev
```

### 7. Uso
Una vez que ambas terminales reporten estado afirmativo de inicialización, abrí en tu navegador:
👉 `http://localhost:5173/`

Disfruta de la cinemática.

---

## Mantenimiento y Extensibilidad del Código 
- **Vanilla CSS:** Para mantener un rendimiento máximo absoluto sin sobrecarga de dependencias tipo Tailwind, todo el ecosistema de *glassmorphism* y micro-animaciones reside únicamente en `src/index.css`.
- **Patrón Eneatipo 1 (Anti-parches):** Toda solución implementada ha sido depurada buscando y eliminando la causa raíz.

*Desarrollado y mantenido autónomamente a través del motor KAIROS y el equipo IA Antigravity (2026).*
