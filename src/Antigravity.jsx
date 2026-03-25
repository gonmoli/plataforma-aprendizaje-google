import React from 'react';

export default function Antigravity() {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <header className="hero-section" style={{ paddingBottom: '2rem' }}>
        <div style={{ color: 'var(--accent-green)', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>COURSE MODULE</div>
        <h1 className="hero-title">Antigravity: El IDE del Futuro</h1>
        <p className="hero-subtitle">Domina el entorno agéntico más avanzado.</p>
        <button className="btn btn-primary" style={{ marginTop: '1rem', padding: '16px 40px', fontSize: '1.1rem' }}>Inscribirse Ahora</button>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', marginTop: '3rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Plan de Estudios</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(19, 236, 91, 0.1)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Arquitectura de Antigravity</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>15 mins • Video & Lab</span>
              </div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(19, 236, 91, 0.1)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Configuración de Agentes</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>22 mins • Hands-on Project</span>
              </div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(19, 236, 91, 0.1)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Depuración Avanzada con Deep Think</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>35 mins • Case Study</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Tu Instructor</h2>
          <div className="glass-card" style={{ textAlign: 'center', boxShadow: 'var(--glow-green)' }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--accent-green)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: '#000', fontWeight: 'bold' }}> AV </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Dr. Adrian Vance</h3>
            <p style={{ color: 'var(--accent-green)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem' }}>Principal Engineer @ Google Cloud</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Experto en arquitectura de sistemas distribuidos y pionero en el desarrollo de entornos de desarrollo basados en agentes de inteligencia artificial.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
