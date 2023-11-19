import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from 'src/models/factura.model';
import { FacturaN } from 'src/models/factura-normal.model';

@Injectable()
export class FacturaService {
    constructor(
        @InjectRepository(Factura) private facturaRepository: Repository<Factura>,
        @InjectRepository(FacturaN) private fn: Repository<FacturaN>,
    ) {}

    async findAll(): Promise<Factura[]> {
        return await this.facturaRepository.find({relations: ['paciente']});
    }

    async findById(id: number): Promise<FacturaN> {
        return await this.fn.findOneBy( {ID_Factura: id} );
    }

    async create(factura: FacturaN): Promise<FacturaN> {
        return await this.fn.save(factura);
    }

    async update(factura: Factura): Promise<Factura> {
        return await this.facturaRepository.save(factura);
    }

    async delete(id: number): Promise<void> {
        await this.facturaRepository.delete(id);
    }
}
