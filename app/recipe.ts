export class Recipe {
  constructor(public name: string, public description: string, public steps: string, public ingredients: Ingredient[]) { }
}

export class Ingredient {
  constructor(public name: string) { }
}
