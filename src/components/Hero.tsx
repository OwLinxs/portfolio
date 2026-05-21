import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Adiciona classe ativa após montagem para animação fluida do Hero
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={styles.hero}>
      <div className="container" style={styles.container}>
        <div style={{ ...styles.content, opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)' }}>
          <p style={styles.subtitle}>{profileData.location}</p>
          <h1 style={styles.title}>{profileData.name}</h1>
          <p style={styles.profession}>{profileData.title}</p>
          
          <div style={styles.ctaContainer}>
            <button onClick={handleScrollClick} className="btn-primary">
              Ver Portfólio
            </button>
            <Link to="/curriculo" className="btn-secondary">
              Gerar Currículo (PDF)
            </Link>
            <a href={`mailto:${profileData.email}`} className="btn-secondary">
              Falar Comigo
            </a>
          </div>
        </div>


        {/* Indicador de scroll discreto */}
        <div 
          onClick={handleScrollClick} 
          style={{ ...styles.scrollIndicator, opacity: mounted ? 1 : 0 }}
        >
          <span style={styles.scrollText}>Role para descobrir</span>
          <div style={styles.scrollLine}></div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderBottom: '1px solid var(--border-color)',
    paddingTop: '4.5rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
  },
  content: {
    maxWidth: '800px',
    transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  subtitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'var(--text-muted)',
    marginBottom: '1rem',
    fontWeight: 500,
  },
  title: {
    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
    fontWeight: 300,
    letterSpacing: '-0.03em',
    lineHeight: 1,
    marginBottom: '1.5rem',
    fontStyle: 'italic',
  },
  profession: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    color: 'var(--text-muted)',
    marginBottom: '3rem',
    fontWeight: 300,
  },
  ctaContainer: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '3rem',
    left: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.75rem',
    cursor: 'pointer',
    transition: 'opacity 1s ease 0.5s',
  },
  scrollText: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
  },
  scrollLine: {
    width: '40px',
    height: '1px',
    backgroundColor: 'var(--text-color)',
    animation: 'pulse 2s infinite ease-in-out',
  }
};

// Injetar keyframe de animação de pulso para a linha de scroll
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @keyframes pulse {
      0% { width: 40px; opacity: 0.3; }
      50% { width: 80px; opacity: 1; }
      100% { width: 40px; opacity: 0.3; }
    }
  `;
  document.head.appendChild(styleEl);
}
