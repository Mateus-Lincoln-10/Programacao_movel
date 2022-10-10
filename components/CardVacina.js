import {StyleSheet, Text, View, Dimensions, Image} from 'react-native'

const CardVacina = (props) => {
    
    const {item} = props.item
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{item.vacina}</Text>
            <Text style={styles.text}>{item.data}</Text>
            <Text style={styles.text}>{item.dose}</Text>
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

export default CardVacina;