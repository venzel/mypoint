# Api Gateway

👉 [References]("https://gitlab.com/dfs-treinamentos/smart-ranking/smart-ranking-microservices")

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

## Packages

```bash
# Common
yarn add @nestjs/common

# Config
yarn add @nestjs/config

# Microservices
yarn add @nestjs/microservices

# Microservices Service Broker
yarn add amqplib amqp-connection-manager

# Datas
yarn add moment moment-timezone

# Validations and transformers
yarn add class-validator class-transformer
```

### Nestjs, create module

```bash
nest g module categories
```
