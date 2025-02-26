import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interfaces/Recipe';
import { IngredientCategoryEnum } from '../enum/IngredientCategoryEnum';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {
  private recipeList: Recipe[] = [];
  currentRecipe : Recipe = {name:"",ingredients:[],steps:[""],category:IngredientCategoryEnum.OMNIVORE};
  //private currentRecipe: Recipe;
  name: string = "";
  ingredients: string[] = ["5 Batatas"];
  steps: string[] = ["Cortar as batatas em cubos"];

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      value => {
        this.recipeList = value;
      }
    );
  }

}
