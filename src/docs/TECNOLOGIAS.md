# 🛠️ Tecnologias Utilizadas - Civilize AI

## Visão Geral da Stack

A Civilize AI utiliza tecnologias modernas e robustas para proporcionar uma experiência de aprendizado fluida, responsiva e escalável.

---

## 📦 Frontend Core

### React 18.3
- **Descrição**: Biblioteca JavaScript para construção de interfaces de usuário
- **Por que usar**: Performance otimizada, componentes reutilizáveis, ecossistema robusto
- **Versão**: 18.3.1
- **Importação**: `import { useState, useEffect } from 'react'`
- **Website**: https://react.dev

### TypeScript 5.0
- **Descrição**: Superset do JavaScript com tipagem estática
- **Por que usar**: Previne bugs, melhora DX (Developer Experience), autocomplete inteligente
- **Versão**: 5.6.2
- **Configuração**: `tsconfig.json`
- **Website**: https://www.typescriptlang.org

### Vite
- **Descrição**: Build tool e dev server extremamente rápido
- **Por que usar**: Hot Module Replacement (HMR) instantâneo, builds otimizados
- **Versão**: Latest
- **Comando dev**: `npm run dev`
- **Website**: https://vitejs.dev

---

## 🎨 UI & Styling

### Tailwind CSS 4.0
- **Descrição**: Framework CSS utilitário
- **Por que usar**: Desenvolvimento rápido, design consistente, classes utilitárias
- **Versão**: 4.0
- **Configuração**: `/styles/globals.css`
- **Classes principais**:
  - Layout: `flex`, `grid`, `container`
  - Cores: `bg-[#FF2A1D]`, `text-[#3283FF]`
  - Responsividade: `md:`, `lg:`
- **Website**: https://tailwindcss.com

### Shadcn/ui
- **Descrição**: Coleção de componentes UI reutilizáveis e acessíveis
- **Por que usar**: Componentes prontos, customizáveis, acessíveis (a11y)
- **Localização**: `/components/ui/`
- **Componentes utilizados**:
  - `button.tsx` - Botões com variantes
  - `card.tsx` - Cards para conteúdo
  - `dialog.tsx` - Modais e diálogos
  - `progress.tsx` - Barras de progresso
  - `badge.tsx` - Tags e badges
  - `avatar.tsx` - Avatares de usuário
  - `tabs.tsx` - Navegação em abas
  - `calendar.tsx` - Seletor de datas
  - `sheet.tsx` - Painéis laterais
  - `confetti.tsx` - Animação de confetti
  - E mais 20+ componentes
- **Website**: https://ui.shadcn.com

### Radix UI
- **Descrição**: Primitivos de UI headless e acessíveis
- **Por que usar**: Base sólida para componentes, acessibilidade nativa (ARIA)
- **Componentes usados**:
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-tabs`
  - `@radix-ui/react-progress`
  - `@radix-ui/react-slot`
- **Website**: https://www.radix-ui.com

---

## 🎭 Animações

### Motion (Framer Motion) 12.x
- **Descrição**: Biblioteca de animações para React
- **Por que usar**: Animações fluidas, gestures, layout animations
- **Versão**: 12.23.23
- **Importação**: `import { motion } from 'motion/react'`
- **Uso na plataforma**:
  - Transições entre páginas
  - Animações de entrada/saída
  - Confetti celebrations
  - Scroll animations
- **Exemplos**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo animado
</motion.div>
```
- **Website**: https://motion.dev

### Canvas Confetti
- **Descrição**: Biblioteca para animações de confetti
- **Por que usar**: Celebrações visuais ao completar lições
- **Versão**: Latest
- **Implementação**: `/components/ui/confetti.tsx`
- **Uso**: Tela de parabéns após completar primeira lição
- **Website**: https://github.com/catdad/canvas-confetti

---

## 🎯 Ícones e Imagens

### Lucide React
- **Descrição**: Biblioteca de ícones SVG para React
- **Por que usar**: 1000+ ícones consistentes, tree-shakeable, leves
- **Versão**: Latest
- **Importação**: `import { Trophy, BookOpen, Award } from 'lucide-react'`
- **Ícones principais na plataforma**:
  - `Trophy` - XP e níveis
  - `BookOpen` - Cursos
  - `Award` - Badges
  - `Target` - Quizzes
  - `Users` - Ranking
  - `Coins` - LizeCoins
  - `Calendar` - Recompensas diárias
