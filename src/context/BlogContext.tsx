import React, { createContext, useState, type ReactNode } from 'react';
import { type Post } from '../types';
import { marked } from 'marked';

interface BlogContextType {
  posts: Post[];
  getPost: (id: string) => Post | undefined;
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Interface interna estendida para guardar a data bruta de ordenação
interface StaticPost extends Post {
  _rawDate: string;
}

// Carregar posts de forma estática do diretório src/data/posts/*.md
const loadStaticPosts = (): Post[] => {
  const modules = import.meta.glob('/src/data/posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  }) as Record<string, string>;

  const loadedPosts: StaticPost[] = [];

  for (const path in modules) {
    const rawContent = modules[path];
    
    // Extrair ID/slug a partir do nome do arquivo
    // Ex: /src/data/posts/auditoria-de-logs-de-seguranca.md -> auditoria-de-logs-de-seguranca
    const id = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.md'));

    // 1. Extrair data de postagem via comentário HTML: <!-- Date: YYYY-MM-DD -->
    const dateMatch = rawContent.match(/<!--\s*Date:\s*([0-9-]{10})\s*-->/);
    const rawDate = dateMatch ? dateMatch[1] : '2026-05-21';

    // Formatar data em português: YYYY-MM-DD -> DD Mês YYYY
    const [year, month, day] = rawDate.split('-');
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const formattedDate = `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;

    // 2. Extrair título a partir do primeiro #
    const titleMatch = rawContent.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : "Publicação Sem Título";

    // 3. Gerar preview limpo de 120 caracteres
    let preview = "";
    try {
      const rawHtml = marked.parse(rawContent) as string;
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawHtml, 'text/html');
      const plainText = doc.body.textContent || doc.body.innerText || '';
      const cleanText = plainText.replace(/\s+/g, ' ').trim();
      preview = cleanText.substring(0, 120);
      if (cleanText.length > 120) {
        preview += '...';
      }
    } catch (e) {
      // Fallback em caso de falha do parser
      console.error("Erro ao fazer parse do preview", e);
      const textOnly = rawContent
        .replace(/<!--[\s\S]*?-->/g, '') // remove comentários
        .replace(/[#*`_-]/g, '')        // remove caracteres md
        .replace(/\s+/g, ' ')
        .trim();
      preview = textOnly.substring(0, 120);
      if (textOnly.length > 120) {
        preview += '...';
      }
    }

    loadedPosts.push({
      id,
      title,
      content: rawContent,
      preview,
      uploadDate: formattedDate,
      _rawDate: rawDate
    });
  }

  // Ordenar posts do mais recente ao mais antigo (pela data crua YYYY-MM-DD)
  return loadedPosts.sort((a, b) => b._rawDate.localeCompare(a._rawDate));
};

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts] = useState<Post[]>(loadStaticPosts);

  const getPost = (id: string) => {
    return posts.find(p => p.id === id);
  };

  return (
    <BlogContext.Provider value={{ posts, getPost }}>
      {children}
    </BlogContext.Provider>
  );
};
