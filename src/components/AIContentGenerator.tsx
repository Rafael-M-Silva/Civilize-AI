import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import {
  Sparkles,
  FileText,
  BookOpen,
  Zap,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  Database,
  RefreshCw,
  Play,
  Eye
} from 'lucide-react';
import {
  mockDiariosOficiais,
  mockDiarioExcerpts,
  mockAISimplificationRequests,
  mockQueridoDiarioStats,
  topThemes
} from '../lib/queridoDiarioMockData';

export function AIContentGenerator() {
  const [selectedDiario, setSelectedDiario] = useState(mockDiariosOficiais[0]);
  const [isProcessing, setIsProcessing] = useState(false);

  const stats = mockQueridoDiarioStats;
  const pendingRequests = mockAISimplificationRequests.filter(r => r.status === 'pending').length;
  const processingRequests = mockAISimplificationRequests.filter(r => r.status === 'processing').length;
  const completedRequests = mockAISimplificationRequests.filter(r => r.status === 'completed').length;

  const handleSimplify = () => {
    setIsProcessing(true);
    // Simular processamento
    setTimeout(() => {
      setIsProcessing(false);
      alert('✅ Simplificação concluída! Curso gerado automaticamente.');
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Diários Processados</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.processedDiarios.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              de {stats.totalDiarios.toLocaleString()} total
            </p>
            <Progress 
              value={(stats.processedDiarios / stats.totalDiarios) * 100} 
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Simplificados</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#3283FF]">{stats.simplifiedDiarios.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((stats.simplifiedDiarios / stats.processedDiarios) * 100).toFixed(1)}% dos processados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Gerados</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#82F690]">{stats.coursesGenerated}</div>
            <p className="text-xs text-muted-foreground">
              Prontos para publicação
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tokens Usados</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#E3C545]">{(stats.totalTokensUsed / 1000000).toFixed(2)}M</div>
            <p className="text-xs text-muted-foreground">
              ≈ R$ {(stats.totalTokensUsed * 0.00001).toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="queue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="queue">Fila de Processamento</TabsTrigger>
          <TabsTrigger value="diarios">Diários Oficiais</TabsTrigger>
          <TabsTrigger value="analytics">Análises</TabsTrigger>
        </TabsList>

        {/* Queue Tab */}
        <TabsContent value="queue" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  Pendentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{pendingRequests}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />
                  Em Processamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{processingRequests}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Concluídos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{completedRequests}</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Requisições Recentes</CardTitle>
              <CardDescription>Histórico de simplificações por IA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockAISimplificationRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent">
                        {request.status === 'completed' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                        {request.status === 'processing' && <RefreshCw className="h-5 w-5 text-blue-500 animate-spin" />}
                        {request.status === 'pending' && <Clock className="h-5 w-5 text-yellow-500" />}
                        {request.status === 'error' && <AlertCircle className="h-5 w-5 text-red-500" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">Simplificação #{request.id}</h4>
                          <Badge variant={
                            request.status === 'completed' ? 'default' :
                            request.status === 'processing' ? 'secondary' :
                            request.status === 'pending' ? 'outline' : 'destructive'
                          }>
                            {request.status === 'completed' && '✅ Completo'}
                            {request.status === 'processing' && '⚡ Processando'}
                            {request.status === 'pending' && '⏳ Pendente'}
                            {request.status === 'error' && '❌ Erro'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {request.original_text}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>Modelo: {request.model}</span>
                          {request.tokens_used && <span>Tokens: {request.tokens_used}</span>}
                          {request.completed_at && (
                            <span>
                              Tempo: {Math.round((new Date(request.completed_at).getTime() - new Date(request.created_at).getTime()) / 1000)}s
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(request.created_at).toLocaleString('pt-BR')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Diários Tab */}
        <TabsContent value="diarios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Diários Oficiais Disponíveis</CardTitle>
              <CardDescription>
                Diários do Querido Diário API prontos para processamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockDiariosOficiais.map((diario) => (
                  <div
                    key={diario.id}
                    className={`p-4 border rounded-lg transition-all cursor-pointer ${
                      selectedDiario?.id === diario.id ? 'border-[#3283FF] bg-[#3283FF]/5' : 'hover:bg-accent/50'
                    }`}
                    onClick={() => setSelectedDiario(diario)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{diario.territory_name} - {diario.state_code}</h4>
                          <Badge variant="outline">{diario.edition_number}</Badge>
                          {diario.is_extra_edition && <Badge variant="secondary">Edição Extra</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{diario.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {diario.themes.slice(0, 3).map((theme, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {theme}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-sm text-muted-foreground">
                          {new Date(diario.date).toLocaleDateString('pt-BR')}
                        </span>
                        <div className="flex gap-1">
                          {diario.processed && (
                            <Badge className="bg-blue-500">Processado</Badge>
                          )}
                          {diario.simplified && (
                            <Badge className="bg-[#3283FF]">Simplificado</Badge>
                          )}
                          {diario.course_generated && (
                            <Badge className="bg-[#82F690]">Curso Gerado</Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {selectedDiario?.id === diario.id && (
                      <div className="mt-4 pt-4 border-t space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">📄 Texto Original:</h5>
                          <div className="bg-muted p-4 rounded-lg text-sm font-mono max-h-60 overflow-y-auto">
                            {diario.file_raw_txt}
                          </div>
                        </div>

                        {diario.simplified && (
                          <div>
                            <h5 className="font-medium mb-2">✨ Texto Simplificado:</h5>
                            <div className="bg-[#3283FF]/5 border border-[#3283FF]/20 p-4 rounded-lg text-sm max-h-60 overflow-y-auto">
                              {mockDiarioExcerpts
                                .filter(e => e.diario_id === diario.id)[0]
                                ?.simplified_text || 'Processando...'}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2">
                          {!diario.simplified && (
                            <Button 
                              onClick={handleSimplify}
                              disabled={isProcessing}
                              className="bg-[#3283FF]"
                            >
                              {isProcessing ? (
                                <>
                                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                                  Processando...
                                </>
                              ) : (
                                <>
                                  <Sparkles className="h-4 w-4 mr-2" />
                                  Simplificar com IA
                                </>
                              )}
                            </Button>
                          )}
                          {diario.simplified && !diario.course_generated && (
                            <Button className="bg-[#82F690] text-black hover:bg-[#82F690]/90">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Gerar Curso
                            </Button>
                          )}
                          {diario.course_generated && (
                            <Button variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              Visualizar Curso
                            </Button>
                          )}
                          <Button variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            Ver Original
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Cobertura Geográfica</CardTitle>
                <CardDescription>Municípios e estados cobertos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Municípios cobertos</span>
                  <span className="text-2xl font-bold">{stats.citiesCovered.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Estados do Brasil</span>
                  <span className="text-2xl font-bold">{stats.statesCovered}/27</span>
                </div>
                <Progress value={(stats.statesCovered / 27) * 100} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance da IA</CardTitle>
                <CardDescription>Métricas de processamento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tempo médio de simplificação</span>
                  <span className="text-2xl font-bold">{stats.averageSimplificationTime}s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Taxa de sucesso</span>
                  <span className="text-2xl font-bold text-green-500">
                    {((completedRequests / mockAISimplificationRequests.length) * 100).toFixed(1)}%
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Temas Mais Comuns</CardTitle>
              <CardDescription>Distribuição de conteúdo por tema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topThemes.map((theme, index) => (
                  <div key={theme.theme}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="font-medium">{theme.theme}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {theme.count.toLocaleString()} diários
                        </span>
                        <span className="text-sm font-medium w-12 text-right">
                          {theme.percentage.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <Progress value={theme.percentage} className="h-2" />
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
