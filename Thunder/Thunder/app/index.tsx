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

  const goToDetails = (id: number) => {
    // here is what am sey naviget to detail page
    router.push(`/${id}`);
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <TextInput
        placeholder="Search recipes..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={onSearch}
        className="border p-2 rounded mb-4 border-e-red-700"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => goToDetails(item.id)}>
              <RecipeCard recipe={item} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
}
