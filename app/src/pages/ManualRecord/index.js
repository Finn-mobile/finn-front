import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import HeaderBack from '../../components/HeaderBack';
import { AuthContext } from '../../context/AuthContext';

const CreateRegister = () => {
  const { token } = useContext(AuthContext);
  const [type, setType] = useState('Gasto');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [categoryName, setCategoryName] = useState('Transporte');
  const [categories, setCategories] = useState([])

  const handleRegister = () => {
    // Aqui você pode fazer o tratamento dos dados e realizar o registro
    let url = 'http://192.168.0.25:3000/transactions';

    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer '+ token},
      body: JSON.stringify({type, description, amount: parseFloat(value), category_name: categoryName})
    };

    fetch(url, options)
      .then(res => {
        if (res.status === 201) {
          Alert.alert('Registro cadastrado com sucesso!')
          setDescription("");
          setValue("");
          setCategoryName("Transporte")
      }})
  };

  useEffect(() => {
    let url = 'http://192.168.0.25:3000/categories';

    let options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setCategories(json))
      .catch(err => console.error('error:' + err));
  }, [setCategories])

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
        <Picker.Item label="Gasto" value="Gasto" />
        <Picker.Item label="Recebimento" value="Recebimento" />
      </Picker>

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChange={e => setDescription(e.nativeEvent.text)}
        placeholder="Qual item que deseja cadastrar ?"
      />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChange={e => setValue(e.nativeEvent.text)}
        keyboardType="numeric"
        placeholder="Qual o valor ?"
      />

      <Text style={styles.label}>Categoria</Text>
      <Picker
        style={styles.input}
        selectedValue={categoryName}
        onValueChange={(itemValue) => setCategoryName(itemValue)}
      >
        {categories && categories.map(category => (
          <Picker.Item key={category.id} label={category.name} value={category.name} />
        ))}
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
