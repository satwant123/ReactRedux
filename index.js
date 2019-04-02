/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ReduxFlat from './src/ReduxFlat';

AppRegistry.registerComponent(appName, () => ReduxFlat);
