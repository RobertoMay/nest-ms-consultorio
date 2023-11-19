import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Cita } from "./cita.model";
import { PrescripcionMedica } from "./prescripcion-medica.model";
import { HorariosMedicos } from "./horarios-medicos.model";
import { Usuario } from "./usuario.model";

@Entity()
export class Medico {
    @PrimaryGeneratedColumn()
    ID_Medico: number;
    @Column()
    Nombre: string;
    @Column()
    Apellido: string;
    @Column()
    Especialidad: string;
    @Column()
    Telefono: string;
    @Column()
    CorreoElectronico: string;
    @OneToMany(type => Cita, cita => cita.medico)
    citas: Cita[];
    @OneToMany(type => PrescripcionMedica, prescripcionMedica => prescripcionMedica.medico)
    prescripcionMedicas: PrescripcionMedica[];
    @OneToMany(type => HorariosMedicos, horariosMedicos => horariosMedicos.medico)
    horariosMedicos: HorariosMedicos[];
    @OneToMany(type => Usuario, usuario => usuario.medico)
    usuario: Usuario[];
}