import { UserType } from './user-type.entity';

export const userTypeProvider = [{ provide: 'UserTypeRepository', useValue: UserType }];