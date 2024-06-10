import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';


const HeaderDashboard = () => {
  return (
    <View style={styles.search}>
        <view style={styles.navIcon} >
        <Text ><EvilIcons name="navicon" size={40} color="#FFAD0F" /></Text>
        </view>
        <view >
            <input type='text' style={styles.input}  />
            <Text style={styles.searchIcon} ><EvilIcons name="search" size={30} color="black" /></Text>
        </view>

    </View>
  )
}

export default HeaderDashboard

const styles = StyleSheet.create({
    search:{
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'baseline'
        
        
    },
    input:{
        flex: 1,
        height: 30,
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 60,
        paddingLeft: 10,
        marginRight: 0,
        marginBottom: 5,
        width: 300,
        borderBlockColor: 'none'
        
       
    },
    searchIcon:{
        position: 'relative',
        left: -300,
        bottom: -6
    },
    navIcon:{
        position: 'relative',
        height: 50,
        bottom: -7
       

    }
})