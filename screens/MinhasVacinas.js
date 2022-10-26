import React, { useState } from "react";
import {View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Vacina from "../components/Vacina";



const MinhasVacinas = (props) => {
    
  const listaVacinas = [
    {
      vacina: 'BCG',
      dose: 'Dose unica',
      data: '2022-09-21',
      urlImage: 'http://',
      proximaVacina: '2024-09-23'
    },
    {
      vacina: 'COVID',
      dose: '1ª dose',
      data: '2022-09-21',
      urlImage: 'http://',
      proximaVacina: '2024-09-23'
    },
    {
      vacina: 'SARAMPO',
      dose: '1ª dose',
      data: '2022-09-21',
      urlImage: 'http://',
      proximaVacina: '2024-09-23'
    },
    {
      vacina: 'POLIO',
      dose: '1ª dose',
      data: '2022-09-21',
      urlImage: 'http://',
      proximaVacina: '2024-09-23'
    },
  ]
  
  const {item} = props
  console.log(props)

    const voltar = () => {
        props.navigation.pop()
      }

    return (
    
    <View style={styles.container}>
        {/* <View style={styles.header}>
            <Image  style={styles.menuHamburguer} source={require('../imagens/menuHamburguer.png')}/>
            <Text style={styles.textHeader}> Minhas Vacinas </Text>
        </View> */}

        <FlatList data={listaVacinas} renderItem={(item) => <Vacina item={item}/>} />

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

export default MinhasVacinas