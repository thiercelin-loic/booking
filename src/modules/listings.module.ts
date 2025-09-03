import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListingsService } from 'src/services/listings.service';
import { ListingsController } from 'src/controllers/listings.controller';
import { Listings } from 'src/models/listings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Listings])],
  controllers: [ListingsController],
  providers: [ListingsService],
})

export class ListingsModule {}