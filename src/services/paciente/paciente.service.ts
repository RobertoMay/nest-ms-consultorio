import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'src/models/paciente.model';
import { PacienteN } from 'src/models/paciente-normal.model';
import { Repository } from 'typeorm';

@Injectable()
export class PacienteService {
    constructor(
        @InjectRepository(Paciente) private pacienteRepository: Repository<Paciente>,
        @InjectRepository(PacienteN) private pacienteN: Repository<PacienteN>,
    ) {
    }

    async findAll(): Promise<Paciente[]> {
        return await this.pacienteRepository.find();
    }

    async findById(id: number): Promise<PacienteN> {
        return await this.pacienteN.findOneBy({ ID_Paciente: id });
    }

    async create(paciente: Paciente): Promise<Paciente> {
        return await this.pacienteRepository.save(paciente);
    }

    async update(paciente: Paciente): Promise<Paciente> {
        return await this.pacienteRepository.save(paciente);
    }

    async delete(id: number): Promise<string> {
        await this.pacienteRepository.delete(id);

        return 'OK';
    }
}
