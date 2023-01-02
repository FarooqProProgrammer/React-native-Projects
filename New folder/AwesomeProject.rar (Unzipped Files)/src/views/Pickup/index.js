import { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

function Pickup({ navigation }) {
    const [location, setLocation] = useState({
        latitude: 24.8952922,
        longitude: 67.0823298,
        latitudeDelta: 0.0001,
        longitudeDelta: 0.0001,
    })
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            // let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
            // setLocation({ ...location, latitude, longitude })


            Location.watchPositionAsync({
                distanceInterval: 0.1,
                timeInterval: 100,
            }, (response) => {
                const { coords: { latitude, longitude } } = response
                setLocation({ ...location, latitude, longitude })
            })
        })();
    }, []);

    console.log('location --->', location)
    return (
        <View>
            <MapView
                region={location}
                style={styles.map}>

                <Marker
                    coordinate={location}
                    title={'Stadium'}
                    description={'Bara wala stadium'}
                />
            </MapView>

            <Button
                title="Selection Destination"
                onPress={() => navigation.navigate('Destination', { location })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '93%',
    },
})

export default Pickup