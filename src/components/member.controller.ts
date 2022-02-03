import { NextFunction } from 'express';
import { ErrorCustom } from '../utils/error';
import { Request, Response } from 'express';
const MemberController = {
    login: async (req: Request, res: Response, next: NextFunction) => {
        throw ErrorCustom.BadError('Login fail');
    },
};
export default MemberController;
