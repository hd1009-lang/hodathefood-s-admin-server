import express from 'express';
import CateIngredientController from '../components/cate-ingredient.controller';
import IngredientController from '../components/ingredient.controller';
import asyncWrapper from '../utils/wrapper';

const router = express.Router();

router.post('/cate/create', asyncWrapper(CateIngredientController.create));

router.get('/all', asyncWrapper(IngredientController.getAllList));

router.post('/create', asyncWrapper(IngredientController.create));
router.post('/update/:id', asyncWrapper(IngredientController.update));
router.get('/remove/:id', asyncWrapper(IngredientController.remove));
export default router;
