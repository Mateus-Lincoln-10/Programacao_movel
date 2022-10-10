import React, { useState } from "react";
import {View, Text, Image, StyleSheet,  TouchableOpacity ,TextInput } from 'react-native';
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const RecuperarSenha = () => { 

  const [recuperar, setRecuperar] = useState();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image  style={styles.logo} source={require('../imagens/logoMenor.png')}/>
        </View>

        <View style={styles.centralizarInput}>
          <MyInput style={styles.input} input="E-mail" valor={recuperar}/>
        </View>

        <View>
          <MyButton text="Recuperar senha" style={styles.recuperarSenha} />
        </View>
    </View>

  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ADD4D0',
  },
    header: {
      backgroundColor: '#C1E7E3',
      height: 80,
      width: '100%',
      marginBottom: 100,
    },
    logo: {
      marginTop: 14,
      marginLeft: 15,
    },
    input: {
      width: '65%',
      textAlign: 'left',
      height: 40,
      color: '#3F92C5',
      backgroundColor: 'white',
      marginBottom: 20,
      fontFamily: 'AveriaLibre-Regular',
  },
  centralizarInput: {
    marginTop: 200,
  },
  recuperarSenha: {
    backgroundColor: '#37BD6D',
    width: 180,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginLeft: 20,
    marginTop: 160,
    fontFamily: 'AveriaLibre-Regular',
  },
})

export default RecuperarSenha;