import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderBack = ({ onPress }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoBack}>
      <Image
        source={require('../../../assets/back-icon.png')}
        style={styles.backIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    position: 'absolute',
    left: 0,
    top: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});

export default HeaderBack;
