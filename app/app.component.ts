import { Component } from '@angular/core';

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
  recipes: Recipe[] = [
    new Recipe("cake","add flour"),
    new Recipe("cake","add flour"),
    new Recipe("cake","add flour"),
  ];
}

export class Recipe {
  constructor(public name: string, public description: string) { }
}
