import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { 
  Play, 
  CheckCircle2, 
  Lock, 
  ChevronRight, 
  BookOpen,
  Trophy,
  ArrowLeft
} from 'lucide-react';
import { Course, Module, UserProgress } from '@/lib/types';

interface CourseViewerProps {
  course: Course;
  userProgress: UserProgress;
  onModuleComplete: (moduleId: string) => void;
  onStartQuiz: (moduleId: string) => void;
  onBack: () => void;
}

export function CourseViewer({ 
  course, 
  userProgress, 
  onModuleComplete, 
  onStartQuiz,
  onBack 
}: CourseViewerProps) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(() => {
    // Validate and ensure currentModule is within bounds
    const initialIndex = userProgress.currentModule;
    if (initialIndex >= 0 && initialIndex < course.modules.length) {
      return initialIndex;
    }
    return 0;
  });
  
  const currentModule = course.modules[currentModuleIndex];
  
  // Safety check - if currentModule is undefined, something went wrong
  if (!currentModule) {
    console.error('Current module is undefined. Index:', currentModuleIndex, 'Total modules:', course.modules.length);
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>
        <Card>
          <CardContent className="p-6">
            <p>Erro ao carregar o módulo. Por favor, tente novamente.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const isModuleCompleted = (moduleId: string) => {
    return userProgress.modulesCompleted.includes(moduleId);
  };

  const isModuleUnlocked = (index: number) => {
    if (index === 0) return true;
    return isModuleCompleted(course.modules[index - 1].id);
  };

  const handleModuleSelect = (index: number) => {
    if (isModuleUnlocked(index)) {
      setCurrentModuleIndex(index);
    }
  };

  const handleWatchComplete = () => {
    if (!isModuleCompleted(currentModule.id)) {
      onModuleComplete(currentModule.id);
    }
  };

  const handleNextModule = () => {
    if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
    }
  };

  const progressPercentage = (userProgress.modulesCompleted.length / course.totalModules) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
        <div className="flex-1">
          <h1>{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progresso do Curso</span>
              <span>{userProgress.modulesCompleted.length} de {course.totalModules} módulos</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{Math.round(progressPercentage)}% completo</span>
              <span className="flex items-center gap-1">
                <Trophy className="h-4 w-4" />
                {userProgress.xpEarned} / {course.xpTotal} XP
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-black rounded-t-lg overflow-hidden">
                <iframe
                  src={currentModule.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>Módulo {currentModuleIndex + 1}</Badge>
                    <span className="text-sm text-muted-foreground">{currentModule.duration}</span>
                    {isModuleCompleted(currentModule.id) && (
                      <Badge className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completo
                      </Badge>
                    )}
                  </div>
                  <h2>{currentModule.title}</h2>
                </div>

                <Separator />

                <div className="flex gap-2">
                  {!isModuleCompleted(currentModule.id) && (
                    <Button onClick={handleWatchComplete} className="flex-1">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Marcar como Concluído
                    </Button>
                  )}
                  <Button 
                    onClick={() => onStartQuiz(currentModule.id)}
                    variant={isModuleCompleted(currentModule.id) ? "default" : "outline"}
                    className="flex-1"
                    disabled={!isModuleCompleted(currentModule.id)}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    {isModuleCompleted(currentModule.id) ? 'Fazer Quiz' : 'Quiz Bloqueado'}
                  </Button>
                  {currentModuleIndex < course.modules.length - 1 && (
                    <Button 
                      onClick={handleNextModule} 
                      variant="outline"
                      disabled={!isModuleUnlocked(currentModuleIndex + 1)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Module List */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Módulos do Curso
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[600px]">
                <div className="p-4 space-y-2">
                  {course.modules.map((module, index) => {
                    const completed = isModuleCompleted(module.id);
                    const unlocked = isModuleUnlocked(index);
                    const isCurrent = index === currentModuleIndex;

                    return (
                      <button
                        key={module.id}
                        onClick={() => handleModuleSelect(index)}
                        disabled={!unlocked}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          isCurrent
                            ? 'bg-primary/10 border-primary'
                            : unlocked
                            ? 'hover:bg-accent border-border'
                            : 'opacity-50 cursor-not-allowed border-border bg-muted/30'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {completed ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : unlocked ? (
                              <Play className="h-5 w-5 text-primary" />
                            ) : (
                              <Lock className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm">
                                Módulo {index + 1}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {module.duration}
                              </span>
                            </div>
                            <p className="text-sm">{module.title}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
