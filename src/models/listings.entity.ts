import { Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

@Entity('listings')
export class Listings {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('tinytext')
    name: string;

    @Column('tinytext')
    description: string;

    @Column('tinytext')
    location: string;

    @Column('tinytext')
    amenities: string;

    @Column('tinytext')
    photo: string;

    @Column('tinytext')
    availability: string;

    @Column('decimal', { precision: 10, scale: 2 })
    pricing: number;
}