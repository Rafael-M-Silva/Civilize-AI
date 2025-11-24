import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  Users,
  TrendingUp,
  MessageSquare,
  Filter,
  Download,
  RefreshCw,
  Star,
  MapPin,
  Calendar,
  AlertTriangle,
  Globe,
  Database,
  Zap,
  Sparkles,
  BookOpen,
  FileText,
  Brain,
  DollarSign,
  Clock
} from 'lucide-react';
import {
  mockAPIs,
  mockUserStats,
  mockFeedbacks,
  mockPlatformMetrics,
  brazilRegions,
  brazilStates,
  stateToRegion,
  APIStatus,
  UserFeedback
} from '../lib/adminMockData';
import { AIContentGenerator } from './AIContentGenerator';
import { mockQueridoDiarioStats, mockAISimplificationRequests } from '../lib/queridoDiarioMockData';

export function AdminDashboard() {
  const [selectedRegion, setSelectedRegion] = useState<string>('Todas');
  const [selectedState, setSelectedState] = useState<string>('Todos');
  const [feedbackFilter, setFeedbackFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Filtrar feedbacks
  const filteredFeedbacks = useMemo(() => {
    let filtered = mockFeedbacks;

    // Filtro por região
    if (selectedRegion !== 'Todas') {
      filtered = filtered.filter(fb => stateToRegion[fb.state] === selectedRegion);
    }

    // Filtro por estado
    if (selectedState !== 'Todos') {
      filtered = filtered.filter(fb => fb.state === selectedState);
    }

    // Filtro por categoria
    if (feedbackFilter !== 'all') {
      filtered = filtered.filter(fb => fb.category === feedbackFilter);
    }

    // Filtro por status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(fb => fb.status === statusFilter);
    }

    return filtered;
  }, [selectedRegion, selectedState, feedbackFilter, statusFilter]);

  // Estatísticas filtradas por região
  const filteredUserStats = useMemo(() => {
    if (selectedRegion === 'Todas' && selectedState === 'Todos') {
      return mockUserStats;
    }

    let filteredStates = mockUserStats.byState;

    if (selectedRegion !== 'Todas') {
      filteredStates = filteredStates.filter(
        stat => stateToRegion[stat.state] === selectedRegion
      );
    }

    if (selectedState !== 'Todos') {
      filteredStates = filteredStates.filter(stat => stat.state === selectedState);
    }

    const totalFiltered = filteredStates.reduce((sum, stat) => sum + stat.count, 0);

    return {
      ...mockUserStats,
      total: totalFiltered,
      byState: filteredStates
    };
  }, [selectedRegion, selectedState]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'text-green-500';
      case 'offline':
        return 'text-red-500';
      case 'degraded':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online':
        return <Badge className="bg-green-500">Online</Badge>;
      case 'offline':
        return <Badge className="bg-red-500">Offline</Badge>;
      case 'degraded':
        return <Badge className="bg-yellow-500">Degradado</Badge>;
      default:
        return <Badge>Desconhecido</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'bug':
        return <AlertCircle className="h-4 w-4" />;
      case 'feature':
        return <Zap className="h-4 w-4" />;
      case 'content':
        return <Database className="h-4 w-4" />;
      case 'ux':
        return <Star className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const avgRating = useMemo(() => {
    if (filteredFeedbacks.length === 0) return 0;
    return (
      filteredFeedbacks.reduce((sum, fb) => sum + fb.rating, 0) / filteredFeedbacks.length
    ).toFixed(1);
  }, [filteredFeedbacks]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Painel Administrativo</h1>
          <p className="text-muted-foreground mt-1">
            Monitore APIs, usuários e feedbacks da plataforma
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Métricas Gerais */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockPlatformMetrics.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+{mockUserStats.growth.daily}</span> hoje
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockPlatformMetrics.activeUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((mockPlatformMetrics.activeUsers / mockPlatformMetrics.totalUsers) * 100).toFixed(1)}% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockPlatformMetrics.averageRating.toFixed(1)}</div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-3 w-3 ${
                    star <= mockPlatformMetrics.averageRating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Feedbacks</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockPlatformMetrics.totalFeedbacks.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {mockFeedbacks.filter(fb => fb.status === 'pending').length} pendentes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Dashboard de IA e Geração de Conteúdo */}
      <Card className="border-2 border-[#3283FF]/20 bg-gradient-to-br from-[#3283FF]/5 to-transparent">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#3283FF]/10">
                <Sparkles className="h-6 w-6 text-[#3283FF]" />
              </div>
              <div>
                <CardTitle className="text-xl">Dashboard de IA & Geração de Conteúdo</CardTitle>
                <CardDescription>Métricas de processamento e simplificação via Querido Diário API + OpenAI</CardDescription>
              </div>
            </div>
            <Badge className="bg-green-500">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Operacional
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-6">
            <Card className="border-[#3283FF]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-medium flex items-center gap-1">
                  <FileText className="h-3 w-3 text-[#3283FF]" />
                  Diários Processados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#3283FF]">{mockQueridoDiarioStats.processedDiarios.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  de {mockQueridoDiarioStats.totalDiarios.toLocaleString()} total
                </p>
                <div className="mt-2 w-full bg-secondary rounded-full h-1.5">
                  <div
                    className="bg-[#3283FF] h-1.5 rounded-full"
                    style={{ width: `${(mockQueridoDiarioStats.processedDiarios / mockQueridoDiarioStats.totalDiarios) * 100}%` }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#82F690]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-medium flex items-center gap-1">
                  <Brain className="h-3 w-3 text-[#82F690]" />
                  Simplificados por IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#82F690]">{mockQueridoDiarioStats.simplifiedDiarios.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {((mockQueridoDiarioStats.simplifiedDiarios / mockQueridoDiarioStats.processedDiarios) * 100).toFixed(1)}% dos processados
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#E3C545]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-medium flex items-center gap-1">
                  <BookOpen className="h-3 w-3 text-[#E3C545]" />
                  Cursos Gerados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#E3C545]">{mockQueridoDiarioStats.coursesGenerated}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Prontos para publicação
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#FF2A1D]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-medium flex items-center gap-1">
                  <Zap className="h-3 w-3 text-[#FF2A1D]" />
                  Tokens Gastos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#FF2A1D]">{(mockQueridoDiarioStats.totalTokensUsed / 1000000).toFixed(2)}M</div>
                <p className="text-xs text-muted-foreground mt-1">
                  OpenAI GPT-4 Turbo
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-medium flex items-center gap-1">
                  <DollarSign className="h-3 w-3 text-green-500" />
                  Custo Estimado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">R$ {(mockQueridoDiarioStats.totalTokensUsed * 0.00001).toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  ≈ $0.01 por 1k tokens
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Métricas Adicionais */}
          <div className="grid gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
              <Clock className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Tempo Médio</p>
                <p className="text-lg font-bold">{mockQueridoDiarioStats.averageSimplificationTime}s</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
              <MapPin className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Municípios</p>
                <p className="text-lg font-bold">{mockQueridoDiarioStats.citiesCovered.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
              <Globe className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Estados</p>
                <p className="text-lg font-bold">{mockQueridoDiarioStats.statesCovered}/27</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
              <RefreshCw className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Na Fila</p>
                <p className="text-lg font-bold">{mockQueridoDiarioStats.pendingSimplification}</p>
              </div>
            </div>
          </div>

          {/* Status das Simplificações */}
          <div className="mt-6 p-4 rounded-lg border border-[#3283FF]/20 bg-[#3283FF]/5">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[#3283FF]" />
              Status das Simplificações
            </h4>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Pendentes</span>
                </div>
                <span className="text-lg font-bold">{mockAISimplificationRequests.filter(r => r.status === 'pending').length}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />
                  <span className="text-sm">Processando</span>
                </div>
                <span className="text-lg font-bold">{mockAISimplificationRequests.filter(r => r.status === 'processing').length}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Concluídos</span>
                </div>
                <span className="text-lg font-bold">{mockAISimplificationRequests.filter(r => r.status === 'completed').length}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="apis" className="space-y-4">
        <TabsList>
          <TabsTrigger value="apis">APIs Conectadas</TabsTrigger>
          <TabsTrigger value="ia">
            <Sparkles className="h-4 w-4 mr-2" />
            IA & Conteúdo
          </TabsTrigger>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="feedbacks">Feedbacks</TabsTrigger>
        </TabsList>

        {/* APIs Tab */}
        <TabsContent value="apis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Status das APIs</CardTitle>
              <CardDescription>
                Monitoramento em tempo real de todas as APIs integradas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAPIs.map((api) => (
                  <div
                    key={api.id}
                    className="flex items-start justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent">
                        <Globe className={`h-5 w-5 ${getStatusColor(api.status)}`} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{api.name}</h4>
                          {getStatusBadge(api.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{api.description}</p>
                        <p className="text-xs text-muted-foreground font-mono">{api.endpoint}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="text-xs">
                            <span className="text-muted-foreground">Tempo de resposta: </span>
                            <span className="font-medium">{api.responseTime}ms</span>
                          </div>
                          <div className="text-xs">
                            <span className="text-muted-foreground">Uptime: </span>
                            <span className="font-medium">{api.uptime}%</span>
                          </div>
                          <div className="text-xs">
                            <span className="text-muted-foreground">Requisições hoje: </span>
                            <span className="font-medium">{api.requestsToday.toLocaleString()}</span>
                          </div>
                          <div className="text-xs">
                            <span className="text-muted-foreground">Taxa de erro: </span>
                            <span className={`font-medium ${api.errorRate > 1 ? 'text-red-500' : 'text-green-500'}`}>
                              {api.errorRate}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Atualizado {new Date(api.lastChecked).toLocaleTimeString('pt-BR')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* IA & Conteúdo Tab */}
        <TabsContent value="ia" className="space-y-4">
          <AIContentGenerator />
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-4">
          {/* Filtros */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtros de Localização
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">Região</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {brazilRegions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">Estado</label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {brazilStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Estatísticas de Usuários */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Total Filtrado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{filteredUserStats.total.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Crescimento Semanal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-500">+{mockUserStats.growth.weekly.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Crescimento Mensal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-500">+{mockUserStats.growth.monthly.toLocaleString()}</div>
              </CardContent>
            </Card>
          </div>

          {/* Distribuição por Região */}
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Região</CardTitle>
              <CardDescription>Usuários por região geográfica do Brasil</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockUserStats.byRegion.map((region) => (
                  <div key={region.region}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{region.region}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          {region.count.toLocaleString()} usuários
                        </span>
                        <span className="text-sm font-medium">{region.percentage.toFixed(1)}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-[#3283FF] h-2 rounded-full transition-all"
                        style={{ width: `${region.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top 10 Estados */}
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Estados</CardTitle>
              <CardDescription>Estados com maior número de usuários</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredUserStats.byState.slice(0, 10).map((state, index) => (
                  <div key={state.state} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{state.state}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {state.count.toLocaleString()}
                      </span>
                      <div className="w-32 bg-secondary rounded-full h-2">
                        <div
                          className="bg-[#82F690] h-2 rounded-full"
                          style={{ width: `${state.percentage * 10}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-12 text-right">
                        {state.percentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Feedbacks Tab */}
        <TabsContent value="feedbacks" className="space-y-4">
          {/* Filtros de Feedback */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtros de Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Região</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {brazilRegions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Estado</label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {brazilStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Categoria</label>
                  <Select value={feedbackFilter} onValueChange={setFeedbackFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="bug">🐛 Bug</SelectItem>
                      <SelectItem value="feature">⚡ Feature</SelectItem>
                      <SelectItem value="content">📚 Conteúdo</SelectItem>
                      <SelectItem value="ux">✨ UX</SelectItem>
                      <SelectItem value="other">💬 Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Status</label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="pending">⏳ Pendente</SelectItem>
                      <SelectItem value="reviewed">👀 Revisado</SelectItem>
                      <SelectItem value="resolved">✅ Resolvido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Estatísticas de Feedback */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Filtrado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{filteredFeedbacks.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">{avgRating}</div>
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500">
                  {filteredFeedbacks.filter(fb => fb.status === 'pending').length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Resolvidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">
                  {filteredFeedbacks.filter(fb => fb.status === 'resolved').length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Feedbacks */}
          <Card>
            <CardHeader>
              <CardTitle>Feedbacks dos Usuários</CardTitle>
              <CardDescription>
                {filteredFeedbacks.length} feedbacks encontrados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFeedbacks.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={feedback.userAvatar} alt={feedback.userName} />
                          <AvatarFallback>{feedback.userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{feedback.userName}</h4>
                            <Badge variant="outline" className="text-xs">
                              {feedback.state} - {feedback.city}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{feedback.userEmail}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${
                                star <= feedback.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <Badge
                          className={
                            feedback.status === 'resolved'
                              ? 'bg-green-500'
                              : feedback.status === 'reviewed'
                              ? 'bg-blue-500'
                              : 'bg-yellow-500'
                          }
                        >
                          {feedback.status === 'resolved' && '✅ Resolvido'}
                          {feedback.status === 'reviewed' && '👀 Revisado'}
                          {feedback.status === 'pending' && '⏳ Pendente'}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(feedback.category)}
                        <h3 className="font-medium">{feedback.title}</h3>
                        <Badge variant="outline" className={`text-xs ${getPriorityColor(feedback.priority)}`}>
                          {feedback.priority === 'high' && '🔴 Alta'}
                          {feedback.priority === 'medium' && '🟡 Média'}
                          {feedback.priority === 'low' && '🟢 Baixa'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{feedback.message}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(feedback.createdAt).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {stateToRegion[feedback.state]}
                        </div>
                      </div>
                    </div>

                    {feedback.status === 'pending' && (
                      <div className="flex gap-2 mt-4 pt-4 border-t">
                        <Button size="sm" variant="outline">
                          Marcar como Revisado
                        </Button>
                        <Button size="sm" variant="outline">
                          Resolver
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}