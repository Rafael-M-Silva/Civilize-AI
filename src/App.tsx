import { AccessibilityTools } from './components/AccessibilityTools';
import { DailyRewardCalendar } from './components/DailyRewardCalendar';
import { OnboardingFlow } from './components/OnboardingFlow';
import lizeCoinIcon from 'figma:asset/085fc565bb4f512d3e3f3cfb35b8d2b508a6879f.png';
import logoAralize from 'figma:asset/e7c68171915ceb3c591a71757fda4ab4b592daed.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { 
  Home, 
  BookOpen, 
  Trophy, 
  Award, 
  User, 
  Target,
  Menu,
  X,
  LogOut,
  Coins
} from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { CourseViewer } from './components/CourseViewer';
import { Quiz } from './components/Quiz';
import { UserProfile } from './components/UserProfile';
import { ProgressTracker } from './components/ProgressTracker';
import { BadgeSystem } from './components/BadgeSystem';
import { Leaderboard } from './components/Leaderboard';
import { LandingPage } from './components/LandingPage';
import { SignInPage, Testimonial } from './components/ui/sign-in';
import { SignUpPage } from './components/ui/sign-up';
import { ResetPasswordPage } from './components/ui/reset-password';
import { FAQPage } from './components/FAQPage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { Course, Badge as BadgeType, UserProgress, Quiz as QuizType, LeaderboardEntry } from './lib/types';
import { mockCourses, allBadges, mockLeaderboard } from './lib/mockData';

type View = 'dashboard' | 'course' | 'quiz' | 'profile' | 'progress' | 'badges' | 'leaderboard';

// Interface para dados do usuário do Google
interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  sub: string; // Google user ID
}

// IMPORTANTE: Substitua este valor pelo seu Google Client ID real
// Obtenha um Client ID em: https://console.cloud.google.com/
const GOOGLE_CLIENT_ID = "48530552991-bo96b17c2qfqiff3ke0ahkrnh746r0u9.apps.googleusercontent.com";

