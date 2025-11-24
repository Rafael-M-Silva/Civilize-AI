// Mock data para o painel de administrador

export interface APIStatus {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'degraded';
  endpoint: string;
  lastChecked: Date;
  responseTime: number; // em ms
  uptime: number; // porcentagem
  requestsToday: number;
  errorRate: number; // porcentagem
  description: string;
}

export interface UserStats {
  total: number;
  active: number;
  new: number;
  byRegion: {
    region: string;
    count: number;
    percentage: number;
  }[];
  byState: {
    state: string;
    count: number;
    percentage: number;
  }[];
  growth: {
    daily: number;
    weekly: number;
    monthly: number;
  };
}

export interface UserFeedback {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userAvatar: string;
  rating: number; // 1-5
  category: 'bug' | 'feature' | 'content' | 'ux' | 'other';
  title: string;
  message: string;
  state: string;
  city: string;
  createdAt: Date;
  status: 'pending' | 'reviewed' | 'resolved';
  priority: 'low' | 'medium' | 'high';
}

export interface PlatformMetrics {
  totalUsers: number;
  activeUsers: number;
  totalCourses: number;
  completedCourses: number;
  totalQuizzes: number;
  averageRating: number;
  totalFeedbacks: number;
  totalLizeCoins: number;
  revenue: number;
}

// Mock APIs conectadas
export const mockAPIs: APIStatus[] = [
  {
    id: 'api-1',
    name: 'OpenAI GPT-4',
    status: 'online',
    endpoint: 'https://api.openai.com/v1',
    lastChecked: new Date(),
    responseTime: 245,
    uptime: 99.8,
    requestsToday: 1247,
    errorRate: 0.2,
    description: 'IA para simplificação de textos legislativos'
  },
  {
    id: 'api-2',
    name: 'Querido Diário API',
    status: 'online',
    endpoint: 'https://queridodiario.ok.org.br/api',
    lastChecked: new Date(),
    responseTime: 312,
    uptime: 99.4,
    requestsToday: 3456,
    errorRate: 0.6,
    description: 'API de diários oficiais municipais do Brasil'
  },
  {
    id: 'api-3',
    name: 'Supabase Database',
    status: 'online',
    endpoint: 'https://civilizeai.supabase.co',
    lastChecked: new Date(),
    responseTime: 89,
    uptime: 99.9,
    requestsToday: 8945,
    errorRate: 0.1,
    description: 'Banco de dados PostgreSQL e autenticação'
  },
  {
    id: 'api-4',
    name: 'Google OAuth',
    status: 'online',
    endpoint: 'https://oauth2.googleapis.com',
    lastChecked: new Date(),
    responseTime: 156,
    uptime: 99.7,
    requestsToday: 342,
    errorRate: 0.3,
    description: 'Autenticação social com Google'
  },
  {
    id: 'api-5',
    name: 'Unsplash Images',
    status: 'online',
    endpoint: 'https://api.unsplash.com',
    lastChecked: new Date(),
    responseTime: 178,
    uptime: 99.5,
    requestsToday: 456,
    errorRate: 0.5,
    description: 'Banco de imagens para conteúdo'
  },
  {
    id: 'api-6',
    name: 'PIX Payment Gateway',
    status: 'degraded',
    endpoint: 'https://api.asaas.com',
    lastChecked: new Date(),
    responseTime: 892,
    uptime: 98.2,
    requestsToday: 67,
    errorRate: 1.8,
    description: 'Gateway de pagamento PIX'
  },
  {
    id: 'api-7',
    name: 'SendGrid Email',
    status: 'online',
    endpoint: 'https://api.sendgrid.com',
    lastChecked: new Date(),
    responseTime: 234,
    uptime: 99.6,
    requestsToday: 523,
    errorRate: 0.4,
    description: 'Envio de emails transacionais'
  },
  {
    id: 'api-8',
    name: 'Brasil Participa',
    status: 'offline',
    endpoint: 'https://brasilparticipativo.presidencia.gov.br/api',
    lastChecked: new Date(Date.now() - 3600000),
    responseTime: 0,
    uptime: 95.3,
    requestsToday: 0,
    errorRate: 100,
    description: 'API de consultas públicas (em manutenção)'
  },
  {
    id: 'api-9',
    name: 'YouTube Player',
    status: 'online',
    endpoint: 'https://www.youtube.com/iframe_api',
    lastChecked: new Date(),
    responseTime: 123,
    uptime: 99.9,
    requestsToday: 3421,
    errorRate: 0.1,
    description: 'Player de vídeos dos cursos'
  }
];

