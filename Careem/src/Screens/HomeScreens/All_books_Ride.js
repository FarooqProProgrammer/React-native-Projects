import { View,Text,StyleSheet } from "react-native";

export default function AllRides(){
    return(
        <View style={styles.container}>
            <View style={styles.Box}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        justifyContent:"center",
        alignItems:"center"
    },
    Box:{
        width:350,
        height:80,
        borderWidth:2,
        borderRadius:4,
        borderColor:"black"
    }
})