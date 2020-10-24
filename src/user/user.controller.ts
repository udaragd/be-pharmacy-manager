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
    getOne(@Param() param): string {
        return 'this.usersService.findOne(param.id)';
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): string {
        return createUserDto.first_name;
    }

    @Delete(':id')
    delete(@Param() param): string {
        return `Delete user based on id ${param.id}`;
    }

    @Put(':id')
    update(@Param() param, @Body() updateUserDto: UpdateUserDto): string {
        return `Update user based on id ${param.id}. Delete user first name is ${updateUserDto.first_name}`;
    }
}
