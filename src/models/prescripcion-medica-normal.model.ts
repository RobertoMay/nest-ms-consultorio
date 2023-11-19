import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'PrescripcionMedica'})
export class PrescripcionMedicaN {
    @PrimaryGeneratedColumn()
    ID_Prescripcion: number;
    @Column()
    ID_Paciente: number;
    @Column()
    ID_Medico: number;
    @Column()
    Medicamento: string;
    @Column()
    Dosis: string;
    @Column()
    Frecuencia: string;
    @Column()
    FechaEmision: Date; 
}