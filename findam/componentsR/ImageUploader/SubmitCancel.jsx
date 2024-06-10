import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {TouchableOpacity,
  Alert} from "react-native"
  import { FontAwesome } from "@expo/vector-icons";
  import { Entypo } from "@expo/vector-icons";

const SubmitCancel = () => {
    const handleSubmit = () => {
      Alert.alert(
        "Form Submitted",
        `Name: ${name}\nDescription: ${description}`
      );
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>
          <Entypo name="cross" size={70} color="#ff0000" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          <FontAwesome name="check" size={70} color="#00ff00" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SubmitCancel

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
   
  },
  button: {
    
    height: "60px",
    width: "100px",
  },
});