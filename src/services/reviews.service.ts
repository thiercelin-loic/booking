import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateReviewDto } from 'src/validations/create-review.dto';
import { UpdateReviewDto } from 'src/validations/update-review.dto';
import { Review } from 'src/models/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private repository: Repository<Review>,
  ) {}

  create(pattern: CreateReviewDto) {
    const review = this.repository.create(pattern);
    return this.repository.save(review);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: { id }});
  }

  update(id: number, pattern: UpdateReviewDto) {
    return this.repository.update(id, pattern);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}