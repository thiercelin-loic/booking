import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBookingDto } from 'src/validations/create-booking.dto';
import { UpdateBookingDto } from 'src/validations/update-booking.dto';
import { Booking } from 'src/models/booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private repository: Repository<Booking>,
  ) {}

  create(pattern: CreateBookingDto) {
    const booking = this.repository.create(pattern);
    return this.repository.save(booking);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, pattern: UpdateBookingDto) {
    return this.repository.update(id, pattern);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
