import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, TextInput, Switch, FlatList, Image, Button, StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up Saylani to start working on your app!</Text>
      <Image
        style={{ width: 140, height: 140 }}
        source={{ uri: 'https://pbs.twimg.com/profile_images/1255632725115101184/4yG1ByQo_400x400.jpg' }} />

      <Button
        onPress={() => alert('Hey')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        value={true}
      />

      <ActivityIndicator size="large" />
      <TextInput
        style={styles.input}
        onChangeText={(text) => console.log('text', text)}
      />

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
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