import image_76baa3749f46981f4dcb9ee7247adb7105d55858 from 'figma:asset/76baa3749f46981f4dcb9ee7247adb7105d55858.png';
import image_f75a8eafcdf4c20aaad1f13cff07aac299871473 from 'figma:asset/f75a8eafcdf4c20aaad1f13cff07aac299871473.png';
import image_1510322d28f519a6d96a01426a3cc3cf67d82ad7 from 'figma:asset/1510322d28f519a6d96a01426a3cc3cf67d82ad7.png';
import image_dd64a0b95b79e3ee74344f9563faf53b1224f74d from 'figma:asset/dd64a0b95b79e3ee74344f9563faf53b1224f74d.png';
import image_8cd44a66feb1d956f624b7bbc1ce5fe9d9ec464f from 'figma:asset/8cd44a66feb1d956f624b7bbc1ce5fe9d9ec464f.png';
import image_3655b414756a692dae3da879e2473c2583463bed from 'figma:asset/3655b414756a692dae3da879e2473c2583463bed.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import logoAralize from 'figma:asset/e7c68171915ceb3c591a71757fda4ab4b592daed.png';
import papagaioEstudando from 'figma:asset/8cd44a66feb1d956f624b7bbc1ce5fe9d9ec464f.png';
import papagaioQuiz from 'figma:asset/7b847fea5d7fb4086f40ebd56e2f355031f52f76.png';
import papagaioBadges from 'figma:asset/86f83f6960d9be1526eeb9d842e02a0042c503f5.png';
import papagaioTrofeu from 'figma:asset/1510322d28f519a6d96a01426a3cc3cf67d82ad7.png';
import papagaioApresentando from 'figma:asset/dd64a0b95b79e3ee74344f9563faf53b1224f74d.png';
import { ContainerScroll } from './ui/container-scroll-animation';
import { Timeline } from './ui/timeline';
import { TestimonialsColumn } from './ui/testimonials-columns-1';
import { GlowingEffect } from './ui/glowing-effect';
import DatabaseWithRestApi from './ui/database-with-rest-api';
import { FooterTapedDesign } from './ui/footer-taped-design';
import { SvgFollowScroll } from './ui/svg-follow-scroll';
import { Button } from './ui/button';
import { FlowHoverButton } from './ui/flow-hover-button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { TextLoop } from './ui/text-loop';
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
  TrendingUp,
  Menu,
  X
} from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
  onSignUp: () => void;
  onFAQClick?: () => void;
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
}

