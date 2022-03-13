# NestJs with Microservices and RabbitMQ

### References

https://gitlab.com/dfs-treinamentos/smart-ranking/smart-ranking-microservices

## Run container rabbitmq

```bash
make up
```

## Access rabbitmq service

http://localhost:15672

## Create virtual host

Admin > Virtual Hosts > Add a new virtual host

## Create project api-gateway

```bash
nest new api-gateway
```

## Create project micro-admin-backend

```bash
nest new micro-admin-backend
```

## Access api-gateway

```bash
cd api-gateway
```

## Install packages microservices

```bash
# Microservices
yarn add @nestjs/microservices

# Config
yarn add @nestjs/config

# Service broker
yarn add amqplib amqp-connection-manager

# Datas
yarn add moment moment-timezone

# Validations and transformers
yarn add class-validator class-transformer
```

### Create module

```bash
nest g module categories
```
