import React from "react";
import { View, Image, ImageBackground, Text } from "react-native";

const logoImg = require("../assets/adaptive-icon.png");

const CCImage = () => {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>





      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "http://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}




      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image Text</Text>
      </ImageBackground>



    </View>
  );
};

export default CCImage;
