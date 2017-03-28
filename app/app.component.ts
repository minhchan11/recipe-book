import { Component } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

@Component({
    selector: 'app-root',
    template: `<div class="container">
      <div class="row">
        <div class="col-md-3" *ngFor = "let recipe of recipes">
          <h4>{{recipe.name}}</h4>
          <h5>{{recipe.description}}</h5>
        </div>
      </div>
    </div>`
})

export class AppComponent{
  recipes = RECIPES;
}
