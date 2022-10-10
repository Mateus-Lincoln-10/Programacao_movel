//Imports
import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

//Especificação do componente
const MyInput = (props) => {

  const {input, valor, style} = props;
   return (
    
    <View style={styles.inputs}>
      <Text style={styles.text}> {input} </Text>
      <TextInput style={[styles.textInput, style]} value={valor} placeholder=""></TextInput>
    </View>
    
   ) //Fim return
} //Fim MyInput

//Estilo
const styles = StyleSheet.create({
  inputs: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
  },
  text: {
    width: '30%',
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
    paddingBottom: 15,
    paddingRight: 10,
  },
}) //Fim styles

//Export
export default MyInput;