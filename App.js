import { View } from "react-native";
import Greet from "./Component/Greet";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 70, backgroundColor: "plum" }}>
      <Greet name="Rich" />
      <Greet name="Manoj" />
      <Greet name="Rich" />
      <Greet name="Manoj" />
    </View>
  );
}
