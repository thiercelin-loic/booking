
import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

describe('ReviewsController', () => {
  let controller: ReviewsController;
  let service: ReviewsService;

  const mockReviewsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewsController],
      providers: [
        {
          provide: ReviewsService,
          useValue: mockReviewsService,
        },
      ],
    }).compile();

    controller = module.get<ReviewsController>(ReviewsController);
    service = module.get<ReviewsService>(ReviewsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a review', async () => {
      const createReviewDto: CreateReviewDto = {
        id: 1,
        listing: 1,
        booking: 1,
        user: 1,
        content: 'Great place!',
        rating: 5,
      };
      const expectedResult = { ...createReviewDto };
      mockReviewsService.create.mockResolvedValue(expectedResult);

      const result = await controller.create(createReviewDto);
      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createReviewDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of reviews', async () => {
      const expectedResult = [{ id: 1, listing: 1, rating: 5, content: 'Great place!' }];
      mockReviewsService.findAll.mockResolvedValue(expectedResult);

      const result = await controller.findAll();
      expect(result).toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single review', async () => {
      const id = '1';
      const expectedResult = { id: 1, listing: 1, rating: 5, content: 'Great place!' };
      mockReviewsService.findOne.mockResolvedValue(expectedResult);

      const result = await controller.findOne(id);
      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a review', async () => {
      const id = '1';
      const updateReviewDto: UpdateReviewDto = { rating: 4 };
      const expectedResult = { id: 1, listing: 1, rating: 4, content: 'Great place!' };
      mockReviewsService.update.mockResolvedValue(expectedResult);

      const result = await controller.update(id, updateReviewDto);
      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateReviewDto);
    });
  });

  describe('remove', () => {
    it('should remove a review', async () => {
      const id = '1';
      mockReviewsService.remove.mockResolvedValue(undefined);

      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});
