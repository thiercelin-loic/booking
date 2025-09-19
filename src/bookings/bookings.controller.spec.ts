
import { Test, TestingModule } from '@nestjs/testing';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { CreateBookingsDto } from './dto/create-booking.dto';
import { UpdateBookingsDto } from './dto/update-booking.dto';

describe('BookingsController', () => {
  let controller: BookingsController;
  let service: BookingsService;

  const mockBookingsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
      providers: [
        {
          provide: BookingsService,
          useValue: mockBookingsService,
        },
      ],
    }).compile();

    controller = module.get<BookingsController>(BookingsController);
    service = module.get<BookingsService>(BookingsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a booking', async () => {
      const createBookingDto: CreateBookingsDto = {
        id: 1,
        listing: 1,
        user: 'test-user',
        date: '2025-09-19',
        arrival: '14:00',
        departure: '11:00',
        confirmation: false,
      };
      const expectedResult = { ...createBookingDto };
      mockBookingsService.create.mockResolvedValue(expectedResult);

      const result = await controller.create(createBookingDto);
      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createBookingDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of bookings', async () => {
      const expectedResult = [{ 
        id: 1,
        listing: 1,
        user: 'test-user',
        date: '2025-09-19',
        arrival: '14:00',
        departure: '11:00',
        confirmation: false,
       }];
      mockBookingsService.findAll.mockResolvedValue(expectedResult);

      const result = await controller.findAll();
      expect(result).toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single booking', async () => {
      const id = '1';
      const expectedResult = { 
        id: 1,
        listing: 1,
        user: 'test-user',
        date: '2025-09-19',
        arrival: '14:00',
        departure: '11:00',
        confirmation: false,
       };
      mockBookingsService.findOne.mockResolvedValue(expectedResult);

      const result = await controller.findOne(id);
      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a booking', async () => {
      const id = '1';
      const updateBookingDto: UpdateBookingsDto = { confirmation: true };
      const expectedResult = { 
        id: 1,
        listing: 1,
        user: 'test-user',
        date: '2025-09-19',
        arrival: '14:00',
        departure: '11:00',
        confirmation: true,
       };
      mockBookingsService.update.mockResolvedValue(expectedResult);

      const result = await controller.update(id, updateBookingDto);
      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateBookingDto);
    });
  });

  describe('remove', () => {
    it('should remove a booking', async () => {
      const id = '1';
      mockBookingsService.remove.mockResolvedValue(undefined);

      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});
