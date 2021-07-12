import {
    Module,
} from '@nestjs/common';
import {
    TypeOrmModule,
} from '@nestjs/typeorm';

import {
    AppController,
} from './app.controller';
import {
    ClientModule,
} from './client/client.module';
import {
    OrderProductModule,
} from './orderProduct/orderProduct.module';
import {
    OrderModule,
} from './order/order.module';

import parseDbUrl from 'ts-parse-database-url';

const dbConfig = process.env.DATABASE_URL ? parseDbUrl(process.env.DATABASE_URL) : {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
};


@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...dbConfig,
            type: 'postgres',
            username: dbConfig.user,
            autoLoadEntities: true,
            synchronize: true,
        }),
        ClientModule,
        OrderModule,
        OrderProductModule,
    ],
    controllers: [
        AppController,
    ],
})
export class AppModule {}
