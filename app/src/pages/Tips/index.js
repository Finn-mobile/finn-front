import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../../components/Header'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Tips() {
  const { user } = useContext(AuthContext);
  return (
      <View style={styles.container}>
        <Header name={user.name} />
        <View style={{
                    top: -30, 
                    resizeMode: 'contain',
                    alignItems: 'center',
                    }}>
          <Image source={require('../../assets/tips.png')} />
        </View>
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
  