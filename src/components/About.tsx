import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const linkedinUsername = profileData.linkedin
    .replace('https://www.linkedin.com/in/', '')
    .replace('https://linkedin.com/in/', '')
    .replace(/\/$/, '');

  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="asymmetric-grid">
          {/* Coluna Esquerda: Título */}
          <div>
            <h2 className="section-title">Sobre mim</h2>
          </div>

          {/* Coluna Direita: Conteúdo */}
          <div style={styles.content}>
            <p style={styles.lead}>
              Olá, sou André Fragata. Atuo na liderança técnica e operacional de Tecnologia da Informação, com sólida especialização e foco em **Cybersegurança** e **Gestão de Infraestrutura de Redes**.
            </p>
            
            <p style={styles.paragraph}>
              Atualmente, coordeno o suporte técnico e a infraestrutura de rede da Prefeitura Municipal de Francisco Beltrão, gerenciando serviços, políticas de segurança alinhadas à LGPD e provendo conectividade e controle de acesso a mais de 80 unidades municipais.
            </p>

            <p style={styles.paragraph}>
              Minha trajetória é guiada pela segurança, automação e otimização contínua de recursos tecnológicos. Domino o provisionamento e governança de soluções open source robustas, como firewalls <strong>pfSense</strong>, roteadores <strong>MikroTik</strong>, ambientes de virtualização <strong>Proxmox VE</strong> e gestão de acessos com Active Directory em plataformas Linux e Windows.
            </p>

            <div style={styles.metaInfo}>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Localização:</span>
                <span style={styles.metaValue}>{profileData.location}</span>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Email:</span>
                <a href={`mailto:${profileData.email}`} style={styles.metaLink}>
                  {profileData.email}
                </a>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>LinkedIn:</span>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" style={styles.metaLink}>
                  {linkedinUsername}
                </a>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Contato:</span>
                <span style={styles.metaValue}>{profileData.phone}</span>
              </div>
            </div>

            <div style={styles.cvContainer}>
              <Link to="/curriculo" className="btn-secondary" style={styles.cvButton}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Gerar Versão Impressa (B&W PDF)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  lead: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
    lineHeight: 1.5,
    fontWeight: 300,
    color: 'var(--text-color)',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
  },
  metaInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    marginTop: '3rem',
    paddingTop: '2rem',
    borderTop: '1px solid var(--border-color)',
  },
  metaItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  metaLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  metaValue: {
    fontSize: '1rem',
    color: 'var(--text-color)',
    fontWeight: 400,
  },
  metaLink: {
    fontSize: '1rem',
    color: 'var(--text-color)',
    fontWeight: 400,
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  },
  cvContainer: {
    marginTop: '2.5rem',
    display: 'flex',
  },
  cvButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 600,
  }
};

// Responsividade para a lista de informações no mobile vs tablet
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (min-width: 576px) {
      div[style*="metaInfo"] {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
