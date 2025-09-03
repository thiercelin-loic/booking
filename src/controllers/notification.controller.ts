import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationService } from 'src/services/notification.service';
import { CreateNotificationDto } from 'src/validations/create-notification.dto';
import { UpdateNotificationDto } from 'src/validations/update-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly service: NotificationService) {}

  @Post()
  create(@Body() pattern: CreateNotificationDto) {
    return this.service.create(pattern);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() pattern: UpdateNotificationDto) {
    return this.service.update(+id, pattern);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
