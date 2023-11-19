import { Test, TestingModule } from '@nestjs/testing';
import { PersonalConsultorioController } from './personal-consultorio.controller';

describe('PersonalConsultorioController', () => {
  let controller: PersonalConsultorioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalConsultorioController],
    }).compile();

    controller = module.get<PersonalConsultorioController>(PersonalConsultorioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
