import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ContainerScroll } from './ui/container-scroll-animation';
import { Timeline } from './ui/timeline';
import { TestimonialsColumn } from './ui/testimonials-columns-1';
import { GlowingEffect } from './ui/glowing-effect';
import DatabaseWithRestApi from './ui/database-with-rest-api';
import { FooterTapedDesign } from './ui/footer-taped-design';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Award, 
  Zap, 
  Users, 
  BarChart,
  Star,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Video,
  Brain,
  Lightbulb,
  MessageSquare,
  GraduationCap,
  TrendingUp
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface LandingPageProps {
  onLogin: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  const features = [
    {
      icon: BookOpen,
      title: 'Cursos em Vídeo',
      description: 'Aprenda com conteúdo em vídeo de alta qualidade e estruturado por módulos'
    },
    {
      icon: Trophy,
      title: 'Sistema de XP',
      description: 'Ganhe pontos de experiência e suba de nível conforme completa os desafios'
    },
    {
      icon: Target,
      title: 'Quizzes Interativos',
      description: 'Teste seus conhecimentos com feedback instantâneo após cada questão'
    },
    {
      icon: Award,
      title: 'Badges Desbloqueáveis',
      description: 'Conquiste medalhas especiais ao alcançar marcos importantes'
    },
    {
      icon: Users,
      title: 'Ranking Global',
      description: 'Compete com outros estudantes e veja sua posição no leaderboard'
    },
    {
      icon: BarChart,
      title: 'Progresso Visual',
      description: 'Acompanhe seu desenvolvimento com gráficos e estatísticas detalhadas'
    }
  ];

  const stats = [
    { value: '10+', label: 'Cursos Disponíveis' },
    { value: '50+', label: 'Módulos de Aprendizado' },
    { value: '1000+', label: 'Estudantes Ativos' },
    { value: '95%', label: 'Taxa de Satisfação' }
  ];

  const testimonials = [
    {
      text: "A gamificação tornou meu aprendizado muito mais divertido e envolvente. Completei 3 cursos em apenas 2 meses!",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Ana Silva",
      role: "Desenvolvedora Frontend",
    },
    {
      text: "Os quizzes com feedback instantâneo me ajudaram a fixar o conteúdo de forma incrível. Recomendo muito!",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Carlos Souza",
      role: "Designer UI/UX",
    },
    {
      text: "O sistema de rankings me mantém super motivada. É ótimo ver meu progresso e competir de forma saudável.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Beatriz Costa",
      role: "Estudante de Tecnologia",
    },
    {
      text: "Consegui mudar de carreira graças aos cursos da plataforma. O certificado me ajudou muito nas entrevistas!",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Pedro Oliveira",
      role: "Analista de Dados",
    },
    {
      text: "As badges e conquistas me incentivam a continuar estudando. É como um jogo onde você realmente aprende!",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Juliana Santos",
      role: "Product Manager",
    },
    {
      text: "A plataforma é intuitiva e o progresso visual me ajuda a acompanhar minha evolução de forma clara.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Mariana Lima",
      role: "Desenvolvedora Full Stack",
    },
    {
      text: "Nunca pensei que estudar poderia ser tão engajante. O sistema de XP é genial!",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Rafael Ferreira",
      role: "UX Designer",
    },
    {
      text: "A ouvidoria da plataforma realmente ouve nossas sugestões. Sinto que faço parte da evolução do EduGame!",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Camila Rodrigues",
      role: "Desenvolvedora Mobile",
    },
    {
      text: "Os vídeos são de excelente qualidade e os instrutores são muito didáticos. Valeu cada minuto!",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Lucas Almeida",
      role: "Engenheiro de Software",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <div className="min-h-screen bg-[rgb(255,255,255)]">
      {/* Navigation */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[70%] z-50 border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <span>Civilize AI</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">Sobre</Button>
              <Button variant="ghost">Cursos</Button>
              <Button onClick={onLogin}>
                Login
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Scroll Animation */}
      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <Badge className="mx-auto w-fit gap-2">
              <Sparkles className="h-3 w-3" />
              Plataforma Gamificada de Aprendizado
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
              Aprenda, Compete e
              <span className="block text-primary mt-2">
                Evolua com Gamificação
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme seu aprendizado em uma jornada épica. Ganhe XP, desbloqueie conquistas e suba no ranking enquanto domina novas habilidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={onLogin} className="gap-2">
                <Zap className="h-5 w-5" />
                Começar Gratuitamente
              </Button>
              <Button size="lg" variant="outline">
                Ver Demonstração
              </Button>
            </div>
          </div>
        }
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1673515335586-f9f662c01482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
          alt="EduGame Platform Dashboard"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
        />
      </ContainerScroll>

      {/* Timeline Section */}
      <section className="py-20 pt-[80px] pr-[0px] pb-[0px] pl-[0px]">
        <Timeline data={[
          {
            title: "Etapa 1",
            content: (
              <div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                    <Video className="h-4 w-4" />
                    <span className="text-sm">Aprenda</span>
                  </div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg mb-4">
                  <strong>Assista aos cursos em vídeo</strong>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-8">
                  Comece sua jornada assistindo aulas em vídeo de alta qualidade. Aprenda no seu ritmo, pause quando precisar e revise quantas vezes quiser. Cada módulo é cuidadosamente estruturado para maximizar seu aprendizado.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759984782106-4b56d0aa05b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500"
                    alt="Estudante assistindo aula online"
                    className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
                  />
                  <div className="flex flex-col justify-center p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <p className="text-sm">10+ Cursos</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Video className="h-5 w-5 text-primary" />
                      <p className="text-sm">50+ Vídeos</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      <p className="text-sm">Aprenda no seu ritmo</p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Etapa 2",
            content: (
              <div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 mb-4">
                    <Brain className="h-4 w-4" />
                    <span className="text-sm">Pratique</span>
                  </div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg mb-4">
                  <strong>Teste seus conhecimentos</strong>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-8">
                  Após cada módulo, faça quizzes interativos para testar o que aprendeu. Receba feedback instantâneo, ganhe XP e desbloqueie novos conteúdos. Cada acerto te aproxima do próximo nvel!
                </p>
                <div className="mb-8">
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Feedback instantâneo em cada questão
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Ganhe XP ao acertar as respostas
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Desbloqueie badges por performance perfeita
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Avance para novos módulos e cursos
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1752937326758-f130e633b422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500"
                    alt="Conquista e certificado"
                    className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
                  />
                  <div className="flex flex-col justify-center p-4 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-lg">
                    <Trophy className="h-12 w-12 text-primary mb-3" />
                    <p className="text-sm mb-1">Ganhe até</p>
                    <p className="text-2xl mb-1">100 XP</p>
                    <p className="text-xs text-muted-foreground">por quiz perfeito</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Etapa 3",
            content: (
              <div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 mb-4">
                    <Award className="h-4 w-4" />
                    <span className="text-sm">Conquiste</span>
                  </div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg mb-4">
                  <strong>Receba certificados e badges</strong>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-8">
                  Complete cursos e conquiste certificados oficiais. Desbloqueie badges especiais ao atingir marcos importantes. Mostre suas conquistas no seu perfil e compartilhe com o mundo!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1594477898765-b9ad43ad9cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500"
                    alt="Colaboração e conquistas"
                    className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1617706111157-5f5c6443a04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500"
                    alt="Inovação e ideias"
                    className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
                  />
                </div>
              </div>
            ),
          },
          {
            title: "Etapa 4",
            content: (
              <div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 mb-4">
                    <Lightbulb className="h-4 w-4" />
                    <span className="text-sm">Contribua</span>
                  </div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg mb-4">
                  <strong>Faça a diferença na Ouvidoria</strong>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-8">
                  Chegou ao topo da sua jornada! Agora é hora de compartilhar suas ideias e feedback na ouvidoria. Suas sugestões podem melhorar a plataforma para milhares de estudantes. Seja parte da evolução do EduGame!
                </p>
                <div className="mb-8">
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Compartilhe suas ideias e sugestões
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Proponha novos cursos e recursos
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    Ajude a comunidade a crescer
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    <Star className="h-5 w-5 text-primary" />
                    Tenha voz ativa na plataforma
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg border-2 border-primary/30">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-base mb-2">
                        <strong>Sua voz importa!</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        A ouvidoria é o canal direto para você contribuir com ideias que podem transformar a experiência de aprendizado de toda a comunidade EduGame.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
        ]} />
      </section>

      {/* Stats Section with Glowing Effect */}
      <section className="py-20 border-y bg-muted/30 pt-[80px] pr-[0px] pb-[0px] pl-[0px]">
        <div className="container mx-auto px-4">
          {/* Header com Badge e Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-16"
          >
            <Badge className="mb-4">Diferenciais</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">
              Nossos Diferenciais
            </h2>
            <p className="text-center mt-4 text-muted-foreground max-w-2xl">
              Unindo tecnologia e inteligência artificial em parceria com a educação para transformar a sociedade
            </p>
          </motion.div>

          {/* Layout: Ecosystem à esquerda + Cards à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Componente DatabaseWithRestApi - Ecossistema */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex justify-center"
            >
              <DatabaseWithRestApi
                circleText="IA"
                title="Ecossistema de Aprendizado Inteligente"
                badgeTexts={{
                  first: "Tecnologia",
                  second: "IA",
                  third: "Educação",
                  fourth: "Sociedade"
                }}
                buttonTexts={{
                  first: "EduGame",
                  second: "Inovação"
                }}
                lightColor="#00A6F5"
              />
            </motion.div>

            {/* Grid de 4 Cards */}
            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* 10+ Cursos */}
              <li className="min-h-[14rem] list-none">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 text-xl leading-[1.375rem] tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                          10+ Cursos Disponíveis
                        </h3>
                        <h2 className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                          Navegue por uma biblioteca completa de cursos em programação, design, marketing digital e muito mais.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* 50+ Módulos */}
              <li className="min-h-[14rem] list-none">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                        <Video className="h-4 w-4" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 text-xl leading-[1.375rem] tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                          50+ Módulos de Aprendizado
                        </h3>
                        <h2 className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                          Conteúdo estruturado em módulos progressivos com vídeo-aulas de alta qualidade para maximizar seu aprendizado.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* 1000+ Estudantes */}
              <li className="min-h-[14rem] list-none">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                        <Users className="h-4 w-4" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 text-xl leading-[1.375rem] tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                          1000+ Estudantes Ativos
                        </h3>
                        <h2 className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                          Faça parte de uma comunidade crescente de estudantes engajados competindo no ranking e conquistando badges.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* 95% Satisfação */}
              <li className="min-h-[14rem] list-none">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                        <Trophy className="h-4 w-4" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 text-xl leading-[1.375rem] tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                          95% Taxa de Satisfação
                        </h3>
                        <h2 className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                          Nossos estudantes adoram a experiência gamificada. Sistema de XP, quizzes interativos e certificados ao final.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background my-20 relative">
        <div className="container z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
          >
            <div className="flex justify-center">
              <Badge>Depoimentos</Badge>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-5 text-center">
              O que nossos alunos dizem
            </h2>
            <p className="text-center mt-5 opacity-75">
              Veja o que nossos estudantes têm a dizer sobre a plataforma.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[rgb(246,57,60)] text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já estão transformando seu aprendizado em uma aventura gamificada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={onLogin} className="gap-2">
              <Zap className="h-5 w-5" />
              Começar Gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Falar com Vendas
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Cancele quando quiser
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterTapedDesign className="w-[100%] px-8 py-10 mx-auto bg-[rgb(255,255,255)] bg-[rgb(215,212,212)]" />
    </div>
  );
}