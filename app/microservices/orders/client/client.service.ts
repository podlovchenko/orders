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
    ClientEntity,
} from './client.entity';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientEntity)
        private readonly clientRepository: Repository<ClientEntity>
    ) {
    }

    findOne(id: number) {
        return this.clientRepository.findOne({id});
    }

    create({
       firstname,
       lastname,
       index,
    }) {
        return this.clientRepository.save({
            firstname,
            lastname,
            index,
        });
    }

}
