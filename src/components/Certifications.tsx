import React from 'react';
import { profileData } from '../data/profile';

export const Certifications: React.FC = () => {
  const { certifications, totalCertHours } = profileData;

  return (
    <section id="certifications" className="section reveal">
      <div className="container">
        <div className="asymmetric-grid">
          {/* Coluna Esquerda: Título e Estatísticas */}
          <div>
            <h2 className="section-title">Certificações</h2>
            
            <div style={styles.statsCard}>
              <div style={styles.statGroup}>
                <span style={styles.statLabel}>Total Acumulado</span>
                <span style={styles.statNumber}>
                  {totalCertHours}
                  <span style={styles.statUnit}>h</span>
                </span>
              </div>
              <div style={styles.statGroup}>
                <span style={styles.statLabel}>Especialidades</span>
                <span style={styles.statNumber}>{certifications.length}</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Grid de Certificados */}
          <div style={styles.rightColumn}>
            <p style={styles.introText}>
              Aperfeiçoamento profissional contínuo por meio de treinamentos intensivos em segurança, administração de sistemas Unix, infraestrutura de roteamento e DevOps.
            </p>

            <div style={styles.grid}>
              {certifications.map((cert, idx) => {
                // Calcular percentual em relação ao maior curso (pfSense - 85h)
                const percentage = Math.min(100, Math.round((cert.hours / 85) * 100));

                return (
                  <div key={idx} style={styles.certCard}>
                    <div style={styles.cardHeader}>
                      <h3 style={styles.certName}>{cert.name}</h3>
                      <span style={styles.certHours}>{cert.hours}h</span>
                    </div>
                    {/* Barra de progresso minimalista */}
                    <div style={styles.progressBarBg}>
                      <div style={{ ...styles.progressBarFill, width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  statsCard: {
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--card-bg)',
    maxWidth: '280px',
  },
  statGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  statLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  statNumber: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2.5rem',
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: 1,
    color: 'var(--text-color)',
  },
  statUnit: {
    fontSize: '1rem',
    fontFamily: 'var(--font-sans)',
    fontStyle: 'normal',
    color: 'var(--text-muted)',
    marginLeft: '0.25rem',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  introText: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: 'var(--text-muted)',
    maxWidth: '750px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
  certCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    paddingBottom: '1.25rem',
    borderBottom: '1px solid var(--border-color)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  certName: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.15rem',
    fontWeight: 500,
    color: 'var(--text-color)',
  },
  certHours: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: '1.25rem',
    color: 'var(--text-muted)',
  },
  progressBarBg: {
    width: '100%',
    height: '2px',
    backgroundColor: 'var(--border-color)',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'var(--text-color)',
    transition: 'width 1s ease-in-out',
  }
};

// Responsividade para o grid de certificações no desktop
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (min-width: 576px) {
      div[style*="grid"] {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 2rem !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
