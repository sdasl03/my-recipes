import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  favourites = signal<string[]>([]);

  isFavourite(id: string): Signal<boolean> {
    return computed(()=>(this.favourites().find((r)=>r===id)!= null));
  }

  toggleFavourite(id: string) {
    let index=this.favourites().findIndex((recipeId)=>recipeId===id);
    if(index == -1){
      this.favourites.set([...this.favourites(),id]);
    }else {
      this.favourites().splice(index,1);
      this.favourites.set(this.favourites());
    }
  }

}
