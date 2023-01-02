import { View,Text ,Image} from "react-native";
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Help";
import Help from "./src/Screens/Home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Activities from "./src/Screens/Activities";
import Profile from "./src/Screens/Profile";
const Tabs = createMaterialBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
     
        <Tabs.Navigator>
          <Tabs.Screen name="Home"  component={Home}/>
          <Tabs.Screen name="Help"  component={Help}/>
          <Tabs.Screen name="Activites" component={Activities}/>
          <Tabs.Screen name="Profile" component={Profile}/>
        </Tabs.Navigator >
    </NavigationContainer>
  )
}