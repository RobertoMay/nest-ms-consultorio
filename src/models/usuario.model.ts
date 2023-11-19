import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Paciente } from "./paciente.model";
import { Medico } from "./medico.model";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    ID_Usuario: number;
    @Column()
    CorreoElectronico: string;
    @Column()
    Nombre: string;
    @Column()
    Contraseña: string;
    @Column()
    Rol: string;
    @ManyToOne(() => Paciente, (paciente) => paciente.usuario)
    @JoinColumn({ name: 'ID_Paciente' })
    paciente: Paciente;
    @ManyToOne(() => Medico,(medico) => medico.usuario )
    @JoinColumn({ name: 'ID_Medico' })
    medico: Medico;
}