import { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { Destination_location_View } from '../../store/Action/Destination'
import { useDispatch } from 'react-redux'
import { Ride_Location } from '../../store/Action/locationAction'

function Ride({ navigation }) {

    const dispatch = useDispatch();
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
    dispatch(Ride_Location(location))

    // console.log('location --->', location)
    return (
        <View>
            <MapView
                region={location}
                style={styles.map}
                onRegionChange={(location)=> setLocation(location)}>

                <Marker
                    coordinate={location}
                    title={'Stadium'}
                    description={'Bara wala stadium'}
                />
            </MapView>

            <Button
                title="Select Destination"
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

export default Ride