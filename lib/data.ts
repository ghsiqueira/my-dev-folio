export const portfolioData = `
VOCÊ É O ASSISTENTE VIRTUAL DO GABRIEL HENRIQUE SIQUEIRA DE OLIVEIRA.
Seu objetivo é responder recrutadores e visitantes sobre o portfólio, carreira e interesses do Gabriel.

RESUMO PROFISSIONAL:
- Nome: Gabriel Henrique
- Perfil: Desenvolvedor Full Stack e Analista de Dados focado em eficiência e automação.
- Time do Coração: Corinthians 🦅.

CARREIRA & EXPERIÊNCIA:
- Atual: Atua como PJ na Ativ Green, prestando serviço estratégico para o **Mercado Livre**.
- Foco: Automação de processos críticos (Blocklist), Engenharia de Dados e Dashboards.

FORMAÇÃO ACADÊMICA:
- **Superior:** Tecnólogo em **Análise e Desenvolvimento de Sistemas (ADS)** na **Universidade Presbiteriana Mackenzie**.
  - Período: Julho/2023 a Dezembro/2025 (Concluído).
- **Técnico:** **Técnico em Desenvolvimento de Sistemas** na **ETEC**.
  - Período: Janeiro/2022 a Junho/2023.

IDIOMAS:
- **Inglês:** Avançado (Formação completa no CNA com certificação **Cambridge International Education**).
- **Espanhol:** Intermediário.

STACK TÉCNICA (O Arsenal):
- Frontend: **React.js**, **Next.js 15**, **React Native** (Mobile), TailwindCSS.
- Backend: **Python** (Especialista em **Django**), Node.js.
- Automação & Dados:
  - **n8n** (Experiência profissional avançada com **Verdi Flows**).
  - **Google Apps Script** (GAS) e automação de planilhas.
  - **BigQuery** e **SQL** para manipulação de grandes volumes de dados.
- Diferencial: Integração de **IA Generativa** (Gemini API).

PROJETOS DESTAQUE:
1. **Automação de Blocklist (Mercado Livre)**: Scripts complexos usando Google Apps Script, BigQuery e n8n.
2. **CineVerse**: App de recomendação de filmes com IA (React).
3. **DevTracker**: Gestão de projetos (Django).
4. **My Dev Folio**: Portfólio Next.js com Analytics em tempo real.
5. **FinanceApp**: App financeiro (React Native).

CULTURA POP & INTERESSES (Gosto Refinado):
- 🎬 Filmes Favoritos: **O Poderoso Chefão** (Top 1 Absoluto) e **O Senhor dos Anéis**.
- 📺 Séries (O Panteão): **Breaking Bad**, **Better Call Saul**, **Game of Thrones**, **The Wire** e **The Sopranos**.
- ⛩️ Animes Lendários: **Dragon Ball**, **Cavaleiros do Zodíaco**, **Pokémon**, **Yu-Gi-Oh!**, **One Piece**, **Naruto** e **Beyblade**.
- 🎮 Games (Estratégia & Hardcore):
  - Estratégia: **Rimworld**, **Europa Universalis IV/V**, **Victoria 3**, **Project Zomboid**.
  - RPG/Ação: **Baldur's Gate 3**, **Mount & Blade**, **Counter-Strike 2 (CS2)**.

O QUE ELE ESTÁ APRENDENDO:
1. **Agentes de IA** e Automação Autônoma.
2. Arquitetura de Dados Escalável.

INSTRUÇÕES DE COMPORTAMENTO DA IA:
1. **Séries:** Breaking Bad e Better Call Saul são as referências máximas de qualidade para ele.
2. **n8n:** Cite sempre a experiência com **Verdi Flows**.
3. **Idiomas:** Destaque a certificação Cambridge se perguntarem sobre inglês.
4. **Formatação:** Use negrito (**texto**) nas obras, faculdade e tecnologias.
5. **Contexto:** Estamos em 2026, Gabriel já é graduado.
`;

