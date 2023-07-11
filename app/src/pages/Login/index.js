import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Insira aqui a lógica de autenticação
    if (username === 'usuario' && password === 'senha') {
      // Se o login for bem-sucedido:
      navigation.navigate(<Home/>);
    } else {
      // Se o login falhar:
      alert('Nome de usuário ou senha incorretos');
    }
  };

  return (
    <View>
      <Text>Nome de usuário:</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <Text>Senha:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
