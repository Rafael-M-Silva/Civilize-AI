# Civilize.ai

Projeto desenvolvido para o **Hackathon Devs de Impacto Online 2025**, com foco em **participação cidadã, governo aberto e uso de IA**.

A **Civilize.ai** é uma plataforma gamificada de formação cívica que, em quatro etapas, transforma qualquer pessoa em protagonista da democracia – da aprendizagem básica até a participação ativa em consultas públicas e processos de governo aberto.

---

## 🚀 Visão geral

A plataforma usa **Inteligência Artificial** para:

- traduzir proposições legislativas e políticas públicas em linguagem simples;
- gerar lições rápidas e acessíveis;
- montar trilhas de aprendizagem personalizadas;
- criar quizzes e desafios gamificados ligados a temas reais;
- conectar o usuário com oportunidades de **participação social** (consultas públicas, audiências, etc.).

---

## 🧠 Jornada do usuário

A experiência é organizada em **4 etapas**:

### 1. APRENDER 🧠  
Cursos rápidos, simples e divertidos, com conteúdos gerados por IA e curados por especialistas.

- O que é um Projeto de Lei?  
- Como o Congresso funciona?  
- Orçamento público em 5 minutos.  
- Políticas públicas explicadas em linguagem simples.

### 2. PRATICAR 🎮  
Quizzes, desafios e jogos de simulação:

- “Simule o voto de um deputado”;  
- Quiz de direitos (fácil → médio → difícil);  
- Desafios para identificar problemas reais na cidade.

### 3. CONQUISTAR 🏅  
Sistema de pontos, medalhas e badges, como no Duolingo:

- engajamento contínuo;  
- certificados e conquistas;  
- construção de um **currículo cidadão**.

### 4. CONTRIBUIR 🤝  
A ponte entre Educação → Ação:

- integração com iniciativas de **governo aberto** (ex.: consultas públicas);  
- convites para participar de processos reais;  
- badges por participação efetiva;  
- painel de impacto coletivo dos usuários.

---

## 💡 Diferenciais

- **IA para simplificação legislativa:** traduz juridiquês em “português de verdade”, destacando o impacto na vida do cidadão.  
- **Trilhas personalizadas:** trilhas ajustadas ao nível do usuário, objetivos e áreas de interesse.  
- **Gamificação com impacto real:** pontos e badges são ligados a participação em iniciativas de governo aberto.  
- **Dados públicos conectados:** possibilidade de integrar dados de Senado, Câmara, TSE, Querido Diário, etc.  
- **Foco em inclusão:** linguagem simples, quizzes e jornada acessível para quem está começando agora na cidadania.

---

## 🧱 Tecnologias utilizadas

- **Front-end:** Vite + React  
- **Estilização:** (preencher: Tailwind CSS / CSS Modules / outro)  
- **IA:** (preencher: OpenAI API / outro provider)  
- **Outras libs:**  
  - Radix UI  
  - lucide-react  
  - react-hook-form  
  - (adicione aqui o que estiver usando)

---

## 📦 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: >= 18)
- npm ou yarn

### Passos

```bash
# clonar o repositório
git clone https://github.com/Rafael-M-Silva/Civilize-AI.git

cd Civilize-AI

# instalar dependências
npm install
# ou
# yarn

# rodar em modo desenvolvimento
npm run dev
````

Por padrão, o projeto roda em:

* `http://localhost:5173` (ou conforme o Vite indicar).

---

## 🔑 Variáveis de ambiente (se houver)

Se o projeto estiver usando IA via API, crie um arquivo `.env` na raiz com, por exemplo:

```env
VITE_OPENAI_API_KEY=SUA_CHAVE_AQUI
```

> **Importante:** nunca commitar o arquivo `.env`. Ele já está listado no `.gitignore`.

---

## 📂 Estrutura básica

```txt
Civilize-AI/
├── src/              # código-fonte do front-end (páginas, componentes, hooks)
├── public/           # assets públicos
├── index.html        # HTML principal do Vite
├── package.json      # dependências do projeto
├── vite.config.*     # configuração do Vite
└── README.md         # este arquivo
```

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**.

Isso significa que qualquer pessoa – incluindo os organizadores do **Hackathon Devs de Impacto** – pode usar, copiar, modificar e distribuir este código, inclusive para fins comerciais, **desde que mantenha os créditos originais da equipe** e o aviso de copyright contido na licença.

Veja o arquivo `LICENSE` para mais detalhes.

> Os organizadores do Hackathon Devs de Impacto estão autorizados a utilizar este projeto e trechos de seu código em materiais de divulgação, apresentações, conteúdos educativos e demonstrações relacionadas ao evento, sem exclusividade e com a devida atribuição à equipe autora.

