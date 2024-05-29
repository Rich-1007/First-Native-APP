import React from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
const logoImg = require("../assets/adaptive-icon.png");

const CCPrassable = () => {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button
        title="Press"
        onPress={() => console.log("Button Pressed!")}
        color="blue"
      />
      <Pressable onPress={() => console.log("Image Pressed")}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>




      <Pressable onPress={() => console.log("Text Pressed")}>
        <Text>
          Dear Dipen, I hope this message finds you well. I've sent you a
          LinkedIn request to connect I'm exploring Automation testing in
          selenium roles and would appreciate your guidance. Can you give me any
          advice for finding jobs? Are there any internship for your time and
          consideration. finding Automation testing jobs? Are there any
          internship or fresher positions available in your company or through
          your network? Do you know of any consultancies that arrange interviews
          for freshers in Hyderabad or Bangalore? Lastly, any essential tips you
          could share to enhance my chances of landing my first job? Thank you
          for your time and consideration.
        </Text>
      </Pressable>
    </View>
  );
};

export default CCPrassable;
