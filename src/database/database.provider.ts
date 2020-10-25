import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { UserType } from '../user-type/user-type.entity';

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'pharmacy-manager',
            });
            sequelize.addModels([User, UserType]);
            await sequelize.sync();
            return sequelize;
        },
    },
];