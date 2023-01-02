import { View, Text, Button } from 'react-native'

function Pickup({ navigation }) {
    return (
        <View>
            <Text>Pickup Screen</Text>

            <Button
                title="Selection Destination"
                onPress={() => navigation.navigate('Destination')}
            />
        </View>
    )
}

export default Pickup