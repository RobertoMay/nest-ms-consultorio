import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Paciente } from 'src/models/paciente.model';
import { PacienteService } from 'src/services/paciente/paciente.service';

@Controller('paciente')
export class PacienteController {
    constructor(private pacientesService: PacienteService){}

    @Get()
    get(){
        return this.pacientesService.findAll().then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/pacienteId/:id')
    getId(@Param('id') id: number){
        return this.pacientesService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() paciente: Paciente){
        return this.pacientesService.create(paciente).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() paciente: Paciente){
        return this.pacientesService.update(paciente).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.pacientesService.delete(id).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }
}
