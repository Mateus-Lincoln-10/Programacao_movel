import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastrarUsuario from "./screens/CadastrarUsuario";
import Inicial from "./screens/Inicial"
import MinhasVacinas from "./screens/MinhasVacinas"
import RecuperarSenha from "./screens/RecuperarSenha";
import CardVacina from "./components/CardVacina";



const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicial" component={Inicial} options={{headerShown: false}}/>
          <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} options={{headerShown: false}}/>
          <Stack.Screen name="MinhasVacinas" component={MinhasVacinas}/>
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerShown: false}}/>
          <Stack.Screen name="CardVacina" component={CardVacina}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

/*
 options={{headerTintColor: 'white',
          headerStyle:{ backgroundColor: 'orange'}}}
         
          */