export class CreateUserDto {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly password: string;
    readonly is_active: boolean;
    readonly type_id: number;
}