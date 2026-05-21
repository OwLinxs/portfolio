import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';

export const Home: React.FC = () => {
  useEffect(() => {
    // Configura o Intersection Observer para animar a entrada dos elementos (.reveal)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Uma vez animado, não precisamos mais observar esse elemento
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Ativa quando 15% do elemento estiver visível
        rootMargin: '0px 0px -50px 0px', // Aciona um pouco antes de entrar na viewport
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main style={styles.main}>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
    </main>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    backgroundColor: 'var(--bg-color)',
    transition: 'background-color 0.4s ease',
    minHeight: '100vh',
  }
};
