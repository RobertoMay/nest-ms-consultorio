import { Test, TestingModule } from '@nestjs/testing';
import { PrescripcionMedicaController } from './prescripcion-medica.controller';

describe('PrescripcionMedicaController', () => {
  let controller: PrescripcionMedicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrescripcionMedicaController],
    }).compile();

    controller = module.get<PrescripcionMedicaController>(PrescripcionMedicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
