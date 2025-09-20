import { View, Image, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

interface RecipeCardProps {
  recipe: {
    id: number;
    title: string;
    image: string;
  };
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <View className="flex bg-white rounded-lg m-1 p-8">
      <Image
        source={{ uri: recipe.image }}
        className="w-full h-40 rounded-lg"
        resizeMode="cover"
      />
      <Text className="text-lg font-bold mt-2">{recipe.title}</Text>
    </View>
  );
};

export default RecipeCard;

// this screen is for the recipe card
