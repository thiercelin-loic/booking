import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingsDto } from '../dto/create-booking.dto';

export class UpdateBookingsDto extends PartialType(CreateBookingsDto) {}
