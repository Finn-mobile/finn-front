import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!name || !email || !confirmEmail || !password || !confirmPassword) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    if (email !== confirmEmail) {
      Alert.alert("Email devem ser iguais");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Senhas devem ser iguais");
      return;
    }
    
    const response = await fetch("http://192.168.0.25:3000/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: { "Content-type": "application/json" },
    });

    if (response.status !== 201) {
      Alert.alert("Email já usado");
      return;
    }
    Alert.alert("Conta criada")
    navigation.navigate("SignIn")
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Crie sua conta no Finn!</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChange={(e) => setName(e.nativeEvent.text)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Confirmar Email</Text>
      <TextInput
        style={styles.input}
        value={confirmEmail}
        onChange={(e) => setConfirmEmail(e.nativeEvent.text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        secureTextEntry
      />

      <Text style={styles.label}>Confirmar Senha</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}
      onPress={ () => navigation.navigate('SignIn') }>
        <Text style={styles.buttonLoginText}>Já tem uma conta ? Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C6E49',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 5,
    marginBottom: 20,
    width: '100%',
  },
  registerButton: {
    backgroundColor: '#0A1128',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonLoginText: {
    fontSize: 14,
    color: '#000',
  },
});

export default Register;
