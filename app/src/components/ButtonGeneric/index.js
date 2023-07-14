import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const GenericButton = ({ onPress, iconName, buttonName }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconName && (
        <Image source={iconName} style={styles.icon} resizeMode="contain" />
      )}
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around', // 'center
    height: 80,
    width: 80,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#001F54', // cor de fundo do botão (exemplo: azul)
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 12,
    alignSelf: 'center',
    color: '#ffffff', // cor do texto do botão (exemplo: branco)
  },
});

export default GenericButton;
