import { Test, TestingModule } from '@nestjs/testing';
import { HistorialPagosController } from './historial-pagos.controller';

describe('HistorialPagosController', () => {
  let controller: HistorialPagosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialPagosController],
    }).compile();

    controller = module.get<HistorialPagosController>(HistorialPagosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
