import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import {View, Text, StyleSheet, Image } from "react-native";

const MyDrawer = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Text style={styles.text}>Olá Mateus</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" onPress={() => {props.navigation.pop()}}/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    text: {
        marginTop: 20,
        fontSize: 24,
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular',
    }
})

export default MyDrawer