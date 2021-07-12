import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderId: number;

    @Column()
    productId: number;

    @Column()
    amount: number;
}