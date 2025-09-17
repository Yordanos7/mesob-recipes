import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const hello = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Text className="font-bold text-yellow-500 text-2xl">hello</Text>
    </View>
  );
};

export default hello;