- **Website**: https://lucide.dev

### Unsplash
- **Descrição**: Banco de imagens de alta qualidade
- **Por que usar**: Imagens gratuitas, alta resolução, diversos temas
- **Implementação**: Componente `ImageWithFallback`
- **Ferramenta**: `unsplash_tool` para busca
- **Categorias usadas**:
  - Educação
  - Cidadania
  - Tecnologia
  - Pessoas estudando
- **Website**: https://unsplash.com

### Figma Assets
- **Descrição**: Assets exportados do Figma (mascote Aralize)
- **Localização**: `figma:asset/[hash].png`
- **Assets principais**:
  - Logo Aralize (papagaio mascote)
  - Papagaio estudando
  - Papagaio com quiz
  - Papagaio com badges
  - Papagaio apresentando
- **Importação**: `import logo from 'figma:asset/[hash].png'`

---

## 📊 Gráficos e Visualizações

### Recharts
- **Descrição**: Biblioteca de gráficos composable para React
- **Por que usar**: Gráficos interativos, fácil customização
- **Versão**: Latest
- **Uso planejado**:
  - Gráfico de progresso do usuário
  - Estatísticas de XP ao longo do tempo
  - Dashboard de performance
- **Website**: https://recharts.org

---

## 📝 Formulários

### React Hook Form 7.55.0
- **Descrição**: Biblioteca performática para gerenciamento de formulários
- **Por que usar**: Menos re-renders, validação simples, integração com Zod
- **Versão**: 7.55.0
- **Importação**: `import { useForm } from 'react-hook-form@7.55.0'`
- **Uso na plataforma**:
  - Formulários de cadastro
  - Login e autenticação
  - Onboarding flow
- **Website**: https://react-hook-form.com

### Zod (Planejado)
- **Descrição**: Schema validation com TypeScript-first
- **Por que usar**: Validação type-safe, mensagens de erro claras
- **Integração**: Com React Hook Form
- **Website**: https://zod.dev

---

## 🔐 Autenticação

### Google OAuth (@react-oauth/google)
- **Descrição**: Biblioteca para Google Sign-In
- **Por que usar**: Login social simplificado, seguro
- **Versão**: 0.12.2
- **Implementação**: `SignInPage`, `SignUpPage`
- **Fluxo**:
  1. Usuário clica em "Continuar com Google"
  2. Modal do Google aparece
  3. Usuário autoriza
  4. Recebe token JWT
  5. Login automático na plataforma
- **Website**: https://www.npmjs.com/package/@react-oauth/google

---

## 🎵 Áudio

### Web Audio API
- **Descrição**: API nativa do navegador para síntese de áudio
- **Por que usar**: Som de língua de sogra nas celebrações
- **Implementação**: `OnboardingFlow.tsx`
- **Uso**: Reproduz som de festa ao completar primeira lição
- **Código**:
```typescript
const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3);
```

---

## 🗄️ Backend & Persistência

### Supabase (Planejado)
- **Descrição**: Backend-as-a-Service (PostgreSQL, Auth, Storage)
- **Por que usar**: Banco de dados escalável, autenticação integrada, real-time
- **Funcionalidades planejadas**:
  - Banco de dados PostgreSQL
  - Autenticação de usuários
  - Storage de imagens de perfil
  - Real-time para ranking
- **Componente**: `supabase_connect` tool
- **Website**: https://supabase.com

### LocalStorage (Atual)
- **Descrição**: API nativa do navegador para persistência local
- **Uso atual**:
  - Dados do usuário logado
  - Banner de perfil personalizado
  - LizeCoins do usuário
  - Datas de login (calendário de recompensas)
  - Progresso nos cursos
- **Limitações**: Dados ficam apenas no navegador do usuário

---

## 🎨 Utilitários

### Class Variance Authority (CVA)
- **Descrição**: Utilitário para criar variantes de componentes
- **Por que usar**: Type-safe variants, composição de classes
- **Uso**: Componente `Button` com variantes
- **Exemplo**:
```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "bg-primary",
      secondary: "bg-secondary"
    }
  }
})
```
- **Website**: https://cva.style

### clsx / cn (Tailwind Merge)
- **Descrição**: Utilitário para combinar classes CSS condicionalmente
- **Por que usar**: Classes dinâmicas, merge inteligente do Tailwind
- **Localização**: `/lib/utils.ts`
- **Uso**:
```typescript
<div className={cn("base-class", isActive && "active-class")} />
```

