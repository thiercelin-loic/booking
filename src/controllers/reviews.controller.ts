import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from 'src/services/reviews.service';
import { CreateReviewDto } from 'src/validations/create-review.dto';
import { UpdateReviewDto } from 'src/validations/update-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly service: ReviewsService) {}

  @Post()
  create(@Body() pattern: CreateReviewDto) {
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
  update(@Param('id') id: string, @Body() pattern: UpdateReviewDto) {
    return this.service.update(+id, pattern);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
