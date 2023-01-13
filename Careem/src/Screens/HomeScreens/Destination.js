import { createRef, useEffect, useState,useRef } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import MapView, { Marker, geocodeAddress } from 'react-native-maps'
import * as Location from 'expo-location'
import { Destination_location_View } from '../../store/Action/Destination'
import { useDispatch } from 'react-redux'

function Destination({ navigation }) {

    const [coordinate, setCoordinate] = useState({
        latitude: 0,
        longitude: 0,
    });

    const dispatch = useDispatch();
    const mapRef = useRef();
    const [address, setAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        if (!address) return;
        const geocodeAddress = async () => {
            try {
                const location = await Location.geocodeAsync(address);
                // console.log(location);
                dispatch(Destination_location_View(location))

                if (location.length > 0) {
                    setCoordinate({
                        latitude: location[0].latitude,
                        longitude: location[0].longitude,
                    });
                    // console.log(coordinate)
                    mapRef.current.animateToRegion({
                        latitude: location[0].latitude,
                        longitude: location[0].longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }, 1000);

                      
                } else {
                    setErrorMessage('Invalid address');
                }
            } catch (error) {
                setErrorMessage(error.message);
            }
        };
        geocodeAddress();
    }, [address]);
    // dispatch(Destination_location_View(coordinate))
    
    // console.log('location --->', location)
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                ref={mapRef}
                initialRegion={{
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={(e) => setCoordinate(e.nativeEvent.coordinate)}
            >
                <Marker
                    draggable
                    coordinate={coordinate}
                    onDragEnd={(e) => setCoordinate(e.nativeEvent.coordinate)}
                />
            </MapView>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                    placeholder="Enter destination address"
                />
                <TouchableOpacity style={styles.searchButton} onPress={geocodeAddress}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.bookRideButton} onPress={() => navigation.navigate("AllRides Details")}>
                    <Text style={styles.bookRideButtonText}>Booked Ride</Text>
                </TouchableOpacity>
            </View>
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    searchContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    searchButton: {
        backgroundColor: '#4da6ff',
        padding: 10,
        borderRadius: 5,
    },
    searchButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    bookRideButton: {
        backgroundColor: '#4da6ff',
        padding: 10,
        borderRadius: 5,
    },
    bookRideButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    errorMessage: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: 'red',
    },

})

export default Destination