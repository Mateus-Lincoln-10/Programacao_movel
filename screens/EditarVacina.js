import React,  { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';

const EditarVacina = () => {
  const [dataDeVacinacao, setDataDeVacinacao] = useState();
  const [vacina, setVacina] = useState();
  const [proximaVacinacao, setProximaVacinacao] = useState();
  const [checked, setChecked] = React.useState('first');

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

          <View style={styles.dose}>
              <Text style={styles.text}> Dose </Text>
              <View style={styles.lineRadioButton}>
                  <View style={styles.lineRadioButton2}>
                      <RadioButton value="first"  status={ checked === 'first' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('first')} />
                      <Text style={styles.textSexo}> 1a. dose </Text>
                  </View>

                  <View style={styles.lineRadioButton2}>
                      <RadioButton value="second" status={ checked === 'second' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('second')}/>
                      <Text style={styles.textSexo}> 2a. dose </Text>
                  </View>

                  <View style={styles.lineRadioButton2}>
                      <RadioButton value="second" status={ checked === 'second' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('second')}/>
                      <Text style={styles.textSexo}> 3a. dose </Text>
                  </View>

                  <View style={styles.lineRadioButton2}>
                      <RadioButton value="second" status={ checked === 'second' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('second')}/>
                      <Text style={styles.textSexo}> Dose única </Text>
                  </View>
              </View>

         </View>

         <View style={styles.inputs}>
            <Text style={styles.text}> Proxima Vacinação </Text>
            <TextInput style={styles.textInput} value={proximaVacinacao} onChangeText={setProximaVacinacao}>
            </TextInput>
          </View>

          <TouchableOpacity style={styles.salvar}>
            <Text style={styles.font}>Salvar alterações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.excluir}>
            <Text style={styles.font}>Excluir</Text>
          </TouchableOpacity>
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
  dose: {
    display: 'flex',
    flexDirection: "row",
    marginBottom: 20,
  },
  lineRadioButton: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
  },
  salvar: {
    backgroundColor: '#37BD6D',
    width: 140,
    paddingVertical: 10,
    paddingHorizontal: 10,
    left: '35%',
    marginTop: 100,
  },
  excluir: {
    backgroundColor: '#FD7979',
    width: 100,
    paddingVertical: 10,
    paddingHorizontal: 24,
    left: '40%',
    marginTop: 100,
  },

  font: {
    fontFamily: 'AveriaLibre-Regular',
  }
})

export default EditarVacina;