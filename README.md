# 🦜 Civilize AI

<div align="center">
  <img src="https://images.unsplash.com/photo-1664545141018-c70ca9e78a76?q=80&w=1025" alt="Civilize AI Banner" width="100%" />
  
  ### Plataforma Gamificada de Educação Cidadã
  
  *Transformando o aprendizado sobre cidadania em uma experiência interativa e envolvente*
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
</div>

---

## Sobre o Projeto

**Civilize AI** é uma plataforma de aprendizagem gamificada que democratiza o acesso à educação cidadã no Brasil. Inspirada no Duolingo, a plataforma transforma conceitos complexos de direitos, deveres e participação social em conteúdos acessíveis, interativos e divertidos.

### Missão

Empoderar cidadãos brasileiros com conhecimento sobre seus direitos, deveres e mecanismos de participação democrática através de uma experiência gamificada e acessível.

### Visão

Tornar-se a principal plataforma de educação cidadã do Brasil, formando uma geração de cidadãos ativos, informados e engajados na construção de uma sociedade mais justa e democrática.

---

## Funcionalidades Principais

### Aprendizado Gamificado
- **Cursos em Vídeo**: Módulos estruturados com videoaulas sobre cidadania, direitos e participação social
- **Quizzes Interativos**: Avaliações após cada módulo com feedback instantâneo
- **Sistema de XP**: Ganhe pontos de experiência ao completar aulas e quizzes
- **Níveis Progressivos**: Avance de nível conforme acumula XP

### 🏆 Sistema de Recompensas
- **Badges Desbloqueáveis**: Conquiste medalhas especiais ao atingir marcos
- **LizeCoins**: Moeda virtual para desbloquear cursos premium
- **Recompensas Diárias**: Ganhe 20 LizeCoins por login diário
- **Ranking Global**: Compete com outros estudantes

### Economia Virtual (LizeCoins)
- **150 LizeCoins iniciais** ao criar conta
- **20 LizeCoins por dia** ao fazer login
- **Compra de cursos premium** usando moedas virtuais
- **Sistema de pacotes PIX** para adquirir mais moedas

### IA para Simplificação Legislativa
- Tradução de leis e termos jurídicos em linguagem simples
- Explicações acessíveis até para crianças
- Contextualização de como as leis impactam o dia a dia

### Acompanhamento de Progresso
- Painel personalizado com estatísticas
- Histórico completo de atividades
- Gráficos de evolução
- Certificados ao completar cursos

---

## 👥 Equipe de Desenvolvimento

| Nome | Função |
|------|--------|
| **[Rafael Mauricio]** | UI/UX Designer e Front-End Developer |
| **[Isaias Belarmina de Souza]** | Back-End Developer e IA |
| **[Rafael Ricardo]** | business dev |

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.0** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4.0** - Framework CSS utilitário
- **Motion (Framer Motion) 12.x** - Biblioteca de animações
- **Vite** - Build tool e dev server

### UI/UX
- **Shadcn/ui** - Componentes UI reutilizáveis
- **Radix UI** - Primitivos de UI acessíveis
- **Lucide React** - Biblioteca de ícones
- **Recharts** - Biblioteca de gráficos

### Backend & Integração
- **Supabase** (Planejado) - Backend-as-a-Service
- **Canvas Confetti** - Animações de confetti
- **React Hook Form** - Gerenciamento de formulários
- **Zod** (Planejado) - Validação de schemas

### Assets
- **Unsplash** - Banco de imagens
- **Figma Assets** - Ilustrações do mascote Aralize

---

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Git

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/civilize-ai.git
cd civilize-ai
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env na raiz do projeto
cp .env.example .env
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
```
http://localhost:5173
```

---

## 🎮 Como Usar

### Para Estudantes

