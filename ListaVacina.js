import {View, Text, FlatList} from 'react-native'
import CardVacina from './components/CardVacina'

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

const ListaVacina = () => {
  return (
    <View>
      <FlatList data={listaVacinas} renderItem={(item) => <CardVacina item={item}/>} numColumns={2} />
    </View>
  )
}

export default ListaVacina
/*
import {View, Text, FlatList} from 'react-native'
import CardVacina from './components/CardVacina'

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

const ListaVacina = () => {
  return(
    <View>
      <FlatList data={listaVacinas} renderItem={(item) => <CardVacina item={item}/>} numColumns={2} />
    </View>
  )
}

export default ListaVacina;

*/