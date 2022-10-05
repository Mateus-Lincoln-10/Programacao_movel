//Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import MyInput from "./components/MyInput";
import Inicial from "./screens/Inicial";
import Tela2 from "./screens/Tela2";

// const Stack = createNativeStackNavigator ();

//Especificação do componente
const App = () => {  
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    
  <View style={styles.container}> 
    
    <Image style={styles.background} source={require("./imagens/Inicial.png")}/>
    <Image style={styles.logo} source={require('./imagens/logo.png')}/>
    <Text style={styles.frase} >Controle as suas vacinas e fique seguro</Text>

    <View>
      <MyInput input="email" valor={email}/>
      <MyInput input="senha" valor={senha}/>
    </View>

    <TouchableOpacity style={styles.entrar} >
      <Text style={styles.font}> Entrar </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.criarConta} >
      <Text style={styles.font}> Criar minha conta </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.esqueciSenha} >
      <Text style={styles.font}> Esqueci minha senha </Text>
    </TouchableOpacity>
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
  font: {
    fontFamily: 'AveriaLibre-Regular',
  },
  entrar: {
    backgroundColor: '#37BD6D',
    paddingHorizontal: 36,
    paddingVertical: 12, 
    marginTop: 80,
    fontFamily: 'AveriaLibre-Regular',
  },
  criarConta: {
    backgroundColor: '#419ED7',
    paddingHorizontal: 32,
    paddingVertical: 12, 
    marginTop: 70,
  },
  esqueciSenha: {
    backgroundColor: '#B0CCDE',
    paddingHorizontal: 20,
    paddingVertical: 4, 
    marginTop: 30,
  },
}) //Fim styles

//Export
export default App;


/*
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={Inicial}/>
        <Stack.Screen name="Tela2" component={Tela2}/>
      </Stack.Navigator>
    </NavigationContainer>
*/