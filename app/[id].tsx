import { useRouter, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { RecipeDetails } from "./types/recipe";
import { fetchRecipeDetails } from "./services/api";
import RecipeCard from "./components/RecipeCard";
import useFavorites from "./hooks/useFavorites";
import { Stack } from "expo-router";
export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some((f) => f.idMeal === id);

  useEffect(() => {
    const getRecipeDetails = async () => {
      if (!id) {
        router.push("/");
        return;
      }
      try {
        setLoading(true);
        const data = await fetchRecipeDetails(id as string);
        setRecipe(data);
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    getRecipeDetails();
  }, [id]);

  const toggleFavorite = () => {
    if (!recipe) return;
    if (isFavorite) {
      removeFromFavorites(recipe.idMeal);
    } else {
      addToFavorites(recipe);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!recipe) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Recipe not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <RecipeCard recipe={recipe} />
      <TouchableOpacity onPress={toggleFavorite} className="p-4">
        <Text className="text-center text-blue-500">
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Text>
      </TouchableOpacity>
      <Text className="p-4">{recipe.strInstructions}</Text>
    </ScrollView>
  );
}
