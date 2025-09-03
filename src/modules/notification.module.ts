import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from 'src/models/notification.entity';
import { NotificationService } from 'src/services/notification.service';
import { NotificationController } from 'src/controllers/notification.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  controllers: [NotificationController],
  providers: [NotificationService],
})

export class NotificationModule {}