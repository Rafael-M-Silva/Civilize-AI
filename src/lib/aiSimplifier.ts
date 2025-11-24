// Simulador de IA para simplificação de textos legislativos

export interface SimplificationConfig {
  model: 'GPT-4 Turbo' | 'GPT-4' | 'GPT-3.5 Turbo';
  temperature: number;
  maxTokens: number;
  targetAudience: 'criança' | 'adolescente' | 'adulto' | 'idoso';
  useEmojis: boolean;
  useExamples: boolean;
}

export const defaultSimplificationConfig: SimplificationConfig = {
  model: 'GPT-4 Turbo',
  temperature: 0.7,
  maxTokens: 1000,
  targetAudience: 'adulto',
  useEmojis: true,
  useExamples: true
};

/**
 * Simula a chamada da API OpenAI para simplificar texto legislativo
 * Na implementação real, isso faria uma chamada real para a API OpenAI
 */
export async function simplifyLegislativeText(
  originalText: string,
  config: SimplificationConfig = defaultSimplificationConfig
): Promise<{
  simplifiedText: string;
  tokensUsed: number;
  processingTime: number;
  complexity: 'easy' | 'medium' | 'hard';
}> {
  // Simular delay de processamento (na vida real seria a chamada da API)
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Exemplo de prompt que seria enviado para a OpenAI
  const prompt = `
Você é um especialista em simplificação de textos legislativos brasileiros.
Sua missão é traduzir leis, decretos e portarias para uma linguagem clara e acessível.

Público-alvo: ${config.targetAudience}
Use emojis: ${config.useEmojis ? 'Sim' : 'Não'}
Use exemplos práticos: ${config.useExamples ? 'Sim' : 'Não'}

Regras de simplificação:
1. Use frases curtas e diretas
2. Substitua termos técnicos por palavras do dia a dia
3. Use analogias e exemplos quando possível
4. Organize o texto em tópicos fáceis de ler
5. Destaque informações importantes
6. Explique o "porquê" por trás da lei

Texto original:
${originalText}

Simplifique este texto mantendo todas as informações importantes, mas tornando-o compreensível para o público-alvo.
`;

  // Na implementação real, aqui seria:
  // const response = await openai.chat.completions.create({
  //   model: config.model,
  //   messages: [{ role: 'user', content: prompt }],
  //   temperature: config.temperature,
  //   max_tokens: config.maxTokens
  // });

  // Simulação de resposta
  const simplifiedText = generateMockSimplification(originalText, config);
  const tokensUsed = Math.floor(Math.random() * 500) + 200;
  const processingTime = Math.floor(Math.random() * 30) + 15; // 15-45 segundos

  return {
    simplifiedText,
    tokensUsed,
    processingTime,
    complexity: determineComplexity(originalText)
  };
}

/**
 * Gera uma simplificação mockada baseada no texto original
 */
function generateMockSimplification(
  originalText: string,
  config: SimplificationConfig
): string {
  const emojiMap: { [key: string]: string } = {
    'lei': '📜',
    'decreto': '📋',
    'programa': '🎓',
    'educação': '📚',
    'saúde': '🏥',
    'meio ambiente': '🌳',
    'transporte': '🚌',
    'economia': '💰',
    'trabalho': '💼',
    'direito': '⚖️',
    'atenção': '⚠️',
    'importante': '❗',
    'prazo': '📅',
    'dinheiro': '💵',
    'multa': '💸'
  };

  // Detectar tema do texto
  const lowerText = originalText.toLowerCase();
  let emoji = '📄';
  
  for (const [keyword, emojiChar] of Object.entries(emojiMap)) {
    if (lowerText.includes(keyword)) {
      emoji = emojiChar;
      break;
    }
  }

  // Template de simplificação
  let simplified = '';

  if (config.useEmojis) {
    simplified += `${emoji} `;
  }

  simplified += `**Entenda de forma simples:**\n\n`;

  // Adicionar explicação baseada no público-alvo
  if (config.targetAudience === 'criança') {
    simplified += `Sabe quando na escola a professora explica as regras? Isso aqui é como uma regra nova da sua cidade!\n\n`;
  } else if (config.targetAudience === 'adolescente') {
    simplified += `Vou te explicar essa lei de um jeito que faça sentido para você:\n\n`;
  } else {
    simplified += `Vamos traduzir esse texto oficial para uma linguagem clara:\n\n`;
  }

  // Extrair informações principais
  if (lowerText.includes('art.') || lowerText.includes('artigo')) {
    simplified += `**O que essa lei diz?**\n`;
    simplified += `• Foi criada uma nova regra/programa na sua cidade\n`;
    simplified += `• O objetivo é melhorar algum serviço ou criar algo novo\n`;
    simplified += `• Isso pode afetar você diretamente!\n\n`;
  }

  // Adicionar exemplo prático se configurado
  if (config.useExamples) {
    simplified += `**Exemplo prático:**\n`;
    if (lowerText.includes('educação')) {
      simplified += `Imagine que é como criar uma nova matéria na escola, mas desta vez é para aprender sobre cidadania e seus direitos. Legal, né? 😊\n\n`;
    } else if (lowerText.includes('reciclagem') || lowerText.includes('lixo')) {
      simplified += `É tipo quando você separa o lixo em casa - mas agora tem regras claras de como fazer isso do jeito certo! ♻️\n\n`;
    } else if (lowerText.includes('mei') || lowerText.includes('empreendedor')) {
      simplified += `Se você tem ou quer ter seu próprio negócio (tipo vender brigadeiros, fazer unhas, etc), essa lei vai te ajudar! 💪\n\n`;
    } else {
      simplified += `Pense nisso como uma nova regra do jogo da sua cidade. Quando todo mundo conhece e segue, a cidade funciona melhor! 🏙️\n\n`;
    }
  }

  // Informações importantes
  simplified += `**Pontos importantes:**\n`;
  simplified += `✓ Isso é uma lei oficial da sua cidade\n`;
  simplified += `✓ Todos os cidadãos devem conhecer e seguir\n`;
  simplified += `✓ Se tiver dúvidas, procure a prefeitura ou órgãos responsáveis\n\n`;

  // Quando entra em vigor
  if (lowerText.includes('entra em vigor')) {
    simplified += `**Quando começa a valer?**\n`;
    if (lowerText.includes('publicação')) {
      simplified += `A partir do dia que foi publicada (anunciada oficialmente)\n\n`;
    } else if (lowerText.includes('90 dias') || lowerText.includes('noventa dias')) {
      simplified += `Daqui a 3 meses (90 dias)\n\n`;
    }
  }

  simplified += `---\n`;
  simplified += `💡 **Dica:** Sempre que ver uma lei nova, lembre-se: ela foi feita para organizar melhor a vida de todos na cidade!`;

  return simplified;
}

