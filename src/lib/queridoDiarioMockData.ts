// Mock data da API Querido Diário
// https://queridodiario.ok.org.br/tecnologia/api

export interface DiarioOficial {
  id: string;
  territory_id: string;
  territory_name: string;
  state_code: string;
  date: string;
  edition_number: string;
  is_extra_edition: boolean;
  url: string;
  txt_url: string;
  file_raw_txt: string;
  excerpt: string;
  themes: string[];
  subthemes: string[];
  entities: string[];
  processed: boolean;
  simplified: boolean;
  course_generated: boolean;
}

export interface DiarioExcerpt {
  id: string;
  diario_id: string;
  original_text: string;
  simplified_text: string;
  theme: string;
  subtheme: string;
  complexity_level: 'easy' | 'medium' | 'hard';
  target_audience: string;
  keywords: string[];
}

export interface AISimplificationRequest {
  id: string;
  diario_id: string;
  excerpt_id: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  original_text: string;
  simplified_text?: string;
  created_at: Date;
  completed_at?: Date;
  tokens_used?: number;
  model: string;
}

// Mock diários oficiais
export const mockDiariosOficiais: DiarioOficial[] = [
  {
    id: 'diario-1',
    territory_id: '3550308',
    territory_name: 'São Paulo',
    state_code: 'SP',
    date: '2024-11-20',
    edition_number: '264',
    is_extra_edition: false,
    url: 'https://queridodiario.ok.org.br/diarios/3550308/2024-11-20',
    txt_url: 'https://queridodiario.ok.org.br/diarios/3550308/2024-11-20.txt',
    file_raw_txt: `LEI Nº 18.234, DE 19 DE NOVEMBRO DE 2024
    
Institui o Programa Municipal de Educação Cidadã e Participação Popular, e dá outras providências.

Art. 1º Fica instituído o Programa Municipal de Educação Cidadã e Participação Popular, com o objetivo de promover a conscientização da população sobre seus direitos e deveres, incentivando a participação ativa nos processos democráticos e nas decisões que afetam a comunidade local.

Art. 2º O Programa será executado mediante as seguintes ações:
I - realização de cursos, palestras e oficinas sobre cidadania, direitos humanos e participação popular;
II - criação de materiais educativos de fácil compreensão sobre legislação e políticas públicas;
III - estabelecimento de canais de comunicação entre a população e o poder público;
IV - promoção de audiências públicas e consultas populares sobre temas de interesse coletivo.

Art. 3º Esta Lei entra em vigor na data de sua publicação.

São Paulo, 19 de novembro de 2024.`,
    excerpt: 'Lei institui Programa Municipal de Educação Cidadã...',
    themes: ['Educação', 'Cidadania', 'Participação Popular'],
    subthemes: ['Direitos Humanos', 'Democracia', 'Transparência'],
    entities: ['Prefeitura de São Paulo', 'Secretaria de Educação'],
    processed: true,
    simplified: true,
    course_generated: true
  },
  {
    id: 'diario-2',
    territory_id: '3304557',
    territory_name: 'Rio de Janeiro',
    state_code: 'RJ',
    date: '2024-11-19',
    edition_number: '198',
    is_extra_edition: false,
    url: 'https://queridodiario.ok.org.br/diarios/3304557/2024-11-19',
    txt_url: 'https://queridodiario.ok.org.br/diarios/3304557/2024-11-19.txt',
    file_raw_txt: `DECRETO Nº 52.987 DE 18 DE NOVEMBRO DE 2024

Regulamenta a Lei Municipal nº 7.543/2024 que dispõe sobre a coleta seletiva de resíduos sólidos no município.

Art. 1º A coleta seletiva de resíduos sólidos recicláveis será realizada porta a porta em todas as regiões do município, conforme cronograma a ser estabelecido pela Companhia Municipal de Limpeza Urbana - COMLURB.

§ 1º Os resíduos deverão ser separados em três categorias:
I - resíduos recicláveis secos (papel, plástico, metal, vidro);
II - resíduos orgânicos (restos de alimentos e podas);
III - rejeitos (materiais não recicláveis).

§ 2º O não cumprimento das regras de separação poderá resultar em advertência e, em caso de reincidência, multa de 50 (cinquenta) UFIRs.

Art. 2º Este decreto entra em vigor 90 dias após sua publicação.

Rio de Janeiro, 18 de novembro de 2024.`,
    excerpt: 'Decreto regulamenta coleta seletiva de resíduos...',
    themes: ['Meio Ambiente', 'Sustentabilidade', 'Limpeza Urbana'],
    subthemes: ['Reciclagem', 'Gestão de Resíduos'],
    entities: ['COMLURB', 'Prefeitura do Rio de Janeiro'],
    processed: true,
    simplified: true,
    course_generated: false
  },
  {
    id: 'diario-3',
    territory_id: '3106200',
    territory_name: 'Belo Horizonte',
    state_code: 'MG',
    date: '2024-11-18',
    edition_number: '2876',
    is_extra_edition: true,
    url: 'https://queridodiario.ok.org.br/diarios/3106200/2024-11-18',
    txt_url: 'https://queridodiario.ok.org.br/diarios/3106200/2024-11-18.txt',
    file_raw_txt: `LEI Nº 11.456, DE 17 DE NOVEMBRO DE 2024

Dispõe sobre a criação do Programa Municipal de Apoio ao Microempreendedor Individual - MEI.

Art. 1º Fica criado o Programa Municipal de Apoio ao Microempreendedor Individual - MEI, destinado a fomentar o empreendedorismo e a formalização de pequenos negócios no município.

Art. 2º São objetivos do Programa:
I - oferecer capacitação gratuita em gestão de negócios;
II - facilitar o acesso a linhas de microcrédito;
III - criar espaços de coworking públicos para MEIs;
IV - promover feiras e eventos de divulgação dos produtos e serviços dos MEIs.

Art. 3º Poderão participar do Programa os microempreendedores individuais regularmente inscritos no município, com faturamento anual de até R$ 81.000,00 (oitenta e um mil reais).

Art. 4º Esta Lei entra em vigor na data de sua publicação.

Belo Horizonte, 17 de novembro de 2024.`,
    excerpt: 'Lei cria Programa de Apoio ao MEI...',
    themes: ['Economia', 'Empreendedorismo', 'Trabalho'],
    subthemes: ['Microempreendedor', 'Formalização', 'Capacitação'],
    entities: ['Prefeitura de Belo Horizonte', 'Secretaria de Desenvolvimento Econômico'],
    processed: true,
    simplified: false,
    course_generated: false
  },
  {
    id: 'diario-4',
    territory_id: '4106902',
    territory_name: 'Curitiba',
    state_code: 'PR',
    date: '2024-11-17',
    edition_number: '312',
    is_extra_edition: false,
    url: 'https://queridodiario.ok.org.br/diarios/4106902/2024-11-17',
    txt_url: 'https://queridodiario.ok.org.br/diarios/4106902/2024-11-17.txt',
    file_raw_txt: `PORTARIA Nº 876/2024

Estabelece normas para concessão de alvarás de funcionamento para estabelecimentos comerciais.

Art. 1º A concessão de alvará de funcionamento para estabelecimentos comerciais no município de Curitiba obedecerá aos seguintes requisitos:

I - inscrição no Cadastro Nacional de Pessoas Jurídicas - CNPJ;
II - comprovação de regularidade fiscal municipal;
III - aprovação da vistoria do Corpo de Bombeiros;
IV - aprovação sanitária, quando aplicável;
V - comprovação de acessibilidade conforme NBR 9050.

Art. 2º O prazo para análise do pedido de alvará será de até 30 (trinta) dias úteis.

Art. 3º Esta portaria entra em vigor na data de sua publicação.

Curitiba, 17 de novembro de 2024.`,
    excerpt: 'Portaria estabelece normas para alvarás...',
    themes: ['Comércio', 'Regulamentação', 'Licenciamento'],
    subthemes: ['Alvará', 'Fiscalização'],
    entities: ['Prefeitura de Curitiba', 'Corpo de Bombeiros'],
    processed: false,
    simplified: false,
    course_generated: false
  }
];

