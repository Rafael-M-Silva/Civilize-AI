import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Target, Trophy, BookOpen, TrendingUp } from 'lucide-react';
import { Course, UserProgress } from '@/lib/types';

interface ProgressTrackerProps {
  courses: Course[];
  userProgress: UserProgress[];
  userXp: number;
  userLevel: number;
}

export function ProgressTracker({ courses, userProgress, userXp, userLevel }: ProgressTrackerProps) {
  const totalModulesCompleted = userProgress.reduce((acc, p) => acc + p.modulesCompleted.length, 0);
  const totalModulesAvailable = courses.reduce((acc, c) => acc + c.totalModules, 0);
  const totalCoursesCompleted = userProgress.filter(p => p.completed).length;
  const overallProgress = (totalModulesCompleted / totalModulesAvailable) * 100;

  const currentLevelXp = userXp % 200;
  const levelProgress = (currentLevelXp / 200) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1>Seu Progresso</h1>
        <p className="text-muted-foreground">
          Acompanhe sua evolução e conquistas na plataforma
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <CardTitle className="text-sm">Progresso Geral</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{Math.round(overallProgress)}%</div>
            <p className="text-xs text-muted-foreground">
              de todos os módulos
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-[6px] border-l-[#FF2A1D]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Módulos</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{totalModulesCompleted}</div>
            <p className="text-xs text-muted-foreground">
              de {totalModulesAvailable} completados
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-[6px] border-l-[#3283FF]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Cursos</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{totalCoursesCompleted}</div>
            <p className="text-xs text-muted-foreground">
              de {courses.length} completados
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Level Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Progresso de Nível
          </CardTitle>
          <CardDescription>
            Faltam {200 - currentLevelXp} XP para alcançar o nível {userLevel + 1}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Nível {userLevel}</span>
              <span>Nível {userLevel + 1}</span>
            </div>
            <Progress value={levelProgress} className="h-3" />
            <p className="text-sm text-muted-foreground text-center">
              {currentLevelXp} / 200 XP ({Math.round(levelProgress)}%)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Course Progress */}
      <div>
        <div className="mb-4">
          <h2 className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Progresso por Curso
          </h2>
        </div>
        <div className="space-y-4">
          {courses.map((course, index) => {
            const progress = userProgress.find(p => p.courseId === course.id);
            const modulesCompleted = progress?.modulesCompleted.length || 0;
            const progressPercentage = (modulesCompleted / course.totalModules) * 100;
            const isCompleted = progress?.completed || false;
            const xpEarned = progress?.xpEarned || 0;
            
            // Alterna entre as cores do papagaio
            const colors = ['#3283FF', '#E3C545', '#FF2A1D'];
            const strokeColor = colors[index % colors.length];

            return (
              <Card key={course.id} className={`border-t-[6px]`} style={{ borderTopColor: strokeColor }}>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base">{course.title}</h3>
                        {isCompleted && (
                          <Badge className="bg-green-500">
                            <Trophy className="h-3 w-3 mr-1" />
                            Completo
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {course.category} • {course.totalModules} módulos
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">
                        {xpEarned} / {course.xpTotal} XP
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {modulesCompleted} de {course.totalModules} módulos
                      </span>
                      <span className="font-medium">{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>

                  {progress && progress.quizzesCompleted.length > 0 && (
                    <div className="text-sm text-muted-foreground">
                      {progress.quizzesCompleted.length} quiz{progress.quizzesCompleted.length > 1 ? 'zes' : ''} completado{progress.quizzesCompleted.length > 1 ? 's' : ''}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Progresso Geral da Plataforma
          </CardTitle>
          <CardDescription>
            Seu progresso em todos os cursos disponíveis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Módulos completados</span>
              <span>{totalModulesCompleted} de {totalModulesAvailable}</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
            <p className="text-sm text-muted-foreground text-center">
              {Math.round(overallProgress)}% de todo o conteúdo
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}