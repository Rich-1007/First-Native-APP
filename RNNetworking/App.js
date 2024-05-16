import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [postlist, setPostlist] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [posttitle, setPosttitle] = useState("");
  const [postbody, setPostbody] = useState("");

  const [isposting, setIsposting] = useState(false);

  const fetchData = async (limit = 1) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostlist(data);
  };

  const addPost = async () => {
    setIsposting(true);

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: posttitle,
        body: postbody,
      }),
    });

    const newPost = await response.json();
    setPostlist([newPost, ...postlist]);
    setPosttitle("");
    setPostbody("");
    setIsposting(false);
  };

  useEffect(() => {
    fetchData();
    setIsloading(false);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(10);
    setRefreshing(false);
  };

  if (isloading) {
    return (
      <SafeAreaView style={styles.isloadingContainer}>
        <View>
          <ActivityIndicator color="blue" size={"large"} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.postContainer}>
        <TextInput
          placeholder="Enter Title"
          style={styles.postInput}
          value={posttitle}
          onChangeText={setPosttitle}
        />
        <TextInput
          placeholder="Enter Body"
          style={styles.postInput}
          value={postbody}
          onChangeText={setPostbody}
        />
        <Button
          title={isposting ? "Adding..." : "Add Post."}
          disabled={isposting}
          onPress={addPost}
        />
      </View>
      <View style={styles.listcontainer}>
        <FlatList
          data={postlist}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titletext}>{item.title}</Text>
                <Text style={styles.bodytext}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListEmptyComponent={
            <Text style={styles.headerText}>No Post Found</Text>
          }
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={
            <Text style={styles.footertext}>End of list</Text>
          }
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f5f5f5",
    backgroundColor: "plum",
    paddingTop: StatusBar.currentHeight,
  },
  listcontainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,

    borderWidth: 1,
  },

  titletext: {
    fontSize: 30,
  },
  bodytext: {
    fontSize: 24,
    color: "#666666",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footertext: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  isloadingContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 20,
  },
  postContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 16,
    padding: 16,
  },
  postInput: { fontSize: 16 },
});
