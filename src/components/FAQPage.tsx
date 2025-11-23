import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface FAQPageProps {
  onBack: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: { category: string; items: FAQItem[] }[] = [
  {
    category: "Sobre a Plataforma",
    items: [
      {
        question: "O que é o Civilize AI?",
        answer: "Civilize AI é uma plataforma gamificada de aprendizagem que transforma o conhecimento em ação. Oferecemos cursos em vídeo com sistema de pontos (XP), níveis, badges, ranking entre usuários e feedback instantâneo após cada quiz."
      },
      {
        question: "Como funciona a gamificação?",
        answer: "A gamificação no Civilize AI inclui: ganho de XP ao completar módulos e quizzes, sistema de níveis baseado no XP acumulado, badges desbloqueáveis por conquistas, ranking entre usuários, e LizeCoins que podem ser usados para desbloquear cursos premium."
      },
      {
        question: "A plataforma é gratuita?",
        answer: "Sim! Ao se cadastrar, você recebe acesso gratuito a um curso recomendado baseado nos seus interesses. Você também ganha 150 LizeCoins iniciais que podem ser usados para desbloquear outros cursos."
      }
    ]
  },
  {
    category: "Cursos e Conteúdo",
    items: [
      {
        question: "Como funcionam os módulos dos cursos?",
        answer: "Cada curso é dividido em módulos sequenciais. Você assiste às aulas em vídeo de cada módulo e, ao finalizar, desbloqueia um quiz avaliativo. É necessário acertar pelo menos 75% das questões (3 de 4) para avançar para o próximo módulo."
      },
      {
        question: "O que acontece se eu reprovar em um quiz?",
        answer: "Se você não atingir 75% de acertos, poderá refazer o quiz quantas vezes precisar. Não há limite de tentativas, então aproveite para revisar o conteúdo e tentar novamente!"
      },
      {
        question: "Posso voltar e revisar módulos anteriores?",
        answer: "Sim! Você pode acessar e revisar qualquer módulo que já tenha sido desbloqueado, mesmo após completá-lo. O conteúdo fica disponível para consulta sempre que precisar."
      },
      {
        question: "Como funcionam os certificados?",
        answer: "Ao completar todos os módulos de um curso e atingir a pontuação mínima em todos os quizzes, você recebe um certificado digital de conclusão que pode ser compartilhado em redes profissionais."
      }
    ]
  },
  {
    category: "Sistema de Pontos e Moedas",
    items: [
      {
        question: "Como ganho XP (Pontos de Experiência)?",
        answer: "Você ganha XP ao completar módulos e passar nos quizzes. Quanto melhor sua pontuação nos quizzes, mais XP você recebe. Acertos perfeitos (100%) concedem XP bônus!"
      },
      {
        question: "O que são LizeCoins e como funcionam?",
        answer: "LizeCoins são a moeda virtual da plataforma. Você começa com 150 LizeCoins e ganha mais 25 LizeCoins ao completar cada módulo. Use os LizeCoins para desbloquear novos cursos além do seu curso gratuito inicial."
      },
      {
        question: "Como desbloquear novos cursos?",
        answer: "Usuários free têm acesso a um curso gratuito recomendado. Para desbloquear cursos adicionais, você pode usar seus LizeCoins acumulados. Cada curso tem um preço específico em LizeCoins."
      },
      {
        question: "Como funciona o sistema de níveis?",
        answer: "Seu nível é calculado automaticamente baseado no XP acumulado. A cada 200 XP você sobe um nível. Níveis mais altos desbloqueiam badges especiais e aparecem no ranking da plataforma."
      }
    ]
  },
  {
    category: "Badges e Conquistas",
    items: [
      {
        question: "O que são badges?",
        answer: "Badges são conquistas que você desbloqueia ao atingir marcos específicos na plataforma, como completar seu primeiro módulo, atingir um nível específico, ou fazer um quiz perfeito."
      },
      {
        question: "Como desbloquear badges?",
        answer: "Cada badge tem critérios específicos. Por exemplo: 'Primeiro Passo' ao completar 1 módulo, 'Estudante Dedicado' ao completar 5 módulos, 'Conquistador' ao completar 1 curso completo, e 'Especialista' ao atingir o nível 5."
      },
      {
        question: "Onde vejo minhas conquistas?",
        answer: "Você pode ver todas as suas badges na seção 'Conquistas' do menu principal. Lá você encontra as badges desbloqueadas e as que ainda estão bloqueadas com seus requisitos."
      }
    ]
  },
  {
    category: "Ranking e Comunidade",
    items: [
      {
        question: "Como funciona o ranking?",
        answer: "O ranking mostra os usuários com maior XP acumulado na plataforma. Você pode ver sua posição e comparar seu progresso com outros estudantes, criando uma competição saudável e motivadora."
      },
      {
        question: "Meu progresso é público?",
        answer: "No ranking, apenas seu nome de usuário, avatar, nível e XP total são visíveis para outros usuários. Detalhes específicos sobre quais cursos você está fazendo permanecem privados."
      }
    ]
  },
  {
    category: "Conta e Perfil",
    items: [
      {
        question: "Como criar uma conta?",
        answer: "Você pode criar uma conta usando seu email e senha ou fazer login direto com sua conta Google. O processo é rápido e inclui um onboarding personalizado para recomendar o melhor curso para você."
      },
      {
        question: "Posso personalizar meu perfil?",
        answer: "Sim! Na seção 'Perfil' você pode personalizar seu banner, ver seu histórico completo de cursos, badges desbloqueadas, e estatísticas de progresso."
      },
      {
        question: "Posso mudar meu curso recomendado?",
        answer: "O curso recomendado é baseado nos interesses que você selecionou no onboarding. Se quiser estudar outro assunto, você pode desbloquear cursos adicionais usando seus LizeCoins."
      }
    ]
  },
  {
    category: "Suporte Técnico",
    items: [
      {
        question: "Os vídeos não estão carregando, o que fazer?",
        answer: "Verifique sua conexão com a internet e tente recarregar a página. Se o problema persistir, limpe o cache do navegador ou tente acessar em modo anônimo. Entre em contato conosco se o problema continuar."
      },
      {
        question: "Perdi meu progresso, o que fazer?",
        answer: "Seu progresso é salvo automaticamente em nossos servidores. Se você estiver logado com a mesma conta, todo seu progresso estará preservado. Certifique-se de estar usando a mesma conta."
      },
      {
        question: "Como entro em contato com o suporte?",
        answer: "Você pode usar o chatbot Lize (nosso mascote papagaio) disponível em todas as páginas da plataforma para tirar dúvidas rápidas. Para questões mais complexas, envie um email para suporte@civilizeai.com."
      }
    ]
  }
];

export function FAQPage({ onBack }: FAQPageProps) {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <div className="mb-8">
          <h1 className="mb-2">Perguntas Frequentes (FAQ)</h1>
          <p className="text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre a plataforma Civilize AI
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h2 className="text-primary">{category.category}</h2>
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={itemIndex}
                      className="border border-border rounded-lg overflow-hidden bg-card"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent transition-colors"
                      >
                        <span className="font-medium pr-4">{item.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 border-t border-border bg-muted/30">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
          <h3 className="mb-2">Ainda tem dúvidas?</h3>
          <p className="text-muted-foreground mb-4">
            Não encontrou a resposta que procurava? Entre em contato com nossa equipe de suporte.
          </p>
        </div>
      </div>
    </div>
  );
}