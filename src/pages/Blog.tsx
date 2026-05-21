import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';

export const Blog: React.FC = () => {
  const { posts } = usePosts();

  return (
    <main style={styles.main}>
      <div className="container" style={styles.container}>
        
        {/* Header do Blog */}
        <div style={styles.header}>
          <div>
            <h1 style={styles.blogTitle}>Publicações</h1>
            <p style={styles.blogSubtitle}>Ideias, tutoriais técnicos e anotações sobre cybersegurança e infraestrutura de T.I.</p>
          </div>
        </div>

        {/* Lista de Postagens */}
        {posts.length === 0 ? (
          <div style={styles.emptyState}>
            <p>Nenhuma publicação encontrada no momento. Volte em breve!</p>
          </div>
        ) : (
          <div style={styles.postsList}>
            {posts.map((post) => (
              <article key={post.id} style={styles.postCard}>
                <Link to={`/blog/${post.id}`} style={styles.cardLink}>
                  <span style={styles.postDate}>{post.uploadDate}</span>
                  <h2 style={styles.postTitle}>{post.title}</h2>
                  <p style={styles.postPreview}>{post.preview}</p>
                  <span style={styles.readMore}>Ler publicação →</span>
                </Link>
              </article>
            ))}
          </div>
        )}

      </div>
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
    maxWidth: '850px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '5rem',
  },
  blogTitle: {
    fontSize: '3.5rem',
    fontWeight: 300,
    fontStyle: 'italic',
    letterSpacing: '-0.02em',
    lineHeight: 1,
    marginBottom: '1rem',
  },
  blogSubtitle: {
    fontSize: '1.05rem',
    color: 'var(--text-muted)',
    maxWidth: '600px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
    border: '1px dashed var(--border-color)',
    color: 'var(--text-muted)',
  },
  postsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
  },
  postCard: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '3rem',
    borderBottom: '1px solid var(--border-color)',
  },
  cardLink: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  postDate: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  postTitle: {
    fontSize: '2rem',
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: 1.25,
    color: 'var(--text-color)',
    transition: 'var(--transition-fast)',
  },
  postPreview: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    lineHeight: 1.6,
  },
  readMore: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600,
    color: 'var(--text-color)',
    marginTop: '0.5rem',
  }
};

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    article[style*="postCard"] h2:hover {
      text-decoration: underline;
      text-underline-offset: 6px;
    }
  `;
  document.head.appendChild(styleEl);
}
