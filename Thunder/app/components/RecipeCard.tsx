import { View, Image, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

interface RecipesCardProps {
  recipe: {
    id: number;
    title: string;
    image: string;
  };
}

const RecipeCard = ({ recipes }: RecipesCardProps) => {
  return (
    <View className="flex bg-white rounded-lg m-1 p-8">
      <Image
        source={{ uri: recipes.image }}
        className="w-full h-40 rounded-lg"
        resizeMode="cover"
      />
    </View>
  );
};

export default RecipeCard;
