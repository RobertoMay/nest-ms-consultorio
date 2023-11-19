import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Paciente } from "./paciente.model";

@Entity({ name: 'ExamenMedico'})
export class ExamenMedico {
    @PrimaryGeneratedColumn()
    ID_Examen: number;
    @ManyToOne(() => Paciente, (paciente) => paciente.examenMedico)
    @JoinColumn({ name: 'ID_Paciente' })
    paciente: Paciente;
    @Column()
    TipoExamen: string;
    @Column()
    FechaExamen: Date;
    @Column()
    Resultados: String;  
}