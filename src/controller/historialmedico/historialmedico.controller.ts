import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { HistorialMedico } from 'src/models/HistorialMedico.model';
import { HistorialMedicoService } from 'src/services/historialmedico/historialmedico.service';
import { HistorialMedicoN } from 'src/models/historial-medico-normal.model';

@Controller('historialmedico')
export class HistorialMedicoController {
    constructor(private historialmedicoService: HistorialMedicoService) {}

    @Get()
    get(){
        return this.historialmedicoService.findAll().then(res=>{
            return  res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/historialMedicoId/:id')
    getId(@Param('id') id: number){
        return this.historialmedicoService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() historialmedico: HistorialMedicoN){
        return this.historialmedicoService.create(historialmedico).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() historialmedico: HistorialMedico){
        return this.historialmedicoService.update(historialmedico).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.historialmedicoService.delete(id).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

}
