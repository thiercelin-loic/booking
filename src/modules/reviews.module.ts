import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from 'src/models/review.entity';
import { ReviewsService } from 'src/services/reviews.service';
import { ReviewsController } from '../controllers/reviews.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})

export class ReviewsModule {}