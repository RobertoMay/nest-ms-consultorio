import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Factura'})
export class FacturaN {
    @PrimaryGeneratedColumn()
    ID_Factura: number;
    @Column()
    ID_Paciente: number;
    @Column()
    FechaFacturacion: Date;
    @Column()
    Total: number;
    @Column()
    EstadoPago: string;
}