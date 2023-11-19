import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'HistorialMedico'})
export class HistorialMedicoN {
    @PrimaryGeneratedColumn()
    ID_Historial: number;
    @Column()
    ID_Paciente: number;
    @Column()
    FechaRegistro: Date;
    @Column()
    Diagnostico: string;
    @Column()
    Tratamiento: string;
    @Column()
    NotasMedicas: string;
}