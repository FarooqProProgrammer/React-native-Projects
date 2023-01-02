import { View,Text, StyleSheet, TouchableOpacity } from "react-native";



export default function Home({navigation}){
    return(
        <View style={styles.container}>
                <View style={styles.box}>
                    <TouchableOpacity
                    onPress={()=> navigation.navigate("Ride")}>
                        <Text>Book My Ride</Text>
                    </TouchableOpacity>
                    
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box:{
        width:350,
        height:300,
        borderWidth:4,
        borderRadius:3,
        borderColor:"black",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    }
})