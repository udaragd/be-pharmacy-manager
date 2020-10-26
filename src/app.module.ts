import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserTypeModule } from './user-type/user-type.module';
import { UserTypeController } from './user-type/user-type.controller';
@Module({
  imports: [UserModule, UserTypeModule],
  controllers: [AppController, UserController, UserTypeController],
  providers: [AppService],
})
export class AppModule { }
