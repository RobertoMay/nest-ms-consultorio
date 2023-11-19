import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Cita } from 'src/models/cita.model';
import { CitaService } from 'src/services/cita/cita.service';
import { CitaN } from 'src/models/cita-normal.model';

@Controller('cita')
export class CitaController {
    constructor(private citaService: CitaService) {}

    @Get()
    get(){
        return this.citaService.findAll().then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/citaId/:id')
    getId(@Param('id') id: number){
        return this.citaService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() cita: CitaN){
        return this.citaService.create(cita).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() cita: Cita){
        return this.citaService.update(cita).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.citaService.delete(id).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

}
