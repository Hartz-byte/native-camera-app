import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import axios from "axios";

const RegisterLogin = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // login/register switch
  const loginOpen = () => {
    setUserData({
      email: "",
      password: "",
      confirmPassword: "",
    });

    setError("");

    setOpen(!open);
  };

  // input email change
  const emailChange = (text) => {
    setUserData({ ...userData, email: text });
  };

  // input password change
  const passwordChange = (text) => {
    setUserData({ ...userData, password: text });
  };

  // input confirm password change
  const confirmPasswordChange = (text) => {
    setUserData({ ...userData, confirmPassword: text });
  };

  // handle register
  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://192.168.29.24:3002/auth/",
        userData
      );

      setUserData({
        email: "",
        password: "",
        confirmPassword: "",
      });

      setError("");

      setOpen(!open);

      console.log("Registration successful:", response.userData);
    } catch (error) {
      setError(error.message);
      console.error("Registration failed:", error);
    }
  };

  // handle login
  const handleLogin = async (event) => {
    event.preventDefault();

    if (!userData.email || !userData.password) {
      console.log("empty");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.29.24:3002/auth/login",
        userData
      );

      setUserData({
        email: "",
        password: "",
        confirmPassword: "",
      });

      setError("");

      console.log("Login successful:");
    } catch (error) {
      setError(error.message);
      console.error("Login failed:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#bde0fe" }}>
      {/* go back button */}
      <View style={{ marginTop: 50, marginLeft: 20, width: "50px" }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Go Back</Text>
        </Pressable>
      </View>

      {!open ? (
        // register
        <View style={{ alignItems: "center", marginTop: 250, gap: 30 }}>
          {/* register text */}
          <Text style={{ fontSize: 30, fontWeight: "500", color: "#2a9d8f" }}>
            Register
          </Text>

          {/* email input */}
          <TextInput
            placeholder="Enter email"
            value={userData.email}
            onChangeText={emailChange}
            style={{
              width: "70%",
              height: 40,
              backgroundColor: "#fefae0",
              padding: 10,
              borderRadius: 7,
            }}
          />

          {/* password input */}
          <TextInput
            placeholder="Enter password"
            value={userData.password}
            onChangeText={passwordChange}
            style={{
              width: "70%",
              height: 40,
              backgroundColor: "#fefae0",
              padding: 10,
              borderRadius: 7,
            }}
          />

          {/* confirm password input */}
          <TextInput
            placeholder="Enter password"
            value={userData.confirmPassword}
            onChangeText={confirmPasswordChange}
            style={{
              width: "70%",
              height: 40,
              backgroundColor: "#fefae0",
              padding: 10,
              borderRadius: 7,
            }}
          />

          <View style={{ display: "flex", flexDirection: "row", gap: 6 }}>
            <Text>Already have an account?</Text>

            <Pressable onPress={loginOpen}>
              <Text style={{ color: "#2a9d8f", fontWeight: "bold" }}>
                Log in
              </Text>
            </Pressable>
          </View>

          {/* submit button */}
          <Button title="Register" onPress={handleRegister} />

          {error ? (
            <View>
              <Text style={{ color: "red" }}>{error}</Text>
            </View>
          ) : null}
        </View>
      ) : (
        // login
        <View style={{ alignItems: "center", marginTop: 250, gap: 30 }}>
          {/* login text */}
          <Text style={{ fontSize: 30, fontWeight: "500", color: "#2a9d8f" }}>
            Login
          </Text>

          {/* email input */}
          <TextInput
            placeholder="Enter email"
            value={userData.email}
            onChangeText={emailChange}
            style={{
              width: "70%",
              height: 40,
              backgroundColor: "#fefae0",
              padding: 10,
              borderRadius: 7,
            }}
          />

          {/* password input */}
          <TextInput
            placeholder="Enter password"
            value={userData.password}
            onChangeText={passwordChange}
            style={{
              width: "70%",
              height: 40,
              backgroundColor: "#fefae0",
              padding: 10,
              borderRadius: 7,
            }}
          />

          <View style={{ display: "flex", flexDirection: "row", gap: 6 }}>
            <Text>Don't have an account?</Text>

            <Pressable onPress={loginOpen}>
              <Text style={{ color: "#2a9d8f", fontWeight: "bold" }}>
                Register
              </Text>
            </Pressable>
          </View>

          {/* login button */}
          <Button title="Login" onPress={handleLogin} />

          {error ? (
            <View>
              <Text style={{ color: "red" }}>{error}</Text>
            </View>
          ) : null}
        </View>
      )}
    </SafeAreaView>
  );
};

export default RegisterLogin;
