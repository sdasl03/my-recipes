import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../interfaces/Recipe';
import { Ingredient } from '../interfaces/Ingredient';
import { MockRecipesService } from './mock-recipes.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private list: Recipe[] = [];

  constructor(private mockRecipeService:MockRecipesService) {
   }

  getRecipes(): Observable<Recipe[]>{
    return of(this.mockRecipeService.recipesList);
    //return of(this.list);
  }
}