// Mock excertos simplificados
export const mockDiarioExcerpts: DiarioExcerpt[] = [
  {
    id: 'excerpt-1',
    diario_id: 'diario-1',
    original_text: `Art. 1º Fica instituído o Programa Municipal de Educação Cidadã e Participação Popular, com o objetivo de promover a conscientização da população sobre seus direitos e deveres, incentivando a participação ativa nos processos democráticos e nas decisões que afetam a comunidade local.`,
    simplified_text: `🎓 Foi criado um programa na sua cidade para ensinar as pessoas sobre cidadania!

O que é esse programa?
É como uma "escola de cidadania" gratuita onde você vai aprender sobre seus direitos (o que você pode fazer) e seus deveres (o que você deve fazer) como cidadão.

Por que isso é importante?
Quando você conhece seus direitos, pode participar melhor das decisões da sua cidade, tipo: onde construir uma praça, como melhorar a saúde, etc.

É como aprender as regras de um jogo - quando você conhece bem as regras, pode jogar melhor! 🎮`,
    theme: 'Educação',
    subtheme: 'Cidadania',
    complexity_level: 'easy',
    target_audience: 'Público geral',
    keywords: ['cidadania', 'direitos', 'deveres', 'participação', 'democracia']
  },
  {
    id: 'excerpt-2',
    diario_id: 'diario-2',
    original_text: `§ 1º Os resíduos deverão ser separados em três categorias:
I - resíduos recicláveis secos (papel, plástico, metal, vidro);
II - resíduos orgânicos (restos de alimentos e podas);
III - rejeitos (materiais não recicláveis).`,
    simplified_text: `♻️ Como separar seu lixo de forma simples:

Imagine 3 cestos diferentes:

🟦 CESTO AZUL - Recicláveis Secos
- Garrafas plásticas
- Papéis e caixas de papelão
- Latas de alumínio
- Potes de vidro
(Tudo que está limpo e seco!)

🟩 CESTO VERDE - Orgânicos
- Cascas de frutas e legumes
- Restos de comida
- Folhas e galhos de plantas
(Tudo que veio da natureza e apodrece!)

⚫ CESTO PRETO - Rejeitos
- Papel higiênico usado
- Fraldas
- Espumas
(Tudo que não dá para reciclar!)

💡 Dica: Quanto mais você separar direito, mais você ajuda o meio ambiente!`,
    theme: 'Meio Ambiente',
    subtheme: 'Reciclagem',
    complexity_level: 'easy',
    target_audience: 'Público geral',
    keywords: ['reciclagem', 'lixo', 'sustentabilidade', 'meio ambiente']
  }
];

