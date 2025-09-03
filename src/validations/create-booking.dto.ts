import { IsBoolean, IsInt, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateBookingDto {
    @IsInt()
    @IsUUID()
    id: number;

    @IsString()
    @MaxLength(100)
    user: string;

    @IsString()
    @MaxLength(10)
    date: string;

    @IsString()
    @MaxLength(10)
    time: string;

    @IsBoolean()
    confirmation: boolean;
}