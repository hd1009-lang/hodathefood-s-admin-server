import { HttpStatusCode } from './../Types/HttpCode';
import { Request, Response } from 'express';
import IngredientService from '../services/ingredient.service';
const IngredientController = {
    getAllList: async (req: Request, res: Response) => {
        const page = req.query.page || 0;

        const result = await IngredientService.getAllList(page as string);
        res.status(HttpStatusCode.OK).json({ message: 'Ok', data: result });
    },
};
export default IngredientController;
