import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthContextProvider } from "./src/context/AuthContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/i18n";

export default function App() {
  return (
    <AuthContextProvider>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <StatusBar backgroundColor="#2C6E49" barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </I18nextProvider>
    </AuthContextProvider>
  );
}
