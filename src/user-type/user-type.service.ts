import { Injectable, Inject } from '@nestjs/common';
import { UserType } from './user-type.entity';

@Injectable()
export class UserTypeService {
    constructor(
        @Inject('UserTypeRepository')
        private readonly userTypeRepository: typeof UserType
    ) { }

    async findAll(): Promise<UserType[]> {
        return await this.userTypeRepository.findAll();
    }
}
