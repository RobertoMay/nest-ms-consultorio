import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamenMedico } from 'src/models/examen-medico.model';
import { ExamenMedicoN } from 'src/models/examen-medico-normal.model';

@Injectable()
export class ExamenMedicoService {
    constructor(
        @InjectRepository(ExamenMedico) private examenMedicoRepository: Repository<ExamenMedico>,
        @InjectRepository(ExamenMedicoN) private exaN: Repository<ExamenMedicoN>,
    ) { }

    async findAll(): Promise<ExamenMedico[]> {
        return await this.examenMedicoRepository.find({relations: ['paciente']});
    }

    async findById(id: number): Promise<ExamenMedicoN> {
        return await this.exaN.findOneBy({ ID_Examen: id });
    }

    async create(examenMedico: ExamenMedicoN): Promise<ExamenMedicoN> {
        return await this.exaN.save(examenMedico);
    }

    async update(examenMedico: ExamenMedico): Promise<ExamenMedico> {
        return await this.examenMedicoRepository.save(examenMedico);
    }

    async delete(id: number): Promise<string> {
        await this.examenMedicoRepository.delete(id);

        return 'OK';
    }
}
