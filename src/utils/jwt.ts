import jwt from 'jsonwebtoken';
import { MemberModel } from './../Types/Admin';

const createRefreshToken = (payload: MemberModel) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN as string, { expiresIn: '7d' });
};
const createAccessToken = (payload: MemberModel) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN as string, { expiresIn: '1d' });
};

const Token = {
    createRefreshToken,
    createAccessToken,
};

export default Token;
