/*
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native'

const CardVacina = (props) => {
    
    const {item} = props.item
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{item.vacina}</Text>
            <Text style={styles.text}>{item.dose}</Text>
            <Text style={styles.text}>{item.data}</Text>
            <Image style={{flex:1, width: 40, height: 40}} source={{uri:'https://upload.wikimedia.org/wikipedia/pt/4/43/El_Chapolin_Colorado.jpg'}} />
            <Text style={styles.text}>{item.proximaVacina}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        width: (Dimensions.get('window').width/2)-10,
        marginVertical: 5,
        marginHorizontal: 5
    },
    text: {
        fontSize: 20,
    }
})

export default CardVacina



/*

import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native'

const CardVacina = (props) => {
    
    const {item} = props.item
    
    return(
        <View>
             <View style={styles.header}>
                <Image  style={styles.menuHamburguer} source={require('../imagens/menuHamburguer.png')}/>
                <Text style={styles.textHeader}> Minhas Vacinas </Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.titulo}>{item.vacina}</Text>
                <Text style={styles.dose}>{item.dose}</Text>
                <Text style={styles.data}>{item.data}</Text>
                <Image style={{flex:1, width: 160, height: 80, marginBottom: 10}} source={require('../imagens/image-comprovante.png')} />
                <Text style={styles.proximaVacina}>{item.proximaVacina}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: (Dimensions.get('window').width/2)-10,
        marginVertical: 5,
        marginHorizontal: 5,
        display: 'flex',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',

    },
    dose: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        width: 120,
        backgroundColor: '#3F92C5',
        textAlign: 'center',
    },
    data: {
        fontSize: 12,
        color: '#8B8B8B',
        fontFamily: 'AveriaLibre-Regular',
    },
    proximaVacina: {
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979',
        fontSize: 12,
        marginTop: -5,
        marginLeft: 80,
    },

})

export default CardVacina;
-----------------

import React, { useState } from "react";
import {View, Text, Image, StyleSheet,  TouchableOpacity ,TextInput } from 'react-native';
import MyInput from "../components/MyInput";
import { RadioButton } from 'react-native-paper';
//import DatePicker from "react-native-datepicker";
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase";

const MinhasVacinas = () => { 
  const [datavacinacao, setDatavacinacao] = useState();
  const [comprovante, setComprovante] = useState();
  const [dataproxvacinacao, setDataproxvacinacao] = useState();
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image  style={styles.menuHamburguer} source={require('../imagens/menuHamburguer.png')}/>
            <Text style={styles.textHeader}> Minhas Vacinas </Text>
        </View>

        <View>
          <MyInput input="Data de Vacinação" valor={datavacinacao} style={styles.input}/>

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
    marginBottom: 100,
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
