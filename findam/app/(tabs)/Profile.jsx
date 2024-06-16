import { View, Text } from 'react-native'
import React from 'react'
import ProfileHeader from '../../ComponentsProfile/ProfileHeader'
import ProfileBody from '../../ComponentsProfile/ProfileBody'

export default function Profile() {
  return (
    <View>
      <ProfileHeader/>
      <ProfileBody/>
    </View>
  )
}