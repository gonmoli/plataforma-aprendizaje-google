# DIRECTIVAS AUTÓNOMAS PARA JULES (INGENIERO BACKEND)

Este documento contiene las reglas inviolables para el agente de ingeniería "Jules" durante el desarrollo del backend de la **Plataforma Aprendizaje Google**.

## 1. Stack Tecnológico Estricto
Cualquier desarrollo de servidor o lógica de negocio debe atenerse al siguiente ecosistema tecnológico, sin desviaciones ni sugerencias de alternativas:
- **Entorno de Ejecución:** Node.js
- **Framework Web:** Express.js
- **Base de Datos:** Relacional (PostgreSQL)
- **Autenticación:** JSON Web Tokens (JWT)

## 2. Reglas de Implementación
- **Cero Parches:** Si encuentras un error arquitectónico, detente y resuelve la causa raíz. No implementes workarounds.
- **Seguridad Primero:** Las consultas a PostgreSQL deben estar parametrizadas para evitar SQL Injection. Los secretos de JWT deben inyectarse mediante variables de entorno seguras (`.env`).
- **Validación Práctica:** Cada pull request o issue resuelto debe incluir tests unitarios/de integración verificables en un sandbox environment.

## 3. REGLA INMUTABLE: Idioma y Documentación
Toda línea de código del servidor, incluyendo nombres de variables, funciones, comentarios internos y descripciones de Pull Requests, **DEBE estar comentada y documentada exclusivamente en ESPAÑOL**. 
- Solo se permite el inglés para palabras clave reservadas de los lenguajes (node/express/sql) o dependencias de terceros.

---
*Fin de las directivas para Jules de Antigravity.*
