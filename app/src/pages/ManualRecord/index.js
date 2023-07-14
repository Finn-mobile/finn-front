import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import HeaderBack from '../../components/HeaderBack';

export default function ManualRecord() {

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('1');
  const [isExpense, setIsExpense] = useState(true);

  const handleSave = () => {
    // Aqui você pode fazer o tratamento dos dados e salvar a receita/despesa
    console.log('Salvando registro...');
    console.log('Descrição:', description);
    console.log('Valor:', value);
    console.log('Categoria:', category);
    console.log('Tipo:', isExpense ? 'Despesa' : 'Receita');
  };

  return (

    <View style={styles.container}>
      
      <HeaderBack />

      <View style={styles.HeaderPage}>
        <Text style={styles.label}>Registro Financeiro</Text>
      </View>


      <Picker
        style={styles.input}
        selectedValue={isExpense}
        onValueChange={(itemValue) => setIsExpense(itemValue)}
      >
        <Picker.Item label="Despesa" value={true} />
        <Picker.Item label="Receita" value={false} />
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
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Categoria 1" value="1" />
        <Picker.Item label="Categoria 2" value="2" />
        <Picker.Item label="Categoria 3" value="3" />
        <Picker.Item label="Categoria 4" value="4" />
        <Picker.Item label="Categoria 5" value="5" />
        <Picker.Item label="Categoria 6" value="6" />
        <Picker.Item label="Categoria 7" value="7" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

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