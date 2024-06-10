import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Picker from '../../componentsR/ImageUploader/Picker'
import Camera from '../../componentsR/ImageUploader/Camera'
import Camera1 from '../../componentsR/ImageUploader/Camera1'
import Form from '../../componentsR/ImageUploader/Form'
import SubmitCancel from '../../componentsR/ImageUploader/SubmitCancel'

const Report = () => {
  return (
    <View style={styles.container}>
    <View>Report Item</View>
     

      <Form />
      <Camera1 />
      <Picker />
      <SubmitCancel />
    </View>

  )
}

export default Report

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
});