import { Test, TestingModule } from '@nestjs/testing';
import { PrescripcionMedicaService } from './prescripcion-medica.service';

describe('PrescripcionMedicaService', () => {
  let service: PrescripcionMedicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrescripcionMedicaService],
    }).compile();

    service = module.get<PrescripcionMedicaService>(PrescripcionMedicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