1. **Cadastro**: Crie sua conta usando email ou Google Sign-In
2. **Onboarding**: Complete o fluxo de boas-vindas e faça seu primeiro quiz
3. **Escolha um Curso**: Selecione um dos cursos disponíveis (usuários free têm 1 curso recomendado)
4. **Assista às Aulas**: Aprenda com videoaulas estruturadas
5. **Faça os Quizzes**: Responda pelo menos 75% correto para avançar
6. **Ganhe Recompensas**: Acumule XP, suba de nível e desbloqueie badges
7. **Use LizeCoins**: Compre novos cursos com suas moedas virtuais

### Para Professores/Educadores

1. **Acompanhamento**: Use a plataforma para acompanhar o progresso dos alunos
2. **Conteúdo Complementar**: Utilize os cursos como material didático adicional
3. **Engajamento**: Incentive competições saudáveis usando o ranking

---

## 📁 Estrutura do Projeto

```
civilize-ai/
├── public/              # Arquivos públicos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes UI reutilizáveis (Shadcn)
│   │   └── figma/      # Componentes de assets do Figma
│   ├── lib/            # Utilitários e helpers
│   │   ├── types.ts    # Definições de tipos TypeScript
│   │   ├── mockData.ts # Dados mockados para desenvolvimento
│   │   └── utils.ts    # Funções utilitárias
│   ├── styles/         # Estilos globais
│   │   └── globals.css # CSS global e tokens Tailwind
│   ├── App.tsx         # Componente raiz da aplicação
│   └── main.tsx        # Ponto de entrada da aplicação
├── docs/               # Documentação do projeto
├── .env.example        # Exemplo de variáveis de ambiente
├── package.json        # Dependências e scripts
├── tailwind.config.js  # Configuração do Tailwind (se aplicável)
├── tsconfig.json       # Configuração do TypeScript
└── vite.config.ts      # Configuração do Vite
```

---

## 🎨 Design System

### Paleta de Cores

A identidade visual é inspirada no mascote **Aralize**, uma arara-canga com as cores:

- **Vermelho Principal**: `#FF2A1D` - Paixão e energia
- **Azul Principal**: `#3283FF` - Confiança e conhecimento
- **Amarelo Principal**: `#E3C545` - Otimismo e alegria
- **Verde Secundário**: `#82F690` - Crescimento e sucesso

### Tipografia

- **Fonte Principal**: LT Institute by LyonsType, Sans-Serif
- **Esquema**: 60-30-10 (60% cor dominante, 30% secundária, 10% destaque)

Para mais detalhes, veja a [Documentação de Design](./docs/DESIGN_SYSTEM.md).

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Diretrizes

- Siga os padrões de código do projeto
- Escreva commits descritivos
- Adicione testes quando aplicável
- Atualize a documentação conforme necessário

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

### MIT License

```
Copyright (c) 2025 Civilize AI Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contato e Suporte

- **Website**: [civilize-ai.com.br](https://civilize-ai.vercel.app)
- **Email**: civilizeai.edu@gmail.com
- **Youtube**: [@civilize-ai](https://www.youtube.com/channel/UCfvpcolWQ-blm28dTSr1tBQ)
- **Linktree**: [@CivilizeAI](https://linktr.ee/civilizeai)
- **Instagram**: [@CivilizeAI](https://www.instagram.com/civilizeai/)

---

## 🙏 Agradecimentos

- **Unsplash** pelos assets visuais de alta qualidade
- **Shadcn** pelos componentes UI elegantes
- **Comunidade Open Source** por todas as bibliotecas incríveis
- **Governo Aberto Brasil** pela inspiração e dados públicos

---

## 📚 Documentação Adicional

Para documentação detalhada, consulte a pasta [/docs](./src/docs):

- [Tecnologias Utilizadas](./src/docs/TECNOLOGIAS.md)
- [Design System](./docs/DESIGN_SYSTEM.md)
- [Jornada do Usuário](./src/docs/JORNADA_USUARIO.md)
- [Sistema LizeCoins](./src/docs/LIZECOINS.md)
- [IA e Simplificação Legislativa](./src/docs/IA_SIMPLIFICACAO.md)

---

<div align="center">
  
  **Feito pela equipe Civilize AI**
  
  *Educação cidadã acessível para todos os brasileiros*

</div>
