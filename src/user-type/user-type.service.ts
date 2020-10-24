import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './user-type.entity';

@Injectable()
export class UserTypeService {

    constructor(@InjectRepository(UserType) private userTypeRepository: Repository<UserType>) { }

    async findAll(): Promise<UserType[]> {
        return await this.userTypeRepository.find();
    }

    // findOne(id: number): User {
    //     return this.users.find(user => user.id == id);
    // }
}
