import { Observable } from "rxjs/internal/Observable";
import { Recipe } from "../interfaces/Recipe";
import { of } from "rxjs/internal/observable/of";
import { Injectable } from "@angular/core";
import { Ingredient } from "../interfaces/Ingredient";
import { IngredientCategoryEnum } from "../enum/IngredientCategoryEnum";
import { UnitsEnum } from "../enum/UnitsEnum";

@Injectable({
  providedIn: 'root'
})
export class MockRecipesService {
    cookieIngredients: Ingredient[] = [
        {
            name: "Farinha",
            category: IngredientCategoryEnum.PLANT_BASED,
            quantity: 150,
            units: UnitsEnum.G
        },
        {
            name: "Manteiga",
            category: IngredientCategoryEnum.ANIMAL_DERIVED,
            quantity: 115,
            units: UnitsEnum.G
        },
        {
            name: "Whey Powder",
            category: IngredientCategoryEnum.ANIMAL_DERIVED,
            quantity: 30,
            units: UnitsEnum.G
        },
        {
            name: "Baunilha",
            category: IngredientCategoryEnum.PLANT_BASED,
            optional: true
        },
        {
            name: "Açúcar Mascavado",
            category: IngredientCategoryEnum.PLANT_BASED,
            quantity: 80,
            units: UnitsEnum.G
        },
        {
            name: "Açúcar Branco",
            category: IngredientCategoryEnum.PLANT_BASED,
            quantity: 70,
            units: UnitsEnum.G
        },
        {
            name: "Sal",
            category: IngredientCategoryEnum.SPICES,
            quantity: 3,
            units: UnitsEnum.G
        },
        {
            name: "Bicarbonato de Sódio",
            category: IngredientCategoryEnum.OTHERS,
            quantity: 3,
            units: UnitsEnum.G
        },
];
cookieSteps:  string[] =[
    "Derreter a manteiga num tacho até dourar.",
    "Misturar numa bacia os açúcares com a manteiga dourada até ficar homogeneo.",
    "Adicionar à mistura essência de baunilha a gosto.",
    "Adicionar à mistura a proteína de whey.",
    "Incorporar a farinha aos poucos.",
    "Adicionar o chocolate a gosto.",
    "Pré-aquecer o forno a 180 Cº",
    "Formar pequenas bolas de massa.",
    "Assar no forno até o fundo dos biscoitos dourar",
    "Retirar do forno e do tabuleiro para esfriar.",
    "Quando o biscoito endurecer está pronto."
];
    recipesList: Recipe[] = [
    {name:"Protein Cookies",
        ingredients:this.cookieIngredients,
        steps:this.cookieSteps,
        category: IngredientCategoryEnum.VEGETARIAN
    }
  ];

  constructor() {
   }

  getRecipes(): Observable<Recipe[]>{
    return of(this.recipesList);
  }
}