import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    index: number;
}