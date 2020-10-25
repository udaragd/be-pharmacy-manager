import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserType } from '../user-type/user-type.entity';

@Table({
  tableName: 'user',
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @Column({ type: DataType.CHAR(45) })
  first_name: string;

  @Column({ type: DataType.CHAR(45) })
  last_name: string;

  @Column({ type: DataType.CHAR(45) })
  email: string;

  @Column({ type: DataType.CHAR(45) })
  password: string;

  @Column({ allowNull: false })
  active: boolean;

  @Column({ allowNull: false })
  @ForeignKey(() => UserType)
  type_id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @BelongsTo(() => UserType)
  user_type: UserType;
}