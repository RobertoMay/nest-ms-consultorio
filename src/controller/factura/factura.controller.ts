import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Factura } from 'src/models/factura.model';
import { FacturaService } from 'src/services/factura/factura.service';
import { FacturaN } from 'src/models/factura-normal.model';

@Controller('factura')
export class FacturaController {
    constructor(private facturaService: FacturaService) {}

    @Get()
    get() {
        return this.facturaService.findAll().then(res => {
            return res
        }).catch(err => {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Get('/Id/:id')
    getId(@Param('id') id: number){
        return this.facturaService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.facturaService.findById(id).then(res => {
            if (!res) {
                throw new HttpException('Factura no encontrada', HttpStatus.NOT_FOUND);
            }
            return { success: true, data: res };
        }).catch(err => {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Post()
    create(@Body() factura: FacturaN) {
        return this.facturaService.create(factura).then(res => {
            return { success: true, data: res };
        }).catch(err => {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Post('/update')
    update(@Body() factura: Factura) {
        return this.facturaService.update(factura).then(res => {
            return { success: true, data: res };
        }).catch(err => {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id: number) {
        return this.facturaService.delete(id).then(() => {
            return { success: true, message: 'Factura eliminada correctamente' };
        }).catch(err => {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }
}
