import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministrationService } from 'src/services/administration.service';
import { CreateAdministrationDto } from 'src/validations/create-administration.dto';
import { UpdateAdministrationDto } from 'src/validations/update-administration.dto';

@Controller('administration')
export class AdministrationController {
  constructor(private readonly service: AdministrationService) {}

  @Post()
  create(@Body() pattern: CreateAdministrationDto) {
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
  update(@Param('id') id: string, @Body() pattern: UpdateAdministrationDto) {
    return this.service.update(+id, pattern);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}