import { ErrorCustom } from './../utils/error';
import { RoleModel } from './../Types/Admin';
const RoleValidate = (body: RoleModel) => {
    const { _id, name } = body;
    if (_id) throw ErrorCustom.BadRequest('Không thể chỉnh sửa ID');
    if (name && name.length < 2) throw ErrorCustom.BadRequest('Cần 2 kí tự trở lên');
    return true;
};

const combineValidate = {
    RoleValidate,
};
export default combineValidate;
