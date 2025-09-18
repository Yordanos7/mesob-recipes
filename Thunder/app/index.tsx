import { Text, View } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import "@/global.css";
import { fetchRecipes } from "./services/api";
import { Stack } from "expo-router";
export default function Index() {
  const recipes = fetchRecipes("chicken");
  console.log(recipes);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-1 justify-center items-center">
        <Link href="/../components/RecipeCard" className="mt-8 p-4  rounded-lg">
          <Image
            source={require("../assets/images/mesobe.png")}
            style={{ width: 300, height: 200 }}
          />
        </Link>
      </View>
    </SafeAreaView>
  );
}
