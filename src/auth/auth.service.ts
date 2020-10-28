import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './../user/user.entity';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { compare } from 'bcrypt';
import { UserLoginRequestDto } from './dto/user-login-request.dto';
import { JwtPayload } from '../../dist/auth/jwt-payload.model';
import { ConfigService } from './../shared/config/config.service';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {

    private readonly jwtPrivateKey: string;

    constructor(
        @Inject('UserRepository')
        private readonly userRepository: typeof User,
        private readonly configService: ConfigService
    ) {
        this.jwtPrivateKey = this.configService.jwtConfig.privateKey;
    }

    async login(userLoginRequestDto: UserLoginRequestDto) {
        const email = userLoginRequestDto.email;
        const password = userLoginRequestDto.password;

        const user = await this.getUserByEmail(email);
        if (!user) {
            throw new HttpException(
                'Invalid email or password.',
                HttpStatus.BAD_REQUEST,
            );
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            throw new HttpException(
                'Invalid email or password.',
                HttpStatus.BAD_REQUEST,
            );
        }

        const token = await this.signToken(user);
        return new UserLoginResponseDto(token);
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne<User>({
            where: { email },
        });
    }

    async signToken(user: User) {
        const payload: JwtPayload = {
            email: user.email,
        };

        return sign(payload, this.jwtPrivateKey, {});
    }

}
