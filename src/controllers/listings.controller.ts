import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListingsService } from 'src/services/listings.service';
import { CreateListingDto } from 'src/validations/create-listing.dto';
import { UpdateListingDto } from 'src/validations/update-listing.dto';

@Controller('listings')
export class ListingsController {
  constructor(private readonly service: ListingsService) {}

  @Post()
  create(@Body() pattern: CreateListingDto) {
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
  update(@Param('id') id: string, @Body() pattern: UpdateListingDto) {
    return this.service.update(+id, pattern);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
