import { View, Text, StyleSheet } from "react-native";
import Greet from "./Component/Greet";
import Box from "./Component/Box";

export default function App() {
  return (
    <View style={style.container}>
      <Box style={style.box}>wfg</Box>
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, padding: 50, backgroundColor: "plum", },
  box: {backgroundColor:"pink",borderWidth:1}
  
});
