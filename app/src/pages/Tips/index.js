import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Tips() {
  const { user } = useContext(AuthContext);
  return (
      <View style={styles.container}>
        <Header name={user.name} />
        <Text>Tela Dicas</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2C6E49',
      alignItems: 'center',
    },
  });
  