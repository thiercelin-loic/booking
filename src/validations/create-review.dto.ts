import { IsInt, IsString, IsUUID, Max, MaxLength, Min } from "class-validator";

export class CreateReviewDto {
    @IsInt()
    @IsUUID()
    id: number;

    @IsInt()
    @IsUUID()
    listing: number;

    @IsInt()
    @IsUUID()
    booking: number;

    @IsInt()
    @IsUUID()
    user: number;
    
    @IsString()
    @MaxLength(500)
    content: string;

    @IsInt()
    @Min(0)
    @Max(10)
    rating: number;
}