# 📦 Componentes e Imagens - Civilize AI

## Visão Geral

Este documento detalha todos os componentes UI, imagens e assets visuais utilizados na plataforma Civilize AI.

---

## 🎨 Componentes Shadcn/ui

Localização: `/components/ui/`

### Componentes Implementados

#### 1. **button.tsx**
- **Descrição**: Botão com múltiplas variantes
- **Variantes**: 
  - `default` - Botão primário
  - `secondary` - Botão secundário
  - `outline` - Botão com borda
  - `ghost` - Botão transparente
  - `link` - Estilo de link
- **Tamanhos**: `sm`, `default`, `lg`, `icon`
- **Uso**:
```tsx
<Button variant="default" size="lg">
  Clique Aqui
</Button>
```

#### 2. **card.tsx**
- **Componentes**: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- **Uso**: Container para conteúdo agrupado
- **Exemplo**:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
</Card>
```

#### 3. **dialog.tsx**
- **Componentes**: `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`
- **Uso**: Modais e pop-ups
- **Exemplo**: Modal de compra de LizeCoins

#### 4. **progress.tsx**
- **Descrição**: Barra de progresso
- **Props**: `value` (0-100)
- **Uso**: Progresso de cursos, níveis, XP

#### 5. **badge.tsx**
- **Descrição**: Tags e badges
- **Variantes**: `default`, `secondary`, `outline`, `destructive`
- **Uso**: XP, conquistas, status

#### 6. **avatar.tsx**
- **Componentes**: `Avatar`, `AvatarImage`, `AvatarFallback`
- **Uso**: Foto de perfil do usuário
- **Exemplo**:
```tsx
<Avatar>
  <AvatarImage src={user.avatar} />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

#### 7. **tabs.tsx**
- **Componentes**: `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`
- **Uso**: Navegação entre seções (Cursos, Ranking, Perfil)

#### 8. **calendar.tsx**
- **Descrição**: Seletor de calendário
- **Uso**: Sistema de recompensas diárias

#### 9. **sheet.tsx**
- **Descrição**: Painel lateral (sidebar)
- **Uso**: Menu mobile

#### 10. **confetti.tsx**
- **Descrição**: Animação de confetti para celebrações
- **Componentes**: `Confetti`, `ConfettiButton`
- **Uso**: Tela de parabéns ao completar primeira lição
- **Exemplo**:
```tsx
<Confetti
  ref={confettiRef}
  className="absolute left-0 top-0 z-0 size-full"
/>
```

#### 11. **form.tsx**
- **Descrição**: Componentes para formulários
- **Integração**: React Hook Form + Zod
- **Uso**: Login, cadastro, onboarding

#### 12. **input.tsx**
- **Descrição**: Campo de input de texto
- **Tipos**: text, email, password
- **Uso**: Formulários

#### 13. **textarea.tsx**
- **Descrição**: Área de texto multi-linha
- **Uso**: Comentários, feedback

#### 14. **select.tsx**
- **Descrição**: Dropdown de seleção
- **Uso**: Filtros, seleção de opções

#### 15. **checkbox.tsx**
- **Descrição**: Caixa de seleção
- **Uso**: Aceitar termos, filtros múltiplos

#### 16. **radio-group.tsx**
- **Descrição**: Grupo de radio buttons
- **Uso**: Quizzes, seleção única

#### 17. **slider.tsx**
- **Descrição**: Controle deslizante
- **Uso**: Volume, dificuldade

#### 18. **switch.tsx**
- **Descrição**: Toggle on/off
- **Uso**: Configurações, notificações

#### 19. **separator.tsx**
- **Descrição**: Linha divisória
- **Uso**: Separar seções

#### 20. **skeleton.tsx**
- **Descrição**: Loading placeholder
- **Uso**: Carregamento de conteúdo

#### 21. **tooltip.tsx**
- **Descrição**: Dica ao passar o mouse
- **Uso**: Informações adicionais

#### 22. **popover.tsx**
- **Descrição**: Pop-up posicionado
- **Uso**: Menus contextuais

#### 23. **dropdown-menu.tsx**
- **Descrição**: Menu dropdown
- **Uso**: Opções de usuário, ações

#### 24. **alert.tsx**
- **Descrição**: Alertas e notificações
- **Uso**: Mensagens de erro/sucesso

#### 25. **sonner.tsx**
- **Descrição**: Toast notifications
- **Uso**: Feedback rápido de ações

---

## 🎭 Componentes Customizados

