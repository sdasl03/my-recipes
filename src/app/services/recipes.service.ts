import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private list: string[] = [];

  constructor() {
   }

  getRecipes(): string[]{
    return this.list;
  }
}
