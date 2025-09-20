export interface RecipeSummery {
  id: string;
  title: string;
  image: string;
}

export interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  extendedIngredients: {
    id: number;
    orginal: string;
  }[]; // i need clear what this is fir
  instructions: string;
}
