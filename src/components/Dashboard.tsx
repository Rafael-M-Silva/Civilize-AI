import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { BookOpen, Trophy, Target, Clock } from 'lucide-react';
import { Course, UserProgress } from '@/lib/types';

interface DashboardProps {
  courses: Course[];
  userProgress: UserProgress[];
  userXp: number;
  userLevel: number;
  onStartCourse: (courseId: string) => void;
}

export function Dashboard({ courses, userProgress, userXp, userLevel, onStartCourse }: DashboardProps) {
  const getCourseProgress = (courseId: string) => {
    const progress = userProgress.find(p => p.courseId === courseId);
    if (!progress) return 0;
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    return (progress.modulesCompleted.length / course.totalModules) * 100;
  };

  const totalCoursesCompleted = userProgress.filter(p => p.completed).length;
  const totalModulesCompleted = userProgress.reduce((acc, p) => acc + p.modulesCompleted.length, 0);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1>Bem-vindo à EduGame! 👋</h1>
        <p className="text-muted-foreground">
          Continue sua jornada de aprendizado e ganhe XP completando módulos e quizzes.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
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

        <Card>
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

        <Card>
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

      {/* Courses Grid */}
      <div className="space-y-4">
        <h2>Cursos Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => {
            const progress = getCourseProgress(course.id);
            const courseProgress = userProgress.find(p => p.courseId === course.id);
            const isStarted = courseProgress && courseProgress.modulesCompleted.length > 0;
            const isCompleted = courseProgress?.completed;

            return (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    {isCompleted && (
                      <Badge className="bg-green-500">
                        <Trophy className="h-3 w-3 mr-1" />
                        Completo
                      </Badge>
                    )}
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

                  {isStarted && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progresso</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}

                  <Button 
                    onClick={() => onStartCourse(course.id)} 
                    className="w-full"
                    variant={isStarted ? 'default' : 'outline'}
                  >
                    {isCompleted ? 'Revisar Curso' : isStarted ? 'Continuar' : 'Começar Curso'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
