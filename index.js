// AppRegistry.registerComponent(appName, () => Main);
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App'; // Assuming your main app component is in App.js
import { name as appName } from './app.json';

// Register the main component of your application
AppRegistry.registerComponent(appName, () => App);
