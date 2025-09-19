
import { Test, TestingModule } from '@nestjs/testing';
import { ListingsController } from './listings.controller';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

describe('ListingsController', () => {
  let controller: ListingsController;
  let service: ListingsService;

  const mockListingsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListingsController],
      providers: [
        {
          provide: ListingsService,
          useValue: mockListingsService,
        },
      ],
    }).compile();

    controller = module.get<ListingsController>(ListingsController);
    service = module.get<ListingsService>(ListingsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a listing', async () => {
      const createListingDto: CreateListingDto = {
        id: 1,
        name: 'Cozy Apartment',
        description: 'A nice place to stay',
        location: 'Downtown',
        amenities: 'Wifi, AC',
        photo: 'photo.jpg',
        availability: '2025-10-01',
        pricing: 100,
      };
      const expectedResult = { ...createListingDto };
      mockListingsService.create.mockResolvedValue(expectedResult);

      const result = await controller.create(createListingDto);
      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createListingDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of listings', async () => {
      const expectedResult = [{ id: 1, name: 'Cozy Apartment', pricing: 100 }];
      mockListingsService.findAll.mockResolvedValue(expectedResult);

      const result = await controller.findAll();
      expect(result).toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single listing', async () => {
      const id = '1';
      const expectedResult = { id: 1, name: 'Cozy Apartment', pricing: 100 };
      mockListingsService.findOne.mockResolvedValue(expectedResult);

      const result = await controller.findOne(id);
      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a listing', async () => {
      const id = '1';
      const updateListingDto: UpdateListingDto = { pricing: 120 };
      const expectedResult = { id: 1, name: 'Cozy Apartment', pricing: 120 };
      mockListingsService.update.mockResolvedValue(expectedResult);

      const result = await controller.update(id, updateListingDto);
      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateListingDto);
    });
  });

  describe('remove', () => {
    it('should remove a listing', async () => {
      const id = '1';
      mockListingsService.remove.mockResolvedValue(undefined);

      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});
