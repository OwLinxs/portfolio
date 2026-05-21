import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import { marked } from 'marked';
import hljs from 'highlight.js';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPost } = usePosts();
  const navigate = useNavigate();
  const post = id ? getPost(id) : undefined;

  // Aplica syntax highlight após renderização
  useEffect(() => {
    if (post) {
      // Pequeno timeout para garantir que o DOM foi inteiramente atualizado pelo React
      const timer = setTimeout(() => {
        document.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightElement(block as HTMLElement);
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [post]);

  // Se o post não for encontrado, redireciona ou mostra erro
  if (!post) {
    return (
      <main style={styles.main}>
        <div className="container" style={styles.errorContainer}>
          <h1 style={styles.errorTitle}>Publicação não encontrada</h1>
          <p style={styles.errorText}>A publicação que você está procurando não existe ou foi removida.</p>
          <button onClick={() => navigate('/blog')} className="btn-primary">
            Voltar para o Blog
          </button>
        </div>
      </main>
    );
  }

  // Converter markdown bruto para HTML síncrono
  const htmlContent = marked.parse(post.content) as string;

  return (
    <main style={styles.main}>
      <article className="container" style={styles.container}>
        
        {/* Botão de Retorno */}
        <Link to="/blog" style={styles.backButton}>
          ← Voltar para as publicações
        </Link>

        {/* Cabeçalho do Artigo */}
        <header style={styles.header}>
          <span style={styles.postDate}>Publicado em {post.uploadDate}</span>
          <h1 style={styles.title}>{post.title}</h1>
          <div style={styles.divider}></div>
        </header>

        {/* Conteúdo Renderizado */}
        <div 
          className="prose" 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
          style={styles.content}
        />

      </article>
    </main>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    backgroundColor: 'var(--bg-color)',
    minHeight: '100vh',
    paddingTop: '8rem',
    paddingBottom: '8rem',
    transition: 'background-color 0.4s ease',
  },
  container: {
    maxWidth: '750px',
  },
  backButton: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
    fontWeight: 600,
    display: 'inline-block',
    marginBottom: '3rem',
    transition: 'var(--transition-fast)',
  },
  header: {
    marginBottom: '3rem',
  },
  postDate: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
    fontWeight: 500,
    display: 'block',
    marginBottom: '1rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
    fontWeight: 300,
    fontStyle: 'italic',
    lineHeight: 1.15,
    color: 'var(--text-color)',
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
  },
  divider: {
    width: '100px',
    height: '1px',
    backgroundColor: 'var(--border-color)',
    marginTop: '2rem',
  },
  content: {
    marginTop: '2rem',
  },
  errorContainer: {
    textAlign: 'center',
    padding: '6rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  errorTitle: {
    fontSize: '2.5rem',
    fontStyle: 'italic',
  },
  errorText: {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    maxWidth: '400px',
    lineHeight: 1.5,
  }
};

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    a[style*="backButton"]:hover {
      color: var(--text-color) !important;
      transform: translateX(-4px);
    }
  `;
  document.head.appendChild(styleEl);
}
