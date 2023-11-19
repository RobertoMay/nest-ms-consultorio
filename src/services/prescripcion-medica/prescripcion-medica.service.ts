import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrescripcionMedica } from 'src/models/prescripcion-medica.model';
import { PrescripcionMedicaN } from 'src/models/prescripcion-medica-normal.model';

@Injectable()
export class PrescripcionMedicaService {
    constructor(
        @InjectRepository(PrescripcionMedica) private prescripcionmecicaRepository: Repository<PrescripcionMedica>,
        @InjectRepository(PrescripcionMedicaN) private presN: Repository<PrescripcionMedicaN>,
        ) {}

    async findAll(): Promise<PrescripcionMedica[]>{
        return await this.prescripcionmecicaRepository.find({ relations: ['paciente', 'medico'] });
    }

    async findById(id: number): Promise<PrescripcionMedicaN>{
        return await this.presN.findOneBy({ID_Prescripcion: id});
    }

    async create(prescripcionmedica: PrescripcionMedicaN): Promise<PrescripcionMedicaN>{
        return await this.presN.save(prescripcionmedica);
    }

    async update(prescripcionmedica: PrescripcionMedica): Promise<PrescripcionMedica>{
        return await this.prescripcionmecicaRepository.save(prescripcionmedica);
    }

    async delete(id: number): Promise<string>{
        await this.prescripcionmecicaRepository.delete(id);

        return 'OK';
    }

}
