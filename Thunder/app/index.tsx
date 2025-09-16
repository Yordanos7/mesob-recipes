import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          color: "red",
          fontSize: 30,
        }}
      >
        Hello world!
      </Text>
    </View>
  );
}
