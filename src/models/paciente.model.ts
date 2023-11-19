import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Cita } from "./cita.model";
import { HistorialMedico } from "./HistorialMedico.model";
import { PrescripcionMedica } from "./prescripcion-medica.model";
import { ExamenMedico } from "./examen-medico.model";
import { Factura } from "./factura.model";
import { Usuario } from "./usuario.model";

@Entity()
export class Paciente {
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
    @OneToMany(type => Cita, cita => cita.paciente)
    citas: Cita[];
    @OneToMany(type => HistorialMedico, historialMedico => historialMedico.paciente)
    historialMedicos: HistorialMedico[];
    @OneToMany(type => PrescripcionMedica, prescripcionMedica => prescripcionMedica.paciente)
    prescripcionMedica: PrescripcionMedica[];
    @OneToMany(type => ExamenMedico, examenMedico => examenMedico.paciente)
    examenMedico: ExamenMedico[];
    @OneToMany(type => Factura, factura => factura.paciente)
    factura: Factura[];
    @OneToMany(type => Usuario, usuario => usuario.paciente)
    usuario: Usuario[];
}