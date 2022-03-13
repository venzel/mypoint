import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionsFilter } from './common/filters/http.exception.filter';
import geral from './configs/geral.config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor());

    app.useGlobalFilters(new HttpExceptionsFilter());

    await app.listen(geral.port);
}
bootstrap();
