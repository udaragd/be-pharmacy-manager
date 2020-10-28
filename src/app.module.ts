import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserTypeModule } from './user-type/user-type.module';
import { UserTypeController } from './user-type/user-type.controller';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { SharedModule } from './shared/shared.module';
@Module({
  imports: [UserModule, UserTypeModule, SharedModule, AuthModule],
  controllers: [AppController, UserController, UserTypeController, AuthController],
  providers: [AppService],
})
export class AppModule { }
