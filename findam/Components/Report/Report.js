import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const Report = ({ route }) => {
  const navigation = useNavigation();
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const [isUploadModalVisible, setUploadModalVisible] = useState(false);

  const pickImage = async (source) => {
    let result;

    if (source === "camera") {
      result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      setImageUri(result.uri);
      setUploadModalVisible(false);
    }
  };

  const handleSubmit = () => {
    const newItem = {
      name: itemName,
      description: itemDescription,
      location: location,
      image: imageUri,
    };

    axios
      .post("http://192.168.1.195:5000/report", newItem)
      .then((response) => {
        console.log(response.data);
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while submitting the report.");
      });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report</Text>
      </View>

      {/* Section 2: Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />
        <TextInput
          style={styles.input}
          placeholder="Item Description"
          value={itemDescription}
          onChangeText={setItemDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Location Found"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      {/* Section 3: Upload Image */}
      <View style={styles.uploadContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <>
            <Text style={styles.uploadText}>
              Upload an image of the item found
            </Text>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => setUploadModalVisible(true)}
            >
              <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Upload Modal */}
      <Modal
        visible={isUploadModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Upload Item</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => pickImage("camera")}
            >
              <Icon name="camera" size={30} color="#000" />
              <Text style={styles.modalButtonText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => pickImage("gallery")}
            >
              <Icon name="photo" size={30} color="#000" />
              <Text style={styles.modalButtonText}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setUploadModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  uploadContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  modalButtonText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Report;
