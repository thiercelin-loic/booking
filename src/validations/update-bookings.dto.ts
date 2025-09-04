import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingsDto } from './create-bookings.dto';

export class UpdateBookingsDto extends PartialType(CreateBookingsDto) {}
