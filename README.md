# MyPoint

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/venzel/mypoint/blob/master/LICENSE)

## Sobre

> **MyPoint** é um sistema de registro de pontos de funcionários, utilizando filas com o RabbitMq.<br /> <a href="http://mypoint.venzel.com.br">👉 MyPoint</a>

## Qual problema resolve?

O registro de ponto ocorre geralmente sempre nos mesmos horários por todos os funcionários de uma empresa, gerando um stress no servidor de banco de dados, com isso, a técnica de utilização de filas se enquandra como uma solução para resolver o devido problema.

## Autor

👉 <a href="https://www.linkedin.com/in/venzel">Edivam Enéas de Almeida Júnior</a><br />

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

### Broker Based

Permitem desacoplar vários componentes da aplicação. Cada componente somente precisa se conectar ao broker, e pode permanecer sem necessidade de conhecer a existência, localização ou detalhes da implementação de outros componentes. A única coisa que precisa ser compartilhada entre os componentes é o protocolo de mensagens.

### Um broker se divide em:

-   **Broker Server**: Processo do lado do servidor, responsável por gerenciar a publicação, assinatura e entrega das mensagens aos clientes.

-   **Broker Client API**: É disponibilizado em um package específico para cada linguagem (JavaScript, Java, Go, etc), fornecendo uma API para acessar o broker, a partir de aplicações clientes.

### Modelo de comunicação entre Publishes/Subscribes

![Diagrama de bloco](./media/images/broker-1.png)

### Modelo de comunicação entre Request/Response

![Diagrama de bloco](./media/images/broker-2.png)

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

## Etapas de desenvolvimento

1. Levantamento do problema;
2. Levantamento dos requisitos;
3. Definição da arquitetura utilizada;
4. Definição das tecnologias utilizadas;
5. Definição das atribuições e tempo de desenvolvimento;
6. Criação do diagrama de relacionamentos e testes de hipóteses;
7. Desenvolvimento da documentação e diagramas explicativos no Git;
8. Desenvolvimento do MVP.

## Link dos microserviços

👉 [API Gateway]("./api-gateway/README.md")<br />
👉 [User]("./user/README.md")<br />
👉 [Point]("./user/README.md")<br />
👉 [Scale]("./scale/README.md")<br />
👉 [Notification]("./notification/README.md")
