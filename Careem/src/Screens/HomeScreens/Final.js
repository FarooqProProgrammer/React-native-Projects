import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MapView,{Marker} from "react-native-maps"

const Final = () => {
    const [location, setLocation] = useState({
        latitude: 24.8952922,
        longitude: 67.0823298,
        latitudeDelta: 0.0001,
        longitudeDelta: 0.0001,
    })
    const Ride = useSelector(state => state)
    const Destination = useSelector(state => state )
    
   

    const data = [
        {
            latitude: 24.8952910,
            longitude: 67.0823296,
        },
        {
            latitude: 24.8952919,
            longitude: 67.0823294,
        },
        
    ]

    console.log(Ride.location);
    console.log(Destination.location);
  return (
    <View style={{flex:1}}>
        <MapView
            region={location}
            style={{flex:1}}
        >   

        <Marker 
            coordinate={{latitude: 24.8952910,
                longitude: 67.0823296}}
        />
        <Marker 
            coordinate={Destination.location}
        />
        
    </MapView>
    <View style={{width:350,flexDirection:'row',justifyContent:"space-around",alignItems:"center"}}>
    <Button
    style={{flex:1}}
                title="Start My Ride"
                
    />
    <Button
    style={{flex:1}}
                title="End Ride"
                
    />
    
    </View>

    </View>
  )
}

export default Final

const styles = StyleSheet.create({})