import { View, Image, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { RecipeSummery } from "../types/recipe";

interface RecipeCardProps {
  recipe: RecipeSummery;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <View className="flex bg-white rounded-lg m-1 p-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: recipe.strMealThumb }}
          className="w-full h-40 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-lg font-bold mt-2">{recipe.strMeal}</Text>
      </ScrollView>
    </View>
  );
};

export default RecipeCard;

// this screen is for the recipe card
