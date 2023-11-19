import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ExamenMedico } from 'src/models/examen-medico.model'; // Cambiar la importación
import { ExamenMedicoService } from 'src/services/examen-medico/examen-medico.service'; 
import { ExamenMedicoN } from 'src/models/examen-medico-normal.model';

@Controller('examen-medico') // Cambiar la ruta del controlador
export class ExamenMedicoController {
    constructor(private examenMedicoService: ExamenMedicoService) {} 

    @Get()
    get() {
        return this.examenMedicoService.findAll().then(res => {
            return res
        }).catch(err => {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Get('/Id/:id')
    getId(@Param('id') id: number){
        return this.examenMedicoService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() examenMedico: ExamenMedicoN) { 
        return this.examenMedicoService.create(examenMedico).then(res => {
            return { success: true, data: res };
        }).catch(err => {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Post('/update')
    update(@Body() examenMedico: ExamenMedico) { 
        return this.examenMedicoService.update(examenMedico).then(res => {
            return { success: true, data: res };
        }).catch(err => {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id) {
        return this.examenMedicoService.delete(id).then(res => {
            return { success: true, data: res };
        }).catch(err => {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }
}
