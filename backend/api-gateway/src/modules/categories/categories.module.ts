import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { ProxyRMQModule } from '../../proxyrmq/proxyrmq.module';
import { CategoriesService } from './categories.service';

@Module({
    imports: [ProxyRMQModule],
    controllers: [CategoriesController],
    providers: [CategoriesService],
})
export class CategoriesModule {}
