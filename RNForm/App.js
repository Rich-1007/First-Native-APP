import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"

        autoCapitalize="none"
        autoCorrect={false}

        // secureTextEntry
        // keyboardType="numeric"
      />
      <Text style={styles.text}> My name is {name} </Text>
    </SafeAreaView>
  );
}
