import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @Inject('UserRepository')
        private readonly userRepository: typeof User
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    // findOne(id: number): User {
    //     return this.users.find(user => user.id == id);
    // }
}
