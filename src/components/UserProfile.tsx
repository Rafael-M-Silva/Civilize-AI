import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Trophy, Target, BookOpen, Award, Calendar } from 'lucide-react';
import { User, Course, Badge as BadgeType } from '@/lib/types';

interface UserProfileProps {
  user: User;
  courses: Course[];
  badges: BadgeType[];
}

export function UserProfile({ user, courses, badges }: UserProfileProps) {
  const totalModulesCompleted = user.progress.reduce((acc, p) => acc + p.modulesCompleted.length, 0);
  const totalCoursesCompleted = user.progress.filter(p => p.completed).length;
  const unlockedBadges = badges.filter(b => b.unlocked);
  
  const xpToNextLevel = (user.level * 200);
  const currentLevelXp = user.xp % 200;
  const levelProgress = (currentLevelXp / 200) * 100;

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left space-y-2">
              <div>
                <h1 className="mb-2">{user.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="gap-1">
                  <Trophy className="h-3 w-3" />
                  Nível {user.level}
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Target className="h-3 w-3" />
                  {user.xp.toLocaleString()} XP
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Award className="h-3 w-3" />
                  {unlockedBadges.length} Conquistas
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Level Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Progresso de Nível
          </CardTitle>
          <CardDescription>
            Faltam {200 - currentLevelXp} XP para o nível {user.level + 1}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Nível {user.level}</span>
              <span>Nível {user.level + 1}</span>
            </div>
            <Progress value={levelProgress} className="h-3" />
            <p className="text-sm text-muted-foreground text-center">
              {currentLevelXp} / 200 XP
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">XP Total</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{user.xp.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Pontos de experiência
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
              Aulas assistidas
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

      {/* Course Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Meus Cursos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {user.progress.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Você ainda não iniciou nenhum curso.
            </p>
          ) : (
            user.progress.map(progress => {
              const course = courses.find(c => c.id === progress.courseId);
              if (!course) return null;
              
              const progressPercentage = (progress.modulesCompleted.length / course.totalModules) * 100;

              return (
                <div key={progress.courseId} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{course.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {progress.modulesCompleted.length} de {course.totalModules} módulos
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {progress.completed && (
                        <Badge className="bg-green-500">
                          <Trophy className="h-3 w-3 mr-1" />
                          Completo
                        </Badge>
                      )}
                      <Badge variant="outline">
                        +{progress.xpEarned} XP
                      </Badge>
                    </div>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  {progress.completedAt && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Concluído em {new Date(progress.completedAt).toLocaleDateString('pt-BR')}
                    </p>
                  )}
                </div>
              );
            })
          )}
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Conquistas Desbloqueadas
          </CardTitle>
          <CardDescription>
            {unlockedBadges.length} de {badges.length} conquistas
          </CardDescription>
        </CardHeader>
        <CardContent>
          {unlockedBadges.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Continue aprendendo para desbloquear conquistas!
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {unlockedBadges.map(badge => (
                <Card key={badge.id} className="overflow-hidden">
                  <CardContent className="p-4 text-center space-y-2">
                    <div className="text-4xl">{badge.icon}</div>
                    <div>
                      <p className="font-medium text-sm">{badge.name}</p>
                      <p className="text-xs text-muted-foreground">{badge.description}</p>
                    </div>
                    {badge.unlockedAt && (
                      <p className="text-xs text-muted-foreground">
                        {new Date(badge.unlockedAt).toLocaleDateString('pt-BR')}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
