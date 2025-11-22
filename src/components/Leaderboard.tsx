import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Trophy, Medal, Award, Crown } from 'lucide-react';
import { LeaderboardEntry } from '@/lib/types';

interface LeaderboardProps {
  leaderboard: LeaderboardEntry[];
  currentUserId: string;
}

export function Leaderboard({ leaderboard, currentUserId }: LeaderboardProps) {
  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-orange-600" />;
      default:
        return null;
    }
  };

  const getRankBadgeColor = (position: number) => {
    switch (position) {
      case 1:
        return 'bg-yellow-500';
      case 2:
        return 'bg-gray-400';
      case 3:
        return 'bg-orange-600';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1>Ranking Global</h1>
        <p className="text-muted-foreground">
          Veja sua posição entre os melhores estudantes da plataforma
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leaderboard.slice(0, 3).map((entry, index) => {
          const position = index + 1;
          const isCurrentUser = entry.userId === currentUserId;

          return (
            <Card 
              key={entry.userId} 
              className={`${
                position === 1 
                  ? 'md:order-2 border-yellow-500/50 bg-gradient-to-br from-yellow-500/5 to-yellow-500/10' 
                  : position === 2 
                  ? 'md:order-1' 
                  : 'md:order-3'
              } ${isCurrentUser ? 'ring-2 ring-primary' : ''}`}
            >
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-2">
                  {getRankIcon(position)}
                </div>
                <Badge className={`${getRankBadgeColor(position)} w-fit mx-auto mb-2`}>
                  {position}º Lugar
                </Badge>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <Avatar className="h-20 w-20 mx-auto">
                  <AvatarImage src={entry.avatar} alt={entry.name} />
                  <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg mb-1">
                    {entry.name}
                    {isCurrentUser && <span className="text-primary ml-1">(Você)</span>}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">
                      <Trophy className="h-3 w-3 mr-1" />
                      Nível {entry.level}
                    </Badge>
                    <Badge variant="outline">
                      {entry.xp.toLocaleString()} XP
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {entry.coursesCompleted} curso{entry.coursesCompleted !== 1 ? 's' : ''} completo{entry.coursesCompleted !== 1 ? 's' : ''}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Full Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Ranking Completo
          </CardTitle>
          <CardDescription>
            Classificação de todos os estudantes por XP
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {leaderboard.map((entry, index) => {
              const position = index + 1;
              const isCurrentUser = entry.userId === currentUserId;
              const isTopThree = position <= 3;

              return (
                <div
                  key={entry.userId}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                    isCurrentUser 
                      ? 'bg-primary/5 border-primary' 
                      : 'hover:bg-accent'
                  }`}
                >
                  {/* Rank */}
                  <div className="flex items-center justify-center w-12">
                    {isTopThree ? (
                      getRankIcon(position)
                    ) : (
                      <span className="font-bold text-lg text-muted-foreground">
                        {position}
                      </span>
                    )}
                  </div>

                  {/* Avatar */}
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={entry.avatar} alt={entry.name} />
                    <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium truncate">
                        {entry.name}
                      </p>
                      {isCurrentUser && (
                        <Badge variant="secondary" className="text-xs">Você</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {entry.coursesCompleted} curso{entry.coursesCompleted !== 1 ? 's' : ''} completo{entry.coursesCompleted !== 1 ? 's' : ''}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <Badge variant="outline">
                        Nível {entry.level}
                      </Badge>
                      <p className="text-sm font-medium mt-1">
                        {entry.xp.toLocaleString()} XP
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium mb-1">Como subir no ranking?</p>
              <p className="text-sm text-muted-foreground">
                Complete módulos e quizzes para ganhar XP e subir no ranking. 
                Quanto mais você aprende, maior sua posição!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
