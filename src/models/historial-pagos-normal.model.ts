import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'HistorialPagos'})
export class HistorialPagosN {
    @PrimaryGeneratedColumn()
    ID_HistorialPago: number;
    @Column()
    ID_Factura: number;
    @Column()
    FechaPago: Date;
    @Column()
    Monto: number;
}