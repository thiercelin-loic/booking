import { Entity, Column, PrimaryColumn, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity('review')
export class Review {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int', { nullable: false })
    listing: number;

    @Column('int', { nullable: false })
    booking: number;

    @Column('int', { nullable: false })
    user: number;

    @Column('tinytext', { nullable: false })
    content: string;

    @Column('int', { nullable: false })
    rating: number;
}
