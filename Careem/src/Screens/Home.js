import { View,Text, StyleSheet, TouchableOpacity,Image } from "react-native";



export default function Home({navigation}){
    return(
        <View style={styles.container}>
                <View style={styles.box}>
                    <Image
                        style={{width:100,height:100,marginBottom:15}}
                            source={{uri:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}}
                    />
                    <TouchableOpacity
                    style={{borderWidth:3,borderColor:"#fff",paddingLeft:10,paddingRight:10,paddingTop:15,paddingBottom:15}}
                    onPress={()=> navigation.navigate("Ride")}>
                        <Text style={{fontSize:25,color:"#ffffff",fontWeight:"900"}}>Book My Ride</Text>
                    </TouchableOpacity>
                    
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#3498db"
    },
    box:{
        flex:1,
        width:350,
        borderRadius:3,
        justifyContent:"center",
        alignItems:"center"
    }
})