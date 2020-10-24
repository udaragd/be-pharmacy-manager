import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
// import { CreateUserTypeDto } from './dto/create-user-type.dto';
// import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { UserTypeService } from './user-type.service';
import { UserTypeRO } from './interfaces/user-type.interface';

@Controller('user-type')
export class UserTypeController {
    constructor(private readonly userTypeService: UserTypeService) { }

    @Get()
    async getAll(): Promise<UserTypeRO[]> {
        return await this.userTypeService.findAll();
    }
}
