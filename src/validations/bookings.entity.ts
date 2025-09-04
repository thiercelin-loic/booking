import { Column } from "typeorm";

export class Booking {
    @Column()
    id: number;

    @Column()
    user: string;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column()
    confirmation: boolean;
}