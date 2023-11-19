import { Test, TestingModule } from '@nestjs/testing';
import { ExamenMedicoService } from './examen-medico.service';

describe('ExamenMedicoService', () => {
  let service: ExamenMedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamenMedicoService],
    }).compile();

    service = module.get<ExamenMedicoService>(ExamenMedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
