import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import useFavorites from "./hooks/useFavorites";
import { RecipeDetails } from "./types/recipe";
import { Link } from "expo-router";

const Fav = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  const renderItem = ({ item }: { item: RecipeDetails }) => (
    <Link href={`/${item.idMeal}`} asChild>
      <TouchableOpacity style={styles.recipeCard}>
        <Image source={{ uri: item.strMealThumb }} style={styles.recipeImage} />
        <View style={styles.recipeInfo}>
          <Text style={styles.recipeTitle}>{item.strMeal}</Text>
          <TouchableOpacity
            onPress={() => removeFromFavorites(item.idMeal)}
            style={styles.removeButton}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Recipes</Text>
      {favorites.length === 0 ? (
        <Text>No favorite recipes yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.idMeal}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingTop: 50, // Added padding to avoid content being hidden by status bar
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  recipeCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  recipeInfo: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default Fav;
