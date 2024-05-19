import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ route, navigation }) {
  const { name, Post } = route.params;

  // const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Button
        title="Update the Data"
        onPress={() =>
          navigation.setParams({
            name: "mota",
            Post: "PM",
          })
        }
      />
      <Text style={styles.text}> About {name} </Text>
      <Text style={styles.text}> Post {Post} </Text>

      <Button
        title="Go back with data from about"
        onPress={() => navigation.navigate("Home", { name: "Data from About" })}
      />
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
  },
});
