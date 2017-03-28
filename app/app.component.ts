import { Component } from '@angular/core';
import { Recipe, Ingredient } from './recipe';
import { RECIPES } from './mock-recipes';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html'
})

export class AppComponent{
  recipes = RECIPES;
  isFavorite(recipe){
    if(recipe.favorite)
    {
      return "bg-info";
    }
  };
}
