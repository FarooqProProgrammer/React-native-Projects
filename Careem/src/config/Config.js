import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import About from '../pages/About';
import Home from '../pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Config() {
  return (
    <NavigationContainer>
       
       <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={About}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}