# André Fragata | Portfólio & Blog Minimalista

Este é o projeto de portfólio pessoal e blog do profissional de T.I. e especialista em Cybersegurança **André Fragata**. O projeto foi construído utilizando a stack modernizada **Vite + React 18 + TypeScript + Vanilla CSS**, com design minimalista europeu, suporte automático a Dark/Light Mode e importação dinâmica de publicações via Markdown.

---

## 🚀 Tecnologias e Bibliotecas Utilizadas

- **Core:** Vite + React 18 + TypeScript (com sintaxe rígida `verbatimModuleSyntax` para tipagem de módulos)
- **Roteamento:** `react-router-dom` v6
- **Markdown Parsing:** `marked` (processamento síncrono ultra-rápido de arquivos `.md`)
- **Syntax Highlight:** `highlight.js` (relevo de sintaxe encapsulado nativamente com os estilos minimalistas do tema global)
- **Estilização:** Vanilla CSS refinado (off-white, tipografia Cormorant Garamond / DM Sans, espaço negativo abundante, micro-animações de entrada com `IntersectionObserver` e suporte nativo a temas).

---

## 🛠️ Instruções de Instalação e Execução Local

Siga os passos abaixo para rodar o projeto localmente em sua máquina:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em sua máquina.

### 2. Instalação das Dependências
Clone ou acesse o diretório do projeto e execute:
```bash
npm install
```

### 3. Execução em Modo de Desenvolvimento
Inicie o servidor de desenvolvimento local:
```bash
npm run dev
```
O servidor estará acessível por padrão no endereço: `http://localhost:5173`.

### 4. Build de Produção
Para compilar e testar a versão otimizada final do projeto:
```bash
npm run build
```

---

## 📂 Estrutura de Arquivos Principal

- `src/data/profile.ts`: Arquivo que centraliza todas as informações do profissional (Nome, Localização, Responsabilidades do cargo atual, lista de Certificações, etc.). Altere os dados neste arquivo para atualizar automaticamente todo o site.
- `src/context/BlogContext.tsx`: Gerenciador do estado global do blog, contendo persistência via `localStorage` e a lógica de parseamento das publicações.
- `src/pages/Blog.tsx`: Página do feed de publicações com um botão para abrir o **Drawer Lateral** para uploads de arquivos `.md`.
- `exemplo-cyberseguranca.md`: Um arquivo de publicação de exemplo pronto para testar o fluxo de upload no drawer lateral.

---

## ☁️ Deploy Fácil na Vercel

O projeto está totalmente configurado e otimizado para deploy instantâneo na **Vercel** usando `npm run build`.

### Método 1: Pelo Dashboard da Vercel (Recomendado)
1. Crie uma conta ou faça login em [Vercel](https://vercel.com).
2. Conecte seu repositório Git (GitHub, GitLab ou Bitbucket) onde subiu o projeto.
3. Importe o projeto no painel da Vercel.
4. A Vercel detectará automaticamente a configuração do **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (ou `vite build`)
   - **Output Directory**: `dist`
5. Clique em **Deploy** e seu site estará online em poucos segundos!

### Método 2: Pelo Vercel CLI (Linha de Comando)
Caso possua a CLI do Vercel instalada globalmente (`npm install -g vercel`), basta executar na pasta raiz do projeto:
```bash
vercel
```
Siga as perguntas rápidas no terminal e confirme. Para enviar direto para produção, execute:
```bash
vercel --prod
```
