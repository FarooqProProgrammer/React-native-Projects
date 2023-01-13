import { StyleSheet, Text, View,Button,Modal,Pressable ,Image} from 'react-native'
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
    const [Ridelocation,setRideLocation] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const Ride = useSelector(state => state)
    
    const Destination = useSelector(state => state )
    
    useEffect(()=>{
        setRideLocation(Ride.location);
        setLocation(Destination.location);

    },[location,Ridelocation])
    console.log(Ride.location);
    console.log(Destination.location);
   
  return (
    <View style={{flex:1}}>
        <MapView
            region={location}
            style={{flex:1}}
        >   

        <Marker 
            coordinate={Ridelocation}
        />
        <Marker 
            coordinate={location}
        />
        
    </MapView>
    <View style={{width:350,flexDirection:'row',justifyContent:"space-around",alignItems:"center"}}>
    <Button
    style={{flex:1}}
                title="Start My Ride"
                onPress={() => setModalVisible(true)}
                
    />
   
    
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image 
                style={{width:100,height:100}}
                source={{uri:"https://i.pinimg.com/originals/b4/a8/a4/b4a8a4625f6b8ef4418150efff833d04.gif"}}
            />
             <Button
    style={{flex:1}}
                title="End Ride"
                onPress={() => setModalVisible(false)}
    />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default Final

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }
})