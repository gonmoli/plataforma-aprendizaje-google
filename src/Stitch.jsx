import React from 'react';

export default function Stitch() {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <header className="hero-section" style={{ paddingBottom: '2rem' }}>
        <div style={{ color: 'var(--accent-blue)', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>DESIGN MODULE</div>
        <h1 className="hero-title">Stitch: De Servilleta a React</h1>
        <p className="hero-subtitle">Convierte bocetos en interfaces de producción con IA avanzada.</p>
        <button className="btn btn-blue" style={{ marginTop: '1rem', padding: '16px 40px', fontSize: '1.1rem' }}>Ver Demo en Vivo</button>
      </header>
      
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Currículum del Módulo</h2>
        <div className="grid">
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0, 123, 255, 0.1)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}> 1 </div>
            <h3 style={{ fontSize: '1.3rem' }}>Fundamentos de UI Artificial</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Aprende los principios de composición visual que las IAs interpretan mejor desde un boceto manual.</p>
          </div>
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0, 123, 255, 0.1)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}> 2 </div>
            <h3 style={{ fontSize: '1.3rem' }}>Prompt Engineering para Diseño</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Domina la semántica para refinar componentes complejos y sistemas de diseño escalables.</p>
          </div>
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0, 123, 255, 0.1)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}> 3 </div>
            <h3 style={{ fontSize: '1.3rem' }}>Exportación a React y Flutter</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Puente final: integra el código generado por IA directamente en entornos de producción reales.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
