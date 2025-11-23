import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface TermsPageProps {
  onBack: () => void;
}

export function TermsPage({ onBack }: TermsPageProps) {
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
          <h1 className="mb-2">Termos de Uso</h1>
          <p className="text-muted-foreground">
            Última atualização: 23 de novembro de 2025
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar a plataforma Civilize AI ("Plataforma", "nós", "nosso"), você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concorda com algum destes termos, não use nossos serviços.
            </p>
            <p>
              Estes Termos de Uso constituem um acordo legalmente vinculativo entre você ("Usuário", "você", "seu") e a Civilize AI. Reservamo-nos o direito de modificar estes termos a qualquer momento, e tais modificações entrarão em vigor imediatamente após a publicação.
            </p>
          </section>

          <section>
            <h2>2. Descrição do Serviço</h2>
            <p>
              A Civilize AI é uma plataforma de aprendizagem gamificada que oferece:
            </p>
            <ul>
              <li>Cursos em vídeo organizados em módulos sequenciais</li>
              <li>Quizzes avaliativos com feedback instantâneo</li>
              <li>Sistema de pontuação (XP) e níveis</li>
              <li>Badges e conquistas desbloqueáveis</li>
              <li>Ranking entre usuários</li>
              <li>Sistema de moeda virtual (LizeCoins) para desbloqueio de conteúdo</li>
              <li>Certificados digitais de conclusão de cursos</li>
            </ul>
          </section>

          <section>
            <h2>3. Cadastro e Conta de Usuário</h2>
            <h3>3.1. Elegibilidade</h3>
            <p>
              Para usar a Plataforma, você deve ter pelo menos 16 anos de idade. Ao criar uma conta, você declara que possui a idade mínima necessária e que todas as informações fornecidas são verdadeiras e precisas.
            </p>
            <h3>3.2. Responsabilidade da Conta</h3>
            <p>
              Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorram em sua conta. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.
            </p>
            <h3>3.3. Login com Google</h3>
            <p>
              Ao optar por fazer login através de sua conta Google, você autoriza a Civilize AI a acessar informações básicas do seu perfil (nome, email, foto) conforme necessário para o funcionamento da plataforma.
            </p>
          </section>

          <section>
            <h2>4. Acesso ao Conteúdo</h2>
            <h3>4.1. Modelo Freemium</h3>
            <p>
              A Civilize AI opera em um modelo freemium:
            </p>
            <ul>
              <li>Todos os usuários recebem acesso gratuito a um curso recomendado baseado em seus interesses</li>
              <li>Usuários iniciam com 150 LizeCoins que podem ser usados para desbloquear cursos adicionais</li>
              <li>LizeCoins adicionais são ganhos ao completar módulos (25 LizeCoins por módulo)</li>
            </ul>
            <h3>4.2. Licença de Uso</h3>
            <p>
              Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para acessar e usar o conteúdo da Plataforma exclusivamente para fins pessoais e educacionais. Você não pode:
            </p>
            <ul>
              <li>Copiar, modificar, distribuir ou vender qualquer conteúdo da Plataforma</li>
              <li>Fazer engenharia reversa ou tentar extrair o código-fonte</li>
              <li>Usar bots, scripts ou qualquer método automatizado para acessar a Plataforma</li>
              <li>Compartilhar sua conta ou credenciais com terceiros</li>
              <li>Usar a Plataforma para fins ilegais ou não autorizados</li>
            </ul>
          </section>

          <section>
            <h2>5. Sistema de Gamificação</h2>
            <h3>5.1. LizeCoins</h3>
            <p>
              LizeCoins são uma moeda virtual usada exclusivamente dentro da Plataforma. LizeCoins:
            </p>
            <ul>
              <li>Não têm valor monetário real</li>
              <li>Não podem ser trocados por dinheiro</li>
              <li>Não podem ser transferidos entre usuários</li>
              <li>Podem ser perdidos se sua conta for encerrada</li>
            </ul>
            <h3>5.2. XP e Níveis</h3>
            <p>
              O sistema de XP e níveis é baseado em seu progresso nos cursos. Nos reservamos o direito de ajustar valores de XP e requisitos de nível para equilibrar a plataforma.
            </p>
            <h3>5.3. Badges e Rankings</h3>
            <p>
              Badges são conquistas virtuais. Rankings são calculados com base no XP total. Nos reservamos o direito de remover usuários do ranking caso detectemos tentativas de manipulação ou violação destes Termos.
            </p>
          </section>

          <section>
            <h2>6. Conduta do Usuário</h2>
            <p>
              Ao usar a Plataforma, você concorda em NÃO:
            </p>
            <ul>
              <li>Violar quaisquer leis ou regulamentos aplicáveis</li>
              <li>Infringir direitos de propriedade intelectual de terceiros</li>
              <li>Transmitir vírus, malware ou qualquer código malicioso</li>
              <li>Assediar, intimidar ou prejudicar outros usuários</li>
              <li>Tentar obter acesso não autorizado a sistemas ou contas</li>
              <li>Manipular ou burlar o sistema de pontuação e conquistas</li>
              <li>Criar múltiplas contas para obter vantagens indevidas</li>
              <li>Realizar engenharia reversa ou decompilar qualquer parte da Plataforma</li>
            </ul>
          </section>

          <section>
            <h2>7. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo da Plataforma, incluindo mas não se limitando a textos, vídeos, gráficos, logotipos, ícones, imagens, áudios, código-fonte e software, é propriedade da Civilize AI ou de seus licenciadores e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
            </p>
            <p>
              O mascote "Lize" (papagaio) e o nome "Civilize AI" são marcas registradas da Civilize AI. Você não pode usar nossas marcas sem permissão prévia por escrito.
            </p>
          </section>

          <section>
            <h2>8. Certificados</h2>
            <p>
              Certificados digitais são emitidos mediante conclusão bem-sucedida de cursos (aprovação em todos os módulos com pelo menos 75% de acerto nos quizzes). Certificados:
            </p>
            <ul>
              <li>Atestam a conclusão do curso na plataforma Civilize AI</li>
              <li>Não substituem certificações profissionais ou acadêmicas oficiais</li>
              <li>Podem ser revogados se detectarmos violação destes Termos durante o curso</li>
              <li>Podem ser compartilhados em redes profissionais e currículos</li>
            </ul>
          </section>

          <section>
            <h2>9. Limitação de Responsabilidade</h2>
            <p>
              A Plataforma é fornecida "como está" e "conforme disponível". Não garantimos que:
            </p>
            <ul>
              <li>A Plataforma estará disponível ininterruptamente ou livre de erros</li>
              <li>Os resultados obtidos através da Plataforma atenderão suas expectativas</li>
              <li>Todos os erros serão corrigidos</li>
            </ul>
            <p>
              Na extensão máxima permitida por lei, a Civilize AI não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar a Plataforma.
            </p>
          </section>

          <section>
            <h2>10. Modificações e Encerramento</h2>
            <h3>10.1. Modificações do Serviço</h3>
            <p>
              Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, a Plataforma (ou qualquer parte dela) com ou sem aviso prévio. Não seremos responsáveis perante você ou terceiros por qualquer modificação, suspensão ou descontinuação da Plataforma.
            </p>
            <h3>10.2. Encerramento de Conta</h3>
            <p>
              Podemos encerrar ou suspender sua conta imediatamente, sem aviso prévio, se você violar estes Termos de Uso. Você também pode encerrar sua conta a qualquer momento através das configurações de perfil ou entrando em contato conosco.
            </p>
          </section>

          <section>
            <h2>11. Privacidade</h2>
            <p>
              Seu uso da Plataforma também é regido por nossa Política de Privacidade. Leia nossa Política de Privacidade para entender como coletamos, usamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section>
            <h2>12. Lei Aplicável e Jurisdição</h2>
            <p>
              Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem considerar conflitos de disposições legais. Quaisquer disputas decorrentes destes Termos serão submetidas à jurisdição exclusiva dos tribunais brasileiros.
            </p>
          </section>

          <section>
            <h2>13. Disposições Gerais</h2>
            <h3>13.1. Integralidade do Acordo</h3>
            <p>
              Estes Termos de Uso, juntamente com a Política de Privacidade, constituem o acordo completo entre você e a Civilize AI.
            </p>
            <h3>13.2. Renúncia</h3>
            <p>
              A falha em exercer ou fazer valer qualquer direito ou disposição destes Termos não constituirá uma renúncia a tal direito ou disposição.
            </p>
            <h3>13.3. Divisibilidade</h3>
            <p>
              Se qualquer disposição destes Termos for considerada inválida ou inexequível, as disposições restantes permanecerão em pleno vigor e efeito.
            </p>
          </section>

          <section>
            <h2>14. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <ul>
              <li>Email: legal@civilizeai.com</li>
              <li>Suporte: suporte@civilizeai.com</li>
              <li>Chatbot Lize: Disponível na plataforma</li>
            </ul>
          </section>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              Ao continuar usando a Civilize AI, você reconhece que leu, compreendeu e concorda em estar vinculado a estes Termos de Uso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
