import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface PrivacyPageProps {
  onBack: () => void;
}

export function PrivacyPage({ onBack }: PrivacyPageProps) {
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
          <h1 className="mb-2">Política de Privacidade</h1>
          <p className="text-muted-foreground">
            Última atualização: 23 de novembro de 2025
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2>1. Introdução</h2>
            <p>
              A Civilize AI ("nós", "nosso", "Plataforma") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nossa plataforma de aprendizagem gamificada.
            </p>
            <p>
              Ao usar a Civilize AI, você concorda com a coleta e uso de informações de acordo com esta política. Se você não concorda com esta Política de Privacidade, não use nossos serviços.
            </p>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm mb-0">
                <strong>Nota Importante:</strong> A Civilize AI não é destinada à coleta de informações pessoais identificáveis (PII) sensíveis ou dados que exijam alto nível de segurança. Não use nossa plataforma para armazenar ou compartilhar informações confidenciais, médicas, financeiras ou legalmente protegidas.
              </p>
            </div>
          </section>

          <section>
            <h2>2. Informações que Coletamos</h2>
            <h3>2.1. Informações Fornecidas por Você</h3>
            <p>
              Coletamos informações que você nos fornece diretamente ao:
            </p>
            <ul>
              <li><strong>Criar uma conta:</strong> nome, email, senha (criptografada)</li>
              <li><strong>Login com Google:</strong> nome, email, foto de perfil do Google</li>
              <li><strong>Onboarding:</strong> nome preferido, áreas de interesse</li>
              <li><strong>Personalização de perfil:</strong> foto de avatar, banner personalizado</li>
              <li><strong>Comunicação:</strong> mensagens enviadas através do suporte ou chatbot</li>
            </ul>

            <h3>2.2. Informações Coletadas Automaticamente</h3>
            <p>
              Quando você usa a Plataforma, coletamos automaticamente:
            </p>
            <ul>
              <li><strong>Dados de uso:</strong> cursos acessados, módulos completados, quizzes realizados, tempo gasto em cada módulo</li>
              <li><strong>Dados de gamificação:</strong> XP acumulado, nível alcançado, badges desbloqueados, saldo de LizeCoins</li>
              <li><strong>Dados de desempenho:</strong> pontuação em quizzes, taxa de acertos, progresso em cursos</li>
              <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, sistema operacional, dispositivo usado</li>
              <li><strong>Dados de interação:</strong> páginas visitadas, cliques, tempo de sessão</li>
            </ul>

            <h3>2.3. Informações de Terceiros</h3>
            <p>
              Quando você faz login através do Google, recebemos informações básicas do seu perfil conforme autorizado por você nas configurações do Google.
            </p>
          </section>

          <section>
            <h2>3. Como Usamos Suas Informações</h2>
            <p>
              Usamos suas informações para:
            </p>
            <ul>
              <li><strong>Fornecer e melhorar nossos serviços:</strong> processar seu cadastro, gerenciar sua conta, fornecer acesso aos cursos</li>
              <li><strong>Personalização:</strong> recomendar cursos baseados em seus interesses, ajustar dificuldade de conteúdo</li>
              <li><strong>Gamificação:</strong> calcular XP, níveis, desbloquear badges, manter rankings</li>
              <li><strong>Comunicação:</strong> enviar notificações sobre progresso, novas conquistas, atualizações da plataforma</li>
              <li><strong>Suporte:</strong> responder suas dúvidas e solicitações</li>
              <li><strong>Análise e melhoria:</strong> entender como os usuários usam a plataforma, identificar problemas, melhorar funcionalidades</li>
              <li><strong>Segurança:</strong> detectar e prevenir fraudes, abuso e atividades ilegais</li>
              <li><strong>Conformidade legal:</strong> cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2>4. Compartilhamento de Informações</h2>
            <h3>4.1. Informações Públicas</h3>
            <p>
              As seguintes informações são visíveis para outros usuários da plataforma:
            </p>
            <ul>
              <li>Nome de usuário ou nome preferido</li>
              <li>Avatar/foto de perfil</li>
              <li>Nível atual</li>
              <li>XP total acumulado</li>
              <li>Posição no ranking (se você estiver entre os melhores)</li>
            </ul>
            <p>
              Seus cursos específicos, progresso detalhado, histórico de quizzes e badges permanecem privados.
            </p>

            <h3>4.2. Não Vendemos Seus Dados</h3>
            <p>
              Nós NÃO vendemos, alugamos ou comercializamos suas informações pessoais para terceiros.
            </p>

            <h3>4.3. Compartilhamento com Prestadores de Serviço</h3>
            <p>
              Podemos compartilhar suas informações com prestadores de serviço que nos ajudam a operar a Plataforma:
            </p>
            <ul>
              <li><strong>Hospedagem e infraestrutura:</strong> servidores em nuvem para armazenar dados</li>
              <li><strong>Autenticação:</strong> Google OAuth para login com Google</li>
              <li><strong>Análise:</strong> ferramentas de análise para entender uso da plataforma</li>
              <li><strong>Email:</strong> serviços de envio de emails para comunicação</li>
            </ul>
            <p>
              Estes prestadores têm acesso limitado às suas informações e são obrigados contratualmente a protegê-las.
            </p>

            <h3>4.4. Requisitos Legais</h3>
            <p>
              Podemos divulgar suas informações se exigido por lei, ordem judicial, processo legal ou para:
            </p>
            <ul>
              <li>Cumprir obrigações legais</li>
              <li>Proteger direitos, propriedade ou segurança da Civilize AI</li>
              <li>Prevenir fraude ou abuso</li>
              <li>Proteger a segurança de nossos usuários ou do público</li>
            </ul>
          </section>

          <section>
            <h2>5. Armazenamento e Segurança de Dados</h2>
            <h3>5.1. Onde Armazenamos</h3>
            <p>
              Seus dados são armazenados em servidores seguros localizados em data centers confiáveis. Usamos provedores de nuvem que atendem aos mais altos padrões de segurança da indústria.
            </p>

            <h3>5.2. Medidas de Segurança</h3>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger suas informações:
            </p>
            <ul>
              <li><strong>Criptografia:</strong> senhas são criptografadas usando algoritmos seguros</li>
              <li><strong>HTTPS:</strong> toda comunicação é feita através de conexão segura</li>
              <li><strong>Controle de acesso:</strong> acesso restrito aos dados apenas para funcionários autorizados</li>
              <li><strong>Monitoramento:</strong> sistemas de detecção de intrusão e atividades suspeitas</li>
              <li><strong>Backups:</strong> backups regulares para prevenir perda de dados</li>
            </ul>

            <h3>5.3. Limitações</h3>
            <p>
              Embora tomemos medidas razoáveis para proteger suas informações, nenhum método de transmissão ou armazenamento é 100% seguro. Não podemos garantir segurança absoluta.
            </p>
          </section>

          <section>
            <h2>6. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pelo tempo necessário para:
            </p>
            <ul>
              <li>Fornecer nossos serviços enquanto sua conta estiver ativa</li>
              <li>Cumprir obrigações legais, resolver disputas e fazer cumprir nossos acordos</li>
            </ul>
            <p>
              Quando você exclui sua conta, seus dados pessoais são removidos de nossos sistemas ativos dentro de 30 dias. Alguns dados podem ser retidos em backups por até 90 dias adicionais por motivos de segurança.
            </p>
          </section>

          <section>
            <h2>7. Seus Direitos e Escolhas</h2>
            <h3>7.1. Acesso e Atualização</h3>
            <p>
              Você pode acessar e atualizar suas informações pessoais através da seção "Perfil" da Plataforma a qualquer momento.
            </p>

            <h3>7.2. Exclusão de Conta</h3>
            <p>
              Você pode solicitar a exclusão de sua conta entrando em contato conosco. Após a exclusão:
            </p>
            <ul>
              <li>Seu perfil, progresso e dados serão permanentemente removidos</li>
              <li>Você não poderá recuperar seu XP, badges ou LizeCoins</li>
              <li>Certificados emitidos permanecerão válidos</li>
            </ul>

            <h3>7.3. Opt-out de Comunicações</h3>
            <p>
              Você pode cancelar o recebimento de emails promocionais através do link de descadastramento em cada email ou nas configurações de sua conta.
            </p>

            <h3>7.4. Direitos LGPD</h3>
            <p>
              Se você está no Brasil, você tem direitos adicionais sob a Lei Geral de Proteção de Dados (LGPD):
            </p>
            <ul>
              <li>Confirmação de tratamento de dados</li>
              <li>Acesso aos seus dados</li>
              <li>Correção de dados incompletos ou incorretos</li>
              <li>Anonimização, bloqueio ou eliminação de dados</li>
              <li>Portabilidade de dados</li>
              <li>Eliminação de dados tratados com seu consentimento</li>
              <li>Informação sobre compartilhamento de dados</li>
              <li>Revogação do consentimento</li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato conosco através de privacidade@civilizeai.com.
            </p>
          </section>

          <section>
            <h2>8. Cookies e Tecnologias Similares</h2>
            <p>
              Usamos cookies e tecnologias similares para:
            </p>
            <ul>
              <li><strong>Essenciais:</strong> manter você logado, lembrar preferências</li>
              <li><strong>Desempenho:</strong> entender como você usa a plataforma</li>
              <li><strong>Funcionalidade:</strong> fornecer recursos personalizados</li>
            </ul>
            <p>
              Você pode controlar cookies através das configurações do seu navegador, mas isso pode afetar a funcionalidade da Plataforma.
            </p>
          </section>

          <section>
            <h2>9. Privacidade de Menores</h2>
            <p>
              A Plataforma não é destinada a menores de 16 anos. Não coletamos intencionalmente informações de menores de 16 anos sem consentimento dos pais ou responsáveis.
            </p>
            <p>
              Se você acredita que coletamos inadvertidamente informações de um menor, entre em contato conosco imediatamente para que possamos tomar as medidas apropriadas.
            </p>
          </section>

          <section>
            <h2>10. Links para Sites de Terceiros</h2>
            <p>
              A Plataforma pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de qualquer site que visitar.
            </p>
          </section>

          <section>
            <h2>11. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por razões operacionais, legais ou regulatórias.
            </p>
            <p>
              Notificaremos você sobre alterações significativas através de:
            </p>
            <ul>
              <li>Aviso na Plataforma</li>
              <li>Email para o endereço cadastrado</li>
              <li>Atualização da data "Última atualização" no topo desta página</li>
            </ul>
            <p>
              Seu uso continuado da Plataforma após as alterações constitui sua aceitação da política revisada.
            </p>
          </section>

          <section>
            <h2>12. Transferências Internacionais</h2>
            <p>
              Seus dados podem ser transferidos e mantidos em computadores localizados fora do seu estado, província, país ou jurisdição governamental onde as leis de proteção de dados podem diferir.
            </p>
            <p>
              Ao usar a Plataforma, você consente com a transferência de suas informações para instalações fora do Brasil e o processamento dessas informações conforme descrito nesta Política de Privacidade.
            </p>
          </section>

          <section>
            <h2>13. Contato</h2>
            <p>
              Se você tiver dúvidas, preocupações ou solicitações relacionadas à privacidade, entre em contato conosco:
            </p>
            <ul>
              <li><strong>Email de Privacidade:</strong> privacidade@civilizeai.com</li>
              <li><strong>Email de Suporte:</strong> suporte@civilizeai.com</li>
              <li><strong>Chatbot Lize:</strong> Disponível na plataforma 24/7</li>
            </ul>
            <p>
              Responderemos sua solicitação dentro de 30 dias úteis.
            </p>
          </section>

          <section>
            <h2>14. Encarregado de Dados (DPO)</h2>
            <p>
              Para questões específicas sobre proteção de dados sob a LGPD, você pode entrar em contato com nosso Encarregado de Dados:
            </p>
            <ul>
              <li><strong>Email:</strong> dpo@civilizeai.com</li>
              <li><strong>Assunto:</strong> "LGPD - [Sua Solicitação]"</li>
            </ul>
          </section>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-0">
              Ao usar a Civilize AI, você reconhece que leu e compreendeu esta Política de Privacidade e concorda com o tratamento de suas informações conforme descrito aqui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
