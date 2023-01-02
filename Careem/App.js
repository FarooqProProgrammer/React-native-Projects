import { View,Text ,Image} from "react-native";
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import Help from "./src/Screens/Help";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Activities from "./src/Screens/Activities";
import Profile from "./src/Screens/Profile";
import Ride from "./src/Screens/HomeScreens/Ride";
import Destination from "./src/Screens/HomeScreens/Destination";
import AllRides from "./src/Screens/HomeScreens/All_books_Ride";
import { Provider } from "react-redux";
import { store } from "./src/store";

const Tabs = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeScreen(){
  return(

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Ride" component={Ride}/>
        <Stack.Screen name="Destination" component={Destination}/>
        <Stack.Screen name="AllRides Details" component={AllRides}/>
        
      </Stack.Navigator>
  )
}

export default function App(){
  return (
    <Provider store={store}>    
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="HomeScreen"  component={HomeScreen}/>
          <Tabs.Screen name="Help"  component={Help}/>
          <Tabs.Screen name="Activites" component={Activities}/>
          <Tabs.Screen name="Profile" component={Profile}/>
        </Tabs.Navigator >
    </NavigationContainer>
    </Provider>
  )
}
