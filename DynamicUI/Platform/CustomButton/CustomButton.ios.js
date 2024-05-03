import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = () => {
  return (
    <Pressable
      onPress={() => alert("Pressed")}
      style={{
        marginHorizontal: 20,
        marginTop: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <Text style={{ color: "green", fontSize: 24 }}> Press Me </Text>
    </Pressable>
  );
};

export default CustomButton;
