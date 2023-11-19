import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HorariosMedicos } from 'src/models/horarios-medicos.model';
import { HorariosMedicosN } from 'src/models/horarios-medicos-normal-model';

@Injectable()
export class HorariosMedicosService {
    constructor(
        @InjectRepository(HorariosMedicos) private horariosMedicosRepository: Repository<HorariosMedicos>,
        @InjectRepository(HorariosMedicosN) private hm: Repository<HorariosMedicosN>,
    ) {}

    async findAll(): Promise<HorariosMedicos[]> {
        return await this.horariosMedicosRepository.find({relations: ['medico']});
    }

    async findById(id: number): Promise<HorariosMedicosN> {
        return await this.hm.findOneBy( {ID_HorarioMedico: id} );
    }

    async create(horariosMedicos: HorariosMedicosN): Promise<HorariosMedicosN> {
        return await this.hm.save(horariosMedicos);
    }

    async update(horariosMedicos: HorariosMedicos): Promise<HorariosMedicos> {
        return await this.horariosMedicosRepository.save(horariosMedicos);
    }

    async delete(id: number): Promise<void> {
        await this.horariosMedicosRepository.delete(id);
    }

}
