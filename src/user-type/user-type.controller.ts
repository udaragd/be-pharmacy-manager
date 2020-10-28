import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { UserTypeRO } from './interfaces/user-type.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('user-types')
export class UserTypeController {
    constructor(private readonly userTypeService: UserTypeService) { }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getAll(): Promise<UserTypeRO[]> {
        return await this.userTypeService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    async getOne(@Param() param): Promise<UserTypeRO> {
        return await this.userTypeService.findOne(param.id);
    }
}
