import { Layout, Smartphone, Database, Film } from 'lucide-react';

const commonLinks = {
  cineverse: { repo: "https://github.com/ghsiqueira/cineverse", preview: "https://cineverse-weld.vercel.app/" },
  devtracker: { repo: "https://github.com/ghsiqueira/devtracker", preview: "https://ghsiqueira.pythonanywhere.com/" },
  portfolio: { repo: "https://github.com/ghsiqueira/my-dev-folio", preview: "https://github.com/ghsiqueira/my-dev-folio" },
  finance: { repo: "https://github.com/ghsiqueira" }
};

export const projectsData = {
  en: [
    {
      id: 1,
      title: "CineVerse",
      description: "Solves the problem of 'what to watch next' by using Gemini AI to understand user taste. It also tracks episodes and organizes release dates automatically.",
      tags: ["React + Vite", "Gemini AI", "TMDB API"],
      icon: Film,
      repoLink: commonLinks.cineverse.repo,
      previewLink: commonLinks.cineverse.preview,
    },
    {
      id: 2,
      title: "DevTracker",
      description: "A project manager that handles the planning phase for you. You input a raw idea, and the AI generates a structured WBS (Work Breakdown Structure) with tasks and estimated deadlines.",
      tags: ["Django 6", "AI Planning", "Bootstrap 5"],
      icon: Database,
      repoLink: commonLinks.devtracker.repo,
      previewLink: commonLinks.devtracker.preview,
    },
    {
      id: 3,
      title: "My Dev Folio",
      description: "My personal space to showcase work and skills. Developed to be fast and accessible, featuring a custom i18n system (English/Portuguese) and smooth interactions.",
      tags: ["Next.js 15", "TailwindCSS", "Framer Motion"],
      icon: Layout,
      repoLink: commonLinks.portfolio.repo,
      previewLink: commonLinks.portfolio.preview,
    },
    {
      id: 4,
      title: "FinanceApp",
      description: "Mobile application for quick expense tracking. Currently in development to help users maintain monthly budget control with minimal friction.",
      tags: ["React Native", "Mobile", "Finance"],
      icon: Smartphone,
      repoLink: commonLinks.finance.repo,
    },
  ],
  pt: [
    {
      id: 1,
      title: "CineVerse",
      description: "Resolve o problema de 'o que assistir' usando a IA do Gemini para entender o gosto do usuário. Também rastreia episódios assistidos e organiza datas de lançamentos automaticamente.",
      tags: ["React + Vite", "Gemini AI", "TMDB API"],
      icon: Film,
      repoLink: commonLinks.cineverse.repo,
      previewLink: commonLinks.cineverse.preview,
    },
    {
      id: 2,
      title: "DevTracker",
      description: "Um gerenciador de projetos que cuida do planejamento. Você insere uma ideia bruta e a IA gera uma EAP (Estrutura Analítica de Projeto) com tarefas técnicas e prazos estimados.",
      tags: ["Django 6", "Planejamento com IA", "Bootstrap 5"],
      icon: Database,
      repoLink: commonLinks.devtracker.repo,
      previewLink: commonLinks.devtracker.preview,
    },
    {
      id: 3,
      title: "My Dev Folio",
      description: "Meu espaço pessoal para exibir trabalhos e habilidades. Desenvolvido para ser rápido e acessível, com sistema próprio de internacionalização (Inglês/Português) e interações fluidas.",
      tags: ["Next.js 15", "TailwindCSS", "Framer Motion"],
      icon: Layout,
      repoLink: commonLinks.portfolio.repo,
      previewLink: commonLinks.portfolio.preview,
    },
    {
      id: 4,
      title: "FinanceApp",
      description: "Aplicativo mobile para registro rápido de despesas. Atualmente em desenvolvimento para ajudar no controle do orçamento mensal com o mínimo de atrito.",
      tags: ["React Native", "Mobile", "Finance"],
      icon: Smartphone,
      repoLink: commonLinks.finance.repo,
    },
  ]
};