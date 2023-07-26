import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'

export default function Tips() {
    return (
      <View style={styles.container}>
        <Header name="Felipe Bernard" />
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
  