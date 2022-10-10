//Imports
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//Especificação do componente
const MyButton = (props) => {

  const {text, style} = props;
   return (
    <View style={styles.button}>
      <TouchableOpacity style={[style]} >
        <Text style={styles.font}> {text} </Text>
      </TouchableOpacity>
    </View>
   ) //Fim return
} //Fim MyInput

const styles = StyleSheet.create({
font: {
  fontFamily: 'AveriaLibre-Regular',
},
})

export default MyButton;