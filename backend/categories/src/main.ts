import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as momentTimezone from 'moment-timezone';
import rabbit from './configs/rabbbit.config';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: [`amqp://${rabbit.user}:${rabbit.password}@${rabbit.url}`],
            noAck: false,
            queue: 'admin-backend',
        },
    });

    Date.prototype.toJSON = function (): any {
        return momentTimezone(this).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss.SSS');
    };

    await app.listen();
}
bootstrap();
