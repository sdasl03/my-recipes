import { Component, inject } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { RecipesService } from '../services/recipes.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SearchComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

  filteredList: string[] = [];
  recipeService = inject(RecipesService);

  recipes$ = this.recipeService.getRecipes();

  filter(filter: string){
    this.recipes$=this.recipeService.filterResults(filter);
  }
}
