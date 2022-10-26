
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import MinhasVacinas from "./MinhasVacinas";
import RecuperarSenha from "./RecuperarSenha";

const Drawer = createDrawerNavigator()

const Home = () => {
  return(
      <Drawer.Navigator>
        <Drawer.Screen name="MinhasVacinas" component={MinhasVacinas}/>
        <Drawer.Screen name="RecuperarSenha" component={RecuperarSenha}/>
      </Drawer.Navigator>
  )
}

export default Home
