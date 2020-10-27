import { Inject, Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { genSalt, hash, compare } from 'bcrypt';
import { UserRO } from './interfaces/user.interface';
@Injectable()
export class UserService {

    constructor(
        @Inject('UserRepository')
        private readonly userRepository: typeof User
    ) { }

    async findAll(): Promise<User[]> {
        const users = await this.userRepository.findAll();
        if (!users) {
            throw new HttpException(
                'User types are not found',
                HttpStatus.NOT_FOUND,
            );
        }
        return users;
    }

    async findOne(id: number): Promise<User> {
        const user = await this.userRepository.findByPk(id);
        if (!user) {
            throw new HttpException(
                'User type with given id not found',
                HttpStatus.NOT_FOUND,
            );
        }
        return user;
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            const user = new User();
            user.first_name = createUserDto.first_name;
            user.last_name = createUserDto.last_name;
            user.email = createUserDto.email.trim().toLowerCase();
            user.is_active = createUserDto.is_active;
            user.type_id = createUserDto.type_id;

            const salt = await genSalt(10);
            user.password = await hash(createUserDto.password, salt);

            const userData = await user.save();
            return userData;

        } catch (err) {
            if (err.original.constraint === 'user_email_key') {
                throw new HttpException(
                    `User with email '${err.errors[0].value}' already exists`,
                    HttpStatus.CONFLICT,
                );
            }

            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.findByPk<User>(id);
        if (!user) {
            throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
        }

        user.first_name = updateUserDto.first_name || user.first_name;
        user.last_name = updateUserDto.last_name || user.last_name;
        user.email = updateUserDto.email || user.email;
        user.is_active = updateUserDto.is_active || user.is_active;
        user.type_id = updateUserDto.type_id || user.type_id;

        try {
            const updatedUserData = await user.save();
            return updatedUserData;
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: string) {
        const user = await this.userRepository.findByPk<User>(id);
        if (!user) {
            throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
        }
        await user.destroy();
        return user;
    }
}
