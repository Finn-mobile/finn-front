import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, StyleSheet, Button, Alert, KeyboardAvoidingView, FlatList, Image} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const GptRecord = () => {
  const { token } = useContext(AuthContext);
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);


  const handleRegistergpt = () => {
    // Aqui você pode fazer o tratamento dos dados e realizar o registro
    let url = 'http://192.168.3.14:3000/transactions/input';

    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer '+ token},
      body: JSON.stringify ({input})
    };

    fetch(url, options)
    .then(res => res.json())  
    .then(json => {
      console.log(json)
      setData(json)
    })
      .catch(err => console.error('error:' + err));
  };
  console.log(data)
  return (

    <View style={styles.container}>
      
      <HeaderBack />

      <View style={styles.HeaderPage}>
        <Text style={styles.label}>Registro GPT</Text>
      </View>

      <View style={{ marginBottom: 20, marginTop:20, marginRigh: 10, marginLeft: 10 }}>
        <FlatList
              data={data}
              keyExtractor={ id => id.id}
              contentContainerStyle={{
                paddingBottom: 120,
                paddingtop: StatusBar.currentHeight || 42
              }}
              renderItem={({ item }) => {       
              return <View style={{flexDirection: 'row', padding: 20, marginBottom: 20, backgroundColor: 'white', borderRadius: 16}}>
                <View style={{marginTop: 15}}>
                  <Image
                    source={require('../../assets/wallet-filled-money-tool.png')}
                    style={{width:40, height: 40, marginRight: 5}}
                  />
                  </View>
                    <View>
                      <Text style={{fontSize: 20, fontWeight: '700'}}>{item.description}</Text>
                      <Text style={{fontSize: 15, }}>{item.category.name}</Text>  
                      <Text style={{fontSize: 15, }}>{item.type}</Text>
                    </View> 
                    <View>
                      <Text style={{fontSize: 19, marginLeft: 70}}>{item.amount}</Text>
                    </View>
                  </View>
                }
              }
            /> 
      </View>

        <KeyboardAvoidingView style={{position: 'absolute', left: 30, right: 30, bottom: 50, backgroundColor: 'white', borderRadius: 30}}>        
          <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Insira os seus ganhos e gastos:"
          />
          <Button 
            title="Cadastrar"
            onPress={handleRegistergpt}
          />
        </KeyboardAvoidingView>
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

export default GptRecord;