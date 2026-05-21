import React from 'react';
import { profileData } from '../data/profile';

export const Education: React.FC = () => {
  const [degree, institution] = profileData.education.split(' — ');

  return (
    <section id="education" className="section reveal">
      <div className="container">
        <div className="asymmetric-grid">
          {/* Coluna Esquerda: Título */}
          <div>
            <h2 className="section-title">Formação</h2>
          </div>

          {/* Coluna Direita: Detalhes da Formação */}
          <div style={styles.container}>
            <div style={styles.educationCard}>
              <span style={styles.degreeType}>Graduação de Nível Superior</span>
              <h3 style={styles.degreeTitle}>{degree}</h3>
              <h4 style={styles.institution}>{institution}</h4>
              <p style={styles.details}>
                Formação com foco em engenharia de software, modelagem de dados, arquiteturas de sistemas e redes de computadores. Preparação acadêmica avançada integrada com aplicações práticas para resolução de problemas reais de T.I.
              </p>
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
    gap: '2.5rem',
  },
  educationCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    maxWidth: '750px',
  },
  degreeType: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  degreeTitle: {
    fontSize: '2.25rem',
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: 1.2,
    color: 'var(--text-color)',
  },
  institution: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.1rem',
    fontWeight: 500,
    color: 'var(--text-color)',
  },
  details: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
    marginTop: '1rem',
  }
};
