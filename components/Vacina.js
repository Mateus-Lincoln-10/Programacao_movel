import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

const Vacina = (props) => {

  const {item} = props
  
  return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{item.vacina}</Text>
            <Text style={styles.dose}>{item.dose}</Text>
            <Text style={styles.data}>{item.data}</Text>
            <Image style={{flex:1, width: 160, height: 80, marginBottom: 10}} source={require('../imagens/image-comprovante.png')} />
            <Text style={styles.proximaVacina}>{item.proximaVacina}</Text>
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


export default Vacina