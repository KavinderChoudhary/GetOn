import React, { useEffect } from 'react';
import {View, Text} from 'react-native'
 import { NavigationContainer } from '@react-navigation/native';
 //@ts-ignore
 import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Container/HomeScreen';



  export  const AppContainer =()=>{
       return(
              <View>
                        <HomeScreen />
               </View>
       )
   }