export function LandingPage({ onLogin, onSignUp, onFAQClick, onTermsClick, onPrivacyClick }: LandingPageProps) {
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
    text: "Sempre achei política complicada. Com a Civilize.ai, finalmente entendi como leis e decisões impactam meu dia a dia. Hoje eu opino nas consultas públicas com muito mais segurança.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Ana Silva",
    role: "Estudante de Escola Pública",
  },
  {
    text: "Os quizzes sobre direitos e políticas públicas fixaram muito mais do que qualquer aula tradicional. Já usei o que aprendi para ajudar minha família em uma situação real.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Carlos Souza",
    role: "Agente Comunitário",
  },
  {
    text: "A jornada gamificada me manteve engajada. Completei vários módulos sobre participação social e hoje participo de audiências públicas da minha cidade.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Beatriz Costa",
    role: "Estudante de Direito",
  },
  {
    text: "Eu nunca tinha usado uma plataforma de governo aberto. A Civilize.ai me guiou passo a passo, e consegui contribuir em uma consulta sobre transporte público.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Pedro Oliveira",
    role: "Trabalhador do Setor de Serviços",
  },
  {
    text: "As badges de participação cidadã são geniais. Cada vez que eu participo de uma consulta ou respondo um quiz, sinto que estou construindo um currículo cidadão de verdade.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Juliana Santos",
    role: "Professora do Ensino Médio",
  },
  {
    text: "A visualização do impacto coletivo é o que mais me motiva. Ver quantas pessoas estão aprendendo e opinando nos mesmos temas que eu é muito poderoso.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Mariana Lima",
    role: "Líder de Grêmio Estudantil",
  },
  {
    text: "Nunca pensei que cidadania pudesse ser divertida. O sistema de XP e missões transformou 'lei e artigo' em algo vivo, conectado à minha realidade.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Rafael Ferreira",
    role: "Desenvolvedor Júnior",
  },
  {
    text: "Usei a Civilize.ai com meus alunos em um projeto de participação social. Eles não só aprenderam, como começaram a questionar e propor ideias para a escola e para o bairro.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Camila Rodrigues",
    role: "Educadora Social",
  },
  {
    text: "A plataforma reúne dados públicos, explicações simples e desafios práticos. Em vez de só reclamar nas redes sociais, agora eu participo de processos oficiais de decisão.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Lucas Almeida",
    role: "Morador de Periferia",
  },
];


  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F1FA]" style={{ fontFamily: "'LT Institute', sans-serif" }}>
      {/* Navigation */}
      <header className="sticky top-0 left-0 right-0 mb-[20px] w-[90%] mx-auto z-50 border border-white/20 backdrop-blur-md supports-[backdrop-filter]:bg-white/5 rounded-[100px]">
        <div className="container mx-auto p-[16px] rounded-[100px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ImageWithFallback
                src={logoAralize}
                alt="Logo Civilize AI"
                className="h-15 w-15 object-cover"
              />
              <span className="text-[20px] font-bold">Civilize AI</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <FlowHoverButton onClick={onLogin} icon={<ArrowRight className="h-4 w-4" />} className="rounded-full border-0 bg-white">
                Começe Agora
              </FlowHoverButton>
              <FlowHoverButton onClick={onLogin} icon={<ArrowRight className="h-4 w-4" />} className="rounded-full border-0 bg-white">
                Já Tenho uma Conta
              </FlowHoverButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 pt-4 border-t border-white/20 flex flex-col gap-3"
            >
              <FlowHoverButton onClick={onLogin} icon={<ArrowRight className="h-4 w-4" />} className="rounded-full border-0 bg-white w-full justify-center">
                Começe Agora
              </FlowHoverButton>
              <FlowHoverButton onClick={onLogin} icon={<ArrowRight className="h-4 w-4" />} className="rounded-full border-0 bg-white w-full justify-center">
                Já Tenho uma Conta
              </FlowHoverButton>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section with Scroll Animation */}
      <div>
        <ContainerScroll
          titleComponent={
            <div className="space-y-6 z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
                Sua jornada<br className="sm:hidden" />{' '}
                <TextLoop interval={3}>
                  {[
                    <span key="gamificada" style={{ color: '#FF2A1D', fontWeight: 700 }}>gamificada</span>,
                    <span key="interativa" style={{ color: '#3283FF', fontWeight: 700 }}>interativa</span>,
                    <span key="transformadora" style={{ color: '#E3C545', fontWeight: 700 }}>transformadora</span>
                  ]}
                </TextLoop>
                <br />
                de formação cívica
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl z-10 mx-auto">
                A Civilize.ai é uma plataforma gamificada que, em quatro etapas, transforma qualquer pessoa em protagonista da democracia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 z-10">
                <FlowHoverButton onClick={onLogin} icon={<Zap className="h-5 w-5" />} className="px-8 py-3 text-base rounded-full border-0 bg-white">
                  Começar Gratuitamente
                </FlowHoverButton>
              </div>
            </div>
          } 
        >
          <ImageWithFallback
            src={image_76baa3749f46981f4dcb9ee7247adb7105d55858}
            alt="EduGame Platform Dashboard"
            className="relative mx-auto rounded-2xl object-cover h-full w-full object-center z-10"
          />
        </ContainerScroll>
      </div>

      {/* SVG Follow Scroll Effect */}
      <SvgFollowScroll />

      {/* Timeline Section */}
      <section className="py-20 pt-[80px] pr-[0px] pb-[0px] pl-[0px] bg-[##F0F1FA]">
        <Timeline data={[
          {
            title: "Etapa 1",
            content: (
              <div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: '#3283FF20', color: '#3283FF' }}>
                    <Video className="h-4 w-4" />
                    <span className="text-sm">Aprenda</span>
                  </div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg mb-4">
                  <strong>Assista aos cursos em vídeo</strong>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-8">
                  Cursos rápidos, simples e divertidos.
A IA transforma projetos de lei, políticas públicas e dados oficiais em conteúdos curtos, em linguagem acessível.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ImageWithFallback
                    src={papagaioEstudando}
                    alt="Estudante assistindo aula online"
                    className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
                  />
                  
                  <div className="flex flex-col justify-center p-4 bg-muted rounded-lg" style={{ background: 'linear-gradient(to bottom right, #3283FF, #68A4FF)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-5 w-5" style={{ color: '#FFF' }} />
                      <p className="text-lm text-white">O que é um Projeto de Lei?</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Video className="h-5 w-5" style={{ color: '#FFF' }} />
                      <p className="text-lm text-white">Como o Congresso funciona?</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5" style={{ color: '#FFF' }} />
                      <p className="text-lm text-white">Orçamento público em 5 minutos.</p>
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: '#fff', color: '#3283FF' }}>
                    <Brain className="h-4 w-4" />
                    <span className="text-sm">Pratique</span>
                  </div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg mb-4">
                  <strong>Teste seus conhecimentos</strong>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-8">
                  Quizzes, desafios e jogos de simulação para treinar a cidadania na prática.
                </p>
                <div className="mb-8">
                  <div className="flex gap-2 items-center text-neutral-600 dark:text-neutral-300 text-sm md:text-base mb-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: '#82F690' }} />
                    Simule o voto de um deputado
                  </div>
                  <div className="flex gap-2 items-center text-neutral-600 dark:text-neutral-300 text-sm md:text-base mb-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: '#82F690' }} />
                    Quiz de direitos (fácil → médio → difícil)
                  </div>
                  <div className="flex gap-2 items-center text-neutral-600 dark:text-neutral-300 text-sm md:text-base mb-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: '#82F690' }} />
                    Desafios para identificar problemas reais na sua cidade
                  </div>
                  <div className="flex gap-2 items-center text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
                    <CheckCircle2 className="h-5 w-5" style={{ color: '#82F690' }} />
                    Avance para novos módulos e cursos
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ImageWithFallback
                    src={papagaioQuiz}
                    alt="Conquista e certificado"
                    className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
                  />
                  <div className="flex flex-col justify-center p-4 rounded-lg" style={{ background: 'linear-gradient(to bottom right, #3283FF, #68A4FF)' }}>
                    <Trophy className="h-12 w-12 mb-3" style={{ color: '#E3C545' }} />
                    <p className="text-sm mb-1 text-white">Ganhe até</p>
                    <p className="text-2xl mb-1 text-white">100 XP</p>
                    <p className="text-xs text-muted-foreground text-white">por quiz perfeito</p>
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: '#FF2A1D20', color: '#FF2A1D' }}>
                    <Award className="h-4 w-4 text-white" />
                    <span className="text-sm text-[#FF2A1D]">Conquiste</span>
                  </div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg mb-4">
                  <strong>Receba certificados e badges</strong>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-8">
                  Cada aula e cada desafio rendem XP, medalhas e badges – como no Duolingo, mas para cidadania.
