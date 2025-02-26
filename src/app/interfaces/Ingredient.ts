import { IngredientCategoryEnum } from "../enum/IngredientCategoryEnum";
import { UnitsEnum } from "../enum/UnitsEnum";

export interface Ingredient {
    name: string;
    category: IngredientCategoryEnum;
    quantity?: number;
    units?: UnitsEnum;
    optional?: boolean;
}