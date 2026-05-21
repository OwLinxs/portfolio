import React from 'react';
import { profileData } from '../data/profile';

export const Experience: React.FC = () => {
  const role = profileData.currentRole;

  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <div className="asymmetric-grid">
          {/* Coluna Esquerda: Título */}
          <div>
            <h2 className="section-title">Experiência</h2>
          </div>

          {/* Coluna Direita: Experiências Profissionais */}
          <div style={styles.container}>
            <div style={styles.experienceCard}>
              <div style={styles.header}>
                <span style={styles.period}>{role.period}</span>
                <h3 style={styles.roleTitle}>{role.role}</h3>
                <h4 style={styles.companyName}>{role.company}</h4>
              </div>

              <div style={styles.responsibilitiesContainer}>
                <p style={styles.sectionHeading}>Atribuições & Responsabilidades técnicas:</p>
                <ul style={styles.list}>
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx} style={styles.listItem}>
                      <span style={styles.bullet}>—</span>
                      <span style={styles.listText}>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  experienceCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  period: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  roleTitle: {
    fontSize: '2.25rem',
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: 1.2,
    color: 'var(--text-color)',
  },
  companyName: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.1rem',
    fontWeight: 500,
    color: 'var(--text-color)',
  },
  responsibilitiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  sectionHeading: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
    fontWeight: 600,
  },
  list: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  bullet: {
    color: 'var(--text-muted)',
    fontWeight: 'bold',
  },
  listText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: 'var(--text-muted)',
  }
};
