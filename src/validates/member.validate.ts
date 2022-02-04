import { ErrorCustom } from './../utils/error';
import { MemberModel } from '../Types/Admin';
import Helper from '../utils/regex';
import Roles from '../models/Role.model';
import Members from '../models/Member.model';
const MemberCreate = async (body: MemberModel) => {
    const { name, idRole, membername } = body;
    if (membername!.length < 5) throw ErrorCustom.BadRequest('membername phải hơn 6 ký tự');
    const member = await Members.findOne({ membername: membername });
    if (member) throw ErrorCustom.BadRequest('Đã tồn tại');
    if (name!.length < 2) throw ErrorCustom.BadRequest('Tên phải hơn 2 ký tự');
    const role = await Roles.findById(idRole);
    if (!role) throw ErrorCustom.BadRequest('Chức vụ không tồn tại');
    return true;
};
const MemberUpdate = async (body: MemberModel) => {
    const { name, password, idRole } = body;
    if (!name && !password && !idRole) throw ErrorCustom.BadRequest('Nhập nội dung thay đổi');
    if (name && name.length < 2) throw ErrorCustom.BadRequest('Tên phải hơn 2 ký tự');
    if (password) {
        if (password!.length < 8) throw ErrorCustom.BadRequest('Mật khẩu phải hơn 8 ký tự');
        Helper.checkCountAtLeast(Helper.Regex.NUMBER, 2, password!, 'password', 'ký tự số');
        Helper.checkCountAtLeast(Helper.Regex.SPECIAL, 2, password!, 'password', 'ký tự đặc biệt');
        Helper.checkCountAtLeast(Helper.Regex.UPPERCASE, 2, password!, 'password', 'ký tự viết hoa');
    }
    if (idRole) {
        const role = await Roles.findById(idRole);
        if (!role) throw ErrorCustom.BadRequest('Chức vụ không tồn tại');
    }
    return true;
};
const MemberLogin = async (body: MemberModel) => {
    const { membername, password } = body;
    if (membername!.length < 5 || !password) {
        throw ErrorCustom.BadRequest('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin');
    }
};

const MemberValidate = {
    MemberCreate,
    MemberLogin,
    MemberUpdate,
};
export default MemberValidate;
