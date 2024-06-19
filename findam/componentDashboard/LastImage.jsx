import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

const LastImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <View><Image source={require('../assets/images/bg_img2.png')} style={styles.image}/></View>
        <View  style={styles.description}>
                <Text style>Type of Document</Text>
                <Text>Location</Text>
                <Text>Date published</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cart:{
        width: 'auto',
        height: 100,
        resizeMode: 'contain',
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginTop: 3,
        shadowRadius: 5,
        flexDirection: 'row', // Aligns children in a row
        alignItems: 'center', // Vertically center the children
        padding: 10,
    },
    image:{
        width: 100, 
        height: 100, 
        resizeMode: 'contain',
        borderRadius: 8,
        backgroundColor: '#d9d9d9',
        marginRight: 120,
   },
//    flatListContainer:{
//     backgroundColor:'#d9d9d9',
//     marginHorizontal: 16,
//     marginVertical: 10,
//     paddingBottom: 20,
//     borderRadius: 6,
//     justifyContent:'center',
//     alignContent: 'center'
   
// },
// separator: {
//   height: 2,
//   backgroundColor:'#d9d9d9'
// }
    description:{
        fontSize: 16,
    }
})

export default LastImage;