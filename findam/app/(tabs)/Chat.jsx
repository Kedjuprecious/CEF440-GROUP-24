import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Headerchat from '../../ComponentsChat/Headerchat'
import Bodychat from '../../ComponentsChat/Bodychat'
import Footerchat from '../../ComponentsChat/Footerchat'

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Headerchat />
      <Bodychat />
      <Footerchat />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor: '#FF0000',
  },

});