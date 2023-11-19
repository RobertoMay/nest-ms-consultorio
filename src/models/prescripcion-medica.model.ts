import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Paciente } from "./paciente.model";
import { Medico } from "./medico.model";

@Entity({ name: 'PrescripcionMedica'})
export class PrescripcionMedica {
    @PrimaryGeneratedColumn()
    ID_Prescripcion: number;
    @ManyToOne(() => Paciente, (paciente) => paciente.prescripcionMedica)
    @JoinColumn({ name: 'ID_Paciente' })
    paciente: Paciente;
    @ManyToOne(() => Medico,(medico) => medico.prescripcionMedicas )
    @JoinColumn({ name: 'ID_Medico' })
    medico: Medico;
    @Column()
    Medicamento: string;
    @Column()
    Dosis: string;
    @Column()
    Frecuencia: string;
    @Column()
    FechaEmision: Date; 
}