import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ExamenMedico'})
export class ExamenMedicoN {
    @PrimaryGeneratedColumn()
    ID_Examen: number;
    @Column()
    ID_Paciente: number;
    @Column()
    TipoExamen: string;
    @Column()
    FechaExamen: Date;
    @Column()
    Resultados: String;  
}