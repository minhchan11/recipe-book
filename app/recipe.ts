export class Recipe {
  ingredientForm: boolean = false;
  constructor(public name: string, public description: string, public steps: string, public ingredients: string[]) { }
}