Localização: `/components/`

### Componentes Principais

#### 1. **App.tsx**
- **Descrição**: Componente raiz da aplicação
- **Responsabilidades**:
  - Gerenciamento de estado global
  - Roteamento entre views
  - Controle de autenticação
  - Lógica de progresso e XP

#### 2. **LandingPage.tsx**
- **Descrição**: Página inicial pública
- **Seções**:
  - Hero com scroll animation
  - Timeline (4 etapas da jornada)
  - Diferenciais com glowing effect
  - Depoimentos em colunas
  - CTA final
  - Footer

#### 3. **Dashboard.tsx**
- **Descrição**: Painel principal do usuário logado
- **Widgets**:
  - Recomendação de curso
  - Estatísticas (XP, LizeCoins, Streak)
  - Progresso recente
  - Próximas metas
  - Acesso rápido aos cursos

#### 4. **CourseViewer.tsx**
- **Descrição**: Visualizador de cursos com módulos
- **Recursos**:
  - Lista de módulos com status (locked/unlocked)
  - Player de vídeo YouTube
  - Navegação entre módulos
  - Botão para iniciar quiz

#### 5. **Quiz.tsx**
- **Descrição**: Sistema de quizzes interativos
- **Funcionalidades**:
  - Exibição de questões (radio buttons)
  - Feedback instantâneo (correto/incorreto)
  - Cálculo de pontuação
  - Animações de confetti para acertos perfeitos
  - Tela de resultados com XP ganho

#### 6. **Leaderboard.tsx**
- **Descrição**: Ranking de usuários
- **Recursos**:
  - Top 3 com pódio visual
  - Lista completa de usuários
  - Filtros por período (semanal, mensal, geral)
  - Destaque do usuário atual

#### 7. **UserProfile.tsx**
- **Descrição**: Perfil do usuário
- **Seções**:
  - Banner personalizável
  - Avatar e informações básicas
  - Progresso de nível com barra
  - Estatísticas (XP, módulos, cursos)
  - Cursos em progresso
  - Badges desbloqueadas

#### 8. **BadgeSystem.tsx**
- **Descrição**: Sistema de conquistas
- **Tipos de badges**:
  - Primeira lição
  - Primeira nota perfeita
  - Primeira sequência de 3 dias
  - Iniciante (50 XP)
  - Expert (nível 5)
  - Scholar (completar 3 cursos)
  - E mais...

#### 9. **OnboardingFlow.tsx**
- **Descrição**: Fluxo de boas-vindas
- **Etapas**:
  1. Nome preferido
  2. Interesses
  3. Nível de conhecimento
  4. Objetivos
  5. Disponibilidade de tempo
  6. Primeira aula em vídeo + quiz
  7. Tela de parabéns com confetti

#### 10. **SignInPage.tsx** / **SignUpPage.tsx**
- **Descrição**: Páginas de autenticação
- **Recursos**:
  - Login com email/senha
  - Google Sign-In
  - Validação de formulários
  - Layout split com hero image
  - Depoimentos

#### 11. **DailyRewardCalendar.tsx**
- **Descrição**: Calendário de recompensas diárias
- **Funcionalidades**:
  - Dropdown no header
  - Visualização do mês atual
  - Marcação de dias com login
  - Sistema de streak
  - Recompensa de 20 LizeCoins por dia

#### 12. **CheckoutPix.tsx**
- **Descrição**: Sistema de pagamento PIX
- **Recursos**:
  - Geração de código PIX
  - QR Code visual
  - Botão para copiar código
  - Simulação de confirmação de pagamento
  - Timer de expiração

#### 13. **AccessibilityTools.tsx**
- **Descrição**: Ferramentas de acessibilidade
- **Recursos**:
  - Aumento de fonte
  - Alto contraste
  - LIBRAS (planejado)
  - Leitor de tela (planejado)

---

## 🎨 Componentes UI Customizados

### 1. **FlowHoverButton**
- **Localização**: `/components/ui/flow-hover-button.tsx`
- **Descrição**: Botão com efeito de hover fluido
- **Uso**: CTAs principais, navegação
- **Características**:
  - Transição suave de cores
  - Ícone opcional
  - Border-radius arredondado

### 2. **ContainerScroll**
- **Localização**: `/components/ui/container-scroll-animation.tsx`
- **Descrição**: Animação de scroll com parallax
- **Uso**: Hero section da landing page

