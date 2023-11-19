import { Test, TestingModule } from '@nestjs/testing';
import { ExamenMedicoController } from './examen-medico.controller';

describe('ExamenMedicoController', () => {
  let controller: ExamenMedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamenMedicoController],
    }).compile();

    controller = module.get<ExamenMedicoController>(ExamenMedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
