import { StyleSheet, TouchableOpacity, View ,Text,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Contacts from 'expo-contacts';
import { Image, Input } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "twrnc"

const HomeScreen = () => {
    const input = React.createRef();
    const [documents,setContact] = useState([]);
    
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
      
            if (data.length > 0) {
              const contacts = data;
              setContact(contacts);
              console.log(documents);
            }
          }
        })();
      }, []);

      
  return (
    <SafeAreaView>
        
        <Input
        ref={input}
        placeholder='Enter Your Contact to be Searched'
        />
       

        <FlatList
                data={documents}
                style={styles.list}
                numColumns={2}
                renderItem={(element) => {
                        return (

                            <TouchableOpacity style={tw`w-full h-[100px] border-2 border-black flex flex-row justify-around items-center`}>
                                <Image
                                source={{uri:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAjAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADcQAAICAQEHAAYIBgMAAAAAAAABAgMEEQUSITFBUXETIjJhkbEjQlJTcqHB0TOBgpLw8RQVJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7UAAAAAAELI2lVXrGr6SX5L+YE0xlZCHtzjHy9CjuzL7dd6bS+zHgaAL/AP5VH30PiZRvpl7NsH/Uc6AOmBztd1lT1rnJeGTaNpyWivWq7rmBagwqthdHerkmjMAAAAAAAAAYzlGEHOct2KWrZkUm0Mr089yD+ji+nV9wGbnTyG4w1jV27+SIAAPYxlOSjCLk30S1JGHiSyZavWMFzl+xdVVV0x3aoqK+fkCkWFlSWqpf82ka7KLq1rZVKK76ao6IAcyC3zdnwsTnSlGfVclL9ip4ptNNNc9QMqbZ0y3q5OPgusPLjkx05WdUURlXOVclKDaaA6QGnFyFkVKa59UbgAAAAACHtO900bkPbnw8LqUqJO0rfS5k9PZh6q/X8yMAMoRc5qK5sxJGAtcuvXuBdUVRpqjCPRc+5sAAAAAVG16VC2NseU+EvP8AnyLcg7XX/kXumgKcAAStn3+hvSfsS4MvDmS/wrPS40JdeTA3gAAeN6JvtxPTC/8Ag2fhfyA51y3m5Pm3qzwLkABsxp+jyIT7M1hsDpV3XJ8j0r9nZinFVWP1l7LfUsAAAAFbtmxKEKure8/BOyLoUVudj0XzKHIulfdKyXXkuyA1oAAC22PPWuyPZlSWWxvas8AWgAAHklvRa7rQ9AHMpaLQG7NrdWXZHo5arw+JpAzprldYq4c3+Rb0bOorSdkfSS6uXL4GOy6dyn0jXrT+ROAqszZ0oydmMteu4ua8GFG0ra/VsW/pz14NFwaraKrv4tcZe/r8QIq2rT1hI12bV4fRVce8mb3szG7TX9RlDZ+NB6+j3vxPUCrjDIz7d7jLpvPhFFnXgY8atycFN9ZPmSkklolovcegU2dguhekqbda5p84kI6WUVKLjJcGtGc9kVOi+db6Ph710A1lpsaPC2XhFWXmzK9zEXeT1AlAAAAAK3bFOsI3RXGPCXj/AD5lXH1pJe86WUVKLjJaprRooMmiWNdutvTXWD7oC+rioQjFdFoZEPAy1dBQm9LF+ZMAAAAAAAAAFTtmGltc+8Wvh/ss7LIVQc7HpFFFl5Msm1yfBL2V2QHmPU77o1rq+Pg6BJRSS5LgQ9m4voa9+a0nLp2RNAAAAAABpyceGTW4z4PmpdmbgBzt1VmNbuy9V9GuvgsMTaSaUb+D+0T7qoXQ3LIpxZVZOzbK/WpbnHt9ZfuBbxkpR3otNd0enOQttpn6rlCS6PhoS4bTuj7Si/KAuAVf/bP7pf3GMtrWfVrivL1AtiNk5tWPwb3p/ZX6lTbmX26qVjSfNR4Ixx8a29/RV6r7T4IBk5NmTPWx6Jcorkids/Beqtvj+GL+bN+Ls+ujSU3v2Lr0XgmAAAAAAAAAAAAAAGFtVdq0shGXlEWezMaXFb8fwy/cmgCueya/vp/BHsdlU/WssfuWi/QsABHrwsevTdrTa6y4kgAAAAAAAAAD/9k="} }
                                containerStyle={tw`w-14 h-14 rounded-full border-2`}
                                />
                                <Text>{element.item.name}</Text>
                                {/* <Text>{Contact Type}</Text> */}
                                </TouchableOpacity>
                        )
            }}
      />
            
   
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    input:{
        width:400,
    },list: {
        width: '100%',
        height:"100%"
      }
})


{/* <TouchableOpacity style={tw`w-full h-[100px] border-2 border-black flex flex-row justify-around items-center`}>
<Image
containerStyle={tw`w-14 h-14 rounded-full border-2`}
/>
<Text>Name</Text>
<Text>Contact Type</Text>
</TouchableOpacity> */}
