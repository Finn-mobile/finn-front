import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header'
import HeaderBack from '../../components/HeaderBack';
import GenericButton from '../../components/ButtonGeneric';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const navigation = useNavigation();

  const handleButtonPress = () => {
    // Lógica a ser executada quando o botão for pressionado
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Header name="Felipe Bernard" />

      <View style={styles.graphicsArea}>

        <Text style={styles.text} >
          Áreas para os gráficos
        </Text>

      </View>

      <View style={styles.buttonContainer}>
        
      <GenericButton
       onPress={ () => navigation.navigate('Budget') }
       iconName={require('../../components/assets/budget.png')}
       buttonName="Orçamento"
      />

      <GenericButton
       onPress={ () => navigation.navigate('ManualRecord') }
       iconName={require('../../components/assets/register.png')}
       buttonName="Registrar"
      />

      <GenericButton
       onPress={ () => navigation.navigate('Tips') }
       iconName={require('../../components/assets/tips.png')}
       buttonName="Dicas"
      />
        
      </View>

      <TouchableOpacity 
      onPress={ () => navigation.navigate('GptRecord') }
      style={styles.chatContainer}
      >
        <Image 
          source={require('../../components/assets/gepeto.png')} 
          style={styles.icon} 
          resizeMode="contain"
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C6E49',
    alignItems: 'center',
  },

  text:{
    color: "#fff",
    alignSelf: 'center',
    padding: 20,
  },

  graphicsArea:{
    flex: 1,
    justifyContent: 'center', // 'center
    flexDirection:'row',
    width: '100%',
    backgroundColor: '#2C2C2C',
    padding: 20,
  },

  buttonContainer: {
    flex: 1,
    width: '100%',
    flexDirection:'row', // 'row
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#2C6E49',
    padding: 20,
  },

  chatContainer: { 
    flex: 1,
    height: 65,
    width: 65,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#001F54',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  textChat:{
    color: '#fff',
  },

  icon: {
    width: 40,
    height: 40,
    alignSelf: 'center'
  },

});
