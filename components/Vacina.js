import React from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOp} from 'react-native';
import { color } from "react-native-reanimated";

const Vacina = (props) => {

  const {item} = props
  
  return (
      <View style={styles.container}>

          <View>
            <Text style={styles.titulo}>Buscar</Text>
          </View>

          <View style={styles.card} >
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
    marginTop: 40,
    backgroundColor: '#ADD4D0',
  },
  card: {
    backgroundColor: '#ffffff',
    width: (Dimensions.get('window').width/2)-10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#3F92C5',
    textAlign: 'center',
  }

})


export default Vacina

// dose: {
  //     fontSize: 16,
  //     color: '#ffffff',
  //     fontFamily: 'AveriaLibre-Regular',
  //     width: 120,
  //     backgroundColor: '#3F92C5',
  //     textAlign: 'center',
  // },
  // data: {
  //     fontSize: 12,
  //     color: '#8B8B8B',
  //     fontFamily: 'AveriaLibre-Regular',
  // },
  // proximaVacina: {
  //     fontFamily: 'AveriaLibre-Regular',
  //     color: '#FD7979',
  //     fontSize: 12,
  //     marginTop: -5,
  //     marginLeft: 80,
  // },