Seu progresso vira:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ImageWithFallback
                    src={papagaioBadges}
                    alt="Colaboração e conquistas"
                    className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg"
                  />
                  <ImageWithFallback
                    src={papagaioTrofeu}
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: '#FF2A1D20', color: '#FF2A1D' }}>
                    <Lightbulb className="h-4 w-4" />
                    <span className="text-sm">Contribua</span>
                  </div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg mb-4">
                  <strong>Faça a diferença na Ouvidoria</strong>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-8">
                  A grande virada: sair da teoria e ir para a ação.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="mb-6">
                      <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
                        <MessageSquare className="h-5 w-5" style={{ color: '#FF2A1D' }} />
                        Integração com iniciativas de governo aberto (como o Brasil Participa)
                      </div>
                      <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
                        <Lightbulb className="h-5 w-5" style={{ color: '#FF2A1D' }} />
                        Convites para consultas públicas e audiências
                      </div>
                      <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
                        <Users className="h-5 w-5" style={{ color: '#FF2A1D' }} />
                        Badges reais por participação em processos oficiais
                      </div>
                      <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        <Star className="h-5 w-5" style={{ color: '#FF2A1D' }} />
                        Seu histórico de estudos se conecta a impacto público mensurável
                      </div>
                    </div>
                    <div className="p-6 rounded-lg border-2" style={{ background: 'linear-gradient(to bottom right, #3283FF, #68A4FF)', borderColor: '#FF2A1D50' }}>
                      <div className="flex items-start gap-4">
                        <MessageSquare className="h-8 w-8 flex-shrink-0" style={{ color: '#fff' }} />
                        <div>
                          <p className="text-base mb-2 text-white">
                            <strong>Sua voz importa!</strong>
                          </p>
                          <p className="text-sm text-muted-foreground text-white">
                            Civilize AI é a ponte entre Educação → Ação
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <FlowHoverButton
                        onClick={() => window.open('https://brasilparticipativo.presidencia.gov.br/processes?filter%5Bwith_area%5D=&filter%5Bwith_date%5D=all&filter%5Bwith_scope%5D=&filter%5Bwith_type%5D=1', '_blank')}
                        icon={<ArrowRight className="h-4 w-4" />}
                        className="flex-1 rounded-full border-0 text-white"
                        style={{ backgroundColor: '#FF2A1D' }}
                      >
                        Consultas Públicas
                      </FlowHoverButton>
                      <FlowHoverButton
                        onClick={() => window.open('https://brasilparticipativo.presidencia.gov.br', '_blank')}
                        icon={<ArrowRight className="h-4 w-4" />}
                        className="flex-1 rounded-full border-0 bg-white text-[#3283FF] hover:text-white"
                      >
                        Brasil Participativo
                      </FlowHoverButton>
                    </div>
                  </div>
                  <ImageWithFallback
                    src={papagaioApresentando}
                    alt="Papagaio apresentando participação cidadã"
                    className="rounded-lg object-cover h-full w-full shadow-lg"
                  />
                </div>
              </div>
            ),
          },
        ]} className="px-[16px] py-[10px] rounded-[100px]"/>
      </section>

      {/* Stats Section with Glowing Effect */}
      <section className="py-20 bg-[#F0F1FA] pt-[80px] pr-[0px] pb-[0px] pl-[0px]">
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
              Por que a Civilize AI é diferente?
            </p>
          </motion.div>

          {/* Layout: Ecosystem à esquerda + Cards à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-[0px] pr-[0px] pb-[50px] pl-[0px]">
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
                  first: "Civilize",
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
                          IA para simplificação legislativa
                        </h3>
                        <h2 className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                          Traduzimos juridiquês em linguagem simples, mostrando “o que isso muda na sua vida.
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
                          Trilhas personalizadas
                        </h3>
                        <h2 className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                          A IA monta percursos de aprendizagem de acordo com o seu nível, interesses e região.
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
                          Gamificação com impacto real
                        </h3>
                        <h2 className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                          Pontos, badges e rankings não são só números: eles refletem participação em consultas públicas, audiências e votações oficiais.
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
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 text-xl leading-[1.375rem] tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                          LizeCoins - Moeda Virtual
                        </h3>
                        <h2 className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                          Ganhe 150 LizeCoins iniciais e 20 LizeCoins por login diário. Compre cursos premium de forma totalmente gratuita usando suas moedas!
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
      <section className="bg-[#F0F1FA] my-20 relative">
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
      <section className="py-20 bg-[rgb(240,241,250)] text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-[rgb(39,39,42)]">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-[rgb(39,39,42)]">
            Junte-se a milhares de estudantes que já estão transformando seu aprendizado em uma aventura gamificada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FlowHoverButton onClick={onLogin} icon={<Zap className="h-5 w-5" />} className="px-8 py-3 text-base rounded-full border-0 bg-white">
              Começar Gratuitamente
            </FlowHoverButton>
          </div>
      
        </div>
      </section>

      {/* Footer */}
      <FooterTapedDesign 
        className="w-[100%] px-8 py-10 mx-auto bg-[#F0F1FA]" 
        onFAQClick={onFAQClick}
        onTermsClick={onTermsClick}
        onPrivacyClick={onPrivacyClick}
      />
    </div>
  );
}