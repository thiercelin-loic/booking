import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('bookings')
export class Booking {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('tinytext')
    user: string;

    @Column('tinytext')
    date: string;

    @Column('tinytext')
    time: string;

    @Column('tinytext')
    confirmation: boolean;
}