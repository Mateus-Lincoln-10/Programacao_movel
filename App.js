import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import RecuperarSenha from './screens/RecuperarSenha'
import CadastrarUsuario from './screens/CadastrarUsuario'
import Inicial from './screens/Inicial'

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App