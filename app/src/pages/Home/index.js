import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Felipe Bernard" />
      <Text>Home do FinnApp!</Text>
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
