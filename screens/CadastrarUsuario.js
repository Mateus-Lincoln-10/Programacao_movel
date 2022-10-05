import React, { useState } from "react";
import {CheckBox, View, Text, Image, StyleSheet,  TouchableOpacity, TextInput } from 'react-native';
import MyInput from "../components/MyInput";
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase";

const CadastrarUsuario = () => { 
  const [nome, setNome] = useState();
  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [senha2, setSenha2] = useState();
  const [isSelected, setSelection] = useState(false);


  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image  style={styles.logo} source={require('../imagens/logoMenor.png')}/>
        </View>

        <View>
          <MyInput input="Nome completo" valor={nome}/>
          <MyInput input="Sexo" valor={senha}/>
          <MyInput input="Data de nascimento" valor={data}/>
          <MyInput input="Email" valor={email}/>
          <MyInput input="Senha" valor={senha}/>
          <MyInput input="Repetir senha" valor={senha2}/>
        </View>

        <TouchableOpacity style={styles.criarConta} >
          <Text style={styles.font} > Cadastrar </Text>
        </TouchableOpacity>

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
  criarConta: {
    backgroundColor: '#37BD6D',
    paddingHorizontal: 32,
    paddingVertical: 12, 
    marginTop: 150,
  },
  font: {
    fontFamily: 'AveriaLibre-Regular',
  }
})

export default CadastrarUsuario;

/*
const App = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
    </View>
  );
};
*/