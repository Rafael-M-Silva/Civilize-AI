export interface Module {
  id: string;
  title: string;
  videoUrl: string;
  duration: string;
  completed: boolean;
  unlocked: boolean;
}

export interface Quiz {
  id: string;
  moduleId: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  xpReward: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  interest?: string;
  totalModules: number;
  xpTotal: number;
  modules: Module[];
  quizzes: Quiz[];
  isFree?: boolean; // Indica se é o curso grátis do usuário
  coinPrice: number; // Preço em LizeCoins para desbloquear
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  requirement: string;
}

export interface UserProgress {
  courseId: string;
  modulesCompleted: string[];
  quizzesCompleted: string[];
  currentModule: number;
  xpEarned: number;
  completed: boolean;
  completedAt?: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  xp: number;
  level: number;
  badges: Badge[];
  progress: UserProgress[];
  civilizeCoins: number; // Saldo de LizeCoins
  unlockedCourses: string[]; // IDs dos cursos desbloqueados
}

export interface LeaderboardEntry {
  userId: string;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  coursesCompleted: number;
}