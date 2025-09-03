import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity('notification')
export class Notification {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int', { nullable: false })
    user: number;

    @Column('tinytext', { nullable: false })
    message: string;  
}
