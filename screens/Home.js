import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../components/MyDrawer'
import MinhasVacinas from './MinhasVacinas'

const Drawer = createDrawerNavigator()

const Home = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />} screenOptions={{ drawerActiveTintColor: '#419ED7', drawerActiveBackgroundColor: 'white', drawerInactiveBackgroundColor: 'blue', drawerStyle: { backgroundColor: '#ADD4D0' } }}>
           <Drawer.Screen name="Minhas vacinas" component={MinhasVacinas} />
        </Drawer.Navigator>
    )
}

export default Home




// import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer"
// import {View, Text} from 'react-native';
// import MinhasVacinas from "./MinhasVacinas";


// const Drawer = createDrawerNavigator()

// const Home = (props) => {
//   return(
//       <Drawer.Navigator>
//         <Drawer.Screen name="MinhasVacinas" component={MinhasVacinas}/>
//         <DrawerItem label="Sair" onPress={() => {props.navigation.pop()}}/>
//       </Drawer.Navigator>
//   )
// }

// export default Home
