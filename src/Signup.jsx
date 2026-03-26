import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setStatusMsg('Registrando usuario...');
    
    try {
      const resp = await fetch('http://localhost:3000/auth/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: email, contraseña: password })
      });
      
      const data = await resp.json();
      if (resp.ok) {
        setStatusMsg('✅ Registro exitoso. Ahora puedes iniciar sesión.');
        setTimeout(() => navigate('/login'), 2000);
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
        <h2>Crear Cuenta</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Únete a la red de profesionales más grande del mundo</p>
        
        {statusMsg && <div style={{ marginBottom: '1rem', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px' }}>{statusMsg}</div>}

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Tu nombre completo" required value={name} onChange={e => setName(e.target.value)} />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="tu@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Crea una contraseña segura" required value={password} onChange={e => setPassword(e.target.value)} />
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
