import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <div className="auth-card glass-card" style={{ boxShadow: 'var(--glow-violet)', borderTop: '4px solid var(--accent-violet)' }}>
        <h2>Bienvenido</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Accede a tu panel de aprendizaje profesional</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="tu@email.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="btn btn-violet" style={{ marginTop: '1rem' }}>Entrar</button>
        </form>
        
        <div className="auth-links">
          <a href="#" style={{ display: 'block', marginBottom: '1rem' }}>¿Olvidaste tu contraseña?</a>
          <span style={{ color: 'var(--text-secondary)' }}>¿No tienes cuenta? </span>
          <Link to="/signup">Regístrate</Link>
        </div>
        
        <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
          Tecnología de Seguridad Certificada
        </div>
      </div>
    </div>
  );
}
