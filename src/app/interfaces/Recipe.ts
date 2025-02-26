import { IngredientCategoryEnum } from "../enum/IngredientCategoryEnum";
import { Ingredient } from "./Ingredient";

export interface Recipe {
    name: string;
    ingredients: Ingredient[];
    steps: string[];
    category: IngredientCategoryEnum;
}