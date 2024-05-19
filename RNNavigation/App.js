import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#6a51ae" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            //
            // <Text>Hello</Text>
            //
            <Pressable onPress={() => alert("Menu Button Pressed")}>
              <Text style={{ color: "#fff", fontSize: 20 }}> Menu </Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#e8e",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",

            //
            // headerStyle: { backgroundColor: "#6a51ae" },
            // headerTintColor: "#fff",
            // headerTitleStyle: { fontWeight: "bold" },
            // headerRight: () => (
            //   <Pressable onPress={() => alert("Menu Button Pressed")}>
            //     <Text style={{ color: "#fff", fontSize: 20 }}> Menu </Text>
            //   </Pressable>
            // ),
            // contentStyle: {
            //   backgroundColor: "#e8e",
            // },
            //
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: "Guest" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
