import Ingredients from '../models/Ingredient.model';
import { IngredientModel } from '../Types/Ingredient';
import { ErrorCustom } from '../utils/error';
import Helper from '../utils/regex';

const IngredientService = {
    getAllList: async (page: string) => {
        const limit = 10;
        const perPage = Number(page) * limit;

        try {
            const result = await Ingredients.find().skip(perPage).limit(limit);
            return result;
        } catch (error) {
            throw ErrorCustom.BadRequest((error as Error).message);
        }
    },
    create: async (content: IngredientModel) => {
        try {
            const { name, nutrition, idCate } = content;
            const id = Math.floor(Math.random() * 10) + '@' + Helper.removeVietnameseTones(name!).split(' ').join('-');
            const newIngredient = await Ingredients.create({ _id: id, name, nutrition, idCate });
            return newIngredient;
        } catch (error) {
            throw ErrorCustom.BadRequest((error as Error).message);
        }
    },
    update: async (content: IngredientModel, idIngredient: string) => {
        try {
            const ingredient = await Ingredients.findById(idIngredient);
            if (!ingredient) throw new Error('Không tồn tại');
            await ingredient.updateOne({
                ...content,
            });
        } catch (error) {
            throw ErrorCustom.BadRequest((error as Error).message);
        }
    },
    remove: async (id: string) => {
        try {
            await Ingredients.findByIdAndRemove(id);
        } catch (error) {
            throw ErrorCustom.BadRequest((error as Error).message);
        }
    },
};

export default IngredientService;
