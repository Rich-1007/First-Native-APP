import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CCStyleSheet = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>StyleSheet API</Text>
    // </View>

    <View style={styles.container}>
      <View style={[styles.Box, styles.lightblue]}>
        <Text style={styles.text}>Light Blue Box</Text>
      </View>
      <View style={[styles.Box, styles.lightgreen]}>
        <Text>Light Green Box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "pink", padding: 60 },
  Box: { width: 300, height: 300, padding: 20 },
  lightblue: { backgroundColor: "lightblue" },
  lightgreen: { backgroundColor: "lightgreen" },
  text: { color: "white" },
});

export default CCStyleSheet;
