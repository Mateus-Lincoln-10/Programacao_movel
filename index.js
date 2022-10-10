/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListaVacina from './ListaVacina';
import CadastrarUsuario from './screens/CadastrarUsuario';
import Inicial from './screens/Inicial';
import MinhasVacinas from './screens/MinhasVacinas';
import RecuperarSenha from './screens/RecuperarSenha';

AppRegistry.registerComponent(appName, () => ListaVacina);
