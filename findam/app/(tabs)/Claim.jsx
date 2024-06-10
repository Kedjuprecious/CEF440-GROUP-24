import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Claim = () => {
  return (

    
    <View >
      
      <View style ={styles.container}>
      <Text>LOST PICTURE</Text>

      </View>

      <View style ={styles.stylename}>
        <Text>NAME OF LOST ITEM</Text>
      </View>


      <View>
        <i><FontAwesome name="calendar" size={24} color="black" /></i>
        <Text>item claimed date and time</Text>
      </View>

      
      <View>
        <i><Entypo name="location-pin" size={24} color="black" /></i>
        <Text>location of founder</Text>


      </View>
      <Text>additional description</Text>
      <Text>none</Text>

      <TouchableOpacity >
        <Text> 
          CLAIM ITEM
          
        </Text>




      </TouchableOpacity>


    </View>
  )
}

export default Claim

const styles = StyleSheet.create({

container:{
height: "300px",
width: "400px",
backgroundColor: "gray",
color: "black",
justifyContent: "center",
fontWeight: "bold",
alignItems: "center",
fontSize: "40rem",
},

stylename:{
  fontSize: "18",
  fontWeight: "bold"
}


});
