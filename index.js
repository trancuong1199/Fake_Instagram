/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { StoreProvider } from './Components/Store';

import './Service/Language/i18n'

const AppWrapper = (props) => {
    return (
        <StoreProvider>
            <App /> 
        </StoreProvider>
    );
  };

AppRegistry.registerComponent(appName, () => AppWrapper);


