import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/models/usuario.model';
import { UsuarioN } from 'src/models/usuario-normal.model';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>, private jwtService: JwtService,
        @InjectRepository(UsuarioN) private usuarioN: Repository<UsuarioN>,
        ){}

    async findAll(): Promise<Usuario[]>{
        return await this.usuarioRepository.find({ relations: ['paciente', 'medico'] });
    }

    async findById(id: number): Promise<UsuarioN>{
        return await this.usuarioN.findOneBy({ID_Usuario: id});
    }

    async create(usuario: UsuarioN): Promise<UsuarioN>{
        const { Contraseña } = usuario;
        const plainToHash = await hash(Contraseña,10);
        usuario = {...usuario, Contraseña:plainToHash};
        return await this.usuarioN.save(usuario);
    }


    async login(usuario: Usuario) {
        const {CorreoElectronico, Contraseña} = usuario;
        const findUser = await this.usuarioRepository.findOne({
            where: {CorreoElectronico},
            relations: ['paciente', 'medico'],
        });
        if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);

        const chekcPassword = await compare(Contraseña, findUser.Contraseña);

        if (!chekcPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

        const payload = {id:findUser.ID_Usuario, Nombre:findUser.Nombre}
        const token = this.jwtService.sign(payload)

        const data = {
            usuario: findUser,
            token,
        };

        return data;
    }

    async update(usuario: Usuario): Promise<Usuario>{
        const { Contraseña } = usuario;
        const plainToHash = await hash(Contraseña,10);
        usuario = {...usuario, Contraseña:plainToHash};
        return await this.usuarioRepository.save(usuario);
    }


    async updateNP(usuario: UsuarioN): Promise<UsuarioN>{
        return await this.usuarioN.save(usuario);
    }

    async delete(id: number): Promise<string>{
        await this.usuarioRepository.delete(id);

        return 'OK';
    }
}
