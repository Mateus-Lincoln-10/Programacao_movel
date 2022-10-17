import React, { useState } from "react";
import {View, Text, Image, StyleSheet,  TouchableOpacity ,TextInput } from 'react-native';
import MyInput from "../components/MyInput";
import { RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
//import DatePicker from "react-native-datepicker";
//import {createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from "../config/firebase";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RecuperarSenha from "./RecuperarSenha";
import Inicial from "./Inicial";

const MinhasVacinas = () => { 
  const Drawer = createDrawerNavigator();
  const [datavacinacao, setDatavacinacao] = useState();
  const [vacinacao, setVacinacao] = useState();
  const [comprovante, setComprovante] = useState();
  const [dataproxvacinacao, setDataproxvacinacao] = useState();
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.container}>


        <View style={styles.header}>
            <Image  style={styles.menuHamburguer} source={require('../imagens/menuHamburguer.png')}/>
            <Text style={styles.textHeader}> Minhas Vacinas </Text>
        </View>

        <View style={styles.topo}>
          <MyInput input="Data de Vacinação" valor={datavacinacao} style={styles.input}/>
          <MyInput input="Vacinação" valor={vacinacao} style={styles.input}/>

          <View style={styles.sexo}>
              <Text style={styles.text}> Dose </Text>

              <View style={styles.alinharDose}>
                  <View style={styles.alinharSexo}>
                      <RadioButton value="first"  status={ checked === 'first' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('first')} />
                      <Text style={styles.textSexo}> 1a.dose </Text>
                  </View>
                  <View style={styles.alinharSexo}>
                      <RadioButton value="second" status={ checked === 'second' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('second')}/>
                      <Text style={styles.textSexo}> 2a.dose </Text>
                  </View>
                  <View style={styles.alinharSexo}>
                      <RadioButton value="second" status={ checked === 'second' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('second')}/>
                      <Text style={styles.textSexo}> 3a.dose </Text>
                  </View>
                  <View style={styles.alinharSexo}>
                      <RadioButton value="second" status={ checked === 'second' ? 'checked' : 'unchecked' }
                      onPress={() => setChecked('second')}/>
                      <Text style={styles.textSexo}> 4a.dose </Text>
                  </View>
              </View>
              
         </View>


          <MyInput input="Comprovante" valor={comprovante} style={styles.input}/>
          <MyInput input="Próxima Vacinação" valor={dataproxvacinacao} style={styles.input}/>
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
    marginBottom: 50,
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
  },
  menuHamburguer: {
    width: 50,
    height: 35,
    marginLeft: 20,
  },
  textHeader: {
    fontSize: 28,
    fontFamily:  'AveriaLibre-Regular',
    color: '#419ED7',
  },
  logo: {
    marginTop: 14,
    marginLeft: 15,
  },
  criarConta: {
    backgroundColor: '#37BD6D',
    paddingHorizontal: 32,
    paddingVertical: 12, 
    marginTop: 80,
  },
  font: {
    fontFamily: 'AveriaLibre-Regular',
  },

  input: {
    width: '50%',
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
    width: '35%',
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

  alinharDose: {
    display: "flex",
    flexDirection: "row",  
  },
  topo: {
    marginTop: 200,
  }
})

export default MinhasVacinas;

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