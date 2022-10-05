import React from "react";
import { View, Text, Button } from 'react-native';

const Inicial = (props) => {

  const goToTela2 = () => {
    props.navigation.navigate('Tela2');
  }
  return (
    <View>
      <Text> Tela inicial </Text>
      <Button title="Ir para tela 2" onPress={goToTela2}/>
    </View>
  )
}

export default Inicial;