import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';

export const Resume: React.FC = () => {
  const role = profileData.currentRole;

  const handlePrint = () => {
    window.print();
  };

  // Extrai nome de usuário limpo do link do LinkedIn
  const linkedinUsername = profileData.linkedin.replace('https://www.', '').replace('https://', '');

  return (
    <div style={styles.pageContainer}>
      {/* Estilos CSS embutidos para comportamento perfeito de tela e impressão A4 */}
      <style>{`
        /* Ocultar elementos do portfólio que não pertencem ao currículo */
        nav, footer {
          display: none !important;
        }

        /* Estilização da folha A4 no navegador */
        .resume-sheet {
          background-color: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          width: 210mm;
          min-height: 297mm;
          margin: 3rem auto;
          padding: 20mm 20mm;
          box-sizing: border-box;
          color: #000000;
          font-family: 'DM Sans', -apple-system, sans-serif;
          position: relative;
        }

        /* Títulos serifados elegantes para dar o tom premium */
        .resume-title {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0;
          color: #000000;
        }

        .resume-subtitle {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #333333;
          margin-top: 6px;
          margin-bottom: 20px;
          letter-spacing: 0.02em;
        }

        .resume-contact-bar {
          border-top: 1.5px solid #000000;
          border-bottom: 1.5px solid #000000;
          padding: 12px 0;
          margin-bottom: 30px;
          display: flex;
          justify-content: flex-start;
          gap: 30px;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #111111;
        }

        .resume-section {
          margin-bottom: 28px;
        }

        .resume-section-title {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 15px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          color: #000000;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 4px;
        }

        .resume-section-content {
          font-size: 13.5px;
          line-height: 1.6;
          color: #222222;
        }

        .timeline-entry {
          margin-bottom: 18px;
        }

        .timeline-header {
          font-weight: 700;
          font-size: 13.5px;
          margin-bottom: 4px;
          color: #000000;
        }

        .timeline-subheader {
          font-weight: 600;
          font-size: 13px;
          color: #444444;
          margin-bottom: 6px;
        }

        .resume-list {
          padding-left: 16px;
          margin: 6px 0 0 0;
        }

        .resume-list-item {
          margin-bottom: 4px;
          font-size: 13px;
          color: #333333;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px 20px;
        }

        .cert-item {
          font-size: 12.5px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed #e5e5e5;
          padding-bottom: 2px;
        }

        .cert-name {
          font-weight: 500;
          color: #222222;
        }

        .cert-hours {
          color: #666666;
          font-weight: 600;
        }

        /* Regras estritas para a Impressão */
        @media print {
          body, html {
            background-color: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .no-print {
            display: none !important;
          }

          .resume-sheet {
            box-shadow: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          @page {
            size: A4 portrait;
            margin: 15mm 15mm;
          }
        }
      `}</style>

      {/* Barra flutuante de controle - Apenas visível no navegador */}
      <div style={styles.floatingBar} className="no-print">
        <Link to="/" style={styles.backButton}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Voltar ao Portfólio
        </Link>

        <button onClick={handlePrint} style={styles.printButton}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          Imprimir / Salvar PDF
        </button>
      </div>

      {/* A folha física do currículo */}
      <div className="resume-sheet">
        {/* Cabeçalho */}
        <h1 className="resume-title">{profileData.name}</h1>
        <p className="resume-subtitle">{profileData.title}</p>

        {/* Barra de Contato entre duas linhas horizontais */}
        <div className="resume-contact-bar">
          <div className="contact-item">
            {/* Ícone de Telefone */}
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <circle cx="12" cy="12" r="11" fill="black" />
              <path d="M15.5 13.5c-.8 0-1.5-.1-2.2-.4-.2-.1-.5 0-.7.2l-1 1c-1.6-.8-2.9-2.1-3.7-3.7l1-1c.2-.2.3-.5.2-.7-.3-.7-.4-1.4-.4-2.2 0-.4-.4-.8-.8-.8H6c-.4 0-.8.4-.8.8 0 6.2 5 11.2 11.2 11.2.4 0 .8-.4.8-.8v-2.9c0-.4-.4-.8-.8-.8z" fill="white" transform="translate(1, 1) scale(0.9)" />
            </svg>
            <span>{profileData.phone}</span>
          </div>

          <div className="contact-item">
            {/* Ícone de Envelope/Email */}
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <circle cx="12" cy="12" r="11" fill="black" />
              <path d="M16.8 7.5H7.2c-.7 0-1.2.5-1.2 1.2v6.6c0 .7.5 1.2 1.2 1.2h9.6c.7 0 1.2-.5 1.2-1.2V8.7c0-.7-.5-1.2-1.2-1.2zm-.4 1.8l-4.4 2.8-4.4-2.8V8.7l4.4 2.8 4.4-2.8v.6z" fill="white" transform="translate(1, 1) scale(0.9)" />
            </svg>
            <span>{profileData.email}</span>
          </div>

          <div className="contact-item">
            {/* Ícone de LinkedIn */}
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <circle cx="12" cy="12" r="11" fill="black" />
              <path d="M17.5 5h-11C5.7 5 5 5.7 5 6.5v11c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5zM9.5 16.5H8v-6h1.5v6zm-.7-6.8c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9s.9.4.9.9c0 .5-.4.9-.9.9zm7.7 6.8h-1.5v-3.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3.5h-1.5v-6h1.5v.9c.4-.6 1.1-1 1.9-1 1.4 0 2.6 1.2 2.6 2.6v3.5z" fill="white" transform="translate(1.5, 1.5) scale(0.85)" />
            </svg>
            <span>{linkedinUsername}</span>
          </div>

          <div className="contact-item">
            {/* Ícone de Localização */}
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <circle cx="12" cy="12" r="11" fill="black" />
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" fill="white" transform="translate(1.5, 1.5) scale(0.85)" />
            </svg>
            <span>{profileData.location}</span>
          </div>
        </div>

        {/* Seção 1: Objetivos */}
        <div className="resume-section">
          <h2 className="resume-section-title">Objetivos</h2>
          <div className="resume-section-content">
            Meu objetivo é aplicar sólida experiência em coordenação de suporte de T.I. e administração de infraestrutura para otimizar processos e elevar os níveis de resiliência tecnológica. Com foco especializado em Cybersegurança, atuo no gerenciamento ativo de redes corporativas, servidores, virtualização de alta disponibilidade e implementação de políticas de segurança alinhadas à LGPD, assegurando a integridade e confidencialidade das informações em conformidade com as melhores práticas de governança de T.I.
          </div>
        </div>

        {/* Seção 2: Formação */}
        <div className="resume-section">
          <h2 className="resume-section-title">Formação</h2>
          <div className="resume-section-content">
            <div className="timeline-entry">
              <div className="timeline-header">
                CESUL — CENTRO UNIVERSITÁRIO DE FRANCISCO BELTRÃO
              </div>
              <div className="timeline-subheader">
                Tecnólogo em Análise e Desenvolvimento de Sistemas (Concluído)
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Experiência */}
        <div className="resume-section">
          <h2 className="resume-section-title">Experiências</h2>
          <div className="resume-section-content">
            <div className="timeline-entry">
              <div className="timeline-header">
                {role.period.toUpperCase()} | {role.company.toUpperCase()}
              </div>
              <div className="timeline-subheader">
                {role.role}
              </div>
              <div className="timeline-description">
                Coordenação de equipes técnicas e gestão operacional de toda a infraestrutura tecnológica do município.
                <ul className="resume-list">
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx} className="resume-list-item">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 4: Certificações */}
        <div className="resume-section">
          <h2 className="resume-section-title">Certificações & Cursos Especializados</h2>
          <div className="resume-section-content">
            <p style={{ marginBottom: '10px', fontSize: '12.5px', color: '#555555', fontStyle: 'italic' }}>
              Qualificação contínua voltada para infraestrutura e segurança de redes, somando <strong>{profileData.totalCertHours} horas</strong> de treinamento focado:
            </p>
            <div className="certs-grid">
              {profileData.certifications.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-hours">{cert.hours}h</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    backgroundColor: '#1E1E1E', // Fundo cinza escuro no navegador para destacar a folha branca
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    transition: 'background-color 0.4s ease',
  },
  floatingBar: {
    position: 'sticky',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 200,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.85rem 2rem',
    boxSizing: 'border-box',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  },
  backButton: {
    color: '#E5E5E5',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.2s ease',
  },
  printButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    borderRadius: '4px',
    padding: '0.6rem 1.2rem',
    fontSize: '0.85rem',
    fontWeight: 700,
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }
};
