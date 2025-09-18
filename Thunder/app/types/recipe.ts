export interface RecipeSummery {
  id: string;
  titel: string;
  image: string;
}

export interface RecipeDetails {
  id: number;
  titel: string;
  image: string;
  extendedIngredients: {
    id: number;
    orginal: string;
  }[]; // i need clear what this is fir
  instructions: string;
}
