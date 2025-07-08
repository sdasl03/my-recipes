import { Component, inject } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: true
})
export class SearchComponent {


  filteredRecipesList: string[] = [];

  recipeService = inject(RecipesService);
}
