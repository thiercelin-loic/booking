import { IsInt, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateListingDto {
    @IsInt()
    @IsUUID()
    id: number;

    @IsString()
    @MaxLength(100)
    name: string;

    @IsString()
    @MaxLength(500)
    description: string;

    @IsString()
    @MaxLength(100)
    location: string;

    @IsString()
    @MaxLength(500)
    amenities: string;

    @IsString()
    photo: string;

    @IsString()
    availability: string;

    @IsInt()
    pricing: number;
}