import { View, Text, Button } from 'react-native'

function Pickup({ navigation }) {
    return (
        <View>
            <Text>Destination Screen</Text>

            <Button
                title="Select Car"
                onPress={() => navigation.navigate('CarSelection')}
            />
        </View>
    )
}

export default Pickup