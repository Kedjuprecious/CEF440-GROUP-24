import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";

const Claim = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { image, name, status, date } = route.params;

  const handleBack = () => {
    navigation.navigate("Home");
  };

  const handleClaim = () => {
    navigation.navigate("ClaimScreen");
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
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClaim}>
          <Text style={styles.buttonText}>Claim</Text>
        </TouchableOpacity>
      </View>
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
});

export default Claim;