---

## 📦 Gerenciamento de Pacotes

### npm
- **Descrição**: Gerenciador de pacotes Node.js
- **Comandos principais**:
  - `npm install` - Instala dependências
  - `npm run dev` - Inicia dev server
  - `npm run build` - Build para produção
  - `npm run preview` - Preview do build

---

## 🌐 APIs Externas (Planejadas)

### Brasil Participa API
- **Descrição**: API do governo para consultas públicas
- **Uso futuro**: Integração com ouvidoria e participação cidadã
- **Endpoint**: https://brasilparticipativo.presidencia.gov.br

### Querido Diário API
- **Descrição**: API de diários oficiais estruturados
- **Uso futuro**: Busca de publicações relevantes
- **Website**: https://queridodiario.ok.org.br

---

## 📊 Monitoramento e Analytics (Planejado)

### Google Analytics
- **Descrição**: Analytics e métricas de uso
- **Dados a coletar**:
  - Páginas mais visitadas
  - Taxa de conclusão de cursos
  - Engajamento com quizzes

### Sentry (Planejado)
- **Descrição**: Monitoramento de erros e performance
- **Por que usar**: Detectar e corrigir bugs rapidamente

---

## 🧪 Testes (Planejado)

### Vitest
- **Descrição**: Framework de testes para Vite
- **Por que usar**: Rápido, compatível com Vite

### React Testing Library
- **Descrição**: Biblioteca para testes de componentes React
- **Por que usar**: Testes focados na experiência do usuário

---

## 🚀 Deploy e CI/CD (Planejado)

### Vercel / Netlify
- **Descrição**: Plataforma de deploy para aplicações frontend
- **Por que usar**: Deploy automático, CDN global, SSL gratuito

### GitHub Actions
- **Descrição**: CI/CD integrado ao GitHub
- **Uso futuro**: Testes automáticos, deploy automático

---

## 📱 Responsividade

### Tailwind Breakpoints
- **Mobile**: `< 640px` (padrão)
- **Tablet**: `md: 768px`
- **Desktop**: `lg: 1024px`
- **Large Desktop**: `xl: 1280px`

### Mobile-First Approach
Todas as telas são desenvolvidas pensando primeiro em mobile, depois expandindo para desktop.

---

## 🔧 Ferramentas de Desenvolvimento

### ESLint (Planejado)
- Linter para JavaScript/TypeScript
- Mantém código consistente

### Prettier (Planejado)
- Formatador de código automático
- Estilo de código uniforme

---

## 📚 Dependências Completas

### Produção
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "motion": "^12.23.23",
  "@radix-ui/react-slot": "latest",
  "@radix-ui/react-dialog": "latest",
  "@radix-ui/react-tabs": "latest",
  "@radix-ui/react-progress": "latest",
  "lucide-react": "latest",
  "canvas-confetti": "latest",
  "class-variance-authority": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest",
  "@react-oauth/google": "^0.12.2",
  "react-hook-form": "^7.55.0"
}
```

### Desenvolvimento
```json
{
  "@vitejs/plugin-react": "latest",
  "typescript": "^5.6.2",
  "vite": "latest",
  "tailwindcss": "^4.0.0"
}
```

---

## 🏗️ Arquitetura da Aplicação

```
┌─────────────────────────────────────────┐
│           User Interface (React)         │
│  ┌──────────────────────────────────┐   │
│  │  Components (UI + Business Logic) │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
                    │
                    ↓
┌─────────────────────────────────────────┐
│         State Management (useState)      │
│  • User Data   • Courses   • Progress   │
└─────────────────────────────────────────┘
                    │
                    ↓
┌─────────────────────────────────────────┐
│      Persistence (LocalStorage/Supabase)│
└─────────────────────────────────────────┘
```

---

## 🔄 Fluxo de Dados

1. **Componente** dispara ação (ex: completar quiz)
2. **Estado** é atualizado via `setState`
3. **LocalStorage** persiste dados localmente
4. **UI** re-renderiza com novos dados
5. **(Futuro) Supabase** sincroniza com servidor

---

## 📖 Recursos de Aprendizado

### Para React
- [React Docs](https://react.dev)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)

### Para Tailwind
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### Para Motion
- [Motion Docs](https://motion.dev/docs)
- [Motion Examples](https://motion.dev/docs/examples)

---

**Última atualização:** Novembro 2025
