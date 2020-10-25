import { Module } from '@nestjs/common';
import { UserTypeController } from './user-type.controller';
import { UserTypeService } from './user-type.service';
import { DatabaseModule } from './../database/database.module';
import { userTypeProvider } from './user-type.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [UserTypeController],
    providers: [UserTypeService, ...userTypeProvider],
    exports: [UserTypeService],
})
export class UserTypeModule { }
