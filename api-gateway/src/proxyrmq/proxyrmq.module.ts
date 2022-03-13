import { Module } from '@nestjs/common';
import { ClientProxyProduct } from './client.proxy';

@Module({
    providers: [ClientProxyProduct],
    exports: [ClientProxyProduct],
})
export class ProxyRMQModule {}
