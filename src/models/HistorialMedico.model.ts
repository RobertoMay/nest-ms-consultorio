import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Paciente } from "./paciente.model";

@Entity({ name: 'HistorialMedico'})
export class HistorialMedico {
    @PrimaryGeneratedColumn()
    ID_Historial: number;
    @ManyToOne(() => Paciente, (paciente) => paciente.citas)
    @JoinColumn({ name: 'ID_Paciente' })
    paciente: Paciente;
    @Column()
    FechaRegistro: Date;
    @Column()
    Diagnostico: string;
    @Column()
    Tratamiento: string;
    @Column()
    NotasMedicas: string;
}