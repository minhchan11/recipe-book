export class Recipe {
  constructor(public name: string, public description: string, public steps: string, public ingredients: Ingredient[], public favorite: boolean) { }
}

export class Ingredient {
  constructor(public name: string) { }
}