function AppContent() {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);
  const [userPreferredName, setUserPreferredName] = useState('');
  const [userInterests, setUserInterests] = useState<string[]>([]);
  const [googleUser, setGoogleUser] = useState<GoogleUser | null>(null);
  
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<QuizType | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // User state
  const [userXp, setUserXp] = useState(850);
  const [userLevel, setUserLevel] = useState(4);
  const [userCoins, setUserCoins] = useState(150); // LizeCoins iniciais
  const [unlockedCourses, setUnlockedCourses] = useState<string[]>([]); // Cursos desbloqueados pelo usuário
  const [loginDates, setLoginDates] = useState<string[]>([]); // Datas de login do usuário
  const [userProgress, setUserProgress] = useState<UserProgress[]>([
    {
      courseId: 'course-1',
      modulesCompleted: ['mod-1-1', 'mod-1-2'],
      quizzesCompleted: ['quiz-1-1', 'quiz-1-2'],
      currentModule: 0,
      xpEarned: 200,
      completed: false,
    },
  ]);
  const [badges, setBadges] = useState<BadgeType[]>(allBadges);
  const [courses, setCourses] = useState<Course[]>(mockCourses);

  // Calculate user level based on XP
  useEffect(() => {
    const level = Math.floor(userXp / 200) + 1;
    setUserLevel(level);
  }, [userXp]);

  // Restaurar sessão do localStorage ao carregar
  useEffect(() => {
    const storedUser = localStorage.getItem('civilizeai_user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setGoogleUser(userData);
        setIsLoggedIn(true);
        console.log('Sessão restaurada:', userData);
      } catch (error) {
        console.error('Erro ao restaurar sessão:', error);
        localStorage.removeItem('civilizeai_user');
      }
    }
  }, []);

  // Salvar dados do usuário no localStorage quando o googleUser mudar
  useEffect(() => {
    if (googleUser) {
      localStorage.setItem('civilizeai_user', JSON.stringify(googleUser));
    }
  }, [googleUser]);

  // Carregar loginDates do localStorage
  useEffect(() => {
    const storedLoginDates = localStorage.getItem('civilizeai_loginDates');
    if (storedLoginDates) {
      try {
        const dates = JSON.parse(storedLoginDates);
        setLoginDates(dates);
      } catch (error) {
        console.error('Erro ao carregar loginDates:', error);
      }
    }
  }, []);

  // Salvar loginDates no localStorage quando mudar
  useEffect(() => {
    if (loginDates.length > 0) {
      localStorage.setItem('civilizeai_loginDates', JSON.stringify(loginDates));
    }
  }, [loginDates]);

  // Handler para recompensa diária
  const handleDailyReward = () => {
    const today = new Date().toISOString().split('T')[0];
    
    if (!loginDates.includes(today)) {
      const DAILY_REWARD = 20;
      setUserCoins(prev => prev + DAILY_REWARD);
      setLoginDates(prev => [...prev, today]);
      console.log(`🎁 +${DAILY_REWARD} LizeCoins pela recompensa diária!`);
    }
  };

  // Auto-unlock badges based on achievements
  useEffect(() => {
    const totalModulesCompleted = userProgress.reduce((acc, p) => acc + p.modulesCompleted.length, 0);
    const totalCoursesCompleted = userProgress.filter(p => p.completed).length;

    setBadges(prevBadges => prevBadges.map(badge => {
      if (badge.unlocked) return badge;

      // First Step - Complete 1 module
      if (badge.id === 'badge-1' && totalModulesCompleted >= 1) {
        return { ...badge, unlocked: true, unlockedAt: new Date() };
      }
      // Dedicated Student - Complete 5 modules
      if (badge.id === 'badge-2' && totalModulesCompleted >= 5) {
        return { ...badge, unlocked: true, unlockedAt: new Date() };
      }
      // Conqueror - Complete 1 course
      if (badge.id === 'badge-4' && totalCoursesCompleted >= 1) {
        return { ...badge, unlocked: true, unlockedAt: new Date() };
      }
      // Expert - Reach level 5
      if (badge.id === 'badge-5' && userLevel >= 5) {
        return { ...badge, unlocked: true, unlockedAt: new Date() };
      }
      // Collector - Complete 3 courses
      if (badge.id === 'badge-7' && totalCoursesCompleted >= 3) {
        return { ...badge, unlocked: true, unlockedAt: new Date() };
      }

      return badge;
    }));
  }, [userProgress, userLevel]);

  const handleStartCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('course');
    setMobileMenuOpen(false);

    // Initialize progress if not exists
    if (!userProgress.find(p => p.courseId === courseId)) {
      setUserProgress(prev => [...prev, {
        courseId,
        modulesCompleted: [],
        quizzesCompleted: [],
        currentModule: 0,
        xpEarned: 0,
        completed: false,
      }]);
    }
  };

  const handleModuleComplete = (moduleId: string) => {
    if (!selectedCourseId) return;

    const COINS_PER_MODULE = 25; // Recompensa de 25 LizeCoins por módulo

    setUserProgress(prev => prev.map(progress => {
      if (progress.courseId === selectedCourseId && !progress.modulesCompleted.includes(moduleId)) {
        const updatedModules = [...progress.modulesCompleted, moduleId];
        const course = courses.find(c => c.id === selectedCourseId);
        const isCompleted = course ? updatedModules.length === course.totalModules : false;

        // Adicionar LizeCoins ao completar módulo
        setUserCoins(prev => prev + COINS_PER_MODULE);
        console.log(`🪙 +${COINS_PER_MODULE} LizeCoins por completar o módulo!`);

        return {
          ...progress,
          modulesCompleted: updatedModules,
          currentModule: Math.min(progress.currentModule + 1, course?.modules.length || 0),
          completed: isCompleted,
          completedAt: isCompleted ? new Date() : undefined,
        };
      }
      return progress;
    }));

    // Update course modules unlock status
    setCourses(prevCourses => prevCourses.map(course => {
      if (course.id === selectedCourseId) {
        return {
          ...course,
          modules: course.modules.map((mod, index) => {
            if (mod.id === moduleId) {
              return { ...mod, completed: true };
            }
            // Unlock next module
            if (index > 0 && course.modules[index - 1].id === moduleId) {
              return { ...mod, unlocked: true };
            }
            return mod;
          }),
        };
      }
      return course;
    }));
  };

  const handleStartQuiz = (moduleId: string) => {
    if (!selectedCourseId) return;

    const course = courses.find(c => c.id === selectedCourseId);
    const quiz = course?.quizzes.find(q => q.moduleId === moduleId);

    if (quiz) {
      setCurrentQuiz(quiz);
      setCurrentView('quiz');
    }
  };

  const handleQuizComplete = (score: number, xpEarned: number, isPerfect: boolean, passed: boolean) => {
    if (!currentQuiz || !selectedCourseId) return;

    // Add XP only if passed
    if (passed) {
      setUserXp(prev => prev + xpEarned);
    }

    // Update progress - only mark quiz as completed if passed
    setUserProgress(prev => prev.map(progress => {
      if (progress.courseId === selectedCourseId && passed && !progress.quizzesCompleted.includes(currentQuiz.id)) {
        return {
          ...progress,
          quizzesCompleted: [...progress.quizzesCompleted, currentQuiz.id],
          xpEarned: progress.xpEarned + xpEarned,
        };
      }
      return progress;
    }));

    // Unlock perfect score badge
    if (isPerfect && passed) {
      setBadges(prev => prev.map(badge => {
        if (badge.id === 'badge-3' && !badge.unlocked) {
          return { ...badge, unlocked: true, unlockedAt: new Date() };
        }
        return badge;
      }));
    }
  };

  const handleQuizBack = () => {
    setCurrentQuiz(null);
    setCurrentView('course');
  };

  const handleCourseBack = () => {
    setSelectedCourseId(null);
    setCurrentView('dashboard');
  };

  const handleUnlockCourse = (courseId: string, price: number) => {
    if (userCoins >= price) {
      setUserCoins(prev => prev - price);
      setUnlockedCourses(prev => [...prev, courseId]);
      console.log(`✅ Curso ${courseId} desbloqueado por ${price} LizeCoins!`);
    } else {
      alert(`Você precisa de ${price - userCoins} LizeCoins adicionais para desbloquear este curso.`);
    }
  };

  const selectedCourse = courses.find(c => c.id === selectedCourseId);
  const selectedCourseProgress = userProgress.find(p => p.courseId === selectedCourseId);

  const user = {
    id: googleUser?.sub || 'current',
    name: googleUser?.name || userPreferredName || 'Você',
    email: googleUser?.email || 'seu@email.com',
    avatar: googleUser?.picture || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Current',
    xp: userXp,
    level: userLevel,
    badges: badges,
    progress: userProgress,
  };

  const totalModulesCompleted = userProgress.reduce((acc, p) => acc + p.modulesCompleted.length, 0);
  const totalCoursesCompleted = userProgress.filter(p => p.completed).length;

  const menuItems = [
    { id: 'dashboard', label: 'Início', icon: Home },
    { id: 'progress', label: 'Progresso', icon: Target },
    { id: 'badges', label: 'Conquistas', icon: Award },
    { id: 'leaderboard', label: 'Ranking', icon: Trophy },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  // Testimonials for Sign In page
  const testimonials: Testimonial[] = [
    {
      avatarSrc: "https://randomuser.me/api/portraits/women/57.jpg",
      name: "Ana Silva",
      handle: "@anasilva",
      text: "A gamificação transformou meu aprendizado! Completei 3 cursos em 2 meses."
    },
    {
      avatarSrc: "https://randomuser.me/api/portraits/men/64.jpg",
      name: "Carlos Souza",
      handle: "@carlosdev",
      text: "Os quizzes com feedback instantâneo são incríveis para fixar o conteúdo."
    },
    {
      avatarSrc: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Beatriz Costa",
      handle: "@biacosta",
      text: "O sistema de rankings me mantém super motivada a continuar estudando!"
    },
  ];

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign In submitted:", data);
    // Simulate successful login
    setIsLoggedIn(true);
    setShowLogin(false);
    setNeedsOnboarding(true); // Trigger onboarding for new session
  };

  // Hook do Google Login - abre popup/redirect do Google
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("✅ Google Login Success! Token:", tokenResponse);
      
      try {
        // Buscar informações do usuário usando o access_token
        const userInfo = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
        );

        console.log("✅ Dados do usuário obtidos:", userInfo.data);

        // Criar objeto GoogleUser com os dados
        const userData: GoogleUser = {
          email: userInfo.data.email,
          name: userInfo.data.name,
          picture: userInfo.data.picture,
          sub: userInfo.data.sub
        };

        // Salvar no estado (automaticamente salva no localStorage via useEffect)
        setGoogleUser(userData);
        setIsLoggedIn(true);
        setShowLogin(false);
        setShowSignUp(false);
        setNeedsOnboarding(true);

        console.log("🎉 Usuário logado com sucesso:", userData);
      } catch (error) {
        console.error("❌ Erro ao buscar dados do usuário:", error);
      }
    },
    onError: (error) => {
      console.error("❌ Erro no Google Login:", error);
      alert("Erro ao fazer login com Google. Tente novamente.");
    },
    flow: 'implicit', // Usa implicit flow (popup/redirect)
  });

  const handleGoogleSignIn = () => {
    console.log("🚀 Iniciando login com Google (popup)...");
    // Chama a função do hook que abre o popup do Google
    googleLogin();
  };

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign Up submitted:", data);
    // Simulate successful sign up
    setIsLoggedIn(true);
    setShowSignUp(false);
    setNeedsOnboarding(true); // New users need onboarding
  };

  const handleGoogleSignUp = () => {
    // Reutilizar a mesma lógica do Google Sign In
    handleGoogleSignIn();
  };

  const handleLogout = () => {
    // Limpar todos os dados do localStorage
    localStorage.removeItem('civilizeai_user');
    
    // Resetar estados
    setIsLoggedIn(false);
    setGoogleUser(null);
    setCurrentView('dashboard');
    setSelectedCourseId(null);
    setCurrentQuiz(null);
    setMobileMenuOpen(false);
    
    console.log("Logout realizado - dados removidos do localStorage");
  };

  const handleOnboardingComplete = (data: any) => {
    console.log("Onboarding completed:", data);
    setUserPreferredName(data.preferredName);
    setUserInterests(data.interests);
    setNeedsOnboarding(false);
    // Here you would save the user preferences to your backend
    // For now, we'll just log them
  };

  // Show sign in page if login button was clicked
  if (showLogin && !isLoggedIn) {
    return (
      <>
        <AccessibilityTools />
        <SignInPage
          title={<span className="font-light text-foreground tracking-tighter">Bem-vindo ao <span className="font-semibold whitespace-nowrap">Civilize AI</span></span>}
          description="Acesse sua conta e continue sua jornada de aprendizado gamificada"
          heroImageSrc="https://images.unsplash.com/photo-1664545141018-c70ca9e78a76?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          testimonials={testimonials}
          onSignIn={handleSignIn}
          onGoogleSignIn={handleGoogleSignIn}
          onResetPassword={() => {
            setShowLogin(false);
            setShowResetPassword(true);
          }}
          onCreateAccount={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
          onBackToHome={() => {
            setShowLogin(false);
          }} className="underline"
        />
      </>
    );
  }

  // Show sign up page if sign up button was clicked
  if (showSignUp && !isLoggedIn) {
    return (
      <>
        <AccessibilityTools />
        <SignUpPage
          title={<span className="font-light text-foreground tracking-tighter">Bem-vindo ao <span className="font-semibold">Civilize AI</span></span>}
          description="Crie sua conta e comece sua jornada de aprendizado gamificada"
          heroImageSrc="https://images.unsplash.com/photo-1664545141018-c70ca9e78a76?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          testimonials={testimonials}
          onSignUp={handleSignUp}
          onGoogleSignUp={handleGoogleSignUp}
          onSignInRedirect={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
          onBackToHome={() => {
            setShowSignUp(false);
          }}
        />
      </>
    );
  }

  // Show reset password page if reset password button was clicked
  if (showResetPassword && !isLoggedIn) {
    return (
      <>
        <AccessibilityTools />
        <ResetPasswordPage
          title={<span className="font-light text-foreground tracking-tighter">Redefinir <span className="font-semibold">Senha</span></span>}
          description="Enviaremos um link de redefinição para o seu e-mail"
          heroImageSrc="https://images.unsplash.com/photo-1664545141018-c70ca9e78a76?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          testimonials={testimonials}
          onResetPassword={(email) => {
            console.log("Reset password for:", email);
            // Here you would call your backend API to send reset email
          }}
          onBackToLogin={() => {
            setShowResetPassword(false);
            setShowLogin(true);
          }}
        />
      </>
    );
  }

  // Show FAQ page
  if (showFAQ) {
    return (
      <>
        <AccessibilityTools />
        <FAQPage onBack={() => setShowFAQ(false)} />
      </>
    );
  }

  // Show Terms page
  if (showTerms) {
    return (
      <>
        <AccessibilityTools />
        <TermsPage onBack={() => setShowTerms(false)} />
      </>
    );
  }

  // Show Privacy page
  if (showPrivacy) {
    return (
      <>
        <AccessibilityTools />
        <PrivacyPage onBack={() => setShowPrivacy(false)} />
      </>
    );
  }

  // Show landing page if not logged in
  if (!isLoggedIn) {
    return (
      <>
        <AccessibilityTools />
        <LandingPage 
          onLogin={() => setShowLogin(true)} 
          onSignUp={() => setShowSignUp(true)}
          onFAQClick={() => setShowFAQ(true)}
          onTermsClick={() => setShowTerms(true)}
          onPrivacyClick={() => setShowPrivacy(true)}
        />
      </>
    );
  }

  // Show onboarding flow if needed
  if (needsOnboarding) {
    return (
      <>
        <AccessibilityTools />
        <OnboardingFlow onComplete={handleOnboardingComplete} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Accessibility Tools - Available on all pages */}
      <AccessibilityTools />
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-[rgba(249,249,249,0.12)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
              setCurrentView('dashboard');
              setSelectedCourseId(null);
              setCurrentQuiz(null);
              setMobileMenuOpen(false);
            }}>
              <ImageWithFallback 
                src={logoAralize} 
                alt="Logo Civilize AI" 
                className="h-8 w-8 object-contain" 
              />
              <h1 className="font-bold">Civilize AI</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {menuItems.map(item => (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? 'default' : 'ghost'}
                  onClick={() => {
                    setCurrentView(item.id as View);
                    setSelectedCourseId(null);
                    setCurrentQuiz(null);
                  }}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </nav>

            {/* User Info */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 bg-[rgba(0,0,0,0.15)]">
                <Trophy className="h-4 w-4 text-primary" />
                <span className="text-sm">Nível {userLevel}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 bg-[rgba(0,0,0,0.15)]">
                <Target className="h-4 w-4 text-blue-500" />
                <span className="text-sm">{userXp.toLocaleString()} XP</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-500/10 bg-[rgba(0,0,0,0.15)]">
                <ImageWithFallback
                  src={lizeCoinIcon}
                  alt="LizeCoin"
                  className="h-5 w-5"
                />
                <span className="text-sm">{userCoins.toLocaleString()}</span>
              </div>
              <DailyRewardCalendar 
                loginDates={loginDates}
                onDailyReward={handleDailyReward}
              />
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p>{user.name}</p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">Nível {userLevel}</Badge>
                    <Badge variant="outline" className="text-xs">{userXp.toLocaleString()} XP</Badge>
                  </div>
                </div>
              </div>
              {menuItems.map(item => (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => {
                    setCurrentView(item.id as View);
                    setSelectedCourseId(null);
                    setCurrentQuiz(null);
                    setMobileMenuOpen(false);
                  }}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground hover:text-destructive"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentView === 'dashboard' && (
          <Dashboard
            courses={courses}
            userProgress={userProgress}
            userXp={userXp}
            userLevel={userLevel}
            userInterests={userInterests}
            userCoins={userCoins}
            unlockedCourses={unlockedCourses}
            userName={user.name}
            userEmail={user.email}
            onStartCourse={handleStartCourse}
            onUnlockCourse={handleUnlockCourse}
            onCoinsAdded={(coins) => {
              setUserCoins(prev => prev + coins);
              alert(`✅ Pagamento confirmado! +${coins} LizeCoins adicionados à sua conta!`);
            }}
          />
        )}

        {currentView === 'course' && selectedCourse && selectedCourseProgress && (
          <CourseViewer
            course={selectedCourse}
            userProgress={selectedCourseProgress}
            onModuleComplete={handleModuleComplete}
            onStartQuiz={handleStartQuiz}
            onBack={handleCourseBack}
          />
        )}

        {currentView === 'quiz' && currentQuiz && (
          <Quiz
            quiz={currentQuiz}
            onComplete={handleQuizComplete}
            onBack={handleQuizBack}
          />
        )}

        {currentView === 'profile' && (
          <UserProfile
            user={user}
            courses={courses}
            badges={badges}
          />
        )}

        {currentView === 'progress' && (
          <ProgressTracker
            courses={courses}
            userProgress={userProgress}
            userXp={userXp}
            userLevel={userLevel}
          />
        )}

        {currentView === 'badges' && (
          <BadgeSystem
            badges={badges}
            totalModulesCompleted={totalModulesCompleted}
            totalCoursesCompleted={totalCoursesCompleted}
            userLevel={userLevel}
          />
        )}

        {currentView === 'leaderboard' && (
          <Leaderboard
            leaderboard={mockLeaderboard}
            currentUserId="current"
          />
        )}
      </main>

      {/* Onboarding Flow */}
      {needsOnboarding && (
        <OnboardingFlow
          onComplete={handleOnboardingComplete}
          onCancel={() => setNeedsOnboarding(false)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AppContent />
    </GoogleOAuthProvider>
  );
}