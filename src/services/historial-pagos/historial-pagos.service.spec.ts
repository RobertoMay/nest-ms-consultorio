import { Test, TestingModule } from '@nestjs/testing';
import { HistorialPagosService } from './historial-pagos.service';

describe('HistorialPagosService', () => {
  let service: HistorialPagosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialPagosService],
    }).compile();

    service = module.get<HistorialPagosService>(HistorialPagosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
