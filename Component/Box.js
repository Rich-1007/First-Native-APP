import { View, Text } from "react-native";

export default function Box({ Children, style }) {
  return (
    <View >
      <Text style={style}>{Children}</Text>
    </View>
  );
}
