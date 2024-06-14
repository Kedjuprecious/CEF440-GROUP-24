import { View, Text } from 'react-native'
import React from 'react'
import AddPhotos from '../../componentsR/ImageUpLoader/AddPhotos'
import ActionButtons from '../../componentsR/ImageUpLoader/ActionButtons'

export default function Claim() {
  return (
    <View>
      <Text>Claimer</Text>
      <AddPhotos />
      <ActionButtons />
    </View>
  )
}