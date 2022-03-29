import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import rabbit from '../configs/rabbbit.config';

@Injectable()
export class ClientProxyProduct {
    getClientProxyAdminBackendInstance(): ClientProxy {
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${rabbit.user}:${rabbit.password}@${rabbit.url}`],
                queue: 'admin-backend',
            },
        });
    }
}
