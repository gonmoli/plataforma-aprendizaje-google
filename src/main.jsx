import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Antigravity from './Antigravity';
import Stitch from './Stitch';
import Login from './Login';
import Signup from './Signup';

function Layout({ children }) {
  return (
    <>
      <nav>
        <Link to="/" className="nav-logo">
          <div style={{ width: 24, height: 24, background: 'var(--text-primary)', borderRadius: '50%' }}></div>
          EduAI Google
        </Link>
        <div className="nav-links">
          <Link to="/antigravity">Antigravity</Link>
          <Link to="/stitch">Stitch</Link>
          <Link to="/login" style={{ color: 'var(--accent-violet)' }}>Entrar</Link>
        </div>
      </nav>
      {children}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/antigravity" element={<Antigravity />} />
          <Route path="/stitch" element={<Stitch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
