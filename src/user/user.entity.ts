import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo, IsEmail, Unique, Default, NotNull } from 'sequelize-typescript';
import { UserType } from '../user-type/user-type.entity';

@Table({
  tableName: 'user',
})
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Unique
  @IsEmail
  @Column
  email: string;

  @Column
  password: string;

  @Column
  @ForeignKey(() => UserType)
  type_id: number;

  @Column
  is_active: boolean;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @BelongsTo(() => UserType)
  user_type: UserType;
}