### 3. **Timeline**
- **Localização**: `/components/ui/timeline.tsx`
- **Descrição**: Linha do tempo vertical
- **Uso**: 4 etapas da jornada (Aprenda, Pratique, Conquiste, Contribua)

### 4. **TestimonialsColumn**
- **Localização**: `/components/ui/testimonials-columns-1.tsx`
- **Descrição**: Coluna de depoimentos com scroll infinito
- **Uso**: Seção de depoimentos da landing page

### 5. **GlowingEffect**
- **Localização**: `/components/ui/glowing-effect.tsx`
- **Descrição**: Efeito de brilho que segue o cursor
- **Uso**: Cards de diferenciais

### 6. **DatabaseWithRestApi**
- **Localização**: `/components/ui/database-with-rest-api.tsx`
- **Descrição**: Visualização de ecossistema (gráfico)
- **Uso**: Seção de diferenciais

### 7. **FooterTapedDesign**
- **Localização**: `/components/ui/footer-taped-design.tsx`
- **Descrição**: Footer com design de fita adesiva
- **Uso**: Rodapé da landing page

### 8. **SvgFollowScroll**
- **Localização**: `/components/ui/svg-follow-scroll.tsx`
- **Descrição**: SVG que segue o scroll
- **Uso**: Efeito visual na landing page

### 9. **TextLoop**
- **Localização**: `/components/ui/text-loop.tsx`
- **Descrição**: Texto que faz loop animado
- **Uso**: Hero text ("gamificada", "interativa", "transformadora")

---

## 🖼️ Imagens e Assets

### Imagens do Figma

#### Mascote Aralize
```typescript
// Logo principal
import logoAralize from 'figma:asset/e7c68171915ceb3c591a71757fda4ab4b592daed.png'

// Variações da Aralize
import papagaioEstudando from 'figma:asset/8cd44a66feb1d956f624b7bbc1ce5fe9d9ec464f.png'
import papagaioQuiz from 'figma:asset/7b847fea5d7fb4086f40ebd56e2f355031f52f76.png'
import papagaioBadges from 'figma:asset/86f83f6960d9be1526eeb9d842e02a0042c503f5.png'
import papagaioTrofeu from 'figma:asset/1510322d28f519a6d96a01426a3cc3cf67d82ad7.png'
import papagaioApresentando from 'figma:asset/dd64a0b95b79e3ee74344f9563faf53b1224f74d.png'
```

**Uso**:
- **logoAralize**: Header, navegação, branding
- **papagaioEstudando**: Seção "Etapa 1 - Aprenda"
- **papagaioQuiz**: Seção "Etapa 2 - Pratique"
- **papagaioBadges**: Seção "Etapa 3 - Conquiste"
- **papagaioTrofeu**: Cards de conquistas
- **papagaioApresentando**: Seção "Etapa 4 - Contribua"

### Imagens do Unsplash

#### Componente ImageWithFallback
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback'

<ImageWithFallback
  src="https://images.unsplash.com/photo-..."
  alt="Descrição da imagem"
  className="w-full h-full object-cover"
/>
```

**Por que usar ImageWithFallback?**
- Fallback automático se imagem falhar
- Otimização de carregamento
- Consistência no tratamento de erros

#### Categorias de Imagens Usadas

1. **Educação e Aprendizado**
   - Pessoas estudando
   - Computadores e tecnologia
   - Livros e materiais educativos
   - Exemplo: `photo-1664545141018-c70ca9e78a76`

2. **Cidadania e Democracia**
   - Bandeiras do Brasil
   - Instituições governamentais
   - Pessoas votando
   - Participação social

3. **Tecnologia e Inovação**
   - Interfaces digitais
   - Dados e gráficos
   - IA e futuro

4. **Pessoas e Diversidade**
   - Retratos diversos
   - Usuários aleatórios (para depoimentos)
   - Exemplo: `https://randomuser.me/api/portraits/`

### Otimização de Imagens

**Parâmetros Unsplash**:
```
?w=1200        // Largura 1200px
&q=80          // Qualidade 80%
&auto=format   // Formato automático (WebP se suportado)
&fit=crop      // Crop para ajustar
&crop=entropy  // Crop inteligente
```

**Exemplo completo**:
```
https://images.unsplash.com/photo-1664545141018-c70ca9e78a76?w=1200&q=80&auto=format&fit=crop
```

---

## 🎥 Vídeos

### YouTube Player

**Componente**: Integrado no `CourseViewer.tsx`

