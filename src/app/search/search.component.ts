import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../interfaces/Recipe';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  data: Recipe[] = [];
//TODO needs to be checked
  searchQuery: string = '';
  filteredData: Recipe[] = [...this.data];

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(values => {
      debugger
      this.data = values;
    }
    )
  }

  search(): void {
    this.filteredData = this.data.filter(item => {
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    }
    );
  }

}
