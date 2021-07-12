import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    clientId: number;

    @Column()
    list: string;   // хранение в виде списка id товара и его количество в отсортированном виде по id товара, для быстрого поиска одинаковых заказов
}