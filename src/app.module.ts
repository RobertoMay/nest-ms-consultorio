import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/typeorm/typeorm.service';
import { PacienteService } from './services/paciente/paciente.service';
import { PacienteController } from './controller/paciente/paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './models/paciente.model';
import { MedicoController } from './controller/medico/medico.controller';
import { MedicoService } from './services/medico/medico.service';
import { Medico } from './models/medico.model';
import { CitaController } from './controller/cita/cita.controller';
import { CitaService } from './services/cita/cita.service';
import { Cita } from './models/cita.model';
import { HistorialMedicoController } from './controller/historialmedico/historialmedico.controller';
import { HistorialMedicoService } from './services/historialmedico/historialmedico.service';
import { HistorialMedico } from './models/HistorialMedico.model';
import { PrescripcionMedicaController } from './controller/prescripcion-medica/prescripcion-medica.controller';
import { PrescripcionMedicaService } from './services/prescripcion-medica/prescripcion-medica.service';
import { PrescripcionMedica } from './models/prescripcion-medica.model';
import { ExamenMedico } from './models/examen-medico.model';
import { ExamenMedicoController } from './controller/examen-medico/examen-medico.controller';
import { ExamenMedicoService } from './services/examen-medico/examen-medico.service';
import { Factura } from './models/factura.model';
import { FacturaController } from './controller/factura/factura.controller';
import { FacturaService } from './services/factura/factura.service';
import { HistorialPagosService } from './services/historial-pagos/historial-pagos.service';
import { HistorialPagos } from './models/historial-pagos.model';
import { HistorialPagosController } from './controller/historial-pagos/historial-pagos.controller';
import { PersonalConsultorioService } from './services/personal-consultorio/personal-consultorio.service';
import { PersonalConsultorioController } from './controller/personal-consultorio/personal-consultorio.controller';
import { PersonalConsultorio } from './models/personal-consultorio.model';
import { HorariosMedicosService } from './services/horarios-medicos/horarios-medicos.service';
import { HorariosMedicosController } from './controller/horarios-medicos/horarios-medicos.controller';
import { HorariosMedicos } from './models/horarios-medicos.model';
import { UsuarioService } from './services/usuario/usuario.service';
import { UsuarioController } from './controller/usuario/usuario.controller';
import { Usuario } from './models/usuario.model';
import { JwtModule } from '@nestjs/jwt';
import { CitaN } from './models/cita-normal.model';
import { PacienteN } from './models/paciente-normal.model';
import { HistorialMedicoN } from './models/historial-medico-normal.model';
import { PrescripcionMedicaN } from './models/prescripcion-medica-normal.model';
import { ExamenMedicoN } from './models/examen-medico-normal.model';
import { FacturaN } from './models/factura-normal.model';
import { HistorialPagosN } from './models/historial-pagos-normal.model';
import { HorariosMedicosN } from './models/horarios-medicos-normal-model';
import { UsuarioN } from './models/usuario-normal.model';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    TypeOrmModule.forFeature([Paciente]),
    TypeOrmModule.forFeature([Medico]),
    TypeOrmModule.forFeature([Cita]),
    TypeOrmModule.forFeature([HistorialMedico]),
    TypeOrmModule.forFeature([PrescripcionMedica]),
    TypeOrmModule.forFeature([ExamenMedico]),
    TypeOrmModule.forFeature([Factura]),
    TypeOrmModule.forFeature([HistorialPagos]),
    TypeOrmModule.forFeature([PersonalConsultorio]),
    TypeOrmModule.forFeature([HorariosMedicos]),
    TypeOrmModule.forFeature([Usuario]),
    TypeOrmModule.forFeature([CitaN, PacienteN, HistorialMedicoN, PrescripcionMedicaN, ExamenMedicoN, FacturaN, HistorialPagosN, HorariosMedicosN, UsuarioN]),
    JwtModule.register({
      secret: 'MiSemillaSecreta',
      signOptions: { expiresIn: '20h' },
    }),
  ],
  controllers: [AppController, PacienteController, MedicoController, CitaController, HistorialMedicoController, PrescripcionMedicaController, ExamenMedicoController, FacturaController, HistorialPagosController, PersonalConsultorioController, PersonalConsultorioController, HorariosMedicosController, UsuarioController],
  providers: [AppService, TypeormService, PacienteService, MedicoService, CitaService, HistorialMedicoService, PrescripcionMedicaService, ExamenMedicoService, FacturaService, HistorialPagosService, HistorialPagosService, PersonalConsultorioService, PersonalConsultorioService, HorariosMedicosService, UsuarioService],
})
export class AppModule { }
