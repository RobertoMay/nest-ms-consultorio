import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { HorariosMedicos } from 'src/models/horarios-medicos.model';
import { HorariosMedicosService } from 'src/services/horarios-medicos/horarios-medicos.service';
import { HorariosMedicosN } from 'src/models/horarios-medicos-normal-model';

@Controller('horarios-medicos')
export class HorariosMedicosController {
    constructor(private horariosMedicosService: HorariosMedicosService) {}

    @Get()
    get(){
        return this.horariosMedicosService.findAll().then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/Id/:id')
    getId(@Param('id') id: number){
        return this.horariosMedicosService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() horarisoMedicos: HorariosMedicosN){
        return this.horariosMedicosService.create(horarisoMedicos).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() HorariosMedicos: HorariosMedicos){
        return this.horariosMedicosService.update(HorariosMedicos).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.horariosMedicosService.delete(id).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

}
