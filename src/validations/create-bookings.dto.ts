import { IsBoolean, IsInt, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateBookingsDto {
    @IsInt()
    @IsUUID()
    id: number;

    @IsInt()
    @IsUUID()
    listing: number;

    @IsString()
    @MaxLength(100)
    user: string;

    @IsString()
    @MaxLength(10)
    date: string;

    @IsString()
    @MaxLength(10)
    arrival: string;

    @IsString()
    @MaxLength(10)
    departure: string;

    @IsBoolean()
    confirmation: boolean;
}