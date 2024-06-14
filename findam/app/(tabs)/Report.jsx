
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
import * as Permissions from "expo-permissions";
import React, { useEffect } from "react";
import ActionButtons from "../../componentsR/ImageUpLoader/ActionButtons";
import AddPhotos from "../../componentsR/ImageUpLoader/AddPhotos";
import ItemDetails from "../../componentsR/ImageUpLoader/ItemDetails";

const Report = () => {
  // Request camera permissions when the component mounts
  useEffect(() => {
    const getPermissions = async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera permissions to make this work!');
        }
      }
    };

    getPermissions();
  }, []);

  

  const handleTakePicture = async () => {
     console.log("Take Picture button pressed");
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.uri);
    }
  };
  return (
    <View style={styles.container}>
    
      <Text style={styles.header}>Report Item</Text>
      <ItemDetails />
      <AddPhotos onTakePicture={handleTakePicture} />
      <ActionButtons />
    </View>
  );
}

export default Report

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
 

 
 
});
