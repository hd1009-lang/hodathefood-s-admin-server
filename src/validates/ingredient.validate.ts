import { ErrorCustom } from '../utils/error';

const CateIngredientValidate = (name: string) => {
    if (!name) throw ErrorCustom.BadRequest('Yêu cầu nhập đầy đủ');
    if (name && name.length < 2) {
        throw ErrorCustom.BadRequest('Tên thể loại phải từ 2 ký tự');
    }
};

const Ingredient = {
    CateIngredientValidate,
};

export default Ingredient;
