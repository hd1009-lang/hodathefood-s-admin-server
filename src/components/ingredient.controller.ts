import { HttpStatusCode } from './../Types/HttpCode';
import { Request, Response } from 'express';
import IngredientService from '../services/ingredient.service';
import Ingredient from '../validates/ingredient.validate';
import Ingredients from '../models/Ingredient.model';
const IngredientController = {
    getAllList: async (req: Request, res: Response) => {
        const page = req.query.page || 0;
        const result = await IngredientService.getAllList(page as string);
        res.status(HttpStatusCode.OK).json({ message: 'Ok', data: result });
    },
    create: async (req: Request, res: Response) => {
        const { _id, ...content } = req.body;
        await Ingredient.IngredientValidate(content);
        const result = await IngredientService.create(content);
        res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
    update: async (req: Request, res: Response) => {
        const { _id, ...content } = req.body;
        const idIngredient = req.params.id;
        await Ingredient.IngredientUpdateValidate(content);
        await IngredientService.update(content, idIngredient);
        res.status(HttpStatusCode.OK).json({ message: 'Thành công' });
    },
    remove: async (req: Request, res: Response) => {
        const id = req.params.id;
        await IngredientService.remove(id);
        res.status(HttpStatusCode.OK).json({ message: 'Đã xong' });
    },
};
export default IngredientController;
