import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";

const ClaimScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { image, name, status, date } = route.params;

  const [isUploadModalVisible, setUploadModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isMatchedModalVisible, setMatchedModalVisible] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      handleImageUpload(result.uri);
    }
  };

  const handleImageUpload = (uri) => {
    setUploadModalVisible(false);
    setLoading(true);

    // Simulate image comparison process
    setTimeout(() => {
      setLoading(false);
      setMatchedModalVisible(true);
    }, 3000); // Simulating a 3 second comparison process
  };

  const handleClaim = () => {
    setUploadModalVisible(true);
  };

  const handleMatchConfirm = () => {
    setMatchedModalVisible(false);
    navigation.navigate("Transaction");
  };

  return (
    <View style={styles.container}>
      {/* Top Section: Large Image View */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      {/* Second Section: Image Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{status}</Text>
        <Text style={styles.text}>{date}</Text>
      </View>

      {/* Footer: Back and Claim Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClaim}>
          <Text style={styles.buttonText}>Claim</Text>
        </TouchableOpacity>
      </View>

      {/* Upload Modal */}
      <Modal
        visible={isUploadModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Icon name="upload" size={50} color="#000" />
            <Text style={styles.modalText}>
              Upload or take a picture of the lost item
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={pickImage}>
              <Text style={styles.buttonText}>Upload from Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setUploadModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Loader Modal */}
      <Modal visible={isLoading} transparent={true} animationType="none">
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.modalText}>Comparing images...</Text>
        </View>
      </Modal>

      {/* Matched Modal */}
      <Modal
        visible={isMatchedModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Image Matched!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleMatchConfirm}
            >
              <Text style={styles.buttonText}>Proceed to Payment</Text>
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
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  descriptionContainer: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: {
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
  modalText: {
    fontSize: 18,
    marginVertical: 10,
  },
  modalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
});

export default ClaimScreen;
