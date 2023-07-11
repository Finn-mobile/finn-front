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

export default function Welcome() {
  
  const navigation = useNavigation();

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
          <Text style={styles.title}>Monitore e organize seus{'\n'}gastos de qualquer lugar!</Text>
          <Text style={styles.text}>Faça o login para começar</Text>

          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('SignIn') }
          >
            <Text style={styles.buttonText}>Acessar</Text> 
          </TouchableOpacity>
      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#0A1128",
  },

  containerLogo:{
    flex:2,
    backgroundColor: '#0A1128',
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerForm:{
    flex:1.2,
    backgroundColor: '#2C6E49',
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
    padding: 20,
  },

  button:{
    position: 'absolute',
    backgroundColor: '#0A1128',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText:{
    color: "#FEFEE3",
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
})