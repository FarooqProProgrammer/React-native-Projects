import React, { useEffect, useState } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import { useSelector } from 'react-redux';

const Final = () => {
  const [marker1Coordinate, setMarker1Coordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [marker2Coordinate, setMarker2Coordinate] = useState({
    latitude: 37.78345,
    longitude: -122.4234,
  });

  const Ride = useSelector(state => state.Place.Destination_location.location)
  const Destination = useSelector(state => state.Ride.location)
  console.log(Ride);
  console.log(Destination);

  // useEffect(()=>{

  //   setMarker1Coordinate(Ride)
  //   setMarker2Coordinate(Destination)
  // },[marker1Coordinate,marker2Coordinate])
  

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.8952922,
          longitude: 67.0823298,
          latitudeDelta: 0.0001,
          longitudeDelta: 0.0001,
        }}
      >
        <Marker
          coordinate={marker1Coordinate}
        />
        <Marker
          coordinate={marker2Coordinate}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Final;
