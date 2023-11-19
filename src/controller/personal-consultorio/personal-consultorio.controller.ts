import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { PersonalConsultorio } from 'src/models/personal-consultorio.model';
import { PersonalConsultorioService } from 'src/services/personal-consultorio/personal-consultorio.service';

@Controller('personal-consultorio')
export class PersonalConsultorioController {
    constructor(private personalConsultorioService: PersonalConsultorioService) {}

    @Get()
    get(){
        return this.personalConsultorioService.findAll().then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/Id/:id')
    getId(@Param('id') id: number){
        return this.personalConsultorioService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() personalConsultorio: PersonalConsultorio){
        return this.personalConsultorioService.create(personalConsultorio).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() personalConsultorio: PersonalConsultorio){
        return this.personalConsultorioService.update(personalConsultorio).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.personalConsultorioService.delete(id).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

}
