import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthContextProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#2C6E49" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
