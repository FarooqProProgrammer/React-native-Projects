import { View, Text ,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

export default function ContactUs() {
    const [agree,setAgree] = useState(false);
  return (
    <View style={StyleSheet.mainContainer}>
        <Text style={styles.mainHeader}>
            Login Form
        </Text> 
        <Text style={styles.description}>You can reach us via farooqayub646@gmail.com</Text>  
        <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter Your Name</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
        </View>
        <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter Your Password</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
        </View>

        <View style={styles.wrapper}>
                <Checkbox
                // value={}
                />
                <Text style={styles.wrapperText}>I have read and Agree</Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
            <Text>Login</Text>
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      paddingHorizontal: 30,
      backgroundColor: "#fff",
    },
    mainHeader: {
      fontSize: 20,
      color: "#344055",
      fontWeight: "500",
      paddingTop: 20,
      paddingBottom: 15,
      fontFamily: "JosefinSans_500Medium",
      textTransform: "capitalize",
    },
    description: {
      fontSize: 20,
      color: "#7d7d7d",
      paddingBottom: 20,
      fontFamily: "JosefinSans_400Light",
      lineHeight: 25,
    },
  
    inputContainer: {
      marginTop: 20,
    },
    labels: {
      fontWeight: "bold",
      // fontSize: 15,
      color: "#7d7d7d",
      paddingBottom: 5,
      fontFamily: "JosefinSans_300Light",
      lineHeight: 25,
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.3)",
      paddingHorizontal: 15,
      paddingVertical: 6,
      borderRadius: 2,
    },
    multiineStyle: {
      paddingVertical: 4,
    },
    buttonStyle: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
    },
    buttonText: {
      color: "#eee",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      marginTop: 20,
      fontFamily: "JosefinSans_300Light",
    },
    wrapperText: {
      marginLeft: 10,
      color: "#7d7d7d",
      fontFamily: "JosefinSans_300Light",
    },
  });