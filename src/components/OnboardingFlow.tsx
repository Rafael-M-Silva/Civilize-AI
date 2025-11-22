import { useState } from 'react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Sparkles, Play, CheckCircle2 } from 'lucide-react';

interface OnboardingData {
  preferredName: string;
  interests: string[];
  knowledgeLevel: string;
  goals: string[];
  availability: string;
}

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
  onCancel?: () => void;
}

export function OnboardingFlow({ onComplete, onCancel }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFirstLesson, setShowFirstLesson] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    preferredName: '',
    interests: [],
    knowledgeLevel: '',
    goals: [],
    availability: '',
  });

  const totalSteps = 5;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const questions = [
    {
      id: 'name',
      mascotText: 'Olá! Sou o EduOwl, seu companheiro de aprendizado! 🦉',
      question: 'Como você gostaria de ser chamado?',
      type: 'text',
      placeholder: 'Digite seu nome ou apelido',
    },
    {
      id: 'interests',
      mascotText: 'Ótimo! Agora me conte, quais áreas despertam sua curiosidade?',
      question: 'Selecione suas áreas de interesse:',
      type: 'multiple',
      options: [
        { value: 'tech', label: 'Tecnologia & Programação', icon: '💻' },
        { value: 'business', label: 'Negócios & Empreendedorismo', icon: '💼' },
        { value: 'design', label: 'Design & Criatividade', icon: '🎨' },
        { value: 'science', label: 'Ciências & Matemática', icon: '🔬' },
        { value: 'languages', label: 'Idiomas', icon: '🌍' },
        { value: 'personal', label: 'Desenvolvimento Pessoal', icon: '🌟' },
      ],
    },
    {
      id: 'level',
      mascotText: 'Perfeito! Agora preciso saber seu nível atual de conhecimento.',
      question: 'Como você se considera em relação ao aprendizado online?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Iniciante', desc: 'Estou começando agora' },
        { value: 'intermediate', label: 'Intermediário', desc: 'Tenho alguma experiência' },
        { value: 'advanced', label: 'Avançado', desc: 'Já tenho bastante conhecimento' },
        { value: 'expert', label: 'Expert', desc: 'Sou muito experiente' },
      ],
    },
    {
      id: 'goals',
      mascotText: 'Maravilha! Agora me conte seus objetivos.',
      question: 'O que você quer alcançar com seus estudos?',
      type: 'multiple',
      options: [
        { value: 'career', label: 'Avançar na carreira', icon: '🚀' },
        { value: 'newskills', label: 'Aprender novas habilidades', icon: '📚' },
        { value: 'certification', label: 'Obter certificações', icon: '🏆' },
        { value: 'hobby', label: 'Hobby e conhecimento pessoal', icon: '🎯' },
        { value: 'career-change', label: 'Mudar de carreira', icon: '🔄' },
      ],
    },
    {
      id: 'availability',
      mascotText: 'Última pergunta! Vamos criar uma rotina ideal para você.',
      question: 'Quanto tempo você pode dedicar aos estudos por semana?',
      type: 'single',
      options: [
        { value: '1-3', label: '1-3 horas', desc: 'Ritmo tranquilo' },
        { value: '4-7', label: '4-7 horas', desc: 'Ritmo moderado' },
        { value: '8-15', label: '8-15 horas', desc: 'Ritmo intenso' },
        { value: '15+', label: 'Mais de 15 horas', desc: 'Imersão total' },
      ],
    },
  ];

  const currentQuestion = questions[currentStep];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Quando terminar o onboarding, mostrar a primeira aula
      setShowFirstLesson(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTextInput = (value: string) => {
    setOnboardingData({ ...onboardingData, preferredName: value });
  };

  const handleMultipleChoice = (value: string) => {
    const field = currentQuestion.id as 'interests' | 'goals';
    const current = onboardingData[field];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setOnboardingData({ ...onboardingData, [field]: updated });
  };

  const handleSingleChoice = (value: string) => {
    // Map question ID to state field
    const field = currentQuestion.id === 'level' ? 'knowledgeLevel' : 'availability';
    console.log('Setting field:', field, 'to value:', value);
    setOnboardingData({ ...onboardingData, [field]: value });
  };

  const canProceed = () => {
    switch (currentQuestion.id) {
      case 'name':
        return onboardingData.preferredName.trim().length > 0;
      case 'interests':
        return onboardingData.interests.length > 0;
      case 'level':
        return onboardingData.knowledgeLevel !== '';
      case 'goals':
        return onboardingData.goals.length > 0;
      case 'availability':
        return onboardingData.availability !== '';
      default:
        return false;
    }
  };

  // Quiz questions para a primeira aula
  const introQuiz = [
    {
      id: 1,
      question: 'Qual é a principal vantagem da gamificação no aprendizado?',
      options: [
        { value: 'a', text: 'Aumentar a motivação e engajamento' },
        { value: 'b', text: 'Dificultar o processo' },
        { value: 'c', text: 'Reduzir o tempo de estudo' },
        { value: 'd', text: 'Substituir professores' },
      ],
      correct: 'a',
    },
    {
      id: 2,
      question: 'O que acontece quando você completa um módulo?',
      options: [
        { value: 'a', text: 'Nada acontece' },
        { value: 'b', text: 'Você ganha XP e desbloqueia novo conteúdo' },
        { value: 'c', text: 'Você perde progresso' },
        { value: 'd', text: 'O curso recomeça' },
      ],
      correct: 'b',
    },
    {
      id: 3,
      question: 'Qual é o objetivo final da plataforma?',
      options: [
        { value: 'a', text: 'Apenas assistir vídeos' },
        { value: 'b', text: 'Competir com outros usuários' },
        { value: 'c', text: 'Aprender, evoluir e compartilhar ideias na ouvidoria' },
        { value: 'd', text: 'Coletar badges' },
      ],
      correct: 'c',
    },
  ];

  const handleQuizAnswer = (questionId: number, answer: string) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionId - 1] = answer;
    setQuizAnswers(newAnswers);
  };

  const handleWatchVideo = () => {
    setVideoWatched(true);
  };

  const handleCompleteLesson = () => {
    // Calcular pontuação
    let correctCount = 0;
    introQuiz.forEach((q, index) => {
      if (quizAnswers[index] === q.correct) {
        correctCount++;
      }
    });
    
    // Completar o onboarding
    onComplete(onboardingData);
  };

  const canCompleteLesson = videoWatched && quizAnswers.length === introQuiz.length;

  // Se deve mostrar a primeira aula
  if (showFirstLesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-violet-950 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <motion.div
            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-8">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="w-16 h-16 rounded-full bg-white p-1"
                  animate={{ 
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-3xl">
                    🦉
                  </div>
                </motion.div>
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    Bem-vindo, {onboardingData.preferredName}! 🎉
                  </h1>
                  <p className="text-violet-100">
                    Vamos começar sua jornada com uma breve introdução
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Video Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  📹 Módulo 1: Introdução à Plataforma
                </h2>
                <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden">
                  {!videoWatched ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                      <Button
                        onClick={handleWatchVideo}
                        size="lg"
                        className="rounded-full w-20 h-20 bg-white hover:bg-violet-50 text-violet-600 hover:text-violet-700"
                      >
                        <Play className="w-10 h-10" />
                      </Button>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-center"
                      >
                        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                        <p className="text-xl font-semibold text-foreground">Vídeo Concluído!</p>
                        <p className="text-muted-foreground">+50 XP ganhos 🌟</p>
                      </motion.div>
                    </div>
                  )}
                  {/* Video placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-white/60">Vídeo de Introdução (3:30)</p>
                  </div>
                </div>
              </div>

              {/* Quiz Section */}
              {videoWatched && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    ✍️ Quiz de Verificação
                  </h2>
                  <div className="space-y-6">
                    {introQuiz.map((q, qIndex) => (
                      <div
                        key={q.id}
                        className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-2xl border-2 border-border"
                      >
                        <h3 className="font-semibold mb-4 text-foreground">
                          {qIndex + 1}. {q.question}
                        </h3>
                        <div className="space-y-2">
                          {q.options.map((option) => {
                            const isSelected = quizAnswers[qIndex] === option.value;
                            const isCorrect = option.value === q.correct;
                            const showFeedback = quizAnswers[qIndex] !== undefined;
                            
                            return (
                              <motion.button
                                key={option.value}
                                onClick={() => handleQuizAnswer(q.id, option.value)}
                                disabled={showFeedback}
                                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                                  showFeedback && isSelected && isCorrect
                                    ? 'border-green-500 bg-green-50 dark:bg-green-950'
                                    : showFeedback && isSelected && !isCorrect
                                    ? 'border-red-500 bg-red-50 dark:bg-red-950'
                                    : showFeedback && isCorrect
                                    ? 'border-green-500 bg-green-50 dark:bg-green-950'
                                    : isSelected
                                    ? 'border-violet-500 bg-violet-50 dark:bg-violet-950'
                                    : 'border-border hover:border-violet-300'
                                } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                whileHover={!showFeedback ? { scale: 1.01 } : {}}
                                whileTap={!showFeedback ? { scale: 0.99 } : {}}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-foreground">{option.text}</span>
                                  {showFeedback && isCorrect && (
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                  )}
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Complete Button */}
              {videoWatched && (
                <div className="pt-4">
                  <Button
                    onClick={handleCompleteLesson}
                    disabled={!canCompleteLesson}
                    size="lg"
                    className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {canCompleteLesson ? 'Finalizar e Acessar Dashboard' : 'Responda todas as questões'}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-violet-950 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Passo {currentStep + 1} de {totalSteps}
            </span>
            <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Main Card */}
        <motion.div
          className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mascot */}
              <div className="flex items-start gap-4 mb-8">
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 p-1 flex-shrink-0"
                  animate={{ 
                    rotate: [0, -5, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-4xl">
                    🦉
                  </div>
                </motion.div>
                <div className="flex-1">
                  <motion.div
                    className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-950 dark:to-purple-950 rounded-2xl rounded-tl-none p-4 relative"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <p className="text-sm md:text-base text-foreground/90">
                      {currentQuestion.mascotText}
                    </p>
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-violet-500 animate-pulse" />
                  </motion.div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                  {currentQuestion.question}
                </h2>

                {/* Text Input */}
                {currentQuestion.type === 'text' && (
                  <input
                    type="text"
                    value={onboardingData.preferredName}
                    onChange={(e) => handleTextInput(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-border bg-background text-foreground text-lg focus:outline-none focus:border-violet-400 transition-colors"
                    autoFocus
                  />
                )}

                {/* Multiple Choice */}
                {currentQuestion.type === 'multiple' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion.options?.map((option) => {
                      const isSelected = 
                        currentQuestion.id === 'interests' 
                          ? onboardingData.interests.includes(option.value)
                          : onboardingData.goals.includes(option.value);
                      
                      return (
                        <motion.button
                          key={option.value}
                          onClick={() => handleMultipleChoice(option.value)}
                          className={`p-5 rounded-2xl border-2 transition-all text-left ${
                            isSelected
                              ? 'border-violet-500 bg-violet-50 dark:bg-violet-950'
                              : 'border-border hover:border-violet-300'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{option.icon}</span>
                            <span className="font-medium text-foreground">{option.label}</span>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="ml-auto w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center"
                              >
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {/* Single Choice */}
                {currentQuestion.type === 'single' && (
                  <div className="space-y-4">
                    {currentQuestion.options?.map((option) => {
                      const isSelected = 
                        currentQuestion.id === 'level'
                          ? onboardingData.knowledgeLevel === option.value
                          : onboardingData.availability === option.value;
                      
                      return (
                        <motion.button
                          key={option.value}
                          onClick={() => {
                            console.log('Clicked:', option.value, 'Question ID:', currentQuestion.id);
                            handleSingleChoice(option.value);
                          }}
                          type="button"
                          className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                            isSelected
                              ? 'border-violet-500 bg-violet-50 dark:bg-violet-950'
                              : 'border-border hover:border-violet-300'
                          }`}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-lg text-foreground">{option.label}</div>
                              <div className="text-sm text-muted-foreground mt-1">{option.desc}</div>
                            </div>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0"
                              >
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {currentStep > 0 && (
              <Button
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="rounded-xl"
              >
                Voltar
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              size="lg"
              className="ml-auto rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === totalSteps - 1 ? 'Finalizar' : 'Próximo'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}