// Mock estatísticas de usuários
export const mockUserStats: UserStats = {
  total: 24567,
  active: 8934,
  new: 342,
  byRegion: [
    { region: 'Sudeste', count: 12456, percentage: 50.7 },
    { region: 'Nordeste', count: 5234, percentage: 21.3 },
    { region: 'Sul', count: 3678, percentage: 15.0 },
    { region: 'Centro-Oeste', count: 2145, percentage: 8.7 },
    { region: 'Norte', count: 1054, percentage: 4.3 }
  ],
  byState: [
    { state: 'SP', count: 7845, percentage: 31.9 },
    { state: 'RJ', count: 2456, percentage: 10.0 },
    { state: 'MG', count: 2155, percentage: 8.8 },
    { state: 'BA', count: 1987, percentage: 8.1 },
    { state: 'PR', count: 1654, percentage: 6.7 },
    { state: 'RS', count: 1432, percentage: 5.8 },
    { state: 'PE', count: 1278, percentage: 5.2 },
    { state: 'CE', count: 1156, percentage: 4.7 },
    { state: 'DF', count: 987, percentage: 4.0 },
    { state: 'SC', count: 592, percentage: 2.4 },
    { state: 'GO', count: 845, percentage: 3.4 },
    { state: 'ES', count: 567, percentage: 2.3 },
    { state: 'PA', count: 423, percentage: 1.7 },
    { state: 'AM', count: 312, percentage: 1.3 },
    { state: 'MA', count: 289, percentage: 1.2 },
    { state: 'PB', count: 234, percentage: 1.0 },
    { state: 'RN', count: 198, percentage: 0.8 },
    { state: 'MT', count: 167, percentage: 0.7 },
    { state: 'AL', count: 145, percentage: 0.6 },
    { state: 'PI', count: 123, percentage: 0.5 },
    { state: 'TO', count: 98, percentage: 0.4 },
    { state: 'SE', count: 87, percentage: 0.4 },
    { state: 'RO', count: 76, percentage: 0.3 },
    { state: 'AC', count: 45, percentage: 0.2 },
    { state: 'AP', count: 34, percentage: 0.1 },
    { state: 'RR', count: 28, percentage: 0.1 }
  ],
  growth: {
    daily: 342,
    weekly: 2145,
    monthly: 8934
  }
};

