import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Medico } from 'src/models/medico.model';
import { MedicoService } from 'src/services/medico/medico.service';

@Controller('medico')
export class MedicoController {

    constructor(private medicoService: MedicoService) {}

    @Get()
    get(){
        return this.medicoService.findAll().then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/medicoId/:id')
    getId(@Param('id') id: number){
        return this.medicoService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() medico: Medico){
        return this.medicoService.create(medico).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')    
    update(@Body() medico: Medico){
        return this.medicoService.update(medico).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.medicoService.delete(id).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

}
