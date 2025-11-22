import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  ArrowRight,
  Trophy,
  Star
} from 'lucide-react';
import { Quiz as QuizType } from '@/lib/types';

interface QuizProps {
  quiz: QuizType;
  onComplete: (score: number, xpEarned: number, isPerfect: boolean) => void;
  onBack: () => void;
}

export function Quiz({ quiz, onComplete, onBack }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quiz.questions.length).fill(null));
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleAnswerSelect = (optionIndex: number) => {
    if (!showFeedback) {
      setSelectedAnswer(optionIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Calculate final score
      const correctAnswers = answers.filter((answer, index) => 
        answer === quiz.questions[index].correctAnswer
      ).length + (isCorrect ? 1 : 0);
      
      const score = (correctAnswers / quiz.questions.length) * 100;
      const xpEarned = quiz.questions.reduce((acc, q, index) => {
        const userAnswer = index === currentQuestionIndex ? selectedAnswer : answers[index];
        return acc + (userAnswer === q.correctAnswer ? q.xpReward : 0);
      }, 0);
      
      const isPerfect = correctAnswers === quiz.questions.length;
      
      setQuizCompleted(true);
      onComplete(score, xpEarned, isPerfect);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const calculateFinalResults = () => {
    const correctAnswers = answers.filter((answer, index) => 
      answer === quiz.questions[index].correctAnswer
    ).length;
    const score = Math.round((correctAnswers / quiz.questions.length) * 100);
    const xpEarned = quiz.questions.reduce((acc, q, index) => 
      acc + (answers[index] === q.correctAnswer ? q.xpReward : 0)
    , 0);
    return { correctAnswers, score, xpEarned };
  };

  if (quizCompleted) {
    const { correctAnswers, score, xpEarned } = calculateFinalResults();
    const isPerfect = correctAnswers === quiz.questions.length;

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              {isPerfect ? (
                <div className="h-20 w-20 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-yellow-500" />
                </div>
              ) : score >= 70 ? (
                <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
              ) : (
                <div className="h-20 w-20 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Star className="h-10 w-10 text-blue-500" />
                </div>
              )}
            </div>
            <div>
              <CardTitle className="text-3xl">
                {isPerfect ? 'Perfeito! 🎉' : score >= 70 ? 'Parabéns! 🎊' : 'Quiz Concluído!'}
              </CardTitle>
              <CardDescription>
                {isPerfect 
                  ? 'Você acertou todas as questões!' 
                  : score >= 70 
                  ? 'Você foi muito bem neste quiz!' 
                  : 'Continue praticando para melhorar!'}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-2">{score}%</div>
                  <p className="text-sm text-muted-foreground">Pontuação</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-2">{correctAnswers}/{quiz.questions.length}</div>
                  <p className="text-sm text-muted-foreground">Acertos</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-2 text-primary">+{xpEarned}</div>
                  <p className="text-sm text-muted-foreground">XP Ganho</p>
                </CardContent>
              </Card>
            </div>

            <Button onClick={onBack} className="w-full" size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Curso
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
        <Badge>
          Questão {currentQuestionIndex + 1} de {quiz.questions.length}
        </Badge>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-muted-foreground text-center">
          {Math.round(progress)}% completo
        </p>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline">+{currentQuestion.xpReward} XP</Badge>
          </div>
          <CardTitle>{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              
              let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all ';
              
              if (showFeedback) {
                if (isCorrectAnswer) {
                  buttonClass += 'border-green-500 bg-green-500/10';
                } else if (isSelected && !isCorrectAnswer) {
                  buttonClass += 'border-red-500 bg-red-500/10';
                } else {
                  buttonClass += 'border-border opacity-50';
                }
              } else {
                if (isSelected) {
                  buttonClass += 'border-primary bg-primary/10';
                } else {
                  buttonClass += 'border-border hover:border-primary/50 hover:bg-accent';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showFeedback && (
                      <>
                        {isCorrectAnswer && (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                        {isSelected && !isCorrectAnswer && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <Card className={isCorrect ? 'bg-green-500/10 border-green-500' : 'bg-blue-500/10 border-blue-500'}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                  )}
                  <div>
                    <p className={isCorrect ? 'text-green-700 dark:text-green-400' : 'text-blue-700 dark:text-blue-400'}>
                      {isCorrect ? (
                        <strong>Correto! 🎉</strong>
                      ) : (
                        <strong>Não foi dessa vez!</strong>
                      )}
                    </p>
                    {isCorrect && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Você ganhou +{currentQuestion.xpReward} XP
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Actions */}
          <div className="flex gap-2">
            {!showFeedback ? (
              <Button 
                onClick={handleSubmitAnswer} 
                disabled={selectedAnswer === null}
                className="w-full"
                size="lg"
              >
                Confirmar Resposta
              </Button>
            ) : (
              <Button 
                onClick={handleNextQuestion}
                className="w-full"
                size="lg"
              >
                {isLastQuestion ? 'Ver Resultado' : 'Próxima Questão'}
                {!isLastQuestion && <ArrowRight className="h-4 w-4 ml-2" />}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
