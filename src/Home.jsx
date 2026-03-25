import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <header className="hero-section">
        <h1 className="hero-title">Domina el Ecosistema Google AI</h1>
        <p className="hero-subtitle">Potencia tu flujo de trabajo con Inteligencia Artificial Agéntica y herramientas de desarrollo visual.</p>
        <Link to="/antigravity" className="btn btn-primary" style={{ marginTop: '1rem' }}>Empezar a Aprender</Link>
      </header>
      
      <div className="glass-card" style={{ marginBottom: '3rem', borderLeft: '4px solid #fff', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span className="badge">Próximamente</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Masterclass: Flujo de Trabajo Integrado</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem', maxWidth: '800px' }}>
            Uniendo teoría y práctica. Descubre los patrones cerebrales y de arquitectura que conectan a <strong>Antigravity</strong>, <strong>Stitch</strong> y <strong>Jules</strong> en un solo flujo maestro e imparable.
          </p>
          <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', cursor: 'not-allowed', border: '1px solid rgba(255,255,255,0.2)' }} disabled>
            Reservar Asiento
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="glass-card" style={{ borderTop: '4px solid var(--accent-green)', boxShadow: 'var(--glow-green)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-green)' }}>Antigravity</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>El IDE del Futuro. Aprende a dominar el entorno agéntico más avanzado y Deep Think.</p>
          <Link to="/antigravity" className="btn btn-primary" style={{ width: '100%' }}>Ver Curso</Link>
        </div>
        
        <div className="glass-card" style={{ borderTop: '4px solid var(--accent-blue)', boxShadow: 'var(--glow-blue)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-blue)' }}>Stitch</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>De Servilleta a React. Convierte bocetos en UI de producción con inteligencia artificial.</p>
          <Link to="/stitch" className="btn btn-blue" style={{ width: '100%' }}>Ver Curso</Link>
        </div>
        
        <div className="glass-card" style={{ borderTop: '4px solid var(--accent-violet)', boxShadow: 'var(--glow-violet)' }}>
          <span className="badge">Próximamente</span>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-violet)' }}>Jules</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>El Ingeniero Autónomo. Delegación de issues y Pull Requests en repositorios GitHub.</p>
          <button className="btn btn-violet" style={{ width: '100%', opacity: 0.5, cursor: 'not-allowed' }} disabled>Planificando Temario</button>
        </div>
      </div>
    </div>
  );
}
