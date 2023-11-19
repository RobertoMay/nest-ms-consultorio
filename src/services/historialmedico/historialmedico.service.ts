import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialMedico } from 'src/models/HistorialMedico.model';
import { HistorialMedicoN } from 'src/models/historial-medico-normal.model';

@Injectable()
export class HistorialMedicoService {
    constructor(
        @InjectRepository(HistorialMedico) private historialmedicoRepository: Repository<HistorialMedico>,
        @InjectRepository(HistorialMedicoN) private historialN: Repository<HistorialMedicoN>,
        ) {}

    async findAll(): Promise<HistorialMedico[]>{
        return await this.historialmedicoRepository.find({relations: ['paciente']});
    }

    async findById(id: number): Promise<HistorialMedicoN>{
        return await this.historialN.findOneBy({ID_Historial: id});
    }

    async create(historialmedico: HistorialMedicoN): Promise<HistorialMedicoN>{
        return await this.historialN.save(historialmedico);
    }

    async update(historialmedico: HistorialMedico): Promise<HistorialMedico>{
        return await this.historialmedicoRepository.save(historialmedico);
    }

    async delete(id: number): Promise<string>{
        await this.historialmedicoRepository.delete(id);

        return 'OK';
    }

}
