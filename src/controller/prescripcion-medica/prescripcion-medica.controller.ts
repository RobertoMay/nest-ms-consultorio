import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { PrescripcionMedica } from 'src/models/prescripcion-medica.model';
import { PrescripcionMedicaService } from 'src/services/prescripcion-medica/prescripcion-medica.service';
import { PrescripcionMedicaN } from 'src/models/prescripcion-medica-normal.model';

@Controller('prescripcion-medica')
export class PrescripcionMedicaController {
    constructor(private prescripcionmedica: PrescripcionMedicaService) {}

    @Get()
    get(){
        return this.prescripcionmedica.findAll().then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/Id/:id')
    getId(@Param('id') id: number){
        return this.prescripcionmedica.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() prescripciomedica: PrescripcionMedicaN){
        return this.prescripcionmedica.create(prescripciomedica).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() prescripciomedica: PrescripcionMedica){
        return this.prescripcionmedica.update(prescripciomedica).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.prescripcionmedica.delete(id).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

}
