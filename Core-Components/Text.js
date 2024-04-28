import React from "react";
import { View, Text } from "react-native";

const CCText = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "lightblue",
          padding: 60,
        }}
      >
        <Text>Hello World</Text>
        <Text style={{ color: "white" }}>
          Hricheak <Text style={{ color: "red" }}>Ghosh</Text>
        </Text>
      </View>
    </View>
  );
};

export default CCText;
