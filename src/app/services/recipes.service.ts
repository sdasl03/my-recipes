import { Injectable, signal } from '@angular/core';
import { Recipe, RecipeDetails } from '../models/recipe.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { recipeDetailList, recipes } from '../models/mock-objects.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  readonly recipesList = toSignal(this.getRecipes());
  readonly recipeDetailsList = toSignal(this.getRecipeDetails());
  readonly filteredRecipeList = signal<Recipe[]>([]);
  getRecipes(): Observable<Recipe[]> {
    return of(recipes);
  }

  getRecipeDetails(): Observable<RecipeDetails[]> {
    return of(recipeDetailList);
  }

  filterResults(filter: string) : Observable<Recipe[]>{
    return  this.getRecipes().pipe(
      map(recipes => recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(filter))
      )
    );
  }

}
