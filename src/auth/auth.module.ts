import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from './../database/database.module';
import { UserModule } from 'src/user/user.module';
import { userProvider } from './../user/user.provider';
import { JwtStrategy } from './jwt-strategy';

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [AuthController],
    providers: [AuthService, ...userProvider, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule { }
