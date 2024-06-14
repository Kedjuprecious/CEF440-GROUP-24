import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
const ItemDetails = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Item Name" />
      <TextInput
        style={[styles.input, styles.caption]}
        placeholder="Caption"
        multiline
        maxLength={1000}
      />
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#D9D9D9"
  },
  caption: {
    height: 100,
    textAlignVertical: "top",
  },
});
