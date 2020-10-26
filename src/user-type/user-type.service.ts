import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { UserType } from './user-type.entity';
import { CreateUserTypeDto } from './dto/create-user-type.dto';

@Injectable()
export class UserTypeService {
    constructor(
        @Inject('UserTypeRepository')
        private readonly userTypeRepository: typeof UserType
    ) { }

    async findAll(): Promise<UserType[]> {
        const userTypes = await this.userTypeRepository.findAll();
        if (!userTypes) {
            throw new HttpException(
                'User types are not found',
                HttpStatus.NOT_FOUND,
            );
        }
        return userTypes;
    }

    async findOne(id: number): Promise<UserType> {
        const userType = await this.userTypeRepository.findByPk(id);
        if (!userType) {
            throw new HttpException(
                'User type with given id not found',
                HttpStatus.NOT_FOUND,
            );
        }
        return userType;
    }
}
