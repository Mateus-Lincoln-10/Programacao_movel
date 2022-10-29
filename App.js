import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastrarUsuario from "./screens/CadastrarUsuario";
import Login from "./screens/Login"
import RecuperarSenha from "./screens/RecuperarSenha";
import Home from "./screens/Home";
import MinhasVacinas from "./screens/MinhasVacinas";

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} options={{headerShown: false}}/>
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerShown: false}}/>
          <Stack.Screen name="MinhasVacinas" component={MinhasVacinas} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

/*
 options={{headerTintColor: 'white',
          headerStyle:{ backgroundColor: 'orange'}}}
         
          */