import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medico } from 'src/models/medico.model';
import { Repository } from 'typeorm';

@Injectable()
export class MedicoService {
    constructor(@InjectRepository(Medico) private medicoRepository: Repository<Medico>) {}

    async findAll(): Promise<Medico[]>{
        return await this.medicoRepository.find();
    }

    async findById(id: number): Promise<Medico>{
        return await this.medicoRepository.findOneBy({ID_Medico: id});
    }

    async create(medico: Medico): Promise<Medico>{
        return await this.medicoRepository.save(medico);
    }

    async update(medico: Medico): Promise<Medico>{
        return await this.medicoRepository.save(medico);
    }

    async delete(id: number): Promise<string>{
        await this.medicoRepository.delete(id);

        return 'OK';
    }
}
