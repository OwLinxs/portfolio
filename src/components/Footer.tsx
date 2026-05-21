import React from 'react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        
        {/* Bloco Superior */}
        <div style={styles.topRow}>
          <div>
            <h3 style={styles.brandName}>
              {profileData.name}
              <span style={styles.dot}>.</span>
            </h3>
            <p style={styles.tagline}>{profileData.title}</p>
          </div>
          
          <button onClick={handleScrollToTop} style={styles.backToTop} aria-label="Voltar para o topo">
            Voltar ao Topo ↑
          </button>
        </div>

        {/* Bloco Inferior */}
        <div style={styles.bottomRow}>
          <div style={styles.copy}>
            © {currentYear} André Fragata. Todos os direitos reservados.
          </div>
          
          <div style={styles.links}>
            <a href={`mailto:${profileData.email}`} style={styles.link}>
              Email
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" style={styles.link}>
              LinkedIn
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    padding: '6rem 0 4rem 0',
    backgroundColor: 'var(--bg-color)',
    borderTop: '1px solid var(--border-color)',
    transition: 'background-color 0.4s ease, border-color 0.4s ease',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  brandName: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2rem',
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: 1.1,
  },
  dot: {
    color: 'var(--text-muted)',
  },
  tagline: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    marginTop: '0.5rem',
  },
  backToTop: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    padding: '0.5rem 0',
    borderBottom: '1px solid transparent',
    transition: 'var(--transition-fast)',
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    paddingTop: '2rem',
    borderTop: '1px solid var(--border-color)',
  },
  copy: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
    fontWeight: 500,
  }
};

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    footer button[style*="backToTop"]:hover {
      color: var(--text-color) !important;
      border-color: var(--text-color) !important;
    }
    footer a[style*="link"]:hover {
      color: var(--text-color) !important;
    }
  `;
  document.head.appendChild(styleEl);
}
