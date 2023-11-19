import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonalConsultorio } from 'src/models/personal-consultorio.model';

@Injectable()
export class PersonalConsultorioService {
    constructor(@InjectRepository(PersonalConsultorio) private personalConsultorioRepository: Repository<PersonalConsultorio>) {}

    async findAll(): Promise<PersonalConsultorio[]> {
        return await this.personalConsultorioRepository.find();
    }

    async findById(id: number): Promise<PersonalConsultorio> {
        return await this.personalConsultorioRepository.findOneBy( {ID_Personal: id} );
    }

    async create(personalConsultorio: PersonalConsultorio): Promise<PersonalConsultorio> {
        return await this.personalConsultorioRepository.save(personalConsultorio);
    }

    async update(personalConsultorio: PersonalConsultorio): Promise<PersonalConsultorio> {
        return await this.personalConsultorioRepository.save(personalConsultorio);
    }

    async delete(id: number): Promise<void> {
        await this.personalConsultorioRepository.delete(id);
    }

}