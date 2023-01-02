import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import About from './src/pages/About';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
        
    </NavigationContainer>
  );
}
