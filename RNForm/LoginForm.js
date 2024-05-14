import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={styles.form}>
        <Image
          // source={require("mota/RNForm/assets/adaptive-icon.png")}
          style={{ height: 200, width: 200, alignSelf: "center" }}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChange={setUsername}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          onChange={setPassword}
        />

        <Button title="Login" onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingTop: 80,
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: " black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});
