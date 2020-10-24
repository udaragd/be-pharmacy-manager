import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    // findOne(id: number): User {
    //     return this.users.find(user => user.id == id);
    // }
}
