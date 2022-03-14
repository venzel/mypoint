import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const { env } = process;

const typeorm = {
    host: env.TYPEORM_HOST || 'localhost',
    port: Number(env.TYPEORM_PORT) || 5432,
    user: env.TYPEORM_USER || 'admin',
    password: env.TYPEORM_PASSWORD || '123456',
    database: env.TYPEORM_DATABASE || 'product',
};

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: typeorm.host,
    port: typeorm.port,
    username: typeorm.user,
    password: typeorm.password,
    database: typeorm.database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