/**
 * Determina a complexidade de um texto legislativo
 */
function determineComplexity(text: string): 'easy' | 'medium' | 'hard' {
  const paragraphs = text.split('\n').filter(p => p.trim().length > 0).length;
  const hasComplexTerms = /§|inciso|alínea|subseção|capítulo/gi.test(text);
  const hasNumbers = /\d{1,3}\.\d{3}/g.test(text);
  
  if (paragraphs > 10 || (hasComplexTerms && hasNumbers)) {
    return 'hard';
  } else if (paragraphs > 5 || hasComplexTerms) {
    return 'medium';
  }
  
  return 'easy';
}

/**
 * Extrai palavras-chave de um texto legislativo
 */
export function extractKeywords(text: string): string[] {
  const commonWords = ['de', 'da', 'do', 'a', 'o', 'e', 'que', 'para', 'com', 'em', 'no', 'na', 'os', 'as'];
  
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word));
  
  // Contar frequência
  const frequency: { [key: string]: number } = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  // Retornar as 5 mais frequentes
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word);
}

/**
 * Identifica o tema principal de um texto legislativo
 */
export function identifyTheme(text: string): string {
  const lowerText = text.toLowerCase();
  
  const themes = {
    'Educação': ['educação', 'escola', 'ensino', 'aluno', 'professor', 'currículo'],
    'Saúde': ['saúde', 'hospital', 'médico', 'paciente', 'tratamento', 'doença'],
    'Meio Ambiente': ['meio ambiente', 'sustentabilidade', 'reciclagem', 'lixo', 'poluição', 'verde'],
    'Transporte': ['transporte', 'ônibus', 'metrô', 'trânsito', 'mobilidade', 'viário'],
    'Economia': ['economia', 'financeiro', 'orçamento', 'investimento', 'desenvolvimento'],
    'Trabalho': ['trabalho', 'emprego', 'trabalhador', 'empregador', 'salário', 'mei'],
    'Segurança': ['segurança', 'policial', 'crime', 'prevenção', 'vigilância'],
    'Cultura': ['cultura', 'arte', 'música', 'teatro', 'patrimônio', 'histórico']
  };
  
  let maxScore = 0;
  let mainTheme = 'Outros';
  
  for (const [theme, keywords] of Object.entries(themes)) {
    let score = 0;
    keywords.forEach(keyword => {
      if (lowerText.includes(keyword)) {
        score++;
      }
    });
    
    if (score > maxScore) {
      maxScore = score;
      mainTheme = theme;
    }
  }
  
  return mainTheme;
}

/**
 * Estima o custo de simplificação baseado nos tokens
 */
export function estimateCost(tokensUsed: number, model: string): number {
  const pricing: { [key: string]: number } = {
    'GPT-4 Turbo': 0.01 / 1000,  // $0.01 por 1k tokens
    'GPT-4': 0.03 / 1000,         // $0.03 por 1k tokens
    'GPT-3.5 Turbo': 0.002 / 1000 // $0.002 por 1k tokens
  };
  
  const pricePerToken = pricing[model] || pricing['GPT-4 Turbo'];
  return tokensUsed * pricePerToken;
}
