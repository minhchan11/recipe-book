import { Component } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html'
})

export class AppComponent{
  recipes = RECIPES;
  toggleIngedients(recipe) {
    if(recipe.ingredientForm)
    {
      recipe.ingredientForm = false;
    }
    else
    {
      recipe.ingredientForm = true;
    }
  }
}
