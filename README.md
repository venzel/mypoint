# MyPoint

## Sobre o projeto

MyPoint é um sistema de registro de pontos de funcionários, utilizando filas com o RabbitMq.

## Qual problema resolve?

O registro de ponto ocorre geralmente sempre nos mesmos horários por todos os funcionários de uma empresa, gerando um estress no servidor de banco de dados, com isso, a técnica de utilização de filas se enquandra como uma solução para resolver o devido problema.

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
-   Authentication
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

![Diagrama de relacionamentos](./media/diagrams/diagram-v1.png)

👉 [API Gateway]("./api-gateway/README.md")<br />
👉 [User]("./user/README.md")<br />
👉 [Point]("./user/README.md")<br />
👉 [Scale]("./scale/README.md")<br />
👉 [Notification]("./notification/README.md")
