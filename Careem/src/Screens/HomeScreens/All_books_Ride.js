import { useEffect, useState } from "react";
import { View,Text,StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

export default function AllRides(){
  
    const Ride = useSelector(state => state)
    console.log(Ride.location);
    



    const Destination = useSelector(state => state )
    console.log(Destination.location);
  
    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }


    

    function getDistanceFromLatLonInKm(lat1, longi1, lat2, longi2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 -lat1);  // deg2rad below
        var dLon = deg2rad(longi1 - longi2 ); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        console.log(d);
      }
      


    return(
        <View style={styles.container}>
            <View style={styles.Box}>
                <Button onPress={()=> getDistanceFromLatLonInKm(Ride.location.latitude, Ride.location.longitude, Destination.location.latitude, Destination.location.longitude)} title="Fare"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        justifyContent:"center",
        alignItems:"center"
    },
    Box:{
        width:350,
        height:80,
        borderWidth:2,
        borderRadius:4,
        borderColor:"black"
    }
})