import { View, Text ,  TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';



export default function Dashboard() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">hello Dashboard</Text>
      <StatusBar style="auto" />
      {/* <Button
        title=" See More "
        onPress={() => navigation.navigate('SeeMorePage')}
        color="#FFAD0F"
        /> */}
        <TouchableOpacity onPress={() => navigation.navigate('SeeMorePage')}>
        <Text style={{ color: 'blue', textDecorationLine: 'none' }}>Go to See More Page</Text>
      </TouchableOpacity>
    </View>
  )
}

