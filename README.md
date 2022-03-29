# MyPoint

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/venzel/mypoint/blob/master/LICENSE)

## Sobre

> **MyPoint** é um sistema de registro de pontos de funcionários, utilizando filas com o RabbitMq.<br /> <a href="http://mypoint.venzel.com.br">👉 MyPoint</a>

## Qual problema resolve?

O registro de ponto ocorre geralmente sempre nos mesmos horários por todos os funcionários de uma empresa, gerando um stress no servidor de banco de dados, com isso, a técnica de utilização de filas se enquandra como uma solução para resolver o devido problema.

## Autor

👉 <a href="https://www.linkedin.com/in/venzel">Edivam Enéas de Almeida Júnior</a><br />

## Etapas de desenvolvimento

1. Levantamento do problema;
2. Levantamento dos requisitos;
3. Definição da arquitetura utilizada;
4. Definição das tecnologias utilizadas;
5. Definição das atribuições e tempo de desenvolvimento;
6. Criação do diagrama de relacionamentos e testes de hipóteses;
7. Desenvolvimento da documentação e diagramas explicativos no Git;
8. Desenvolvimento do MVP.

## Stack de tecnologias utilizada nesse projeto

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
-   Cognito
-   Typescript
-   TypeORM / Postgres
-   TDD com Jest

## Técnicas

-   Microserviços
-   Broker baseado no RabbitMq
-   Interceptors
-   Transformers
-   Validators
-   Swagger
-   Authorization/Authentication
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

## Prova de conceito do diagrama de relacionamentos

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

## Endpoints da API Rest

| Path                                                                 | Método | Token | Role  | Descrição               |
| -------------------------------------------------------------------- | ------ | ----- | ----- | ----------------------- |
| **USER**                                                             |
| [/users](https://mypoint.venzel.com.br/users)                        | POST   |       | ALL   | Cria um usuário         |
| [/users](https://mypoint.venzel.com.br/users)                        | GET    | ✅    | ADMIN | Lista todos os usuários |
| [/users/{id}](https://mypoint.venzel.com.br/users/1)                 | GET    | ✅    | ADMIN | Exibe um usuário        |
| [/users/{id}](https://mypoint.venzel.com.br/users/1)                 | DELETE | ✅    | USER  | Deleta um usuário       |
| [/users/{id}](https://mypoint.venzel.com.br/users/1)                 | PUT    | ✅    | USER  | Edita um usuário        |
| [/users?name={name}](https://mypoint.venzel.com.br/users?name=tiago) | GET    | ✅    | ADMIN | Busca por usuário       |
| **SCALE**                                                            |
| [/scales](https://mypoint.venzel.com.br/scales)                      | POST   | ✅    | ADMIN | Cria uma escala         |

## Gitflow

![GitFlow](./media/images/gitflow-v1.png)

👉 [Documentação passo a passo](./gitflow.md)

## Requisitos funcionais

### Usuário

1. O sistema deve poder cadastrar um usuário;
2. O sistema deve poder alterar os dados do usuário;
3. O sistema deve poder alterar a senha do usuário;
4. O sistema deve poder recuperar a senha do usuário;
5. O sistema deve poder deletar um usuário;
6. O sistema deve poder desabilitar um usuário;
7. O sistema deve poder buscar usuários;
8. O sistema deve poder alterar o status do usuário.

### Escala

1. O sistema deve poder cadastrar uma escala;
2. O sistema deve poder alterar uma escala;
3. O sistema deve poder deletar uma escala.

### Usuário/Escala

1. O Sistema deve poder aossciar uma usuário a uma escala;
2. O Sistema deve poder desassociar um usuário a uma escala.

### Usuário/Ponto

1. O usuário deve poder cadastrar um ponto.

### Usuário/Relatório

1. O usuário deve poder emitir um relatório.

## Link dos microserviços

👉 [API Gateway]("./api-gateway/README.md")<br />
👉 [User]("./user/README.md")<br />
👉 [Point]("./user/README.md")<br />
👉 [Scale]("./scale/README.md")<br />
👉 [Notification]("./notification/README.md")
