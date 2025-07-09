import { Component, inject } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { AsyncPipe } from '@angular/common';
import { RecipeItemComponent } from "../recipe-item/recipe-item.component";
import { FavouriteService } from '../services/favourite.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, RecipeItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

  filteredList: string[] = [];
  recipeService = inject(RecipesService);
  favouriteService = inject(FavouriteService);

  recipes$ = this.recipeService.getRecipes();

  filter(filter: string) {
    this.recipes$ = this.recipeService.filterResults(filter);
  }
}
