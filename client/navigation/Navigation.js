import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "../pages/MainPage";
import RegisterLogin from "../pages/RegisterLogin";
import Camera from "../pages/Camera";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="RegisterLogin" component={RegisterLogin} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
};

export default Navigation;
