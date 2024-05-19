import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({ navigation, route }) {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Home Screen </Text>
      <Button
        title="Go to About"
        onPress={() => {
          navigation.navigate("About", {
            name: "Hricheak",
            Post: "IAS",
          });
        }}
      />
      <Text style={styles.text}> {route.params?.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: " bold",
    marginBottom: 16,
    margin: 30,
  },
});
