import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";

const MainPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#bde0fe" }}>
      <View
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "500", color: "#2a9d8f" }}>
          Camera App
        </Text>

        <Button
          title="Register"
          onPress={() => {
            navigation.navigate("RegisterLogin");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
