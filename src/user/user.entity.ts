import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    first_name: string;

    @Column({ length: 25 })
    last_name: string;

    @Column({ length: 25 })
    email: string;

    @Column({ length: 25 })
    password: string;

    @Column()
    active: boolean;

    @Column()
    type_id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;
}