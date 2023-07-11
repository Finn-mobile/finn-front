import React from 'react'
import { 
   View,
   Text,
   StyleSheet,
   TouchableOpacity
   } from 'react-native'

import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-gesture-handler'

import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

export default function SignIn() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
          
      <View style={styles.container}>
        
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Bem vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder="Digite seu email..."
            style={styles.input}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            style={styles.input}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Ou cadastre-se aqui</Text>
          </TouchableOpacity>

        </Animatable.View>

      </View>

    </GestureHandlerRootView>    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0A1128',
  },

  containerForm:{
    backgroundColor:'#FFF',
    flex:1,
    borderTopLeftRadius:33,
    borderTopRightRadius:33,
    padding:'5%',
    paddingEnd:'5%'
  },
  
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },

  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },

  title:{
    fontSize: 20,
    marginTop: 28,
  },

  input:{
    borderBottomWidth:1,
    height:40,
    marginBottom: 12,
    fontSize: 16,
  },

  button:{
    backgroundColor:'#0A1128',
    width: '80%',
    borderRadius: 25,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },

  buttonRegister:{
    marginTop: 14,
    alignSelf:'center'
  },

  buttonText:{
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold'
  },

  registerText:{
    color:'#8c8c8c8',
  }
})