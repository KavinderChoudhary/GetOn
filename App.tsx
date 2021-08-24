/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {AppNavigation}from './src/NavController/AppContainer'
import { SafeAreaView,Text,useColorScheme,View, } from 'react-native';
import { HomeScreen } from './src/Container/HomeScreen';


const App = () => {
  return (
    <HomeScreen />
    // <AppNavigation  />
  );
};



export default App;
