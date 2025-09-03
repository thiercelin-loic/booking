import { IsInt, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateNotificationDto {
    @IsInt()
    @IsUUID()
    id: number;

    @IsInt()
    @IsUUID()
    user: number;

    @IsString()
    @MaxLength(500)
    message: string;
}