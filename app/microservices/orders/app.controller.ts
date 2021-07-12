import {
    Controller,
    Post,
    Body,
    Req,
    Res,
} from '@nestjs/common';
import {
    Request,
    Response,
} from 'express';

import config from '../../configs';

import {
    OrderCreateDto,
} from './dto'
import {
    OrderService,
} from './order/order.service';
import {
    OrderProductService,
} from './orderProduct/orderProduct.service';
import {
    ClientService,
} from './client/client.service';

const {
    handlers,
} = config;

@Controller(handlers.order.prefix)
export class AppController {

    constructor(
        private readonly orderService: OrderService,
        private readonly clientService: ClientService,
        private readonly orderProductService: OrderProductService,
    ) {}

    @Post()
    async create(
        @Body() body: OrderCreateDto,
        @Req() request: Request,
        @Res() response: Response,
    ) {
        try {
            const {
                id,
                firstname,
                lastname,
                index,
            } = body;

            let user;

            if (id) {
                user = await this.clientService.create({
                    firstname,
                    lastname,
                    index,
                });
            } else {
                user =  await this.clientService.findOne(id);

                if (user.firstname !== firstname || user.lastname !== lastname || user.lastname !== lastname) {
                    throw new Error('Invalid data');
                }
            }

            response.status(201).send({});
        } catch (err) {
            throw err;
        }
    }

}