import { ErrorCustom } from './../utils/error';
import { MemberModel } from '../Types/Admin';
import Helper from '../utils/Regex';
import Roles from '../models/Role.model';
import Members from '../models/Member.model';
const MemberCreate = async (body: MemberModel) => {
    const { name, password, idRole, username } = body;
    if (username!.length < 5) throw ErrorCustom.BadRequest('Username phải hơn 6 ký tự');
    const member = await Members.findOne({ username: username });
    if (member) throw ErrorCustom.BadRequest('Đã tồn tại');
    if (name!.length < 2) throw ErrorCustom.BadRequest('Tên phải hơn 2 ký tự');
    if (password!.length < 8) throw ErrorCustom.BadRequest('Mật khẩu phải hơn 8 ký tự');
    Helper.checkCountAtLeast(Helper.Regex.NUMBER, 2, password!, 'password', 'ký tự số');
    Helper.checkCountAtLeast(Helper.Regex.SPECIAL, 2, password!, 'password', 'ký tự đặc biệt');
    Helper.checkCountAtLeast(Helper.Regex.UPPERCASE, 2, password!, 'password', 'ký tự viết hoa');
    const role = await Roles.findById(idRole);
    if (!role) throw ErrorCustom.BadRequest('Chức vụ không tồn tại');
    return true;
};

const MemberValidate = {
    MemberCreate,
};
export default MemberValidate;
