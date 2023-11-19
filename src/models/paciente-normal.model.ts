import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Paciente'})
export class PacienteN {
    @PrimaryGeneratedColumn()
    ID_Paciente: number;
    @Column()
    Nombre: string;
    @Column()
    Apellido: string;
    @Column()
    FechaNacimiento: Date;
    @Column()
    Genero: String;  
    @Column()
    Direccion: string;
    @Column()
    Telefono: string;
    @Column()
    CorreoElectronico: string;
}