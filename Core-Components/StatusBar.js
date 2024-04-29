import React from "react";
import { StatusBar, View } from "react-native";

const CCStatusBar = () => {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <StatusBar 
      backgroundColor="yellow" 
      barStyle="dark-content" 
      // hidden
      />
    </View>
  );
};

export default CCStatusBar;
