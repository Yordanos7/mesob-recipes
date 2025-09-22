import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Link } from "expo-router";

const Loading = () => {
  return (
    <View>
      <Text>Loading</Text>
      <View className="flex-1 justify-center items-center">
        <Link href="/[id].tsx" className="mt-8 p-4  rounded-lg">
          <Image
            source={require("../assets/images/mesobe.png")}
            style={{ width: 300, height: 200 }}
          />
        </Link>
      </View>
    </View>
  );
};

export default Loading;
