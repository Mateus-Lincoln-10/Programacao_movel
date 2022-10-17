import React, { useState } from "react";
import {View, Text, Image, StyleSheet,  TouchableOpacity ,TextInput } from 'react-native';
import MyInput from "../components/MyInput";
import { RadioButton } from 'react-native-paper';
//import DatePicker from "react-native-datepicker";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../config/firebase'

const CadastrarUsuario = (props) => { 
  const [nome, setNome] = useState();
  const [data, setData] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [senha2, setSenha2] = useState();
  const [checked, setChecked] = React.useState('first');
  const [hidePass, setHidePass] = useState(true);

  const goToInicial = () => {
    props.navigation.push('Inicial')
  }

  const criarUsuario = () => {    
    createUserWithEmailAndPassword(auth, email, senha)
    .then( (userCredential) => {
        console.log("Usuário adicionado com sucesso!")
        props.navigation.pop()
    })
    .catch( (error) => {
        console.log("Ocorreu um erro ao cadastrar usuário")
        console.log("Erro: " + error.message)
    })
}


  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image  style={styles.logo} source={require('../imagens/logoMenor.png')}/>
        </View>

        <View>
          <MyInput input="Nome completo" valor={nome} style={styles.input}/>

          <View style={styles.sexo}>
              <Text style={styles.text}> Sexo </Text>
              <View style={styles.alinharSexo}>
                  <View style={styles.alinharSexo}>
                      <RadioButton value="first"  status={ checked === 'first' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('first')} />
                      <Text style={styles.textSexo}> Masculino </Text>
                  </View>

                  <View style={styles.alinharSexo}>
                      <RadioButton value="second" status={ checked === 'second' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('second')}/>
                      <Text style={styles.textSexo}> Feminino </Text>
                  </View>
              </View>
         </View>

         <View style={styles.inputs}>
            <Text style={styles.text}> Data de Nascimento </Text>
            <TextInput style={styles.textInput2} value={dataNascimento} onChangeText={setDataNascimento} placeholder="">
            <Image source={require('../imagens/iconData.png')}/>
            </TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={styles.text}> E-mail </Text>
            <TextInput style={styles.textInput} value={email} onChangeText={setEmail} placeholder=""></TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={styles.text}> Senha </Text>
            <TextInput style={styles.textInput} value={senha} onChangeText={setSenha} placeholder="" secureTextEntry={hidePass}></TextInput>
          </View>

          <View style={styles.inputs}>
            <Text style={styles.text}> Recuperar Senha </Text>
            <TextInput style={styles.textInput} value={senha2} onChangeText={setSenha2} placeholder=""></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.criarConta} onPress={criarUsuario} >
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
    marginTop: 140,
  },
  font: {
    fontFamily: 'AveriaLibre-Regular',
  },
  inputs: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
  },
  textInput: {
    width: '65%',
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
  input: {
    width: '65%',
    textAlign: 'left',
    height: 40,
    color: '#3F92C5',
    backgroundColor: 'white',
    marginBottom: 20,
    fontFamily: 'AveriaLibre-Regular',
  },
  sexo: {
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
  textSexo: {
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
  },
  alinharSexo: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    marginTop: -5,
  },
  dateComponent: {
    width: 350,
  },
  textInput2: {
    width: '65%',
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white',
    color: '#3F92C5',
    marginBottom: 20,
    height: 40,
  },
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