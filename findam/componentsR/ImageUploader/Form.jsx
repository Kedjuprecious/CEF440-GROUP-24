import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,} from "react-native";
 


const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Item Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Item Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={4}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "300px",
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#d9d9d9",
    backgroundColor: "#d9d9d9",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    textAlignVertical: "top",
    backgroundColor: "#d9d9d9",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Form;
