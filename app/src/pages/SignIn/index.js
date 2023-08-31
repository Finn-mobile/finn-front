import React, { useContext, useState } from "react";
import * as Animatable from "react-native-animatable";
import { TextInput } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { AuthContext } from "../../context/AuthContext";

import { useTranslation } from 'react-i18next';


export default function SignIn() {
  const { updateUser, updateToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const { t } = useTranslation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>{t('signInPage.welcome')}</Text>
          <Text style={styles.message}>{t('signInPage.welcomeMessage')}</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>{t('signInPage.email')}</Text>
          <TextInput
            placeholder={t('signInPage.emailPlaceholder')}
            style={styles.input}
            onChange={(e) => setEmail(e.nativeEvent.text)}
          />

          <Text style={styles.title}>{t('signInPage.password')}</Text>
          <TextInput
            placeholder={t('signInPage.passwordPlaceholder')}
            style={styles.input}
            onChange={(e) => setPassword(e.nativeEvent.text)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              const response = await fetch("http://192.168.3.14:3000/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-type": "application/json" },
              });
              if (response.status !== 200) {
                Alert.alert(t('signInPage.signInError'));
                return;
              }
              const { token, user } = await response.json();
              updateToken(token);
              updateUser(user);
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>{t('signInPage.signInButtonLabel')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerText}>{t('signInPage.signUpButtonLabel')}</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C6E49",
  },

  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    padding: "5%",
    paddingEnd: "5%",
  },

  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },

  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },

  title: {
    fontSize: 20,
    marginTop: 28,
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2C6E49",
    width: "80%",
    borderRadius: 25,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  registerText: {
    color: "#0A1128",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
