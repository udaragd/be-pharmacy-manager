import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, BelongsTo } from 'sequelize-typescript';

@Table({
  tableName: 'user_type',
})
export class UserType extends Model<UserType> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @Column({ type: DataType.CHAR(45) })
  type: string;

  @Column({ allowNull: false })
  is_active: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}