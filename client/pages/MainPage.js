import React from "react";
import { Text, View, Button } from "react-native";

const MainPage = ({ navigation }) => {
  return (
    <View>
      <Text>MainPage</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Camera")}
      />
    </View>
  );
};

export default MainPage;
