import { useEffect, useState } from "react";
import { View,Text,StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

export default function AllRides(){
  
    const [distance,setDistance] = useState();
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
        setDistance(d)
      }
      


    return(
        <View style={styles.container}>
            <View style={styles.Box}>
                
                <View style={styles.left}>
                   
                 
                    <Text style={styles.Text}>Distance: 10km </Text>
                    <Text style={styles.Text}>Fare: 20 x 1km </Text>
                    <Text style={styles.Text}>Total Fare: 200Rs </Text>
                   
                  
                    
                </View>
                <View style={styles.Right}>
                    <Button onPress={()=> getDistanceFromLatLonInKm(Ride.location.latitude, Ride.location.longitude, Destination.location.latitude, Destination.location.longitude)} title="Fare"></Button>
                </View>
                
            </View>
            <View style={styles.Car}>
                    <View>
                        <Text style={styles.Text}> Select Your Desired Car</Text>
                    </View>
                    <View style={styles.AllCars}>

                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Box:{
        width:350,
        height:200,
        borderWidth:2,
        borderRadius:4,
        borderColor:"black",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },left:{
        flex:2,
        borderWidth:2,
        height:200,
        borderColor:"black",
        justifyContent:"space-around",
        alignItems:"center"
    },Right:{
        flex:1,
        borderWidth:2,
        height:200,
        borderColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },Text:{
        fontSize:20,
        fontWeight:"500"
    },Car:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        height:200,
        borderWidth:4,
        borderColor:"black",
        overflow:"scroll"
    },AllCars:{
        flex:1,
        width:"100%",
        borderWidth:2,
        borderColor:"black"
    }

})