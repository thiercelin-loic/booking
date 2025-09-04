import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBookingsDto } from 'src/validations/create-bookings.dto';
import { UpdateBookingsDto } from 'src/validations/update-bookings.dto';
import { Booking } from 'src/models/bookings.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private repository: Repository<Booking>,
  ) {}

  create(pattern: CreateBookingsDto) {
    const booking = this.repository.create(pattern);
    return this.repository.save(booking);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, pattern: UpdateBookingsDto) {
    return this.repository.update(id, pattern);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}