import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'HorariosMedicos'})
export class HorariosMedicosN {
    @PrimaryGeneratedColumn()
    ID_HorarioMedico: number;
    @Column()
    ID_Medico: number;
    @Column()
    DiaSemana: string;
    @Column()
    HoraInicio: string;
    @Column()
    HoraFin: string;
}