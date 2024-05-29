import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const CCModal = () => {
  const [isModalVariable, setIsModalVariable] = useState(false);

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button
        title="Press"
        onPress={() => setIsModalVariable(true)}
        color="midnightblue"
      />

      <Modal visible={isModalVariable}>
        <View style={{ backgroundColor: "blue", flex: 1, padding: 60 }}>
          <Text> Model content</Text>

          <Button
            title="close"
            color="midnightblue"
            onPress={() => setIsModalVariable(false)}
          // animationType="slide"
          // presentationStyle="pageSheet"
          />
        </View>
      </Modal>
    </View>
  );
};

export default CCModal;
