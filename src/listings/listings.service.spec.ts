
import { Test, TestingModule } from '@nestjs/testing';
import { ListingsService } from './listings.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Listings } from './entities/listing.entity';
import { Repository } from 'typeorm';

describe('ListingsService', () => {
  let service: ListingsService;
  let repository: Repository<Listings>;

  const mockListingRepository = {
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
        ListingsService,
        {
          provide: getRepositoryToken(Listings),
          useValue: mockListingRepository,
        },
      ],
    }).compile();

    service = module.get<ListingsService>(ListingsService);
    repository = module.get<Repository<Listings>>(getRepositoryToken(Listings));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and save a listing', async () => {
      const createListingDto = {
        id: 1,
        name: 'Test Listing',
        description: 'Test Description',
        location: 'Test Location',
        amenities: 'Test Amenities',
        photo: 'test.jpg',
        availability: '2025-10-01',
        pricing: 100,
      };
      const listing = { ...createListingDto };

      mockListingRepository.create.mockReturnValue(listing);
      mockListingRepository.save.mockResolvedValue(listing);

      const result = await service.create(createListingDto);
      expect(result).toEqual(listing);
      expect(mockListingRepository.create).toHaveBeenCalledWith(createListingDto);
      expect(mockListingRepository.save).toHaveBeenCalledWith(listing);
    });
  });

  describe('findAll', () => {
    it('should return an array of listings', async () => {
      const listings = [{ id: 1, name: 'Test Listing', pricing: 100 }];
      mockListingRepository.find.mockResolvedValue(listings);

      const result = await service.findAll();
      expect(result).toEqual(listings);
      expect(mockListingRepository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single listing', async () => {
      const listing = { id: 1, name: 'Test Listing', pricing: 100 };
      mockListingRepository.findOneBy.mockResolvedValue(listing);

      const result = await service.findOne(1);
      expect(result).toEqual(listing);
      expect(mockListingRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
    });
  });

  describe('update', () => {
    it('should update a listing', async () => {
      const updateListingDto = { pricing: 150 };
      mockListingRepository.update.mockResolvedValue({ affected: 1 });
      const updatedListing = { id: 1, name: 'Test Listing', pricing: 150 };
      mockListingRepository.findOneBy.mockResolvedValue(updatedListing);

      const result = await service.update(1, updateListingDto);
      expect(mockListingRepository.update).toHaveBeenCalledWith(1, updateListingDto);
      expect(result).toEqual(updatedListing);
    });
  });

  describe('remove', () => {
    it('should remove a listing', async () => {
      mockListingRepository.delete.mockResolvedValue({ affected: 1 });

      await service.remove(1);
      expect(mockListingRepository.delete).toHaveBeenCalledWith(1);
    });
  });
});
