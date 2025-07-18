import { Component, computed, inject, input, output } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe.model';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recipe-item',
  imports: [RouterLink,MatIconModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {
  isFavourite = input<boolean>(false);
  toggleFavourite = output<string>();

  recipe = input.required<Recipe>();

  getLink(): string{
    return 'details/'+this.recipe().id;
  }
}
