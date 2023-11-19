import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Factura } from "./factura.model";

@Entity({ name: 'HistorialPagos'})
export class HistorialPagos {
    @PrimaryGeneratedColumn()
    ID_HistorialPago: number;
    @ManyToOne(() => Factura, (factura) => factura.historialPagos)
    @JoinColumn({ name: 'ID_Factura' })
    factura: Factura;
    @Column()
    FechaPago: Date;
    @Column()
    Monto: number;
}