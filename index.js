/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from '@screen/application';
import {name as appName} from './app.json';

import Config from '@library/config/Config';
import '@library/config/ReactotronConfig';

console.disableYellowBox = Config.useYellowBox;
YellowBox.ignoreWarnings(['Require cycle:']);

// allow reactotron overlay for fast design in dev mode
const app = Config.useReactotron ? console.tron.overlay(App) : App;

AppRegistry.registerComponent(appName, () => app);
