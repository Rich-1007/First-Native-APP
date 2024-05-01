import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

const DynamicUI = () => {
  const windowHight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.contaner}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHight > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: "white", fontSize: windowWidth > 500 ? 50 : 30 },
          ]}
        >
          Welcome!
        </Text>
      </View>
    </View>
  );
};

// console.log({ windowHight, windowWidth });

const styles = StyleSheet.create({
  contaner: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "lightblue",
  },
});
export default DynamicUI;
