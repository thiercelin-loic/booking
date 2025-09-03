import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import { CreateNotificationDto } from 'src/validations/create-notification.dto';
import { UpdateNotificationDto } from 'src/validations/update-notification.dto';
import { Notification } from 'src/models/notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private repository: Repository<Notification>,
  ) { }

  create(pattern: CreateNotificationDto) {
    const notification = this.repository.create(pattern as DeepPartial<Notification>);
    return this.repository.save(notification);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, pattern: UpdateNotificationDto) {
    return this.repository.update(id, pattern);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}