// Mock requisições de simplificação
export const mockAISimplificationRequests: AISimplificationRequest[] = [
  {
    id: 'req-1',
    diario_id: 'diario-1',
    excerpt_id: 'excerpt-1',
    status: 'completed',
    original_text: 'Art. 1º Fica instituído o Programa Municipal...',
    simplified_text: '🎓 Foi criado um programa na sua cidade...',
    created_at: new Date('2024-11-20T10:30:00'),
    completed_at: new Date('2024-11-20T10:31:15'),
    tokens_used: 456,
    model: 'GPT-4 Turbo'
  },
  {
    id: 'req-2',
    diario_id: 'diario-2',
    excerpt_id: 'excerpt-2',
    status: 'completed',
    original_text: '§ 1º Os resíduos deverão ser separados...',
    simplified_text: '♻️ Como separar seu lixo de forma simples...',
    created_at: new Date('2024-11-19T14:20:00'),
    completed_at: new Date('2024-11-19T14:21:30'),
    tokens_used: 523,
    model: 'GPT-4 Turbo'
  },
  {
    id: 'req-3',
    diario_id: 'diario-3',
    excerpt_id: 'excerpt-3',
    status: 'processing',
    original_text: 'Art. 1º Fica criado o Programa Municipal...',
    created_at: new Date('2024-11-18T09:15:00'),
    model: 'GPT-4 Turbo'
  },
  {
    id: 'req-4',
    diario_id: 'diario-4',
    excerpt_id: 'excerpt-4',
    status: 'pending',
    original_text: 'Art. 1º A concessão de alvará...',
    created_at: new Date('2024-11-17T16:45:00'),
    model: 'GPT-4 Turbo'
  }
];

// Estatísticas da API Querido Diário
export interface QueridoDiarioStats {
  totalDiarios: number;
  processedDiarios: number;
  simplifiedDiarios: number;
  coursesGenerated: number;
  pendingSimplification: number;
  totalTokensUsed: number;
  averageSimplificationTime: number; // em segundos
  citiesCovered: number;
  statesCovered: number;
}

export const mockQueridoDiarioStats: QueridoDiarioStats = {
  totalDiarios: 245678,
  processedDiarios: 45823,
  simplifiedDiarios: 12456,
  coursesGenerated: 89,
  pendingSimplification: 234,
  totalTokensUsed: 4567890,
  averageSimplificationTime: 45,
  citiesCovered: 3456,
  statesCovered: 27
};

// Temas mais comuns nos diários
export const topThemes = [
  { theme: 'Educação', count: 3456, percentage: 27.7 },
  { theme: 'Saúde', count: 2891, percentage: 23.2 },
  { theme: 'Meio Ambiente', count: 1678, percentage: 13.5 },
  { theme: 'Transporte', count: 1234, percentage: 9.9 },
  { theme: 'Economia', count: 987, percentage: 7.9 },
  { theme: 'Segurança', count: 876, percentage: 7.0 },
  { theme: 'Cultura', count: 654, percentage: 5.2 },
  { theme: 'Outros', count: 680, percentage: 5.6 }
];
