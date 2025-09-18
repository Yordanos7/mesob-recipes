import { useRouter, useSearchParams } from "expo-router/build/hooks";
import React, { useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { RecipeDetails } from "./types/recipe";

export default function RecipeDetailScreen() {
  const { id } = useSearchParams(); // this is to get dynamic
  const router = useRouter();
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);
}
