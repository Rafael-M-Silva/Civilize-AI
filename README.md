# Civilize AI

Protótipo de plataforma gamificada de educação cidadã. A interface reúne cursos, quizzes, progresso, conquistas e uma economia virtual chamada LizeCoins para explorar uma experiência de aprendizagem mais envolvente.

**Demonstração informada pelo projeto:** [civilize-ai.vercel.app](https://civilize-ai.vercel.app)

## Estado do projeto

A aplicação é um **protótipo de frontend**. Os cursos, o ranking e parte dos dados do painel vêm de arquivos de demonstração em <code>src/lib/</code>. O progresso e as moedas são mantidos no estado da aplicação; alguns dados de sessão e recompensa diária usam <code>localStorage</code>. Não há backend nem banco de dados neste repositório.

A tela de simplificação por IA usa dados simulados e um temporizador; ela **não consulta um modelo de IA**. O checkout PIX também é uma simulação de interface e **não processa pagamentos**. Esses fluxos mostram a proposta do produto, não uma operação financeira ou educacional em produção.

## O que pode ser explorado

- Página inicial, onboarding e navegação por cursos de demonstração.
- Visualização de aulas, quizzes, progresso, XP, níveis e badges na interface.
- Ranking e painel administrativo com dados de exemplo.
- Fluxo de login com Google no cliente, condicionado à configuração autorizada do OAuth.
- Simulação de LizeCoins, recompensa diária e checkout PIX.
- Componentes de acessibilidade e layout responsivo.

## Tecnologias e estrutura

- **Frontend:** React 18, Vite, componentes TypeScript/TSX e CSS.
- **Interface:** Radix UI, Lucide React, Motion e Recharts.
- **Integrações no cliente:** biblioteca <code>@react-oauth/google</code>.

~~~text
src/
  App.tsx                 navegação e estado principal
  components/             telas e componentes de interface
  lib/mockData.ts         cursos e ranking de demonstração
  lib/queridoDiarioMockData.ts
  docs/                   documentação de produto e design
  assets/                 imagens usadas pela interface
index.html
package.json
vite.config.ts
~~~

O projeto inclui arquivos de design e documentação em [src/docs](./src/docs/README.md), como o [design system](./src/docs/DESIGN_SYSTEM.md), a [jornada do usuário](./src/docs/JORNADA_USUARIO.md) e a [proposta de IA](./src/docs/IA_SIMPLIFICACAO.md). Esses documentos descrevem também ideias futuras; o estado implementado é o resumido acima.

## Como executar

É necessário Node.js e npm.

~~~bash
git clone https://github.com/Rafael-M-Silva/Civilize-AI.git
cd Civilize-AI
npm ci
npm run dev
~~~

Abra o endereço exibido pelo Vite, normalmente [http://localhost:5173](http://localhost:5173). O repositório não contém <code>.env.example</code>, portanto não há etapa de cópia desse arquivo. Para usar o login Google em um domínio, configure as origens autorizadas para o Client ID usado em <code>src/App.tsx</code>; consulte [a nota de autenticação](./src/GOOGLE_AUTH_SETUP.md).

## Equipe

| Nome | Participação registrada no projeto |
| --- | --- |
| Rafael Mauricio | UI/UX e frontend |
| Isaias Belarmina de Souza | Backend e IA na equipe/proposta |
| Rafael Ricardo | Desenvolvimento de negócio |

A tabela preserva os créditos do README anterior. Este repositório contém a implementação de frontend; as áreas de backend e IA da proposta não estão incluídas como serviços funcionais aqui.

## Licença e contato

Código sob [licença MIT](./LICENSE). [GitHub de Rafael Mauricio](https://github.com/Rafael-M-Silva) · [LinkedIn](https://linkedin.com/in/rafael-mauricio-dev/) · [Bigode Ensina](https://bigodeensina.com.br/)
