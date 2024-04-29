import React from "react";
import { Button, View, Alert } from "react-native";

const CCStatusBar = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 60 }}>
      <Button
        title="Alert-1"
        color="orange"
        onPress={() => Alert.alert("invalid Data")}
      />

      <Button
        title="Alert-2"
        color="orange"
        onPress={() => Alert.alert("invalid Data", "DOB incurrect")}
      />

      <Button
        title="Alert-3"
        color="orange"
        onPress={() =>
          Alert.alert("invalid Data", "DOB incurrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Clicked"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Clicked"),
            },
          ])
        }
      />
    </View>
  );
};

export default CCStatusBar;
