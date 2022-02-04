export interface RoleModel {
    _id?: string;
    name?: string;
    key?: string;
}

export interface MemberModel {
    _id: string;
    name?: string;
    username?: string;
    password?: string;
    idRole?: string;
}
