
import { Test, TestingModule } from '@nestjs/testing';
import { BookingsService } from './bookings.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { CreateBookingsDto } from './dto/create-booking.dto';
import { UpdateBookingsDto } from './dto/update-booking.dto';

describe('BookingsService', () => {
  let service: BookingsService;
  let repository: Repository<Booking>;

  const mockBookingRepository = {
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
        BookingsService,
        {
          provide: getRepositoryToken(Booking),
          useValue: mockBookingRepository,
        },
      ],
    }).compile();

    service = module.get<BookingsService>(BookingsService);
    repository = module.get<Repository<Booking>>(getRepositoryToken(Booking));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and save a booking', async () => {
      const createBookingDto: CreateBookingsDto = {
        id: 1,
        listing: 1,
        user: 'test-user',
        date: '2025-09-19',
        arrival: '14:00',
        departure: '11:00',
        confirmation: false,
      };
      const booking = { ...createBookingDto };

      mockBookingRepository.create.mockReturnValue(booking);
      mockBookingRepository.save.mockResolvedValue(booking);

      const result = await service.create(createBookingDto);
      expect(result).toEqual(booking);
      expect(mockBookingRepository.create).toHaveBeenCalledWith(createBookingDto);
      expect(mockBookingRepository.save).toHaveBeenCalledWith(booking);
    });
  });

  describe('findAll', () => {
    it('should return an array of bookings', async () => {
      const bookings = [{ 
        id: 1,
        listing: 1,
        user: 'test-user',
        date: '2025-09-19',
        arrival: '14:00',
        departure: '11:00',
        confirmation: false,
      }];
      mockBookingRepository.find.mockResolvedValue(bookings);

      const result = await service.findAll();
      expect(result).toEqual(bookings);
      expect(mockBookingRepository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single booking', async () => {
      const booking = { 
        id: 1,
        listing: 1,
        user: 'test-user',
        date: '2025-09-19',
        arrival: '14:00',
        departure: '11:00',
        confirmation: false,
      };
      mockBookingRepository.findOneBy.mockResolvedValue(booking);

      const result = await service.findOne(1);
      expect(result).toEqual(booking);
      expect(mockBookingRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
    });
  });

  describe('update', () => {
    it('should update a booking', async () => {
      const updateBookingDto: UpdateBookingsDto = { confirmation: true };
      mockBookingRepository.update.mockResolvedValue({ affected: 1 });
      const updatedBooking = { 
        id: 1,
        listing: 1,
        user: 'test-user',
        date: '2025-09-19',
        arrival: '14:00',
        departure: '11:00',
        confirmation: true,
      };
      mockBookingRepository.findOneBy.mockResolvedValue(updatedBooking);

      const result = await service.update(1, updateBookingDto);
      expect(mockBookingRepository.update).toHaveBeenCalledWith(1, updateBookingDto);
      expect(result).toEqual(updatedBooking);
    });
  });

  describe('remove', () => {
    it('should remove a booking', async () => {
      mockBookingRepository.delete.mockResolvedValue({ affected: 1 });

      await service.remove(1);
      expect(mockBookingRepository.delete).toHaveBeenCalledWith(1);
    });
  });
});