export const projectsData = [
  {
    id: 1,
    title: "CineVerse",
    description: {
      pt: "Plataforma de recomendação de filmes clone da Netflix, consumindo a API do TMDB com React e Inteligência Artificial.",
      en: "Netflix clone movie recommendation platform, consuming TMDB API with React and Artificial Intelligence."
    },
    tech: ["React.js", "TailwindCSS", "TMDB API", "Gemini AI"],
    githubLink: "https://github.com/ghsiqueira/cineverse",
    liveLink: "https://cineverse-weld.vercel.app",
    image: "/projects/cineverse.png",
    status: "completed" 
  },
  {
    id: 2,
    title: "My Dev Folio",
    description: {
      pt: "Portfólio interativo com Chatbot de IA, Analytics em tempo real e internacionalização.",
      en: "Interactive portfolio with AI Chatbot, real-time Analytics, and internationalization."
    },
    tech: ["Next.js 15", "WakaTime", "Framer Motion", "Vercel"],
    githubLink: "https://github.com/ghsiqueira/my-dev-folio",
    liveLink: "https://",
    image: "/projects/portfolio.png",
    status: "completed"
  },
  {
    id: 3,
    title: "DevTracker",
    description: {
      pt: "Sistema de gestão de tarefas e projetos com autenticação e banco de dados relacional.",
      en: "Task and project management system with authentication and relational database."
    },
    tech: ["Python", "Django", "SQLite", "Bootstrap"],
    githubLink: "https://github.com/ghsiqueira/devtracker",
    liveLink: "https://ghsiqueira.pythonanywhere.com",
    image: "/projects/devtracker.png", 
    status: "completed"
  },

  {
    id: 4,
    title: "Voyager Booking",
    description: {
      pt: "Sistema de reservas e aluguel de temporada (Clone Airbnb).",
      en: "Booking and vacation rental system (Airbnb Clone)."
    },
    tech: ["PHP", "Laravel", "MySQL", "Livewire"],
    status: "planned"
  },
  {
    id: 5,
    title: "PetSpace Ecosystem",
    description: {
      pt: "Marketplace completo para Pets (API Rest + Frontend + App).",
      en: "Complete Pet Marketplace (Rest API + Frontend + App)."
    },
    tech: ["Laravel API", "React.js", "Redis", "JWT"],
    status: "planned"
  },
  {
    id: 6,
    title: "Reader Cloud",
    description: {
      pt: "Microserviço para sincronização de leitura em nuvem.",
      en: "Microservice for cloud reading synchronization."
    },
    tech: ["Python", "Flask", "MongoDB"],
    status: "planned"
  },
  {
    id: 7,
    title: "Family Reader App",
    description: {
      pt: "App mobile offline-first para leitura e gestão de livros.",
      en: "Offline-first mobile app for reading and book management."
    },
    tech: ["React Native", "Expo", "Google Books API"],
    status: "planned"
  },
  {
    id: 8,
    title: "Legacy of the Runes",
    description: {
      pt: "Engine de RPG Top-down com combate em tempo real.",
      en: "Top-down RPG Engine with real-time combat."
    },
    tech: ["Unity", "C#", "Game Design"],
    status: "planned"
  },
  {
    id: 9,
    title: "Mystic Realms",
    description: {
      pt: "MMORPG de navegador com Websockets e Multiplayer.",
      en: "Browser MMORPG with Websockets and Multiplayer."
    },
    tech: ["JavaScript", "Phaser", "Socket.io", "Node.js"],
    status: "planned"
  },
  {
    id: 10,
    title: "Nexus Finance",
    description: {
      pt: "Core bancário de alta performance com transações atômicas.",
      en: "High-performance banking core with atomic transactions."
    },
    tech: [".NET 8", "C#", "PostgreSQL", "Clean Arch"],
    status: "planned"
  }
];