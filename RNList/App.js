import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import PokemonList from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <FlatList
          data={PokemonList}
          renderItem={({ item }) => {
            // console.log(item.id);
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardtext}>{item.type}</Text>
                <Text style={styles.cardtext}>{item.name}</Text>
              </View>
            );
          }}
          // horizontal
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No item found</Text>}
          ListHeaderComponent={
            <Text style={styles.headertext}> Pokimon List </Text>
          }
          ListFooterComponent={
            <Text style={styles.footertext}>End of text</Text>
          }
        />

        {/* {PokemonList.map((pokimon) => {
          return (
            <View style={styles.card} key={pokimon.id}>
              <Text style={styles.cardtext}>{pokimon.type}</Text>
              <Text style={styles.cardtext}>{pokimon.name}</Text>
            </View>
          );
        })} */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",

    paddingTop: StatusBar.currentHeight,
  },
  scrollview: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    // marginBottom: 16,
  },
  cardtext: {
    fontSize: 30,
  },
  headertext: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 12,
  },
  footertext: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 12,
  },
});
