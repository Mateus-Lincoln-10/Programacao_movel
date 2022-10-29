import React,  { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

const EditarVacina = () => {
  const [dataDeVacinacao, setDataDeVacinacao] = useState();
  const [vacina, setVacina] = useState();
  const [proximaVacinacao, setProximaVacinacao] = useState();

  return (
    <View style={styles.container}>
      
          <View style={styles.inputs}>
            <Text style={styles.text}> Data de Vacinação </Text>
            <TextInput style={styles.textInput} value={dataDeVacinacao} onChangeText={setDataDeVacinacao}>
            </TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={styles.text}> Vacina </Text>
            <TextInput style={styles.textInput} value={vacina} onChangeText={setVacina}>
            </TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={styles.text}> Proxima Vacinação </Text>
            <TextInput style={styles.textInput} value={proximaVacinacao} onChangeText={setProximaVacinacao}>
            </TextInput>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD4D0',
  },
  inputs: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
  },
  textInput: {
    width: '50%',
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white',
    color: '#3F92C5',
    marginBottom: 20,
    height: 40,
  },
  text: {
    width: '30%',
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
    paddingBottom: 15,
    paddingRight: 10,
  },
})

export default EditarVacina;