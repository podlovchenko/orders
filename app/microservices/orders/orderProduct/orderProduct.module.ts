import {
    Module,
} from '@nestjs/common';
import {
    TypeOrmModule,
} from '@nestjs/typeorm';
import {
    OrderProductEntity,
} from './orderProduct.entity';
import {
    OrderProductService,
} from './orderProduct.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrderProductEntity])],
    providers: [OrderProductService],
    exports: [OrderProductService],
})
export class OrderProductModule {}