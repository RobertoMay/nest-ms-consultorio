import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { HistorialPagos } from 'src/models/historial-pagos.model';
import { HistorialPagosService } from 'src/services/historial-pagos/historial-pagos.service';
import { HistorialPagosN } from 'src/models/historial-pagos-normal.model';

@Controller('historialpagos')
export class HistorialPagosController {
    constructor(private historialpagoService: HistorialPagosService) {}

    @Get()
    get(){
        return this.historialpagoService.findAll().then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/Id/:id')
    getId(@Param('id') id: number){
        return this.historialpagoService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() historialPagos: HistorialPagosN){
        return this.historialpagoService.create(historialPagos).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() historialPagos: HistorialPagos){
        return this.historialpagoService.update(historialPagos).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.historialpagoService.delete(id).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

}
