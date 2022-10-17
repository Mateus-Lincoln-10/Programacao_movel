//Imports
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

//Especificação do componente
const Inicial = (props) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [hidePass, setHidePass] = useState(true);

  const goToMinhasVacinas = () => {
    props.navigation.push('MinhasVacinas')
  }

  const goToCardVacina = () => {
    props.navigation.navigate('CardVacina')
  }

  const goToCadastrarUsuario = () => {
    props.navigation.push('CadastrarUsuario')
  }

  const goToRecuperarSenha = () => {
    props.navigation.push('RecuperarSenha')
  }


  const autenticarUsuario = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário autenticado com sucesso!")
        props.navigation.navigate('CardVacina')
      })
      .catch(() => {
        console.log("Falha ao autenticar: " + error.message)
      })
  }


  return (

    <View style={styles.container}>

      <Image style={styles.background} source={require("../imagens/Inicial.png")} />
      <Image style={styles.logo} source={require('../imagens/logo.png')} />
      <Text style={styles.frase}>Controle as suas vacinas e fique seguro</Text>

      <View style={styles.inputs}>
        <Text style={styles.text}> E-mail </Text>
        <TextInput style={styles.textInput} value={email} onChangeText={setEmail} placeholder=""></TextInput>
      </View>

      <View style={styles.inputs}>
        <Text style={styles.text}> Senha </Text>
        <TextInput style={styles.textInput} value={senha} onChangeText={setSenha} placeholder="" secureTextEntry={hidePass}></TextInput>
      </View>


      <View>
        <TouchableOpacity onPress={autenticarUsuario} style={styles.entrar}>
          <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToCadastrarUsuario} style={styles.criarConta}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToRecuperarSenha} style={styles.esqueciSenha}>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

    </View>
  ) //Fim return
} //Fim App

//Estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    position: "absolute",
    indexedDB: -1,
  },
  logo: {
    marginTop: 85,
  },
  frase: {
    fontSize: 30,
    color: '#419ED7',
    marginTop: 90,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'AveriaLibre-Regular',
  },
  entrar: {
    backgroundColor: '#37BD6D',
    width: 120,
    paddingVertical: 10,
    paddingHorizontal: 38,
    marginLeft: 40,
    marginTop: 40,
    fontFamily: 'AveriaLibre-Regular',
  },
  criarConta: {
    backgroundColor: '#419ED7',
    paddingHorizontal: 56,
    paddingVertical: 12,
    marginTop: 70,
  },
  esqueciSenha: {
    backgroundColor: '#B0CCDE',
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginTop: 30,
  },
  texto: {
    width: '20%',
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
    paddingBottom: 15,
    paddingRight: 5,
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
  inputs: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
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
}) //Fim styles

//Export
export default Inicial;