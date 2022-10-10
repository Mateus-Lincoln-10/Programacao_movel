import React, { useState } from "react";
import {View, Text, Image, StyleSheet,  TouchableOpacity ,TextInput } from 'react-native';
import MyInput from "../components/MyInput";
import { RadioButton } from 'react-native-paper';
//import DatePicker from "react-native-datepicker";
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase";

const CadastrarUsuario = () => { 
  const [nome, setNome] = useState();
  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [senha2, setSenha2] = useState();
  const [checked, setChecked] = React.useState('first');

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

          <MyInput input="Data de nascimento" valor={data} style={styles.input}/>
          <MyInput input="E-mail" valor={email} style={styles.input}/>
          <MyInput input="Senha" valor={senha} style={styles.input}/>
          <MyInput input="Repetir senha" valor={senha2} style={styles.input}/>
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
    marginTop: 140,
  },
  font: {
    fontFamily: 'AveriaLibre-Regular',
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