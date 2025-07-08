import { Component, inject, input, output } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  imports: [RouterLink],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {
  isFavourite = input<boolean>(false);
  toggleFavourite = output<string>();

  recipe = input.required<Recipe>();
  recipeService = inject(RecipesService);

}
