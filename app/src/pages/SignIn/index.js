import React, { useContext, useState } from "react";
import * as Animatable from "react-native-animatable";
import { TextInput } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { AuthContext } from "../../context/AuthContext";

import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";

export default function SignIn() {
  const { updateUser, updateToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeLanguage = value => {
    i18n.changeLanguage(value)
    .then( () => {
        console.log("Linguagem alterada")
    })
    .catch( (err) => {
      console.log(err)
    })
  }

  const navigation = useNavigation();

  const { t,i18n } = useTranslation();

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
              const response = await fetch("http://192.168.18.7:3000/login", {
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

          <View style={styles.languages}>

            <TouchableOpacity 
              onPress={() => changeLanguage('en') }
              style={[
                styles.langButton, {
                borderColor: '#2C6E49',
                backgroundColor: '#2C6E49',
                borderRadius: 100
                }
              ]}
            >
              <Image 
                source={require('../../assets/usa.png')}
                style={[
                  styles.flag,{
                    height: 35,
                    width: 35
                  }
                ]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => changeLanguage('pt') }
              style={[
                styles.langButton, {
                  borderColor: '#2C6E49',
                  backgroundColor: '#2C6E49',
                  borderRadius: 100
                }
              ]}
            >
              <Image 
                source={require('../../assets/br.png')}
                style={[
                  styles.flag,{
                    height: 35,
                    width: 35
                  }
                ]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => changeLanguage('es') }
              style={[
                styles.langButton, {
                  borderColor: '#2C6E49',
                  backgroundColor: '#2C6E49',
                  borderRadius: 100
                }
              ]}
            >
              <Image 
                source={require('../../assets/es.png')}
                style={[
                  styles.flag,{
                    height: 35,
                    width: 35
                  }
                ]}
              />
            </TouchableOpacity>

          </View>

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

  languages:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -200
  },  
  langButton:{
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
    marginRight: 4,
    marginLeft: 4,
  },
  langText:{
    marginRight: 4,
    marginLeft: 4,
    color: '#FFF',
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
