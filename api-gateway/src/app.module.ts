import { CategoriesModule } from './modules/categories/categories.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyProduct } from './proxyrmq/client.proxy';
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), ProxyRMQModule, CategoriesModule],
    controllers: [],
    providers: [ClientProxyProduct],
})
export class AppModule {}
