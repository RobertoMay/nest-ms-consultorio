import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Medico } from "./medico.model";

@Entity({ name: 'HorariosMedicos'})
export class HorariosMedicos {
    @PrimaryGeneratedColumn()
    ID_HorarioMedico: number;
    @ManyToOne(() => Medico,(medico) => medico.horariosMedicos )
    @JoinColumn({ name: 'ID_Medico' })
    medico: Medico;
    @Column()
    DiaSemana: string;
    @Column()
    HoraInicio: string;
    @Column()
    HoraFin: string;
}