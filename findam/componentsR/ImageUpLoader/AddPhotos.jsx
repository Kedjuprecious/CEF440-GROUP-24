import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const AddPhotos = ({ onTakePicture }) => {
  const handleSelectFromPhone = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
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
    <View style={styles.photoContainer}>
      <Text style={styles.photoTitle}>Add Photos</Text>
      <View style={styles.photoBox}>
        <Image source={require("../../assets/images/file-upload.svg")} />
        <Text style={styles.dragHere}>Drag here</Text>
        <TouchableOpacity style={styles.button} onPress={handleSelectFromPhone}>
          <Text style={styles.buttonText}>Select from phone</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={onTakePicture}>
        <Text style={styles.buttonText}>Take a picture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPhotos;

const styles = StyleSheet.create({
  photoContainer: {
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  photoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  photoBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
  },
  dragHere: {
    marginBottom: 10,
    color: "#888",
  },
  button: {
    backgroundColor: "#FCB121",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
});
