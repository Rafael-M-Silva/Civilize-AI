import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Lock } from 'lucide-react';
import { Badge as BadgeType } from '@/lib/types';

interface BadgeSystemProps {
  badges: BadgeType[];
  totalModulesCompleted: number;
  totalCoursesCompleted: number;
  userLevel: number;
}

export function BadgeSystem({ 
  badges, 
  totalModulesCompleted, 
  totalCoursesCompleted, 
  userLevel 
}: BadgeSystemProps) {
  const unlockedBadges = badges.filter(b => b.unlocked);
  const lockedBadges = badges.filter(b => !b.unlocked);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1>Sistema de Conquistas</h1>
        <p className="text-muted-foreground">
          Desbloqueie conquistas ao completar desafios e marcos
        </p>
      </div>

      {/* Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Suas Conquistas
          </CardTitle>
          <CardDescription>
            Você desbloqueou {unlockedBadges.length} de {badges.length} conquistas disponíveis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-1">{unlockedBadges.length}</div>
              <p className="text-sm text-muted-foreground">Desbloqueadas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">{lockedBadges.length}</div>
              <p className="text-sm text-muted-foreground">Bloqueadas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">{Math.round((unlockedBadges.length / badges.length) * 100)}%</div>
              <p className="text-sm text-muted-foreground">Progresso</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">{userLevel}</div>
              <p className="text-sm text-muted-foreground">Nível Atual</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Unlocked Badges */}
      {unlockedBadges.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Conquistas Desbloqueadas</CardTitle>
            <CardDescription>
              Parabéns pelas conquistas alcançadas!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unlockedBadges.map(badge => (
                <Card key={badge.id} className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="text-5xl">{badge.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base">{badge.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            Desbloqueada
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {badge.description}
                        </p>
                        {badge.unlockedAt && (
                          <p className="text-xs text-muted-foreground">
                            Desbloqueada em {new Date(badge.unlockedAt).toLocaleDateString('pt-BR')}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Locked Badges */}
      {lockedBadges.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Conquistas Bloqueadas</CardTitle>
            <CardDescription>
              Continue aprendendo para desbloquear estas conquistas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lockedBadges.map(badge => {
                // Calculate progress towards unlocking
                let progress = 0;
                let progressText = '';

                if (badge.id === 'badge-1') {
                  progress = Math.min(totalModulesCompleted, 1);
                  progressText = `${totalModulesCompleted}/1 módulos`;
                } else if (badge.id === 'badge-2') {
                  progress = Math.min(totalModulesCompleted / 5, 1);
                  progressText = `${totalModulesCompleted}/5 módulos`;
                } else if (badge.id === 'badge-4') {
                  progress = Math.min(totalCoursesCompleted, 1);
                  progressText = `${totalCoursesCompleted}/1 cursos`;
                } else if (badge.id === 'badge-5') {
                  progress = Math.min(userLevel / 5, 1);
                  progressText = `Nível ${userLevel}/5`;
                } else if (badge.id === 'badge-7') {
                  progress = Math.min(totalCoursesCompleted / 3, 1);
                  progressText = `${totalCoursesCompleted}/3 cursos`;
                }

                return (
                  <Card key={badge.id} className="opacity-75">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="text-5xl grayscale opacity-50">{badge.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-base">{badge.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              <Lock className="h-3 w-3 mr-1" />
                              Bloqueada
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {badge.description}
                          </p>
                          <div className="space-y-1">
                            <p className="text-xs font-medium">
                              {badge.requirement}
                            </p>
                            {progressText && (
                              <p className="text-xs text-muted-foreground">
                                Progresso: {progressText}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Unlocked Message */}
      {lockedBadges.length === 0 && (
        <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
          <CardContent className="pt-6 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="mb-2">Parabéns!</h2>
            <p className="text-muted-foreground">
              Você desbloqueou todas as conquistas disponíveis!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
