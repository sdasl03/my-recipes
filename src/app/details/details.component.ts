import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';
import { Recipe, RecipeDetails } from '../models/recipe.model';

@Component({
  selector: 'app-details',
  imports: [AsyncPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  standalone: true
})
export class DetailsComponent {
  private recipeId = inject(ActivatedRoute).snapshot.paramMap.get("id") ?? "";
  service = inject(RecipesService);
  protected recipe$ = inject(RecipesService).getRecipeDetails(this.recipeId);
  protected recipe!: RecipeDetails;

  constructor() {
    if (this.recipeId != undefined) {
      this.service.getRecipeDetails(this.recipeId).subscribe(
        (val)=>this.recipe=val
      );

    }

  }
}
