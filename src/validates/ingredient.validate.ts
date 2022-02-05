import { IngredientModel } from './../Types/Ingredient';
import { ErrorCustom } from '../utils/error';
import CateIngredients from '../models/CategoryIngredient.model';

const CateIngredientValidate = (name: string) => {
    if (!name) throw ErrorCustom.BadRequest('Yêu cầu nhập đầy đủ');
    if (name && name.length < 2) {
        throw ErrorCustom.BadRequest('Tên thể loại phải từ 2 ký tự');
    }
};

const IngredientValidate = async (body: IngredientModel) => {
    const { idCate, name, nutrition } = body;
    const cate = await CateIngredients.findById(idCate);
    if (!cate) throw ErrorCustom.BadRequest('Thể loại không tồn tại');
    if (name!.length < 3) throw ErrorCustom.BadRequest('Tên phải dài hơn 3 ký tự');
    if (!nutrition!.calo && !nutrition!.fat && !nutrition!.protein && !nutrition!.carb)
        throw ErrorCustom.BadRequest('Phải có ít nhất 1 dinh dưỡng');
    return true;
};
const IngredientUpdateValidate = async (body: IngredientModel) => {
    const { idCate, name, nutrition } = body;
    if (idCate) {
        const cate = await CateIngredients.findById(idCate);
        if (!cate) throw ErrorCustom.BadRequest('Thể loại không tồn tại');
    }
    if (name && name.length < 3) throw ErrorCustom.BadRequest('Tên phải dài hơn 3 ký tự');
    if (nutrition && (!nutrition.calo || !nutrition.fat || !nutrition.protein || !nutrition.carb))
        throw ErrorCustom.BadRequest('Cập nhật đầy đủ thông tin');
    return true;
};
const Ingredient = {
    CateIngredientValidate,
    IngredientValidate,
    IngredientUpdateValidate,
};

export default Ingredient;
