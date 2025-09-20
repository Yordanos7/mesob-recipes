import { View, Text, FlatList } from "react-native";
import React from "react";

type Ingerdient = {
  id: number;
  orginal: string;
};

type IngerdientListProps = {
  ingerdients: Ingerdient[];
};

const IngredientList: React.FC<IngerdientListProps> = ({ inngredients }) => {
  return (
    <View className="flex-1 bg-green-400 p-4 my-5">
      <Text>IngredientList For this material:</Text>
      <FlatList
        data={ingerdients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.orginal}</Text>}
      />
    </View>
  );
};

export default IngredientList;
