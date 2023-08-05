import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import HeaderBack from '../../components/HeaderBack';

const CreateRegister = () => {
  const [type, setType] = useState('Despesa');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [categoryName, setCategoryName] = useState('Transporte');

  const handleRegister = () => {
    // Aqui você pode fazer o tratamento dos dados e realizar o registro
    let url = 'http://192.168.3.15:3000/expenses';

    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify ({type, description, value: parseFloat(value), category_name: categoryName})
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .then(Alert.alert('Registro cadastrado com sucesso!'))
      .catch(err => console.error('error:' + err));
  };

  return (

    <View style={styles.container}>
      
      <HeaderBack />

      <View style={styles.HeaderPage}>
        <Text style={styles.label}>Registro Financeiro</Text>
      </View>

      <Picker
        style={styles.input}
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
      >
        <Picker.Item label="Despesa" value="Despesa" />
        <Picker.Item label="Receita" value="Receita" />
      </Picker>

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Qual item que deseja cadastrar ?"
      />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        placeholder="Qual o valor ?"
      />

      <Text style={styles.label}>Categoria</Text>
      <Picker
        style={styles.input}
        selectedValue={categoryName}
        onValueChange={(itemValue) => setCategoryName(itemValue)}
      >
        <Picker.Item label="Transporte" value="Transporte" />
        <Picker.Item label="Alimentação" value="Alimentação" />
        <Picker.Item label="Moradia" value="Moradia" />
        <Picker.Item label="Lazer" value="Lazer" />
        <Picker.Item label="Educação" value="Educação" />
        <Picker.Item label="Saúde" value="Saúde" />
        <Picker.Item label="Compras" value="Compras" />
        <Picker.Item label="Serviços" value="Serviços" />
        <Picker.Item label="Outros" value="Outros" />
      </Picker>

      <Button 
        title="Cadastrar"
        onPress={handleRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C6E49',
  },
  HeaderPage: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius:30,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0A1128',
    borderRadius: 40,
    position: 'absolute',
    width: '100%',
    bottom: 40,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default CreateRegister;
