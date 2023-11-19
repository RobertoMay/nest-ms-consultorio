import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Paciente } from "./paciente.model";
import { HistorialPagos } from "./historial-pagos.model";

@Entity()
export class Factura {
    @PrimaryGeneratedColumn()
    ID_Factura: number;
    @ManyToOne(() => Paciente, (paciente) => paciente.factura)
    @JoinColumn({ name: 'ID_Paciente' })
    paciente: Paciente;
    @Column()
    FechaFacturacion: Date;
    @Column()
    Total: number;
    @Column()
    EstadoPago: string;
    @OneToMany(type => HistorialPagos, historialPagos => historialPagos.factura)
    historialPagos: HistorialPagos[];
}