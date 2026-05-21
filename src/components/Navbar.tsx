import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profileData } from '../data/profile';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark-mode');
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = ['hero', 'about', 'experience', 'education', 'certifications'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Compensação da altura da navbar
      
      // Caso especial: no topo da página
      if (window.scrollY < 50) {
        setActiveSection('hero');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executar inicialmente
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Aplicar tema no html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Estilização inline básica para a Navbar no escopo minimalista
  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.navContainer}>
        {/* Logo / Nome */}
        <Link to="/" style={styles.logo} onClick={() => handleNavClick('hero')}>
          {profileData.name}
          <span style={styles.logoDot}>.</span>
        </Link>

        {/* Links de navegação desktop */}
        <div style={styles.navLinks}>
          {location.pathname === '/' ? (
            <>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                style={{ ...styles.link, ...(activeSection === 'about' ? styles.activeLink : {}) }}
              >
                Sobre
              </a>
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}
                style={{ ...styles.link, ...(activeSection === 'experience' ? styles.activeLink : {}) }}
              >
                Experiência
              </a>
              <a 
                href="#education" 
                onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}
                style={{ ...styles.link, ...(activeSection === 'education' ? styles.activeLink : {}) }}
              >
                Formação
              </a>
              <a 
                href="#certifications" 
                onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }}
                style={{ ...styles.link, ...(activeSection === 'certifications' ? styles.activeLink : {}) }}
              >
                Certificações
              </a>
            </>
          ) : (
            <Link to="/" style={styles.link}>
              Home
            </Link>
          )}
          
          <Link 
            to="/blog" 
            style={{ 
              ...styles.link, 
              ...(location.pathname.startsWith('/blog') ? styles.activeLink : {}) 
            }}
          >
            Blog
          </Link>

          {/* Switcher Dark/Light */}
          <button 
            onClick={toggleDarkMode} 
            style={styles.themeToggle} 
            title="Alternar Tema"
            aria-label="Alternar Tema"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Hamburguer menu para mobile */}
        <div style={styles.mobileActions}>
          <button onClick={toggleDarkMode} style={styles.themeToggleMobile} aria-label="Alternar Tema">
            {isDark ? '☀️' : '🌙'}
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            style={styles.burgerBtn}
            aria-label="Abrir Menu"
          >
            <div style={{ ...styles.burgerLine, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
            <div style={{ ...styles.burgerLine, opacity: menuOpen ? 0 : 1 }}></div>
            <div style={{ ...styles.burgerLine, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
          </button>
        </div>
      </div>

      {/* Menu mobile expansível */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {location.pathname === '/' ? (
            <>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                style={activeSection === 'about' ? styles.mobileActiveLink : styles.mobileLink}
              >
                Sobre
              </a>
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}
                style={activeSection === 'experience' ? styles.mobileActiveLink : styles.mobileLink}
              >
                Experiência
              </a>
              <a 
                href="#education" 
                onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}
                style={activeSection === 'education' ? styles.mobileActiveLink : styles.mobileLink}
              >
                Formação
              </a>
              <a 
                href="#certifications" 
                onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }}
                style={activeSection === 'certifications' ? styles.mobileActiveLink : styles.mobileLink}
              >
                Certificações
              </a>
            </>
          ) : (
            <Link to="/" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          )}
          <Link 
            to="/blog" 
            style={location.pathname.startsWith('/blog') ? styles.mobileActiveLink : styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
};

// Estilização in-JS para garantir encapsulamento sem dependências e carregar o tema de forma resiliente
const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-color)',
    zIndex: 100,
    transition: 'background-color 0.4s ease, border-color 0.4s ease',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4.5rem',
  },
  logo: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '-0.01em',
    color: 'var(--text-color)',
    textDecoration: 'none',
  },
  logoDot: {
    color: 'var(--text-muted)',
  },
  navLinks: {
    display: 'none', // Oculto por padrão no mobile
    alignItems: 'center',
    gap: '2.5rem',
  },
  link: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
    transition: 'color 0.2s ease',
    fontWeight: 500,
  },
  activeLink: {
    color: 'var(--text-color)',
    borderBottom: '1px solid var(--text-color)',
    paddingBottom: '0.2rem',
  },
  themeToggle: {
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '0.3rem',
    border: 'none',
    background: 'none',
  },
  mobileActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  themeToggleMobile: {
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '0.3rem',
    border: 'none',
    background: 'none',
  },
  burgerBtn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '24px',
    height: '18px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  burgerLine: {
    width: '24px',
    height: '2px',
    backgroundColor: 'var(--text-color)',
    transition: 'all 0.3s ease',
  },
  mobileMenu: {
    position: 'absolute',
    top: '4.5rem',
    left: 0,
    width: '100%',
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem 2rem',
    gap: '1.25rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
  },
  mobileLink: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
    padding: '0.25rem 0',
  },
  mobileActiveLink: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-color)',
    fontWeight: 'bold',
    padding: '0.25rem 0',
  }
};

// Injetar estilos do media query para navegação desktop responsiva via tag style se necessário,
// ou simplesmente definindo regras CSS no index.css. Adicionaremos as classes de responsividade no index.css
// para esconder/mostrar de acordo com a viewport.
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (min-width: 768px) {
      nav div[style*="burgerBtn"] { display: none !important; }
      nav button[style*="themeToggleMobile"] { display: none !important; }
      nav div[style*="navLinks"] { display: flex !important; }
    }
  `;
  document.head.appendChild(styleEl);
}
