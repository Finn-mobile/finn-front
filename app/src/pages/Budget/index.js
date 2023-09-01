import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, StatusBar, TextInput } from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import { AuthContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

const Budget = () => {
  const [BudgetData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { token, user } = useContext(AuthContext);
  const value = 0;
  const { t } = useTranslation();

  let url = 'http://192.168.18.7:3000/transactions';

  let options = {method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer '+ token}};
  
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setData(json)
      })
      .catch(err => console.error('error:' + err))
      .finally(() => setLoading(false))
  }, []);
  
  return (

    <View style={styles.container}>
              
      <HeaderBack />

        <View style={styles.HeaderPage}>
          <Text style={styles.label}>{t('budgetPage.title')}</Text>
        </View>

        <View>
          <Text style={{fontSize: 30, color: 'white', padding: 20}}>{t('budgetPage.money')}: R${value}</Text>
        </View>
        <View style={{ marginBottom: 20, marginTop:20, marginRigh: 10, marginLeft: 10 }}>
            {isLoading ? <Text>Loading...</Text> :
            (                
                <FlatList
                    data={BudgetData}
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