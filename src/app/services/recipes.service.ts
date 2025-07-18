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

  constructor() {this.defaultValue =this.recipesList()?.find((val)=>{val.id==='r003'});
  this.currentRecipe.set(this.defaultValue);
 }

  readonly recipesList = signal(recipes);
  readonly filteredRecipeList = signal<Recipe[]>([]);
  defaultValue = this.recipesList()?.find((val)=>{val.id==='r003'});
  readonly currentRecipe = signal<Recipe| undefined>(this.defaultValue|| undefined);


  getRecipes(): Observable<Recipe[]> {
    return of(recipes);
  }

  getRecipeDetails(id: string): Observable<RecipeDetails> {
    return of(recipeDetailList.find((recipe)=>recipe.id===id)??recipeDetailList[0]);
  }

  filterResults(filter: string) : Observable<Recipe[]>{
    return  this.getRecipes().pipe(
      map(recipes => recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(filter.toLowerCase()))
      )
    );
  }

  selectCurrentRecipe(recipe : string){
    const cur = this.recipesList()?.find((val)=>val.id===recipe);
    if(cur){
      this.currentRecipe.set(cur);
    }
  }

}