// Mock feedbacks de usuários
export const mockFeedbacks: UserFeedback[] = [
  {
    id: 'fb-1',
    userId: 'user-1',
    userName: 'Ana Silva',
    userEmail: 'ana.silva@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/women/57.jpg',
    rating: 5,
    category: 'feature',
    title: 'Adicionar modo escuro',
    message: 'Seria ótimo ter um modo escuro para estudar à noite. A interface está muito clara e cansa os olhos após algumas horas de uso.',
    state: 'SP',
    city: 'São Paulo',
    createdAt: new Date('2024-11-20'),
    status: 'pending',
    priority: 'medium'
  },
  {
    id: 'fb-2',
    userId: 'user-2',
    userName: 'Carlos Souza',
    userEmail: 'carlos.souza@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/men/64.jpg',
    rating: 4,
    category: 'content',
    title: 'Mais cursos sobre direitos trabalhistas',
    message: 'A plataforma está excelente! Mas senti falta de mais conteúdo sobre CLT e direitos trabalhistas. É um tema muito importante para a população.',
    state: 'RJ',
    city: 'Rio de Janeiro',
    createdAt: new Date('2024-11-19'),
    status: 'reviewed',
    priority: 'high'
  },
  {
    id: 'fb-3',
    userId: 'user-3',
    userName: 'Beatriz Costa',
    userEmail: 'beatriz.costa@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
    category: 'ux',
    title: 'Interface muito intuitiva!',
    message: 'Parabéns pela plataforma! A gamificação me motivou muito a continuar estudando. Já completei 3 cursos em 2 semanas!',
    state: 'MG',
    city: 'Belo Horizonte',
    createdAt: new Date('2024-11-18'),
    status: 'resolved',
    priority: 'low'
  },
  {
    id: 'fb-4',
    userId: 'user-4',
    userName: 'Pedro Almeida',
    userEmail: 'pedro.almeida@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 3,
    category: 'bug',
    title: 'Erro ao carregar vídeos',
    message: 'Às vezes os vídeos das aulas não carregam. Preciso recarregar a página várias vezes. Estou usando Chrome no Windows 11.',
    state: 'BA',
    city: 'Salvador',
    createdAt: new Date('2024-11-17'),
    status: 'pending',
    priority: 'high'
  },
  {
    id: 'fb-5',
    userId: 'user-5',
    userName: 'Mariana Santos',
    userEmail: 'mariana.santos@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    category: 'feature',
    title: 'App mobile seria perfeito',
    message: 'Uso muito a plataforma no celular. Um app nativo seria ainda melhor! Mas o site responsivo já funciona muito bem.',
    state: 'PR',
    city: 'Curitiba',
    createdAt: new Date('2024-11-16'),
    status: 'reviewed',
    priority: 'medium'
  },
  {
    id: 'fb-6',
    userId: 'user-6',
    userName: 'João Oliveira',
    userEmail: 'joao.oliveira@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 4,
    category: 'content',
    title: 'Legendas nos vídeos',
    message: 'Poderia adicionar legendas nos vídeos? Sou surdo e isso me ajudaria muito a acompanhar as aulas.',
    state: 'RS',
    city: 'Porto Alegre',
    createdAt: new Date('2024-11-15'),
    status: 'pending',
    priority: 'high'
  },
  {
    id: 'fb-7',
    userId: 'user-7',
    userName: 'Camila Lima',
    userEmail: 'camila.lima@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/women/89.jpg',
    rating: 5,
    category: 'other',
    title: 'Sistema de LizeCoins é genial',
    message: 'Adorei poder desbloquear cursos premium de graça só estudando! Já consegui 800 LizeCoins em 2 semanas.',
    state: 'PE',
    city: 'Recife',
    createdAt: new Date('2024-11-14'),
    status: 'resolved',
    priority: 'low'
  },
  {
    id: 'fb-8',
    userId: 'user-8',
    userName: 'Rafael Costa',
    userEmail: 'rafael.costa@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/men/71.jpg',
    rating: 2,
    category: 'bug',
    title: 'Quiz não salva progresso',
    message: 'Quando saio no meio de um quiz, perco todo o progresso. Seria bom salvar automaticamente.',
    state: 'CE',
    city: 'Fortaleza',
    createdAt: new Date('2024-11-13'),
    status: 'pending',
    priority: 'medium'
  },
  {
    id: 'fb-9',
    userId: 'user-9',
    userName: 'Juliana Ferreira',
    userEmail: 'juliana.ferreira@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    category: 'ux',
    title: 'Mascote Aralize é demais!',
    message: 'A Aralize é muito fofa! As animações dela deixam tudo mais divertido. Meu filho de 8 anos também adora.',
    state: 'DF',
    city: 'Brasília',
    createdAt: new Date('2024-11-12'),
    status: 'resolved',
    priority: 'low'
  },
  {
    id: 'fb-10',
    userId: 'user-10',
    userName: 'Lucas Ferreira',
    userEmail: 'lucas.ferreira@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/men/83.jpg',
    rating: 4,
    category: 'feature',
    title: 'Certificados em PDF',
    message: 'Os certificados poderiam ser baixados em PDF para adicionar no LinkedIn. Atualmente só consigo visualizar na plataforma.',
    state: 'SC',
    city: 'Florianópolis',
    createdAt: new Date('2024-11-11'),
    status: 'reviewed',
    priority: 'medium'
  },
  {
    id: 'fb-11',
    userId: 'user-11',
    userName: 'Fernanda Rocha',
    userEmail: 'fernanda.rocha@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/women/91.jpg',
    rating: 5,
    category: 'content',
    title: 'Simplificação das leis é incrível',
    message: 'Nunca pensei que conseguiria entender termos jurídicos. A IA simplifica tudo de forma clara e com exemplos práticos!',
    state: 'GO',
    city: 'Goiânia',
    createdAt: new Date('2024-11-10'),
    status: 'resolved',
    priority: 'low'
  },
  {
    id: 'fb-12',
    userId: 'user-12',
    userName: 'Rodrigo Mendes',
    userEmail: 'rodrigo.mendes@email.com',
    userAvatar: 'https://randomuser.me/api/portraits/men/92.jpg',
    rating: 3,
    category: 'bug',
    title: 'Ranking não atualiza em tempo real',
    message: 'O ranking demora algumas horas para atualizar. Seria legal ver minha posição mudar instantaneamente.',
    state: 'ES',
    city: 'Vitória',
    createdAt: new Date('2024-11-09'),
    status: 'pending',
    priority: 'low'
  }
];

// Mock métricas da plataforma
export const mockPlatformMetrics: PlatformMetrics = {
  totalUsers: 24567,
  activeUsers: 8934,
  totalCourses: 47,
  completedCourses: 3456,
  totalQuizzes: 12847,
  averageRating: 4.6,
  totalFeedbacks: 1247,
  totalLizeCoins: 4567890,
  revenue: 127845.50
};

// Regiões do Brasil
export const brazilRegions = [
  'Todas',
  'Norte',
  'Nordeste',
  'Centro-Oeste',
  'Sudeste',
  'Sul'
];

// Estados do Brasil
export const brazilStates = [
  'Todos',
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

// Mapeamento de estado para região
export const stateToRegion: Record<string, string> = {
  'AC': 'Norte', 'AM': 'Norte', 'AP': 'Norte', 'PA': 'Norte', 'RO': 'Norte', 'RR': 'Norte', 'TO': 'Norte',
  'AL': 'Nordeste', 'BA': 'Nordeste', 'CE': 'Nordeste', 'MA': 'Nordeste', 'PB': 'Nordeste', 'PE': 'Nordeste', 'PI': 'Nordeste', 'RN': 'Nordeste', 'SE': 'Nordeste',
  'DF': 'Centro-Oeste', 'GO': 'Centro-Oeste', 'MT': 'Centro-Oeste', 'MS': 'Centro-Oeste',
  'ES': 'Sudeste', 'MG': 'Sudeste', 'RJ': 'Sudeste', 'SP': 'Sudeste',
  'PR': 'Sul', 'RS': 'Sul', 'SC': 'Sul'
};