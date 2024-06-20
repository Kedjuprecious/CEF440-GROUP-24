import { View, StyleSheet, ScrollView  } from 'react-native'
import React from 'react'
import  { StatusBar }  from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import  DashboardH  from '../../componentDashboard/DashboardH';
import  RecentImage from '../../componentDashboard/RecentImage';
import  LastImage  from '../../componentDashboard/LastImage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../componentDashboard/Footer'



const Dashboard = () =>{
  const numberOfInstances = 3;
  const instancesArray = Array.from({ length: numberOfInstances }, (v, i) => i)
  return (
     <View style={styles.Container}>
      <SafeAreaView/>
       <DashboardH /> 
        <StatusBar style="auto" />
       <RecentImage style/> 
    <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
    {instancesArray.map((index) => (
        <LastImage key={index}  style={styles.Cart}/> // Render the component multiple times
      ))} 
    </ScrollView >
     </View>


   
  )
}

const styles = StyleSheet.create({
   Container: {
      flex:1,

   },

   Cart:{
    justifyContent: 'space-around',
    marginTop: 0
   }
})

export default Dashboard;