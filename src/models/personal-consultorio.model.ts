import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'PersonalConsultorio'})
export class PersonalConsultorio {
    @PrimaryGeneratedColumn()
    ID_Personal: number;
    @Column()
    Nombre: string;
    @Column()
    Apellido: string;
    @Column()
    Cargo: string;
    @Column()
    Telefono: string;
    @Column()
    CorreoElectronico: string; 
}