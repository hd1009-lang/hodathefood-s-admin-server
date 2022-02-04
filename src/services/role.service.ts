import { ErrorCustom } from './../utils/error';
import Roles from '../models/Role.model';
const RoleService = {
    create: async (name: string) => {
        try {
            const roles = await Roles.find();
            const indexRole = roles.findIndex((role) => role.name! === name);
            if (indexRole >= 0) throw new Error('Đã tồn tại');
            const key = name.split(' ').join('-').toLowerCase();
            const _id = roles.length + 1 + '-' + key;
            const newRole = Roles.create({ _id, name, key });
            return newRole;
        } catch (error) {
            throw ErrorCustom.BadRequest((error as Error).message);
        }
    },
};

export default RoleService;
