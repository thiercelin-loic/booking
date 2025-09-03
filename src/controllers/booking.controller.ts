import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from 'src/services/booking.service';
import { CreateBookingDto } from 'src/validations/create-booking.dto';
import { UpdateBookingDto } from 'src/validations/update-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly service: BookingService) {}

  @Post()
  create(@Body() pattern: CreateBookingDto) {
    return this.service.create(pattern);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() pattern: UpdateBookingDto) {
    return this.service.update(+id, pattern);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
