import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Resume } from './pages/Resume';

// Componente utilitário para rolar ao topo nas mudanças de rota
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout principal dinâmico que oculta Navbar/Footer na página de currículo
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isResumePage = location.pathname === '/curriculo';

  return (
    <div style={styles.appContainer}>
      {!isResumePage && <Navbar />}
      
      {/* Conteúdo principal com flex para colar o rodapé no fim da tela se o conteúdo for curto */}
      <div style={styles.contentWrapper}>
        {children}
      </div>

      {!isResumePage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BlogProvider>
      <HashRouter>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/curriculo" element={<Resume />} />
          </Routes>
        </MainLayout>
      </HashRouter>
    </BlogProvider>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'var(--bg-color)',
    color: 'var(--text-color)',
  },
  contentWrapper: {
    flex: 1,
  }
};

export default App;

