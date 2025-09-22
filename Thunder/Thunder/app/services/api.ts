import { RecipeDetails, RecipeSummery } from "../types/recipe";

import Constants from "expo-constants";
const SPOONACULAR_API_KEY = Constants.expoConfig?.extra?.spoonacularApiKey;
const BASE_URL = "https://api.spoonacular.com/recipes";

// first i will create the function for fetchrecipes
export async function fetchRecipes(query: string): Promise<RecipeSummery[]> {
  if (!query) return [];
  const url = `${BASE_URL}/complexSearch?query=${encodeURIComponent(query)}&number=10&apiKey=${SPOONACULAR_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

export async function fetchRecipeDetails(id: string) {
  const url = `${BASE_URL}/${id}/information?apiKey=${SPOONACULAR_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Failed to fetch recipe details for id ${id}:`, error);
    return error;
  }
}
