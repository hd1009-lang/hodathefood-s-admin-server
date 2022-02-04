import { HttpStatusCode } from './../Types/HttpCode';
import { NextFunction } from 'express';
import { ErrorCustom } from '../utils/error';
import { Request, Response } from 'express';
import MemberValidate from '../validates/member.validate';
import MemberService from '../services/member.service';
const MemberController = {
    create: async (req: Request, res: Response, next: NextFunction) => {
        await MemberValidate.MemberCreate(req.body);
        await MemberService.create(req.body);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công' });
    },
    getList: async (req: Request, res: Response) => {
        const result = await MemberService.getList();
        return res.status(HttpStatusCode.OK).json({ data: result });
    },
};
export default MemberController;
