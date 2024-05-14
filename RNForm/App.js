import React from "react";
import FormComponents from "./FormComponents";
import { View } from "react-native";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <FormComponents /> */}

      <LoginForm />
    </View>
  );
};

export default App;
