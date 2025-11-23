import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { BookOpen, Trophy, Target, Coins, Lock } from 'lucide-react';
import { Course, UserProgress } from '@/lib/types';
import { ExpandableChatDemo } from './ExpandableChatDemo';
import lizeCoinIcon from 'figma:asset/085fc565bb4f512d3e3f3cfb35b8d2b508a6879f.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DashboardProps {
  courses: Course[];
  userProgress: UserProgress[];
  userXp: number;
  userLevel: number;
  userInterests?: string[];
  userCoins: number;
  unlockedCourses: string[];
  onStartCourse: (courseId: string) => void;
  onUnlockCourse: (courseId: string, price: number) => void;
}

export function Dashboard({ 
  courses, 
  userProgress, 
  userXp, 
  userLevel, 
  userInterests = [], 
  userCoins,
  unlockedCourses,
  onStartCourse,
  onUnlockCourse 
}: DashboardProps) {
  // Curso grátis recomendado (primeiro curso baseado nos interesses do usuário)
  const freeCourse = userInterests.length > 0
    ? courses.find(course => course.interest && userInterests.includes(course.interest))
    : courses[0];
  
  // Cursos disponíveis (desbloqueados pelo usuário + curso grátis)
  const availableCourses = courses.filter(course => 
    course.id === freeCourse?.id || unlockedCourses.includes(course.id)
  );
  
  // Cursos bloqueados (todos menos o grátis e os desbloqueados)
  const lockedCourses = courses.filter(course => 
    course.id !== freeCourse?.id && !unlockedCourses.includes(course.id)
  );
  
  const getCourseProgress = (courseId: string) => {
    const progress = userProgress.find(p => p.courseId === courseId);
    if (!progress) return 0;
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    return (progress.modulesCompleted.length / course.totalModules) * 100;
  };

  const totalCoursesCompleted = userProgress.filter(p => p.completed).length;
  const totalModulesCompleted = userProgress.reduce((acc, p) => acc + p.modulesCompleted.length, 0);

  const renderCourseCard = (course: Course, isLocked: boolean = false) => {
    const progress = getCourseProgress(course.id);
    const courseProgress = userProgress.find(p => p.courseId === course.id);
    const isStarted = courseProgress && courseProgress.modulesCompleted.length > 0;
    const isCompleted = courseProgress?.completed;
    const isFree = course.id === freeCourse?.id;

    return (
      <Card 
        key={course.id} 
        className="overflow-hidden transition-all hover:shadow-lg cursor-pointer"
        onClick={() => !isLocked && onStartCourse(course.id)}
      >
        {isLocked && (
          <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
            <Lock className="h-4 w-4 text-white" />
            <span className="text-sm text-white font-medium">{course.coinPrice}</span>
          </div>
        )}
        
        <div className={`aspect-video overflow-hidden bg-muted relative ${isLocked ? 'opacity-50' : ''}`}>
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          {isLocked && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
              <Lock className="h-16 w-16 text-white/80" />
            </div>
          )}
        </div>
        
        <CardHeader>
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <Badge variant="secondary">{course.category}</Badge>
            <div className="flex items-center gap-2">
              {isFree && (
                <Badge className="bg-[#3283FF]">
                  🎁 Grátis
                </Badge>
              )}
              {isCompleted && (
                <Badge className="bg-green-500">
                  <Trophy className="h-3 w-3 mr-1" />
                  Completo
                </Badge>
              )}
            </div>
          </div>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {course.totalModules} módulos
            </div>
            <div className="flex items-center gap-1">
              <Target className="h-4 w-4" />
              {course.xpTotal} XP
            </div>
          </div>

          {!isLocked && isStarted && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {isLocked ? (
            <Button 
              onClick={() => onUnlockCourse(course.id, course.coinPrice)}
              className="w-full bg-[#E3C545] text-black hover:bg-[#D4B635] transition-colors"
              disabled={userCoins < course.coinPrice}
            >
              <Coins className="h-4 w-4 mr-2" />
              Desbloquear ({course.coinPrice})
            </Button>
          ) : (
            <Button 
              onClick={() => onStartCourse(course.id)} 
              className={`w-full ${
                !isStarted 
                  ? 'bg-[#3283FF] text-white hover:bg-[#2568D6] transition-colors' 
                  : ''
              }`}
              variant={isStarted ? 'default' : 'default'}
            >
              {isCompleted ? 'Revisar Curso' : isStarted ? 'Continuar' : 'Começar Curso'}
            </Button>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1>Bem-vindo à Civilize AI!</h1>
        <p className="text-muted-foreground">
          Continue sua jornada de aprendizado e ganhe XP completando módulos e quizzes.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-l-[6px] border-l-[#E3C545]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">LizeCoins</CardTitle>
            <ImageWithFallback src={lizeCoinIcon} alt="LizeCoin" className="h-6 w-6" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl flex items-center gap-2">
              {userCoins.toLocaleString()}
              <ImageWithFallback src={lizeCoinIcon} alt="LizeCoin" className="h-6 w-6" />
            </div>
            <p className="text-xs text-muted-foreground">
              Moedas disponíveis
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-[6px] border-l-[#3283FF]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">XP Total</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{userXp.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Nível {userLevel}
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-[6px] border-l-[#E3C545]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Módulos Completados</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{totalModulesCompleted}</div>
            <p className="text-xs text-muted-foreground">
              Continue aprendendo
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-[6px] border-l-[#FF2A1D]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Cursos Completos</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{totalCoursesCompleted}</div>
            <p className="text-xs text-muted-foreground">
              de {courses.length} disponíveis
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Free Course Section */}
      {freeCourse && (
        <div className="space-y-4">
          <div>
            <h2 className="mb-2">🎁 Seu Curso Grátis</h2>
            <p className="text-sm text-muted-foreground">
              Curso recomendado baseado nos seus interesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCourseCard(freeCourse, false)}
          </div>
        </div>
      )}

      {/* Available Courses */}
      {availableCourses.length > 1 && (
        <div className="space-y-4">
          <div>
            <h2 className="mb-2">📚 Cursos Disponíveis</h2>
            <p className="text-sm text-muted-foreground">
              Cursos que você já desbloqueou
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses
              .filter(course => course.id !== freeCourse?.id)
              .map(course => renderCourseCard(course, false))}
          </div>
        </div>
      )}

      {/* Locked Courses */}
      {lockedCourses.length > 0 && (
        <div className="space-y-4">
          <div>
            <h2 className="mb-2">🔒 Cursos Bloqueados</h2>
            <p className="text-sm text-muted-foreground">
              Desbloqueie com LizeCoins para ter acesso completo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lockedCourses.map(course => renderCourseCard(course, true))}
          </div>
        </div>
      )}
      
      {/* Chat AI */}
      <ExpandableChatDemo />
    </div>
  );
}