import { Request, Response } from 'express';
import CateIngredientService from '../services/cate-ingredient.service';
import { HttpStatusCode } from '../Types/HttpCode';
import Ingredient from '../validates/ingredient.validate';
const CateIngredientController = {
    create: async (req: Request, res: Response) => {
        const { name } = req.body;
        Ingredient.CateIngredientValidate(name);
        const result = await CateIngredientService.create(name);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
};

export default CateIngredientController;
