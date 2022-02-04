import { HttpStatusCode } from './../Types/HttpCode';
import { NextFunction } from 'express';
import { ErrorCustom } from '../utils/error';
import { Request, Response } from 'express';
import MemberValidate from '../validates/member.validate';
import MemberService from '../services/member.service';

const MemberController = {
    login: async (req: Request, res: Response) => {
        MemberValidate.MemberLogin(req.body);
        const result = await MemberService.login(req.body);
        res.cookie('refresh_token', result.refreshToken, {
            httpOnly: true,
            path: '/api/members/refresh_token',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        });
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', token: result.refreshToken });
    },
    getAccessToken: async (req: Request, res: Response) => {
        const rf_token = await req.cookies.refresh_token;
        if (!rf_token) throw ErrorCustom.UnAuthorized('Vui lòng đăng nhập');
        const accessToken = MemberService.getAccessToken(rf_token);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', token: accessToken });
    },
    logout: async (req: Request, res: Response) => {
        res.clearCookie('refresh_token', { path: '/api/members/refresh_token' });
        return res.status(HttpStatusCode.OK).json({ message: 'Đã đăng xuất' });
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        await MemberValidate.MemberCreate(req.body);
        const result = await MemberService.create(req.body);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
    getList: async (req: Request, res: Response) => {
        const result = await MemberService.getList();
        return res.status(HttpStatusCode.OK).json({ data: result });
    },
    updateMember: async (req: Request, res: Response) => {
        const idMember = req.params.id;
        const { _id, membername, ...contentUpdate } = req.body;
        await MemberValidate.MemberUpdate(contentUpdate);
        await MemberService.updateMember(idMember, contentUpdate);
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công' });
    },
};
export default MemberController;
