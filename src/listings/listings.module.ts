import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListingsService } from './listings.service';
import { ListingsController } from './listings.controller';
import { Listings } from './entities/listing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Listings])],
  controllers: [ListingsController],
  providers: [ListingsService],
})

export class ListingsModule {}