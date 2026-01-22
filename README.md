# ⚡ My Dev Folio

![Status](https://img.shields.io/badge/STATUS-LIVE-brightgreen?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-8E75B2?style=for-the-badge&logo=google)

Um portfólio de desenvolvedor interativo e de alta performance construído com as mais recentes tecnologias web. Este projeto vai além de um site estático ao integrar **Inteligência Artificial**, **Analytics em Tempo Real** e **Internacionalização**.

🔗 **Demo ao Vivo:** [Confira aqui!](https://my-dev-folio.vercel.app/)

## ✨ Recursos Principais

- **🤖 Chatbot Assistente com IA:** Um agente conversacional alimentado pela **API Gemini** do Google. Atua como um assistente virtual, respondendo perguntas sobre minha carreira, habilidades e projetos usando um contexto de persona personalizado.
- **📊 Analytics em Tempo Real:** Integrado com a **API WakaTime** para exibir estatísticas de código ao vivo (horas codadas nos últimos 7 dias, principais linguagens) diretamente no dashboard.
- **🌍 Internacionalização (i18n):** Suporte completo para Português (PT-BR) e Inglês (EN), com detecção automática de idioma e troca de contexto.
- **🚧 Roadmap Dinâmico de Projetos:** Uma "Zona de Construção" visual para projetos planejados, distinguindo entre trabalhos concluídos (links Live/GitHub) e conceitos futuros.
- **🎨 UI/UX Moderna:** Construído com **TailwindCSS** para estilização e **Framer Motion** para animações suaves e complexas.
- **⚡ Next.js 15:** Utilizando Server Components e App Router para máxima performance e SEO.

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** TailwindCSS
- **Animações:** Framer Motion
- **Integração IA:** Google Generative AI SDK (Gemini Flash)
- **Busca de Dados:** WakaTime API
- **Ícones:** Lucide React
- **Markdown:** React Markdown (para respostas ricas no chat)
- **Deploy:** Vercel

## 🚀 Começando

Siga estes passos para rodar o projeto localmente:

### 1. Clone o repositório
```bash
git clone https://github.com/ghsiqueira/my-dev-folio.git
cd my-dev-folio
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Variáveis de Ambiente
Crie um arquivo `.env.local` no diretório raiz e adicione suas chaves de API:
```
# Google Gemini AI (Para o Chatbot)
NEXT_PUBLIC_GEMINI_API_KEY=sua_chave_google_ai_aqui

# WakaTime (Para Estatísticas de Código)
WAKATIME_API_KEY=sua_chave_secreta_wakatime_aqui
```

### 4. Execute o servidor de desenvolvimento
```bash
npm run dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.

## 📁 Estrutura do Projeto
```
├── app/                # Next.js App Router
│   ├── api/            # Rotas de API Server-side (Chat & Stats)
│   └── page.tsx        # Ponto de entrada principal
├── components/         # Componentes React Reutilizáveis (ChatBot, Analytics, etc.)
├── context/            # React Context (Language/Theme)
├── lib/                # Utilitários e Dados (O "Cérebro" da IA)
└── public/             # Assets estáticos (imagens)
```

## 🤝 Contribuindo
Contribuições, issues e solicitações de recursos são bem-vindas! Sinta-se à vontade para verificar a página de issues.

## 📝 Licença
Este projeto está licenciado sob a licença MIT.

---

Feito com 💜 e ☕ por Gabriel Siqueira.
