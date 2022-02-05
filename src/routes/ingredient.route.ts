import express from 'express';
import CateIngredientController from '../components/cate-ingredient.controller';
import IngredientController from '../components/ingredient.controller';
import asyncWrapper from '../utils/wrapper';

const router = express.Router();

router.post('/cate/create', asyncWrapper(CateIngredientController.create));

router.get('/all', asyncWrapper(IngredientController.getAllList));
export default router;
