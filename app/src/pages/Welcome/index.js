import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
 } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
  
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          iterationCount={1}
          source={require('../../assets/logo.png')}
          style={{ width: '60%' }}
          resizeMode="contain"
        />

      </View>

      <Animatable.View delay={800} animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>{t('welcomePage.greeting')}</Text>
          <Text style={styles.text}>{t('welcomePage.greetingSub')}</Text>

          <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('SignIn') }
          >
            <Text style={styles.buttonText}>{t('welcomePage.signInButtonLabel')}</Text> 
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonRegister}
            onPress={ () => navigation.navigate('Register') }
          >
            <Text style={styles.buttonRegisterText}>{t('welcomePage.signUpButtonLabel')}</Text> 
          </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#2C6E49",
  },

  containerLogo:{
    flex:2,
    //backgroundColor: '#0A1128',
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerForm:{
    flex:1.2,
    backgroundColor: '#0A1128',
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: "#FEFEE3",
    alignSelf: 'center',
  },

  text:{
    color: "#FEFEE3",
    alignSelf: 'center',
    padding: 10,
  },

  button:{
    position: 'absolute',
    backgroundColor: '#FFF',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonRegister:{
    position: 'absolute',
    backgroundColor: '#B0B0B0',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText:{
    color: "#0A1128",
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonRegisterText:{
    color: "#0A1128",
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
})