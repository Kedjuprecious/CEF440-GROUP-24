import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import SeeMorePage from '../app/(tabs)/SeeMorePage';


const RecentImage = () => {
    const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('SeeMorePage')}>
          <Text style={{ color: 'blue', textDecorationLine: 'none' }}>See More </Text>
        </TouchableOpacity>
        <View style={styles.cart}>
            <View><Image source={require('../assets/images/bg_img2.png')} style={styles.image}/></View>
            <View style={styles.description}>
                <Text style={{color: 'red'}}>Status</Text>
                <Text>Type of Document</Text>
                <Text> Date published</Text>
            </View>
        </View>
     </View>
    </View>
  )
}

export default RecentImage

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFAD0F',
        marginTop: 10,
        marginBottom: 10
    },
    cart:{
        width: '280',
        height: 'auto',
        resizeMode: 'contain',
        borderRadius: 10,
        justifyContent: 'space-around',
        marginRight: 80,
        backgroundColor: '#FFF',
        marginBottom: 20,
        shadowRadius: 10

    },
    
    image:{
         width: 250, 
         height: 250, 
         resizeMode: 'contain',
         borderRadius: 10,
         backgroundColor: '#d9d9d9'
    },
  description: {
   margin: 10,
   fontSize: 'medium'
  },   
})