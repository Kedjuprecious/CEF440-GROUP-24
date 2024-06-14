// components/settings/AppLanguageModal.js
import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you have Ionicons installed

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AppLanguageModal = ({
  visible,
  onClose,
  currentLanguage,
  onChangeLanguage,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    onChangeLanguage(language); // Call parent handler to update language
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close-circle" size={32} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChangeLanguage("english")}>
          <Text
            style={[
              styles.languageOption,
              selectedLanguage === "english" && styles.selectedLanguage,
            ]}
          >
            English
          </Text>
          {selectedLanguage === "english" && (
            <Ionicons name="checkmark-circle" size={24} color="green" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChangeLanguage("french")}>
          <Text
            style={[
              styles.languageOption,
              selectedLanguage === "french" && styles.selectedLanguage,
            ]}
          >
            French
          </Text>
          {selectedLanguage === "french" && (
            <Ionicons name="checkmark-circle" size={24} color="green" />
          )}
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: windowWidth * 0.8, // 80% of the screen width
    maxHeight: windowHeight * 0.3, // Maximum height, adjust as needed
    alignSelf: "center",
    marginTop: windowHeight * 0.25, // Adjust position from top
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Android elevation for shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  languageOption: {
    fontSize: 18,
    marginVertical: 10,
  },
  selectedLanguage: {
    fontWeight: "bold",
    color: "#007bff", // Adjust color as needed
  },
});

export default AppLanguageModal;
