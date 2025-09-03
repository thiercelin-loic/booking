import { Test, TestingModule } from '@nestjs/testing';
import { AdministrationController } from 'src/controllers/administration.controller';
import { AdministrationService } from 'src/services/administration.service';

describe('AdministrationController', () => {
  let controller: AdministrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministrationController],
      providers: [AdministrationService],
    }).compile();

    controller = module.get<AdministrationController>(AdministrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
