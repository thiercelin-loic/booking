import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAdministrationDto } from 'src/validations/create-administration.dto';
import { UpdateAdministrationDto } from 'src/validations/update-administration.dto';
import { Administration } from 'src/models/administration.entity';

@Injectable()
export class AdministrationService {
  constructor(
    @InjectRepository(Administration)
    private repository: Repository<Administration>,
  ) { }

  create(pattern: CreateAdministrationDto) {
    const administration = this.repository.create(pattern);
    return this.repository.save(administration);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, pattern: UpdateAdministrationDto) {
    return this.repository.update(id, pattern);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}