import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administration } from 'src/models/administration.entity';
import { AdministrationService } from 'src/services/administration.service';
import { AdministrationController } from 'src/controllers/administration.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Administration])],
  controllers: [AdministrationController],
  providers: [AdministrationService],
})

export class AdministrationModule {}