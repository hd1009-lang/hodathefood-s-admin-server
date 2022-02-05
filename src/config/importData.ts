import Ingredients from '../models/Ingredient.model';
import { IngredientModel } from '../Types/Ingredient';
import Helper from '../utils/regex';

const importData = async (data: IngredientModel[], idCate: string) => {
    try {
        const handleData = data.map((item, index) => {
            const { name, ...nutrition } = item;
            return {
                name,
                _id: index + '@' + Helper.removeVietnameseTones(name!).split(' ').join('-'),
                idCate: idCate,
                nutrition: {
                    ...nutrition,
                },
            };
        });
        const result = await Ingredients.insertMany(handleData);
        console.log('okokoko');

        console.log(result);
    } catch (error) {
        console.log((error as Error).message);
    }
};

export default importData;
