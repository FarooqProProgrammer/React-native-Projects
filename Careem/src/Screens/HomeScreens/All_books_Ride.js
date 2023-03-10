import { useEffect, useState } from "react";
import { View,Text,StyleSheet, Button, Image, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { cars } from "../../Apis/Cars";
import {getDistance} from 'geolib';
export default function AllRides({navigation}){
  
    // const [distance,setDistance] = useState();
    const Ride = useSelector(state => state.Place.Destination_location.location)
    const Destination = useSelector(state => state.Ride.location)
  
   console.log(Ride);     
// const distance = getDistance(
//     { latitude: Ride.latitude, longitude:Ride.longitude },
//     { latitude: Destination.latitude, longitude: Destination.longitude }
//   );
//   console.log(distance);
    

 
      


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
                                    <Text style={{color:"#fff"}}>{item.title}</Text>
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
        backgroundColor:"#3498db"
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
        fontWeight:"500",
        color:"#fff",
        fontWeight:"bold"
    },Car:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        height:200,
        
        overflow:"scroll"
    },AllCars:{
        flex:1,
        width:"100%",
       
    },
    CarBox:{
        height:100,
        
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:"center"
    }

})