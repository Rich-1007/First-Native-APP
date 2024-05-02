import React from "react";

import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const CCSafeAreaView = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.contaner}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },

  contaner: {
    backgroundColor: "plum",
    flex: 1,
  },
  box: {
    
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CCSafeAreaView;
