import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, TextInput, TouchableOpacity, Switch, FlatList, Image, Button, StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as Contacts from 'expo-contacts';

let camera
export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [currentImage, setCurrentImage] = useState()

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data;
          console.log(contact);
        }
      }
    })();
  }, []);


  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function takePicture() {
    if (camera) {
      const options = { quality: 0.5 };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
      setCurrentImage(data.uri)
    }
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      {/* <View style={{ backgroundColor: 'red', flex: 0.1 }}></View>
      <View style={{ backgroundColor: 'green', flex: 1 }}></View>
      <View style={{ backgroundColor: 'blue', flex: 0.1 }}></View> */}


      {/* <View style={{ backgroundColor: 'red', width: 100, height: 100 }}></View>
      <View style={{ backgroundColor: 'green', width: 100, height: 100 }}></View>
      <View style={{ backgroundColor: 'blue', width: 100, height: 100 }}></View> */}

      {currentImage ?
        <View style={styles.camera}>
          <Image style={styles.camera} source={{ uri: currentImage }} />
          <Button title="Take new picture" onPress={() => setCurrentImage()} />
        </View>
        :
        <Camera ref={ref => camera = ref} style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Image
                style={styles.image}
                source={{ uri: 'https://static.thenounproject.com/png/99970-200.png' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Image
                style={styles.image}
                source={{ uri: 'https://expertizo.pk/img/logo-alt.png' }} />
            </TouchableOpacity>

            <View style={styles.button} />
          </View>
        </Camera>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 40
  },
  button: {
    flex: 1
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 120,
    height: 80
  }
});



/*
    React Native

    Native vs Hybrid

    RN CLI vs Expo


EXPO:
    PROS:
        1. No SDK setup required, it's just like 
        create-react-app startup (Quick start).
        2. Less build errors.
        3. Linking not required during library installation
        4. Development Mode: You can review both Android and
        iOS outputs.
    CONS:
        1. Development process is slow.
        2. You are bounded towards the Expo libraries only.
        (Only hardware related libraries)
        3. You can't link any Native code with your RN app.
        4. Production Mode: For iOS build and Appstore
        uploading process, you will need MAC.
        5. Build size is usually big.

RN CLI:
    PROS:
        1. Development process is fast.
        2. You are not bounded towards any specific platform.
        You can use any library from anywhere.
        3. You can link any Native code with your RN app.
        4. Build size is usually less.

    CONS:
        1. SDK setup is required (Android Studio/Xcode +
            additional configuration)
        2. More build errors as compare to Expo
        3. Linking is required during library installation.
        Error probability increases.
        4. Development/Production Mode: You can review only Android
        but for iOS, you will need MAC


OUTPUTS:
    ANDROID: .APK
    iOS: .APP

MACBOOK:
1. Rs. 1200000 (For 2015 early)
2. Hackintosh
3. VMWare (8 gb (4 gb))
4. Access client's Mac via Zoom or Teamviewer
*/