import Ingredients from '../models/Ingredient.model';
import { ErrorCustom } from '../utils/error';

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
};

export default IngredientService;
