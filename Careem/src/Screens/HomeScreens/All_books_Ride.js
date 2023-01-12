import { useEffect, useState } from "react";
import { View,Text,StyleSheet, Button, Image, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { cars } from "../../Apis/Cars";

export default function AllRides({navigation}){
  
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
        <SafeAreaView style={styles.container}>
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
                        <FlatList
                            data={cars}
                            renderItem={({item})=>{
                                return (
                                    <View style={styles.CarBox}>
                                    <Image 
                                    style={{width:50,height:50,borderRadius:50}}
                                    source={{uri:item.image}}
                                    />
                                    <Text>{item.title}</Text>
                                    <Button 
                                        title="Select Car"
                                        onPress={()=> navigation.navigate("Final")}
                                    />
                            </View>
                                )
                            }}
                        />

                         
                    </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Box:{
        width:350,
        height:200,
      
        borderRadius:4,
       
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },left:{
        flex:2,
        height:200,
        
        justifyContent:"space-around",
        alignItems:"center"
    },Right:{
        flex:1,
        height:200,
        
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
        
        overflow:"scroll"
    },AllCars:{
        flex:1,
        width:"100%",
        borderColor:"black"
    },
    CarBox:{
        height:100,
        
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:"center"
    }

})