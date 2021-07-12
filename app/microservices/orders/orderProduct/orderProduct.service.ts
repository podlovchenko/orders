import {
    Injectable,
} from '@nestjs/common';
import {
    InjectRepository,
} from '@nestjs/typeorm';
import {
    Repository,
} from 'typeorm';

import {
    OrderProductEntity,
} from './orderProduct.entity';

@Injectable()
export class OrderProductService {
    constructor(
        @InjectRepository(OrderProductEntity)
        private readonly orderProductRepository: Repository<OrderProductEntity>
    ) {
    }

    create({
        orderId,
        productId,
    }) {
        return this.orderProductRepository.save({
            orderId,
            productId,
        });
    }

}
