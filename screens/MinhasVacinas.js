import React from "react";
import {View, StyleSheet, FlatList } from 'react-native';
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
  
    return (
    
    <View>
        <FlatList data={listaVacinas} renderItem={(item) => <Vacina item={item}/>} 
        numColumns={2} />
    </View>
)
}

export default MinhasVacinas