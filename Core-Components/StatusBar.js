import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

const CCStatusBar = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 60 }}>
      <StatusBar backgroundColor="green" barStyle="dark-content" />

      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} />
    </View>
  );
};

export default CCStatusBar;
