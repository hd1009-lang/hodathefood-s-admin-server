import { ErrorCustom } from './../utils/error';
import Members from '../models/Member.model';
import { MemberModel } from './../Types/Admin';
const MemberService = {
    create: async (body: MemberModel) => {
        try {
            const { idRole, name, password, username } = body;
            const members = await Members.count();

            const id = members + '-' + 'member' + username;
            const newMember = await Members.create({ ...body, _id: id });
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
