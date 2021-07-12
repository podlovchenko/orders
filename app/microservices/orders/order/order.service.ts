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
    OrderEntity,
} from './order.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>
    ) {
    }
    //
    // findOne(client: number) {
    //     return this.accountRepository.findOne({client});
    // }
    //
    // create({
    //            client,
    //            amount,
    //        }) {
    //     return this.accountRepository.save({
    //         client,
    //         amount,
    //     });
    // }
    //
    // update({
    //     id,
    //            client,
    //            amount,
    //        }) {
    //     return this.accountRepository.save({
    //         id,
    //         client,
    //         amount,
    //     });
    // }
}
