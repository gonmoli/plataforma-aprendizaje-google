import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <div className="auth-card glass-card" style={{ boxShadow: 'var(--glow-violet)', borderTop: '4px solid var(--accent-violet)' }}>
        <h2>Crear Cuenta</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Únete a la red de profesionales más grande del mundo</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Tu nombre completo" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="tu@email.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Crea una contraseña segura" />
          </div>
          
          <button type="submit" className="btn btn-violet" style={{ marginTop: '1rem' }}>Crear Cuenta</button>
        </form>
        
        <div className="auth-links">
          <span style={{ color: 'var(--text-secondary)' }}>¿Ya tienes cuenta? </span>
          <Link to="/login">Iniciar Sesión</Link>
        </div>
        
        <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Ayuda</a>
        </div>
      </div>
    </div>
  );
}
