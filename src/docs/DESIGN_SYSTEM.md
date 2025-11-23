# 🎨 Design System - Civilize AI

## Visão Geral

O Design System da Civilize AI é inspirado no Duolingo, com identidade visual jovem, vibrante e acessível. O mascote **Aralize**, uma arara-canga brasileira, é o símbolo da plataforma e define toda a paleta de cores.

---

## 🦜 Mascote: Aralize

### História e Conceito

**Aralize** é uma arara-canga (também conhecida como arara-vermelha), ave símbolo da fauna brasileira, que representa:

- **Inteligência**: Araras são aves extremamente inteligentes
- **Comunicação**: Conhecidas por sua capacidade de "falar"
- **Brasilidade**: Ave nativa e ícone da natureza brasileira
- **Cores Vibrantes**: Plumagem colorida que inspira nossa paleta

### Personalidade

- **Entusiasta**: Sempre animada para ensinar
- **Amigável**: Próxima e acessível
- **Sábia**: Conhecedora, mas sem ser pedante
- **Motivadora**: Incentiva o aprendizado contínuo

### Variações da Aralize

A mascote aparece em diferentes contextos na plataforma:

1. **Aralize Estudando** - Lendo um livro (módulos de aprendizado)
2. **Aralize Quiz** - Com lupa investigando (quizzes)
3. **Aralize Badges** - Comemorando conquistas (sistema de badges)
4. **Aralize Troféu** - Com troféu dourado (completar cursos)
5. **Aralize Apresentando** - Apontando para conteúdo (onboarding)

### Assets da Aralize

**Localização**: Importados do Figma
```typescript
import logoAralize from 'figma:asset/e7c68171915ceb3c591a71757fda4ab4b592daed.png'
import papagaioEstudando from 'figma:asset/8cd44a66feb1d956f624b7bbc1ce5fe9d9ec464f.png'
import papagaioQuiz from 'figma:asset/7b847fea5d7fb4086f40ebd56e2f355031f52f76.png'
import papagaioBadges from 'figma:asset/86f83f6960d9be1526eeb9d842e02a0042c503f5.png'
import papagaioTrofeu from 'figma:asset/1510322d28f519a6d96a01426a3cc3cf67d82ad7.png'
```

---

## 🎨 Paleta de Cores

### Cores Principais (Baseadas na Arara-Canga)

#### Vermelho Principal - Paixão
```css
--primary-red: #FF2A1D
```
- **RGB**: (255, 42, 29)
- **HSL**: (3°, 100%, 56%)
- **Uso**: CTAs principais, elementos de destaque, sistema de níveis
- **Significado**: Energia, paixão, urgência, ação
- **Inspiração**: Plumagem vermelha vibrante da arara

#### Azul Principal - Confiança
```css
--primary-blue: #3283FF
```
- **RGB**: (50, 131, 255)
- **HSL**: (216°, 100%, 60%)
- **Uso**: Links, elementos informativos, quizzes, progresso
- **Significado**: Confiança, conhecimento, serenidade
- **Inspiração**: Penas azuis das asas da arara

#### Amarelo Principal - Alegria
```css
--primary-yellow: #E3C545
```
- **RGB**: (227, 197, 69)
- **HSL**: (49°, 74%, 58%)
- **Uso**: Badges, XP, recompensas, celebrações
- **Significado**: Otimismo, alegria, conquista
- **Inspiração**: Detalhes amarelos na plumagem

#### Verde Secundário - Crescimento
```css
--secondary-green: #82F690
```
- **RGB**: (130, 246, 144)
- **HSL**: (127°, 86%, 74%)
- **Uso**: Feedbacks positivos, quizzes corretos, progresso
- **Significado**: Crescimento, sucesso, validação
- **Inspiração**: Natureza brasileira onde a arara vive

### Cores Secundárias

#### Azul Claro - Suavidade
```css
--light-blue: #68A4FF
```
- **Uso**: Backgrounds, gradientes, hover states
- **Inspiração**: Céu brasileiro

