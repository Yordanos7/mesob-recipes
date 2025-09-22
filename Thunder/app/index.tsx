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
// Removed duplicate import of Link
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
    <View className="flex-1 p-4 bg-orange-400 align-center items-center">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Link href="/search" className="mt-8 p-4  rounded-lg">
        <Image
          source={require("../assets/images/mesobe.png")}
          style={{ width: 300, height: 200, marginTop: 70 }}
        />
      </Link>
    </View>
  );
}
