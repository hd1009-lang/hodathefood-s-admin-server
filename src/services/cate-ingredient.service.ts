import { ErrorCustom } from './../utils/error';
import CateIngredients from '../models/CategoryIngredient.model';
import Helper from '../utils/regex';
const CateIngredientService = {
    create: async (name: string) => {
        try {
            const cate = await CateIngredients.findOne({ name: name });
            if (cate) throw new Error('Đã tồn tại');
            const count = await CateIngredients.count();
            const key = Helper.removeVietnameseTones(name).split(' ').join('-');
            const id = count + '-' + key;
            const newCate = await CateIngredients.create({ _id: id, name: name, key: key });
            return newCate;
        } catch (error) {
            throw ErrorCustom.BadRequest((error as Error).message);
        }
    },
};
export default CateIngredientService;
