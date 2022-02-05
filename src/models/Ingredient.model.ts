import mongoose from 'mongoose';
import { IngredientModel } from '../Types/Ingredient';

type IIngredientModel = IngredientModel & mongoose.Document;

const IngredientSchema = new mongoose.Schema({
    _id: { type: String, required: true, trim: true },
    name: {
        type: String,
        required: true,
    },
    idCate: {
        type: String,
        ref: 'cate-ingredients',
    },
    nutrition: {
        calo: { type: Number, required: true },
        protein: { type: Number, required: true },
        fat: { type: Number, required: true },
        carb: { type: Number, required: true },
    },
});

const Ingredients = mongoose.model<IIngredientModel>('ingredients', IngredientSchema);
export default Ingredients;
