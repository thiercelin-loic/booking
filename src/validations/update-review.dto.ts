import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from 'src/validations/create-review.dto';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
