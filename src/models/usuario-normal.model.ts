import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Usuario'})
export class UsuarioN {
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
    @Column()
    ID_Paciente: number;
    @Column()
    ID_Medico: number;
}