export interface UserTypeData {
    id?: number;
    type: string;
    is_active: boolean;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export interface UserTypeRO extends UserTypeData {
    id: number;
}