**Estrutura**:
```tsx
<div className="aspect-video">
  <iframe
    src={`https://www.youtube.com/embed/${videoId}`}
    className="w-full h-full"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

**Vídeos de Exemplo Usados**:
- Vídeo de boas-vindas (onboarding): ID customizável
- Módulos de cursos: URLs YouTube embedadas

---

## 🎨 SVGs e Ícones

### SVGs Importados do Figma

Localização: `/imports/`

```typescript
import svgPaths from "./imports/svg-[hash]"
```

**Uso**: Ilustrações customizadas, ícones especiais

### Ícones Lucide

**Importação**:
```typescript
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Award,
  Sparkles,
  Coins
} from 'lucide-react'
```

**Uso**:
```tsx
<BookOpen className="h-5 w-5 text-blue-500" />
```

---

## 📊 Componente de Gráficos

### Recharts (Planejado)

**Tipos de gráficos a implementar**:
1. **Line Chart**: Progresso de XP ao longo do tempo
2. **Bar Chart**: Comparação de módulos completados
3. **Pie Chart**: Distribuição de tempo por categoria
4. **Area Chart**: Tendência de engajamento

**Exemplo**:
```tsx
import { LineChart, Line, XAxis, YAxis } from 'recharts'

<LineChart data={xpHistory}>
  <Line type="monotone" dataKey="xp" stroke="#3283FF" />
  <XAxis dataKey="date" />
  <YAxis />
</LineChart>
```

---

## 🎯 Mapa de Componentes por View

### Landing Page
- `LandingPage.tsx`
- `ContainerScroll`
- `Timeline`
- `TestimonialsColumn`
- `GlowingEffect`
- `DatabaseWithRestApi`
- `FooterTapedDesign`
- `TextLoop`
- `FlowHoverButton`

### Dashboard
- `Dashboard.tsx`
- `Card`
- `Badge`
- `Progress`
- `DailyRewardCalendar`

### Curso
- `CourseViewer.tsx`
- `Card`
- `Button`
- `Badge`
- YouTube iframe

### Quiz
- `Quiz.tsx`
- `RadioGroup`
- `Card`
- `Progress`
- `Confetti`

### Perfil
- `UserProfile.tsx`
- `Avatar`
- `Card`
- `Progress`
- `Badge`
- `Calendar`

### Ranking
- `Leaderboard.tsx`
- `Card`
- `Avatar`
- `Badge`
- `Tabs`

### Onboarding
- `OnboardingFlow.tsx`
- `Button`
- `RadioGroup`
- `Checkbox`
- `Confetti`
- `Motion` animations

---

## 🛠️ Ferramentas de Desenvolvimento

### Criação de Componentes

**Template básico**:
```tsx
import { cn } from '@/lib/utils'

interface MyComponentProps {
  className?: string
  children?: React.ReactNode
}

export function MyComponent({ className, children }: MyComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      {children}
    </div>
  )
}
```

### Utils

**`/lib/utils.ts`**:
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Uso**: Combinar classes Tailwind dinamicamente
```tsx
<div className={cn(
  "base-class",
  isActive && "active-class",
  className
)} />
```

---

## 📦 Exportação e Reutilização

### Boas Práticas

1. **Componentes pequenos**: Máximo 200 linhas
2. **Props tipadas**: Sempre usar TypeScript interfaces
3. **Composição**: Preferir composição a herança
4. **Reutilização**: Extrair lógica comum
5. **Documentação**: Comentar props complexas

### Exemplo de Composição

```tsx
// ❌ Componente monolítico
<CourseCard 
  showProgress 
  showBadge 
  showButton 
  variant="premium"
/>

// ✅ Composição
<Card>
  <CardHeader>
    <CourseThumbnail />
    <CourseTitle />
  </CardHeader>
  <CardContent>
    <CourseProgress />
  </CardContent>
  <CardFooter>
    <Button>Continuar</Button>
  </CardFooter>
</Card>
```

---

## 📸 Banco de Imagens Recomendado

### Unsplash Collections

Para manter consistência visual:

1. **Education**: https://unsplash.com/collections/4828470/education
2. **Technology**: https://unsplash.com/collections/3689097/technology
3. **People**: https://unsplash.com/collections/3657445/people
4. **Brazil**: Buscar por "brasil", "bandeira brasil", "congresso nacional"

### Palavras-chave em Português

- "estudante brasileiro"
- "educação cidadã"
- "participação social"
- "democracia brasil"
- "direitos humanos"
- "jovens estudando"

---

**Última atualização:** Novembro 2025
