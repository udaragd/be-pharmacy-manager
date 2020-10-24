import { Module } from '@nestjs/common';
import { UserTypeController } from './user-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeService } from './user-type.service';
import { UserType } from './user-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserType])],
    controllers: [UserTypeController],
    providers: [UserTypeService],
    exports: [UserTypeService],
})
export class UserTypeModule { }
