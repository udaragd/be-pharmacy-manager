import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    type: string;

    @Column()
    active: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;
}