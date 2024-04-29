import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CCStyleSheet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "pink", padding: 60 },
  title: { color: "white" },
});

export default CCStyleSheet;