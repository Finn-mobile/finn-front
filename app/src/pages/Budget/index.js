import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const Budget = () => {
  const [BudgetData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let url = 'http://192.168.3.15:3000/expenses';

  let options = {method: 'GET', headers: {'Content-Type': 'application/json'}};
  
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('error:' + err))
      .finally(() => setLoading(false))
  }, []);

  return (

    <View style={styles.container}>
              
      <HeaderBack />

        <View style={styles.HeaderPage}>
          <Text style={styles.label}>Orçamento</Text>
        </View>

        <View style={{ padding: 20 }}>
            {isLoading ? <Text>Loading...</Text> :
            (
                <FlatList
                    data={BudgetData}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => <Text>{item.type} {item.description} {item.value} {item.category.name}</Text>
                  }
                />
            )}
        </View>
        
    </View>
    )
  }

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
  });

export default Budget;