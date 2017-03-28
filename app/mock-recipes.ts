import { Recipe, Ingredient } from './recipe';

export var RECIPES: Recipe[] = [
  new Recipe("cake","add flour", "These are the steps... blah blah blah blah", [new Ingredient("Carrots"), new Ingredient("Cabbage")], true),
  new Recipe("Pie","add flour", "These are the steps... blah blah blah blah", [new Ingredient("Carrots"), new Ingredient("Cabbage")], false),
  new Recipe("Pizza","add flour", "These are the steps... blah blah blah blah", [new Ingredient("Carrots"), new Ingredient("Cabbage")], false),
  new Recipe("Hotdogs","add flour", "These are the steps... blah blah blah blah", [new Ingredient("Carrots"), new Ingredient("Cabbage")], false),
  new Recipe("Potatoes","add flour", "These are the steps... blah blah blah blah", [new Ingredient("Carrots"), new Ingredient("Cabbage")], false),
  new Recipe("Other Pizza","add flour", "These are the steps... blah blah blah blah", [new Ingredient("Carrots"), new Ingredient("Cabbage")], true)
];
