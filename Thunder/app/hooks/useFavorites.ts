import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RecipeDetails } from "../types/recipe";

const FAVORITES_KEY = "favorite_recipes";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<RecipeDetails[]>([]);
  useEffect(() => {
    const loadingFavorites = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
        if (jsonValue !== null) {
          setFavorites(JSON.parse(jsonValue));
        }
      } catch (error) {
        console.log(`Failed to load Favorites:`, error);
      }
    };
    loadingFavorites();
  }, []);

  const saveFavorites = async (newFavorites: RecipeDetails[]) => {
    try {
      setFavorites(newFavorites);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.log(
        `Failed to save Favorites to AsyncStorage for react native`,
        error
      );
    }
  };
  const addToFavorites = (recipe: RecipeDetails) => {
    const exists = favorites.find((fav) => fav.id === recipe.id);
    if (!exists) {
      const newFavorites = [...favorites, recipe];
      saveFavorites(newFavorites);
    } else {
      console.log("Recipe already in Favorites");
    }
  };

  // here in remove function for recipe you can use if and else
  const removeFromFavorites = (id: number) => {
    const newFavorites = favorites.filter((fav) => fav.id !== id);
    saveFavorites(newFavorites);
  };

  return { favorites, addToFavorites, removeFromFavorites };
}
