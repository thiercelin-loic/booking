import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('bookings')
export class Booking {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int')
    listing: number;

    @Column('tinytext')
    user: string;

    @Column('tinytext')
    arrival: string;

    @Column('tinytext')
    departure: string;

    @Column('tinytext')
    confirmation: boolean;
}