import React from 'react'
import { View,Text } from 'react-native'
import { StyleSheet } from 'react-native'


const Home = () => {
  return (
    <View style={style.container}>
        <Text >Hello</Text>
    </View>
  )
}

export default Home

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red"
    }
})