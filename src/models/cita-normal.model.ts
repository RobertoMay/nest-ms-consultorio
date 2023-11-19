import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Cita'})
export class CitaN {
    @PrimaryGeneratedColumn()
    ID_Cita: number;
    @Column()
    ID_Paciente: number;
    @Column()
    ID_Medico: number;
    @Column()
    FechaHoraCita: Date;
    @Column()
    MotivoCita: string;
    @Column()
    EstadoCita: string;
}