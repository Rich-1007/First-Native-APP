import React from "react";
import { View, Button } from "react-native";

const CCButton = () => {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>


      <Button
        title="Press"
        onPress={() => console.log("Button press!")}
        color="midnightblue"
      />



    </View>
  );
};

export default CCButton;
