import { HttpStatusCode } from './../Types/HttpCode';
import { Request, Response } from 'express';
import Validate from '../validates/role.validate';
import RoleService from '../services/role.service';
const RoleController = {
    created: async (req: Request, res: Response) => {
        Validate.RoleValidate(req.body);
        const data = await RoleService.create(req.body.name);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Đã tạo', data });
    },
};
export default RoleController;
