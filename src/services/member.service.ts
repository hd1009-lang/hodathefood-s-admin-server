import jwt from 'jsonwebtoken';
import { ErrorCustom } from './../utils/error';
import Members from '../models/Member.model';
import { MemberModel } from './../Types/Admin';
import Token from '../utils/jwt';
const MemberService = {
    login: async (body: MemberModel) => {
        try {
            const { membername, password } = body;
            const member = await Members.findOne({ membername: membername });
            if (member!.password !== password) throw new Error('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin');
            const payload = {
                _id: member!._id,
                membername: member!.membername,
                idRole: member!.idRole,
            };
            const refreshToken = Token.createRefreshToken(payload);
            return { member: { ...member, password: '' }, refreshToken };
        } catch (error) {
            throw ErrorCustom.BadRequest((error as Error).message);
        }
    },
    getAccessToken: (rf_token: string) => {
        try {
            const token = jwt.verify(rf_token, process.env.REFRESH_TOKEN as string, (err, user: any) => {
                if (err) throw new Error('Vui lòng đăng nhập lại');
                const accessToken = Token.createAccessToken({ _id: user._id, membername: user.membername, idRole: user.idRole });
                return accessToken;
            });
            return token;
        } catch (error) {
            throw ErrorCustom.UnAuthorized((error as Error).message);
        }
    },
    create: async (body: MemberModel) => {
        try {
            const { membername } = body;
            const members = await Members.count();

            const id = members + '-' + 'member' + membername;
            const password = Math.floor(1000 + Math.random() * 9000);
            const newMember = await Members.create({ ...body, _id: id, password: password });
            return newMember;
        } catch (error) {
            throw ErrorCustom.BadRequest((error as Error).message);
        }
    },
    getList: async () => {
        try {
            const listMember = await Members.find({}).populate('idRole');
            return listMember;
        } catch (error) {
            throw ErrorCustom.BadRequest((error as Error).message);
        }
    },
};
export default MemberService;
