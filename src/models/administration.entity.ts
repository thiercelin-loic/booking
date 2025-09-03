import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('administration')
export class Administration {
    @PrimaryGeneratedColumn('increment')
    id: number;
}
