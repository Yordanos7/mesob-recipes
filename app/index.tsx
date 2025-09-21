import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import "@/global.css";
import { fetchRecipes } from "./services/api";
import { Stack } from "expo-router";
import { useState } from "react";
import { RecipeSummery } from "./types/recipe";
import RecipeCard from "./components/RecipeCard";
export default function Index() {
  const [recipes, setRecipes] = useState<RecipeSummery[]>([]);
  const [query, setQuery] = useState("");

  const onSearch = async () => {
    try {
      if (!query) return;
      const result = await fetchRecipes(query);
      setRecipes(result);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const goToDetails = (id: string) => {
    // here is what am sey naviget to detail page
    router.push(`/${id}`);
  };

  return (
    <View className="flex-1 p-4 bg-white ">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="my-10">
          <Text className="text-2xl font-bold mb-2 text-orange-400 ">
            Find your recipe
          </Text>
          <TextInput
            placeholder="Search recipes..."
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={onSearch}
            className="border p-2 rounded mb-4 border-e-red-700"
          />

          <FlatList
            data={recipes}
            keyExtractor={(item) => item.idMeal}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => goToDetails(item.idMeal)}>
                <RecipeCard recipe={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
