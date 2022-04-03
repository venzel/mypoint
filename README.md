# MyPoint

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/venzel/mypoint/blob/master/LICENSE)

## 📜 Sobre

> **MyPoint** é um sistema de registro de pontos de funcionários, utilizando filas com o RabbitMq.<br /> <a href="http://mypoint.venzel.com.br">👉 MyPoint</a>

## Qual problema resolve?

O registro de ponto ocorre geralmente sempre aos mesmos horários por todos os funcionários de uma empresa, gerando um stress no servidor de banco de dados, com isso, a técnica de utilização de filas se enquandra como uma solução para resolver o devido problema.

## Autores

| Foto                                      | Nome                                        | Ativo | Dt. inativo | Atribuições                             |
| ----------------------------------------- | ------------------------------------------- | ----- | ----------- | --------------------------------------- |
| ![Enéas](./media/images/venzel-thumb.png) | [Enéas Almeida](https://github.com/venzel/) | 🔥    | -           | Manager, Arquiteto, FullStack Developer |

## Links

👉 [Backend](./backend/README.md)<br />
👉 [Frontend](./frontend/README.md)<br />
👉 [FAQ](./FAQ.md)

## Etapas de desenvolvimento

1. Levantamento do problema a ser resolvido;
2. Levantamento dos requisitos;
3. Definição da arquitetura utilizada;
4. Definição das tecnologias utilizadas;
5. Definição das atribuições e tempo de desenvolvimento;
6. Criação do diagrama de relacionamentos e testes de hipóteses;
7. Desenvolvimento da documentação e diagramas explicativos no Git;
8. Diagramação das telas (UX Design);
9. Configurações dos ambientes de QA e Produção;
10. Desenvolvimento do MVP.<br />
    10.1. Desenvolvimento da API Rest (Backend);<br />
    10.2. Desenvolvimento do frontend.<br />

## Backend

<p align="left">
  <img src="./media/icons/nestjs.svg" alt="NestJs" title="NestJs" width="35" height="35" />
  <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="Typescript" title="Typescript" width="30" height="30" />
  <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="Javascript" title="Javascript" width="30" height="30" />
  <img src="./media/icons/jest.svg" alt="Jest" title="Jest" width="30" height="30" />
  <img src="https://cdn.worldvectorlogo.com/logos/rabbitmq.svg" alt="RabbitMq" title="RabbitMq" width="30" height="30" />
  <img src="https://cdn.worldvectorlogo.com/logos/aws-cognito.svg" alt="Cognito" title="Cognito" width="35" height="35" />
</p>

-   NestJs
-   RabbitMq
-   Cognito (AWS)
-   Typescript / Javascript
-   TypeORM / Postgres / MongoDB
-   TDD com Jest

👉 [Link para o backend](./backend/README.md)<br />

## Persistência dos dados

Os bancos de dados do **Postgres** e **MongoDB** são provenientes de containers do docker. Utilizamos o Postgres para as persistências de sistema e o MongoDB para persistência de registro de notificações como demonstrado no diagrama de relacionamentos abaixo.

## Frontend

<p align="left">
  <img src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" alt="VueJs" title="VueJs" width="30" height="30" />
  <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="Javascript" title="Javascript" width="30" height="40" /> 
</p>

-   VueJs
-   Javascript

👉 [Link para o frontend](./frontend/README.md)<br />

## Backend/Frontend

<p align="left">
  <img src="./media/icons/docker.svg" alt="Docker" title="Docker" width="40" height="40" />
  <img src="./media/icons/codeship.svg" alt="Codeship" title="Codeship" width="30" height="30" />
</p>

-   Docker
-   Codeship (CI/CD)

## Técnicas

-   Microserviços
-   Filas com RabbitMq
-   Authorization/Authentication
-   Interceptors
-   Transformers
-   Validators
-   Captura de errors com o Sentry
-   Padronização de commits (Conventional commits)
-   Swagger
-   Upload

## Arquitetura

![Arquitetura do sistema](./media/images/architeture-v1.png)

### Broker Based

Permitem desacoplar vários componentes da aplicação. Cada componente somente precisa se conectar ao broker, e pode permanecer sem necessidade de conhecer a existência, localização ou detalhes da implementação de outros componentes. A única coisa que precisa ser compartilhada entre os componentes é o protocolo de mensagens.

### Um broker se divide em:

-   **Broker Server**: Processo do lado do servidor, responsável por gerenciar a publicação, assinatura e entrega das mensagens aos clientes.

-   **Broker Client API**: É disponibilizado em um package específico para cada linguagem (JavaScript, Java, Go, etc), fornecendo uma API para acessar o broker, a partir de aplicações clientes.

### Modelo de comunicação entre Publishes/Subscribes

![Diagrama de bloco](./media/images/broker-1.png)

### Modelo de comunicação entre Request/Response

![Diagrama de bloco](./media/images/broker-2.png)

### Estratégia de captura de erros com o Sentry

![Sentry](./media/images/sentry.png)

O **Sentry** é um serviço open source para logar erros da aplicação.

A aplicação é configurada para que sempre que ocorrer um erro do tipo 500, a exceção seja capturada e catalogada no Sentry, indicando exatamente a linha que ocorreu o erro, assim como dados de data e hora, tornando mais fácil a identificação de bugs, como mostra no exemplo abaixo:

![Sentry](./media/images/sentry-erro.png)

👉 [Mais informações sobre o Sentry](https://blog.locaweb.com.br/temas/codigo-aberto/voce-consegue-prever-os-bugs-de-sua-aplicacao/)<br />
👉 [Link oficial do serviço](https://sentry.io)

### Arquitetura do backend: Feature by Package

Feature by Package é uma arquitetura que utiliza conceitos do **DDD (Domain Driven Design)**, com o objetivo de tornar o código mais **flexível**, **escalável** e de **manutenção simples**.

#### Vantagens da arquitetura

-   **Manutenção**: Facilita o engajamento de multiplas equipe e colaboradores em um projeto;
-   **Escalável**: Facilita refatoramento do código monolítico para uma uma estrura de microserviços;
-   **SOLID**: Facilita a aplicação de todos os princípios do SOLID;
-   **Git**: Melhora o gerenciamento dos commits, evitando conflitos e etc;
-   **Testes**: Facilita o desenvolvimento de testes de unidade e integração.

## Diagrama de relacionamentos

![Diagrama de relacionamentos](./media/diagrams/diagram-v2.png)

## Json (Prova de conceito do diagrama de relacionamentos)

```json
{
    "USERS": [
        {
            "id": 1,
            "name": "Vanessa"
        },
        {
            "id": 2,
            "name": "Tiago"
        }
    ],
    "POINTS": [
        {
            "id": 1,
            "user_id": 1,
            "point": "21-03-2022 13:34"
        },
        {
            "id": 2,
            "user_id": 2,
            "point": "21-03-2022 13:37"
        }
    ],
    "SCALES": [
        {
            "id": 100,
            "name": "Horário completo"
        },
        {
            "id": 200,
            "name": "Horário meio dia manhã"
        },
        {
            "id": 300,
            "name": "Horário meio dia Tarde"
        }
    ],
    "BREAKS": [
        {
            "id": 1,
            "scale_id": 100,
            "time_start": "08:00",
            "time_end": "12:00"
        },
        {
            "id": 2,
            "scale_id": 100,
            "time_start": "13:00",
            "time_end": "17:00"
        },
        {
            "id": 3,
            "scale_id": 200,
            "time_start": "08:00",
            "time_end": "12:00"
        },
        {
            "id": 4,
            "scale_id": 300,
            "time_start": "13:00",
            "time_end": "17:00"
        }
    ],
    "NOTIFICATIONS": [
        {
            "id": 1,
            "user_id": 1,
            "notification": "Vanessa efetuou uma marcação de ponto!",
            "created_at": "21-03-2022 13:34"
        },
        {
            "id": 1,
            "user_id": 2,
            "notification": "Tiago efetuou uma marcação de ponto!",
            "created_at": "21-03-2022 13:37"
        }
    ]
}
```

## Endpoints (Proxy - API Gateway)

| Path                                                                                        | Método | Token | Role  | Descrição                  |
| ------------------------------------------------------------------------------------------- | ------ | ----- | ----- | -------------------------- |
| **USER**                                                                                    |
| [/account](https://mypoint.venzel.com.br/account)                                           | GET    |       | ALL   | Efetua login               |
| [/account](https://mypoint.venzel.com.br/account)                                           | POST   |       | ALL   | Cria um usuário            |
| [/password-recover](https://mypoint.venzel.com.br/password-recover)                         | POST   |       | ALL   | Recupera a senha           |
| [/users](https://mypoint.venzel.com.br/users)                                               | GET    | 🔥    | ADMIN | Lista todos os usuários    |
| [/users/{id}](https://mypoint.venzel.com.br/users/1)                                        | GET    | 🔥    | ADMIN | Exibe um usuário           |
| [/users/{id}](https://mypoint.venzel.com.br/users/1)                                        | DELETE | 🔥    | USER  | Deleta um usuário          |
| [/users/{id}](https://mypoint.venzel.com.br/users/1)                                        | PUT    | 🔥    | USER  | Edita um usuário           |
| [/user-status-toggler/{id}](https://mypoint.venzel.com.br/user-status-toggler/1)            | PATCH  | 🔥    | ADMIN | Altera o status do usuário |
| [/find-user?name={name}...](https://mypoint.venzel.com.br/find-user?name=tiago&page=number) | GET    | 🔥    | ADMIN | Busca por usuário          |
| **SCALE**                                                                                   |
| [/scales](https://mypoint.venzel.com.br/scales)                                             | GET    | 🔥    | ADMIN | Lista as ecalas            |
| [/scales](https://mypoint.venzel.com.br/scales)                                             | POST   | 🔥    | ADMIN | Cria uma escala            |
| [/scales/{id}](https://mypoint.venzel.com.br/scales/1)                                      | PUT    | 🔥    | ADMIN | Altera uma escala          |
| [/scales/{id}](https://mypoint.venzel.com.br/scales/1)                                      | DELETE | 🔥    | ADMIN | Delete uma escala          |
| [/scales/{id}](https://mypoint.venzel.com.br/scales/1)                                      | GET    | 🔥    | USER  | Exibe uma escala           |
| **USER/SCALE**                                                                              |
| [/manager-user-escale](https://mypoint.venzel.com.br/manager-user-escale)                   | GET    | 🔥    | ADMIN | Lista usuários e ecalas    |
| [/manager-user-escale/{1}](https://mypoint.venzel.com.br/manager-user-escale/1)             | UPDATE | 🔥    | ADMIN | Editar escalas do usuário  |
| [/manager-user-escale/{1}](https://mypoint.venzel.com.br/manager-user-escale/1)             | DELETE | 🔥    | ADMIN | Deleta escala do usuário   |
| **POINT**                                                                                   |
| [/points](https://mypoint.venzel.com.br/points)                                             | POST   | 🔥    | USER  | Cria um ponto              |
| **REPORT**                                                                                  |
| [/reports](https://mypoint.venzel.com.br/reports)                                           | GET    | 🔥    | USER  | Exibe o relatório          |

### Download do projeto do Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=MyPoint&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fvenzel%2Fmypoint%2Fmaster%2F./media/insomnia/insomnia_2022-04-03.json)

## Diagrama de caso de uso

![Diagrama de caso de uso](./media/diagrams/diagram-use-case-v1.png)

## Requisitos funcionais

### Usuário

1. O **USUÁRIO/ADMIN** deve poder efetuar o **login/logout**;
2. O **USUÁRIO** deve poder se **cadastrar**;
3. O **USUÁRIO** deve poder **alterar seus dados** (nome);
4. O **USUÁRIO** deve poder **alterar sua senha**;
5. O **USUÁRIO/ADMIN** deve poder **recuperar sua senha**;
6. O **ADMIN** deve poder **visualizar os usuários** do sistema;
7. O **ADMIN** deve poder **deletar um usuário** do sistema;
8. O **ADMIN** deve poder **desabilitar/habilitar um usuário** do sistema;
9. O **ADMIN** deve poder **buscar por usuários** de forma paginada.

### Escala

1. O **ADMIN** deve poder **listar as escalas**;
2. O **ADMIN** deve poder **cadastrar uma escala**;
3. O **ADMIN** deve poder **alterar uma escala**;
4. O **ADMIN** deve poder **deletar uma escala**;
5. O **USUÁRIO** deve poder **visulizar uma escala**.

### Usuário/Escala

1. O **ADMIN** deve poder **visualizar uma listagem com usuários e escalas associadas**;
2. O **ADMIN** deve poder **associar uma usuário a uma escala**;
3. O **ADMIN** deve poder **desassociar um ou vários usuários a uma escala**.

### Usuário/Ponto

1. O **USUÁRIO** deve poder **cadastrar um ponto**.

### Usuário/Relatório

1. O **USUÁRIO** deve poder **gerar um relatório de pontos**.

## CI/CD

### Gitflow

> O Gitflow é um fluxo de trabalho que auxilia o desenvolvimento contínuo de software entre a equipe envolvida.<br /><br />👉 <a href="https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow">Mais informações</a>

### Branchs

![Gitflow](./media/images/gitflow-v1.png)

-   **user** - Eviará commits apenas para o próprio user, exemplo: tiago-feature-21.
-   **develop** - Receberá os merges dos users. (Ambiente de QA)
-   **master** - Receberá o merge da develop, final de uma release. (Ambiente de produção)

### Diretrizes

\* A branch **master** é bloqueada para receber commits e pull requests dos usuários.

\* A branch **master** representa o software em **produção**.

\* A branch **develop** representa o software em **QA**.

\* Fica determinado que sempre que um pull request na branch develop for aprovado ou reprovado, a branch do usuário **NÃO** será deletada, a fim de manter o git organizado.

👉 [Documentação completa do gitflow - passo a passo](./gitflow.md)

### Pipeline

![Gitflow](./media/images/deploy.png)

### Etapas

1 - **Lint**: Nessa etapa é verificado as regras do Sonarlint;<br />
2 - **Test**: Nessa etapa é realizado os testes unitários;<br />
3 - **Deploy**: Nessa etapa é realizado o deploy da apliacação.
