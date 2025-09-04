import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/models/bookings.entity';
import { BookingsService } from 'src/services/bookings.service';
import { BookingsController } from 'src/controllers/bookings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  controllers: [BookingsController],
  providers: [BookingsService],
})

export class BookingsModule {}