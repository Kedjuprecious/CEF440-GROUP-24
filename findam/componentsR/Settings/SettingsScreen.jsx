// components/settings/SettingsScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header";
import AppLanguageModal from "./AppLanguageModal";
import ThemesModal from "./ThemesModal";
import AccountManagement from "./AccountManagement";

const SettingsScreen = ({ navigation }) => {
  const [appLanguageModalVisible, setAppLanguageModalVisible] = useState(false);
  const [themesModalVisible, setThemesModalVisible] = useState(false);
  const [appTheme, setAppTheme] = useState("light"); // Default theme

  const toggleAppLanguageModal = () => {
    setAppLanguageModalVisible(!appLanguageModalVisible);
  };

  const toggleThemesModal = () => {
    setThemesModalVisible(!themesModalVisible);
  };

  const handleChangeTheme = (theme) => {
    setAppTheme(theme); // Update application-wide theme state
    // Additional logic to persist theme preference (e.g., AsyncStorage)
    // AsyncStorage.setItem('appTheme', theme);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <TouchableOpacity style={styles.section} onPress={toggleAppLanguageModal}>
        <Text style={styles.sectionText}>App Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={toggleThemesModal}>
        <Text style={styles.sectionText}>Themes</Text>
      </TouchableOpacity>
      <AccountManagement navigation={navigation} />

      <AppLanguageModal
        visible={appLanguageModalVisible}
        onClose={toggleAppLanguageModal}
        currentLanguage="english" // Pass current language dynamically
      />

      <ThemesModal
        visible={themesModalVisible}
        onClose={toggleThemesModal}
        currentTheme={appTheme}
        onChangeTheme={handleChangeTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  sectionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
