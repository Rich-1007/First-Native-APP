import React from "react";

import { View, StyleSheet, Text, SafeAreaView, Platform } from "react-native";

const CCPlatformSpecificCode = () => {
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
    paddingTop: Platform.OS === "android" ? 60 : 10,
  },
  box: {},
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 40,
        
      },
    }),

    
  },
});

export default CCPlatformSpecificCode;
