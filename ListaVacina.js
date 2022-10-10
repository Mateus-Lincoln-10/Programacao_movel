import {View, Text, FlatList} from 'react-native'
import CardVacina from './components/CardVacina'

const listaVacinas = [
  {
    vacina: 'BCG',
    data: '2022-09-21',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2024-09-23'
  },
  {
    vacina: 'COVID',
    data: '2022-09-21',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2024-09-23'
  },
  {
    vacina: 'SARAMPO',
    data: '2022-09-21',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2024-09-23'
  },
  {
    vacina: 'POLIO',
    data: '2022-09-21',
    dose: 1,
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