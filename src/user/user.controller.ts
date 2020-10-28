import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { UserRO } from './interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) { }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getAll(): Promise<UserRO[]> {
        return await this.usersService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    async getOne(@Param() param): Promise<UserRO> {
        return await this.usersService.findOne(param.id);
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async create(@Body() createUserDto: CreateUserDto): Promise<UserRO> {
        return await this.usersService.create(createUserDto);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    async update(@Param() param, @Body() updateUserDto: UpdateUserDto): Promise<UserRO> {
        return await this.usersService.update(param.id, updateUserDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async delete(@Param() param): Promise<UserRO> {
        return await this.usersService.delete(param.id);
    }
}
