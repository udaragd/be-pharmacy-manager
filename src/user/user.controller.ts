import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { UserRO } from './interfaces/user.interface';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) { }

    @Get()
    async getAll(): Promise<UserRO[]> {
        return await this.usersService.findAll();
    }

    @Get(':id')
    async getOne(@Param() param): Promise<UserRO> {
        return await this.usersService.findOne(param.id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<UserRO> {
        return await this.usersService.create(createUserDto);
    }

    @Put(':id')
    async update(@Param() param, @Body() updateUserDto: UpdateUserDto): Promise<UserRO> {
        return await this.usersService.update(param.id, updateUserDto);
    }

    @Delete(':id')
    async delete(@Param() param): Promise<UserRO> {
        return await this.usersService.delete(param.id);
    }
}