#### Background Principal
```css
--background-main: #F0F1FA
```
- **Uso**: Background geral da landing page e seções
- **Significado**: Leveza, claridade, espaço para respirar

---

## 📐 Regra 60-30-10

Aplicamos a regra clássica de design de interiores ao nosso sistema:

### 60% - Cor Dominante (Neutros)
- **Branco/Background**: `#F0F1FA`, `#FFFFFF`
- **Uso**: Backgrounds principais, cards, áreas de conteúdo
- **Objetivo**: Criar espaço, legibilidade

### 30% - Cor Secundária (Azul)
- **Azul Principal**: `#3283FF`
- **Azul Claro**: `#68A4FF`
- **Uso**: Navegação, botões secundários, informações
- **Objetivo**: Guiar o olhar, estruturar conteúdo

### 10% - Cor de Destaque (Vermelho/Amarelo)
- **Vermelho**: `#FF2A1D`
- **Amarelo**: `#E3C545`
- **Uso**: CTAs, badges, alertas importantes
- **Objetivo**: Chamar atenção, criar hierarquia visual

---

## 📝 Tipografia

### Fonte Principal: LT Institute

**LT Institute by LyonsType** é uma fonte sem serifa moderna e geométrica.

#### Por que LT Institute?
- **Legibilidade**: Excelente para leitura em tela
- **Modernidade**: Design contemporâneo e limpo
- **Versatilidade**: Funciona em títulos e corpo de texto
- **Personalidade**: Amigável sem ser infantil

### Hierarquia Tipográfica

#### Headings
```css
h1 {
  font-size: 3rem;      /* 48px */
  font-weight: 700;     /* Bold */
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 2.25rem;   /* 36px */
  font-weight: 600;     /* Semibold */
  line-height: 1.3;
}

h3 {
  font-size: 1.875rem;  /* 30px */
  font-weight: 600;
  line-height: 1.4;
}

h4 {
  font-size: 1.5rem;    /* 24px */
  font-weight: 500;
  line-height: 1.4;
}
```

#### Body Text
```css
body {
  font-size: 1rem;      /* 16px */
  font-weight: 400;     /* Regular */
  line-height: 1.6;
  font-family: 'LT Institute', sans-serif;
}

p {
  margin-bottom: 1rem;
}

small {
  font-size: 0.875rem;  /* 14px */
}
```

### Escala de Peso

- **300 - Light**: Textos sutis, labels secundários
- **400 - Regular**: Corpo de texto padrão
- **500 - Medium**: Subtítulos, navegação
- **600 - Semibold**: Títulos de seções
- **700 - Bold**: Títulos principais, CTAs

---

## 🎯 Componentes UI

### Botões

#### Botão Primário (FlowHoverButton)
```tsx
<FlowHoverButton 
  className="rounded-full border-0 bg-white"
  icon={<ArrowRight />}
>
  Começar Agora
</FlowHoverButton>
```
- **Background**: Branco
- **Texto**: Azul `#3283FF`
- **Hover**: Azul com texto branco
- **Border-radius**: `100px` (totalmente arredondado)

#### Botão Secundário
- **Background**: Vermelho `#FF2A1D`
- **Texto**: Branco
- **Hover**: Vermelho escuro

#### Botão Ghost
- **Background**: Transparente
- **Border**: 1px solid
- **Hover**: Background sutil

### Cards

#### Card Padrão
```tsx
<Card className="rounded-xl border border-border">
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Conteúdo */}
  </CardContent>
</Card>
```
- **Background**: Branco
- **Border**: `#E5E7EB`
- **Border-radius**: `12px`
- **Shadow**: Sutil `shadow-sm`

#### Card com Glowing Effect
- **Border animado**: Gradiente que segue o cursor
- **Cores**: Baseadas na cor primária do card
- **Uso**: Cards de diferenciais, features especiais

### Badges

#### Badge de XP
```tsx
<Badge className="bg-[#3283FF] text-white">
  +50 XP
</Badge>
```
- **Background**: Azul
- **Texto**: Branco

