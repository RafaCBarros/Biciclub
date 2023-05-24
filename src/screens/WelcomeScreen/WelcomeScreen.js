import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const onRegistrarPress = () => {
    console.warn('Registrar');

    navigation.navigate('SingUp');
  };

  const onLogarPress = () => {
    console.warn('Logar');

    navigation.navigate('SingIn');
  };
  return (
    <View>
      <Text style={styles.titulo}>Seja bem-vindo!</Text>
      <Text style={styles.texto}>
        Alugue bicicletas com facilidade, encontre amigos, compartilhe rotas e
        encontre postos de alimentação com facilidade
      </Text>

      <View style={styles.botoes}>
        <CustomButton
          texto={'Crie sua Conta'}
          eventoPressionar={onRegistrarPress}
        />
        <CustomButton
          texto={'Faça seu Login'}
          eventoPressionar={onLogarPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 10,
    position: 'relative',
    top: '20%',
  },
  texto: {
    position: 'relative',
    top: '30%',
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 5,
    letterSpacing: 1,
  },
  botoes: {
    position: 'relative',
    top: '100%',
  },
});

export default WelcomeScreen;
