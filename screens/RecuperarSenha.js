import React, { useState } from "react";
import {View, Text, Image, StyleSheet,  TouchableOpacity ,TextInput } from 'react-native';
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../config/firebase'

const RecuperarSenha = (props) => { 

  const [email, setEmail] = useState();

  const recuperarSenha = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        console.log('Email de redefinição enviado com sucesso!')
    })
    .catch(() => {
        console.log('Erro ao solicitar a redefinição de senha')
    })
}

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image  style={styles.logo} source={require('../imagens/logoMenor.png')}/>
        </View>

        <View style={styles.inputs}>
            <Text style={styles.text}> E-mail </Text>
            <TextInput style={styles.textInput} value={email} onChangeText={setEmail} placeholder=""></TextInput>
      </View>

        <View>
        <TouchableOpacity onPress={recuperarSenha} style={styles.recuperarSenha}>
          <Text style={styles.font}>Recuperar Senha</Text>
        </TouchableOpacity>
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
  inputs: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 150,
  },
  textInput: {
    width: '60%',
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white',
    color: '#3F92C5',
    marginBottom: 20,
    height: 40,
  },
  text: {
    width: '20%',
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
    paddingBottom: 15,
    paddingRight: 10,
  },
  font: {
    fontFamily: 'AveriaLibre-Regular',
    marginLeft: 5,
  }
})

export default RecuperarSenha;