// components/settings/AccountManagement.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AccountManagement = ({ navigation }) => {
  const goToProfile = () => {
    navigation.navigate("Profile"); // Replace 'Profile' with your actual profile screen name
  };

  return (
    <TouchableOpacity onPress={goToProfile} style={styles.container}>
      <Text style={styles.text}>Account Management</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 18,
  },
});

export default AccountManagement;
