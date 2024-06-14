// components/settings/ThemesModal.jsx
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

const ThemesModal = ({ visible, onClose, currentTheme, onChangeTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState(currentTheme);

  const handleChangeTheme = (theme) => {
    setSelectedTheme(theme);
    onChangeTheme(theme); // Call parent handler to update theme
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close-circle" size={32} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChangeTheme("light")}>
          <Text
            style={[
              styles.themeOption,
              selectedTheme === "light" && styles.selectedTheme,
            ]}
          >
            Light Mode
          </Text>
          {selectedTheme === "light" && (
            <Ionicons name="checkmark-circle" size={24} color="green" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChangeTheme("dark")}>
          <Text
            style={[
              styles.themeOption,
              selectedTheme === "dark" && styles.selectedTheme,
            ]}
          >
            Dark Mode
          </Text>
          {selectedTheme === "dark" && (
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
  themeOption: {
    fontSize: 18,
    marginVertical: 10,
  },
  selectedTheme: {
    fontWeight: "bold",
    color: "#007bff", // Adjust color as needed
  },
});

export default ThemesModal;
