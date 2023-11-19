import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from 'src/models/cita.model';
import { CitaN } from 'src/models/cita-normal.model';

@Injectable()
export class CitaService {
    constructor(
        @InjectRepository(Cita) private citaRepository: Repository<Cita>,
        @InjectRepository(CitaN) private citaN: Repository<CitaN>,
    ) { }

    async findAll(): Promise<Cita[]> {
        return await this.citaRepository.find({ relations: ['paciente', 'medico'] });
    }

    async findById(id: number): Promise<CitaN> {
        return await this.citaN.findOneBy({ ID_Cita: id });
    }

    async create(cita: CitaN): Promise<CitaN> {
        return await this.citaN.save(cita);
    }

    async update(medico: Cita): Promise<Cita> {
        return await this.citaRepository.save(medico);
    }

    async delete(id: number): Promise<string> {
        await this.citaRepository.delete(id);

        return 'OK';
    }

}
