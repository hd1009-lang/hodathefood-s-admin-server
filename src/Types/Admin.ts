export interface RoleModel {
    _id?: string;
    name?: string;
    key?: string;
    action?: string[];
}

export interface MemberModel {
    _id: string;
    name?: string;
    membername?: string;
    password?: string;
    idRole?: string;
}
