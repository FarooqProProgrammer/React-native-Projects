import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PickupScreen from './src/pages/Pickup'
import DestinationScreen from './src/pages/Destination'
import CarSelectionScreen from './src/pages/CarSelection'
import RidesScreen from './src/pages/Rides'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function RidesNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Pickup" component={PickupScreen} />
            <Stack.Screen name="Destination" component={DestinationScreen} />
            <Stack.Screen name="CarSelection" component={CarSelectionScreen} />
        </Stack.Navigator>
    );
}

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Rides" component={RidesNavigator} />
                {/* <Drawer.Screen name="RidesHistory" component={RidesScreen} /> */}
             
            </Drawer.Navigator>
        </NavigationContainer>
    );
}