import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

export const usePosts = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('usePosts deve ser usado dentro de um BlogProvider');
  }
  return context;
};
