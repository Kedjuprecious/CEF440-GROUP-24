import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function _layout() {
  useFonts({
    
    })
  return (
    <Stack>
      <Stack.Screen name="(tabs)"/>
    </Stack>
  )
}