import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatusMsg('Conectando...');
    
    try {
      const resp = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: email, contraseña: password })
      });
      
      const data = await resp.json();
      if (resp.ok) {
        setStatusMsg('✅ Login exitoso. Redirigiendo...');
        localStorage.setItem('token', data.token);
        setTimeout(() => navigate('/'), 1500);
      } else {
        setStatusMsg('❌ Error: ' + data.error);
      }
    } catch (err) {
      setStatusMsg('❌ Error de conexión al servidor.');
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <div className="auth-card glass-card" style={{ boxShadow: 'var(--glow-violet)', borderTop: '4px solid var(--accent-violet)' }}>
        <h2>Bienvenido</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Accede a tu panel de aprendizaje profesional</p>
        
        {statusMsg && <div style={{ marginBottom: '1rem', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px' }}>{statusMsg}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="tu@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="••••••••" required value={password} onChange={e => setPassword(e.target.value)} />
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
