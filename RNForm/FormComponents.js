import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";
import { useState } from "react";

export default function FormComponents() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
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

        <TextInput
          placeholder="Message"
          style={[styles.input, styles.multiline]}
          multiline
        />

        <Text style={styles.text}> My name is {name} </Text>

        <View style={styles.switchcontanner}>
          <Text style={styles.switchtext}> Dark mode</Text>
          <Switch
            value={isDarkMode}
            onChange={() => setIsDarkMode((prev) => !prev)}
            trackColor={{ false: "red", true: "blue" }}
            thumbColor="green"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchcontanner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  switchtext: {
    fontSize: 32,
  },
});
