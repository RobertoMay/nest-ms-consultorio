import { Test, TestingModule } from '@nestjs/testing';
import { PersonalConsultorioService } from './personal-consultorio.service';

describe('PersonalConsultorioService', () => {
  let service: PersonalConsultorioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalConsultorioService],
    }).compile();

    service = module.get<PersonalConsultorioService>(PersonalConsultorioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