#### Badge de Conquista
```tsx
<Badge className="bg-[#E3C545] text-foreground">
  🏆 Primeira Lição
</Badge>
```
- **Background**: Amarelo
- **Emoji**: Para representar conquista

### Progress Bar

```tsx
<Progress value={75} className="h-2" />
```
- **Cor de fundo**: Cinza claro
- **Cor de progresso**: Gradiente azul → verde
- **Height**: Customizável (`h-2`, `h-3`, etc.)

---

## 🌈 Gradientes

### Gradiente Primário (Azul)
```css
background: linear-gradient(to bottom right, #3283FF, #68A4FF);
```
- **Uso**: Backgrounds de destaque, cards especiais

### Gradiente Arco-íris (Mascote)
```css
background: linear-gradient(to right, #FF2A1D, #3283FF, #E3C545);
```
- **Uso**: Header, elementos de branding

### Gradiente Sucesso
```css
background: linear-gradient(to right, #82F690, #45F45A);
```
- **Uso**: Feedbacks positivos, badges desbloqueados

---

## 🎭 Animações e Transições

### Princípios de Animação

1. **Suavidade**: Todas as transições usam `ease-out` ou `spring`
2. **Velocidade**: Animações rápidas (200-400ms) para feedback imediato
3. **Propósito**: Animações sempre têm objetivo (guiar, celebrar, informar)

### Animações Comuns

#### Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
/>
```

#### Slide Up
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>
```

#### Scale (Botões)
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

#### Confetti (Celebração)
- **Quando**: Completar primeira lição, ganhar badge especial
- **Cores**: Vermelho, azul, amarelo, verde (cores da arara)
- **Duração**: 3 explosões sequenciais

---

## 📱 Responsividade

### Breakpoints Tailwind

```css
/* Mobile First */
/* xs: < 640px (padrão) */

sm: 640px;  /* Tablets pequenos */
md: 768px;  /* Tablets */
lg: 1024px; /* Desktop */
xl: 1280px; /* Desktop large */
2xl: 1536px; /* Desktop extra large */
```

### Estratégia Mobile-First

1. **Design base**: Mobile (< 640px)
2. **Adaptações**: Adicionar breakpoints maiores conforme necessário
3. **Teste**: Sempre testar em mobile real

### Exemplos Responsivos

```tsx
<div className="
  px-4           // Mobile: padding 16px
  md:px-8        // Tablet: padding 32px
  lg:px-16       // Desktop: padding 64px
  
  text-2xl       // Mobile: 24px
  md:text-3xl    // Tablet: 30px
  lg:text-4xl    // Desktop: 36px
">
  Título Responsivo
</div>
```

---

## ♿ Acessibilidade

### Contraste de Cores

Todas as combinações de cores seguem WCAG 2.1 AA:
- **Texto normal**: Contraste mínimo 4.5:1
- **Texto grande**: Contraste mínimo 3:1
- **Elementos UI**: Contraste mínimo 3:1

### Exemplos de Boas Práticas

