
import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsService } from './reviews.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

describe('ReviewsService', () => {
  let service: ReviewsService;
  let repository: Repository<Review>;

  const mockReviewRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewsService,
        {
          provide: getRepositoryToken(Review),
          useValue: mockReviewRepository,
        },
      ],
    }).compile();

    service = module.get<ReviewsService>(ReviewsService);
    repository = module.get<Repository<Review>>(getRepositoryToken(Review));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and save a review', async () => {
      const createReviewDto = {
        id: 1,
        listing: 1,
        booking: 1,
        user: 1,
        content: 'Excellent!',
        rating: 5,
      };
      const review = { ...createReviewDto };

      mockReviewRepository.create.mockReturnValue(review);
      mockReviewRepository.save.mockResolvedValue(review);

      const result = await service.create(createReviewDto);
      expect(result).toEqual(review);
      expect(mockReviewRepository.create).toHaveBeenCalledWith(createReviewDto);
      expect(mockReviewRepository.save).toHaveBeenCalledWith(review);
    });
  });

  describe('findAll', () => {
    it('should return an array of reviews', async () => {
      const reviews = [{ id: 1, listing: 1, rating: 5, content: 'Excellent!' }];
      mockReviewRepository.find.mockResolvedValue(reviews);

      const result = await service.findAll();
      expect(result).toEqual(reviews);
      expect(mockReviewRepository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single review', async () => {
      const review = { id: 1, listing: 1, rating: 5, content: 'Excellent!' };
      mockReviewRepository.findOneBy.mockResolvedValue(review);

      const result = await service.findOne(1);
      expect(result).toEqual(review);
      expect(mockReviewRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
    });
  });

  describe('update', () => {
    it('should update a review', async () => {
      const updateReviewDto = { rating: 4 };
      mockReviewRepository.update.mockResolvedValue({ affected: 1 });
      const updatedReview = { id: 1, listing: 1, rating: 4, content: 'Excellent!' };
      mockReviewRepository.findOneBy.mockResolvedValue(updatedReview);

      const result = await service.update(1, updateReviewDto);
      expect(mockReviewRepository.update).toHaveBeenCalledWith(1, updateReviewDto);
      expect(result).toEqual(updatedReview);
    });
  });

  describe('remove', () => {
    it('should remove a review', async () => {
      mockReviewRepository.delete.mockResolvedValue({ affected: 1 });

      await service.remove(1);
      expect(mockReviewRepository.delete).toHaveBeenCalledWith(1);
    });
  });
});
