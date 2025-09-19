import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from '../dto/create-review.dto';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
