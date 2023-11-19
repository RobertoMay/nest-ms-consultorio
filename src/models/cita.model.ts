import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Paciente } from "./paciente.model";
import { Medico } from "./medico.model";

@Entity()
export class Cita {
    @PrimaryGeneratedColumn()
    ID_Cita: number;
    @ManyToOne(() => Paciente, (paciente) => paciente.citas)
    @JoinColumn({ name: 'ID_Paciente' })
    paciente: Paciente;
    @ManyToOne(() => Medico,(medico) => medico.citas )
    @JoinColumn({ name: 'ID_Medico' })
    medico: Medico;
    @Column()
    FechaHoraCita: Date;
    @Column()
    MotivoCita: string;
    @Column()
    EstadoCita: string;
}