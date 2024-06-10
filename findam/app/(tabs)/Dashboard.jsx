import { View, Text ,  TouchableOpacity , StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import HeaderDashboard from '../../componentDashboard/HeaderDashboard';
import RecentImage from '../../componentDashboard/RecentImage';
import LastImage from '../../componentDashboard/LastImage';


const Dashboard = () => {
  const numberOfInstances = 3;
  const instancesArray = Array.from({ length: numberOfInstances }, (v, i) => i)
  return (
     <View style={styles.container}>
        <HeaderDashboard />
            <StatusBar style="auto" />
           <ScrollView horizontal={true}>
            {instancesArray.map((index) => (
        <RecentImage key={index}  style={styles.cart}/> // Render the component multiple times
      ))} 
    </ScrollView>
    <ScrollView vertical={true}>
    {instancesArray.map((index) => (
        <LastImage key={index}  style={styles.cart2}/> // Render the component multiple times
      ))} 
    </ScrollView >
     </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
   container: {
      flex:1,

   },

   cart:{
    justifyContent: 'space-around'
   }
})