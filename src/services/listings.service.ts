import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateListingDto } from 'src/validations/create-listing.dto';
import { UpdateListingDto } from 'src/validations/update-listing.dto';
import { Listings } from 'src/models/listings.entity';

@Injectable()
export class ListingsService {
  constructor(
    @InjectRepository(Listings)
    private repository: Repository<Listings>,
  ) {}

  create(pattern: CreateListingDto) {
    const listing = this.repository.create(pattern);
    return this.repository.save(listing);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateListingDto: UpdateListingDto) {
    return this.repository.update(id, updateListingDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}