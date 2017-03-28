import { Recipe, Ingredient } from './recipe';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'recipe-detail',
  template:`
  <label>Name: </label>
  <input [(ngModel)]="recipe.name" placeholder="name">
  <label>Description: </label>
  <input [(ngModel)]="recipe.description" placeholder="description">
  <label>Steps: </label>
  <input [(ngModel)]="recipe.steps" placeholder="steps">
  <br>
  <label>Ingredients</label>
  <ul>
    <li *ngFor="let ingredient of recipe.ingredients">
      <input [(ngModel)]="ingredient.name" placeholder="name">
    </li>
  </ul>

  `
})

export class editComponent{
  @Input() recipe: Recipe;
}
