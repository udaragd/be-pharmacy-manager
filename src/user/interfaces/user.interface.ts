export interface UserData {
    id?: number;
    first_name: string;
    last_name?: string;
    email: string;
    password: string;
    active: boolean;
    type_id: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export interface UserRO extends UserData {
    id: number;
}