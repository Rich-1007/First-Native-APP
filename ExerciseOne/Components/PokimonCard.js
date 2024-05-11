import { View, Text, StyleSheet, Platform, Image } from "react-native";

export default function PokemonCard({
  name,
  moves,
  image,
  type,
  hp,
  weaknesses,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
      </View>
      <Image
        source={image}
        accessibilityLabel={`${name}`}
        style={styles.image}
        resizeMode="contain"
      />

      <View>
        <Text style={styles.type}>{type}</Text>
      </View>

      <View>
        <Text style={styles.moves}>moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text style={styles.moves}>Weakness : {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      android: {
        elevation: 40,
      },
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  type: {
    fontWeight: "bold",
    fontSize: 19,
    color: "red",
  },
  moves: {
    fontStyle: "italic",
    fontSize: 16,
    color: "gray",
  },
});


