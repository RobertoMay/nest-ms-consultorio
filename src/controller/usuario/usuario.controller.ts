import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Usuario } from 'src/models/usuario.model';
import { UsuarioService } from 'src/services/usuario/usuario.service';
import { UsuarioN } from 'src/models/usuario-normal.model';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService){}

    @Get()
    get(){
        return this.usuarioService.findAll().then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/Id/:id')
    getId(@Param('id') id: number){
        return this.usuarioService.findById(id).then(res=>{
            return res
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/register')
    save(@Body() Usuario: UsuarioN){
        return this.usuarioService.create(Usuario).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/login')
    loginUser(@Body() usuario: Usuario){
        return this.usuarioService.login(usuario).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() usuario: Usuario){
        return this.usuarioService.update(usuario).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/updateNP')
    updateNP(@Body() usuario: UsuarioN){
        return this.usuarioService.updateNP(usuario).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id') id){
        return this.usuarioService.delete(id).then(res=>{
            return {succes: true, data: res}
        }).catch(err=> {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }
}
