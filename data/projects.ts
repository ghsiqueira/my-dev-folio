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
      details: {
        problem: "Streaming platforms have too many options, causing 'decision paralysis'. Traditional filters are too rigid.",
        solution: "I integrated Google's Gemini API to create a chatbot that understands natural language context (e.g., 'I want a sci-fi like Interstellar but less sad') to provide highly personalized recommendations.",
        features: [
          "AI Chatbot with context memory",
          "Season progress tracker with visual bars",
          "Gamified Quiz to test movie knowledge",
          "Smart Release Calendar based on your watchlist"
        ]
      }
    },
    {
      id: 2,
      title: "DevTracker",
      description: "A project manager that handles the planning phase for you. You input a raw idea, and the AI generates a structured WBS (Work Breakdown Structure) with tasks and estimated deadlines.",
      tags: ["Django 6", "AI Planning", "Bootstrap 5"],
      icon: Database,
      repoLink: commonLinks.devtracker.repo,
      previewLink: commonLinks.devtracker.preview,
      details: {
        problem: "Developers often start coding without a clear plan, leading to scope creep and unfinished projects.",
        solution: "Acting as a Virtual Tech Lead, the system uses Generative AI to break down abstract ideas into technical tasks, estimating complexity and assigning priorities automatically.",
        features: [
          "Auto-WBS Generation (Work Breakdown Structure)",
          "Smart Priority Calibration (prevents 'everything is urgent')",
          "Automatic Scheduling based on complexity",
          "Secure API Key management"
        ]
      }
    },
    {
      id: 3,
      title: "My Dev Folio",
      description: "My personal space to showcase work and skills. Developed to be fast and accessible, featuring a custom i18n system (English/Portuguese) and smooth interactions.",
      tags: ["Next.js 15", "TailwindCSS", "Framer Motion"],
      icon: Layout,
      repoLink: commonLinks.portfolio.repo,
      previewLink: commonLinks.portfolio.preview,
      details: {
        problem: "Standard portfolios are often static and boring. I wanted something that reflected my frontend skills.",
        solution: "Built from scratch using the latest Next.js 15 features. It includes a custom Context API implementation for internationalization and Framer Motion for premium-feel micro-interactions.",
        features: [
          "Custom i18n (English/Portuguese)",
          "Fluid Animations using Framer Motion",
          "Fully Responsive (Mobile First)",
          "Clean Architecture"
        ]
      }
    },
    {
      id: 4,
      title: "FinanceApp",
      description: "Mobile application for quick expense tracking. Currently in development to help users maintain monthly budget control with minimal friction.",
      tags: ["React Native", "Mobile", "Finance"],
      icon: Smartphone,
      repoLink: commonLinks.finance.repo,
      details: {
        problem: "Most finance apps are cluttered with ads and unnecessary features, making quick entry difficult.",
        solution: "A minimalist approach focused on speed. The goal is to allow the user to register an expense in under 3 seconds.",
        features: [
          "Offline First architecture",
          "Biometric Authentication",
          "One-tap expense entry",
          "Monthly Budget Limits"
        ]
      }
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
      details: {
        problem: "Plataformas de streaming têm muitas opções, causando 'paralisia de escolha'. Filtros tradicionais são muito rígidos.",
        solution: "Integrei a API Gemini do Google para criar um chatbot que entende contexto em linguagem natural (ex: 'Quero um sci-fi tipo Interestelar, mas menos triste') para dar recomendações hiper-personalizadas.",
        features: [
          "Chatbot de IA com memória de contexto",
          "Rastreamento de progresso de séries",
          "Quiz Gamificado sobre cinema",
          "Calendário Inteligente baseado na watchlist"
        ]
      }
    },
    {
      id: 2,
      title: "DevTracker",
      description: "Um gerenciador de projetos que cuida do planejamento. Você insere uma ideia bruta e a IA gera uma EAP (Estrutura Analítica de Projeto) com tarefas técnicas e prazos estimados.",
      tags: ["Django 6", "Planejamento com IA", "Bootstrap 5"],
      icon: Database,
      repoLink: commonLinks.devtracker.repo,
      previewLink: commonLinks.devtracker.preview,
      details: {
        problem: "Desenvolvedores frequentemente começam a codar sem um plano claro, levando a perda de escopo e projetos inacabados.",
        solution: "Atuando como um Tech Lead Virtual, o sistema usa IA Generativa para quebrar ideias abstratas em tarefas técnicas, estimando complexidade e prioridade automaticamente.",
        features: [
          "Geração Automática de EAP (WBS)",
          "Calibragem Inteligente de Prioridade",
          "Agendamento automático baseado em complexidade",
          "Gestão segura de API Keys"
        ]
      }
    },
    {
      id: 3,
      title: "My Dev Folio",
      description: "Meu espaço pessoal para exibir trabalhos e habilidades. Desenvolvido para ser rápido e acessível, com sistema próprio de internacionalização (Inglês/Português) e interações fluidas.",
      tags: ["Next.js 15", "TailwindCSS", "Framer Motion"],
      icon: Layout,
      repoLink: commonLinks.portfolio.repo,
      previewLink: commonLinks.portfolio.preview,
      details: {
        problem: "Portfólios padrão costumam ser estáticos. Eu queria algo que refletisse minhas habilidades de frontend.",
        solution: "Construído do zero usando Next.js 15. Inclui uma implementação customizada de Context API para internacionalização e Framer Motion para micro-interações com sensação premium.",
        features: [
          "Sistema próprio de i18n (EN/PT)",
          "Animações fluidas com Framer Motion",
          "Totalmente Responsivo (Mobile First)",
          "Arquitetura Limpa"
        ]
      }
    },
    {
      id: 4,
      title: "FinanceApp",
      description: "Aplicativo mobile para registro rápido de despesas. Atualmente em desenvolvimento para ajudar no controle do orçamento mensal com o mínimo de atrito.",
      tags: ["React Native", "Mobile", "Finance"],
      icon: Smartphone,
      repoLink: commonLinks.finance.repo,
      details: {
        problem: "A maioria dos apps de finanças são poluídos com anúncios, dificultando o registro rápido.",
        solution: "Uma abordagem minimalista focada em velocidade. O objetivo é permitir registrar um gasto em menos de 3 segundos.",
        features: [
          "Arquitetura Offline First",
          "Autenticação Biométrica",
          "Registro em um toque",
          "Limites de Orçamento Mensal"
        ]
      }
    },
  ]
};