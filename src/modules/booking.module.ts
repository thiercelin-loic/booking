import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/models/booking.entity';
import { BookingService } from 'src/services/booking.service';
import { BookingController } from 'src/controllers/booking.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  controllers: [BookingController],
  providers: [BookingService],
})

export class BookingModule {}