✅ **Bom**: Texto preto (#000000) em fundo branco (#FFFFFF)
✅ **Bom**: Texto branco em azul principal (#3283FF)
✅ **Bom**: Texto preto em amarelo (#E3C545)

❌ **Evitar**: Texto amarelo claro em branco
❌ **Evitar**: Texto verde claro em azul claro

### Componentes Acessíveis

Todos os componentes Shadcn/ui são construídos com Radix UI, que garante:
- **ARIA attributes** corretos
- **Navegação por teclado**
- **Screen reader support**
- **Focus states** visíveis

---

## 🎨 Ícones

### Biblioteca: Lucide React

**Estilo**: Outline (contorno), consistente com design limpo

### Ícones por Contexto

#### Educação
- `BookOpen` - Cursos
- `Video` - Videoaulas
- `Brain` - Aprendizado

#### Gamificação
- `Trophy` - Troféus, níveis
- `Award` - Badges
- `Target` - Metas, quizzes
- `Star` - Favoritos, destaque

#### Usuário
- `User` - Perfil
- `Users` - Ranking, comunidade
- `Calendar` - Recompensas diárias

#### Sistema
- `Sparkles` - LizeCoins, magia
- `Coins` - Moeda virtual
- `CheckCircle2` - Confirmação
- `ArrowRight` - Navegação

### Tamanhos de Ícones

```tsx
<Icon className="h-4 w-4" />  // Small (16px)
<Icon className="h-5 w-5" />  // Medium (20px)
<Icon className="h-6 w-6" />  // Large (24px)
<Icon className="h-8 w-8" />  // Extra Large (32px)
```

---

## 📐 Espaçamento

### Sistema de 8px

Todos os espaçamentos são múltiplos de 8px:

```css
spacing-1: 8px;   /* 0.5rem */
spacing-2: 16px;  /* 1rem */
spacing-3: 24px;  /* 1.5rem */
spacing-4: 32px;  /* 2rem */
spacing-6: 48px;  /* 3rem */
spacing-8: 64px;  /* 4rem */
```

### Aplicação

```tsx
<div className="
  p-4      // Padding 16px (todos os lados)
  px-6     // Padding horizontal 24px
  py-8     // Padding vertical 32px
  gap-4    // Gap entre elementos 16px
  space-y-6 // Espaço vertical entre filhos 24px
" />
```

---

## 🔲 Border Radius

### Valores Padrão

```css
rounded-sm:   2px;   /* Muito sutil */
rounded:      4px;   /* Padrão cards pequenos */
rounded-md:   6px;   /* Inputs */
rounded-lg:   8px;   /* Cards médios */
rounded-xl:   12px;  /* Cards grandes */
rounded-2xl:  16px;  /* Modals */
rounded-3xl:  24px;  /* Elementos especiais */
rounded-full: 9999px; /* Botões, avatares */
```

### Uso por Componente

- **Botões CTA**: `rounded-full` (totalmente arredondado)
- **Cards**: `rounded-xl` (12px)
- **Inputs**: `rounded-md` (6px)
- **Badges**: `rounded-full`
- **Avatares**: `rounded-full`

---

## 🎭 Dark Mode (Planejado)

### Cores Dark Mode

```css
--background-dark: #09090B;
--foreground-dark: #FAFAFA;
--card-dark: #18181B;
--border-dark: #27272A;
```

### Estratégia

- Manter cores primárias (vermelho, azul, amarelo)
- Ajustar backgrounds para tons escuros
- Garantir contraste adequado
- Usar `dark:` prefix do Tailwind

---

## 📊 Imagens e Mídia

### Aspect Ratios

```tsx
<AspectRatio ratio={16/9}>
  <img src="..." alt="..." />
</AspectRatio>
```

### Tamanhos de Imagem

- **Avatar pequeno**: 32x32px
- **Avatar médio**: 48x48px
- **Avatar grande**: 96x96px
- **Thumbnail curso**: 320x180px (16:9)
- **Banner hero**: 1920x1080px (16:9)

---

## 🎨 Guidelines de Uso

### ✅ Fazer

1. Usar cores primárias para elementos importantes
2. Manter consistência de border-radius
3. Seguir hierarquia tipográfica
4. Usar ícones para reforçar significado
5. Testar contraste de cores
6. Aplicar animações com propósito

### ❌ Evitar

1. Misturar muitas cores em um mesmo componente
2. Usar fontes diferentes de LT Institute
3. Criar border-radius customizados sem motivo
4. Adicionar animações excessivas
5. Ignorar estados de hover/focus
6. Comprometer acessibilidade por estética

---

## 🎯 Checklist de Design

Antes de implementar um novo componente:

- [ ] Usa cores da paleta definida?
- [ ] Segue tipografia LT Institute?
- [ ] Border-radius consistente?
- [ ] Espaçamento múltiplo de 8px?
- [ ] Contraste de cores acessível?
- [ ] Responsivo (mobile-first)?
- [ ] Estados hover/focus/active?
- [ ] Animações suaves e com propósito?
- [ ] Ícones Lucide consistentes?
- [ ] Testado em mobile real?

---

**Última atualização:** Novembro 2025
