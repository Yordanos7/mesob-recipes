const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export async function fetchRecipes(query: string) {
  if (!query) return [];

  const url = `${BASE_URL}search.php?s=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

export async function fetchRecipeDetails(id: string) {
  if (!id) return null;

  const url = `${BASE_URL}lookup.php?i=${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
}
