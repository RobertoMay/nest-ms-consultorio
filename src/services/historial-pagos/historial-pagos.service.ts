import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialPagos } from 'src/models/historial-pagos.model';
import { HistorialPagosN } from 'src/models/historial-pagos-normal.model';

@Injectable()
export class HistorialPagosService {
    constructor(
        @InjectRepository(HistorialPagos) private historialpagosRepository: Repository<HistorialPagos>,
        @InjectRepository(HistorialPagosN) private hn: Repository<HistorialPagosN>,
    ) { }

    async findAll(): Promise<HistorialPagos[]> {
        return await this.historialpagosRepository.find({relations: ['factura']});
    }

    async findById(id: number): Promise<HistorialPagosN> {
        return await this.hn.findOneBy({ ID_HistorialPago: id });
    }

    async create(historialPagos: HistorialPagosN): Promise<HistorialPagosN> {
        return await this.hn.save(historialPagos);
    }

    async update(historialPagos: HistorialPagos): Promise<HistorialPagos> {
        return await this.historialpagosRepository.save(historialPagos);
    }

    async delete(id: number): Promise<void> {
        await this.historialpagosRepository.delete(id);
    }

}
