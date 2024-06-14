import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import ActionButtons from "../../componentsR/ImageUpLoader/ActionButtons";

export default function Payment() {
    const [mtnAccount, setMtnAccount] = useState("");
    const [orangeAccount, setOrangeAccount] = useState("");

    const handlePayment = (method) => {
      if (method === "MTN") {
        alert(`Processing MTN MoMo payment for account: ${mtnAccount}`);
      } else if (method === "Orange") {
        alert(`Processing Orange Money payment for account: ${orangeAccount}`);
      }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Transactions</Text>

      {/* MTN MoMo Section */}
      <View style={styles.paymentSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>MTN MoMo</Text>
          <Image source={require("../../assets/images/momo.jpg")} style={styles.logo} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter MTN MoMo account details"
          value={mtnAccount}
          onChangeText={(text) => setMtnAccount(text)}
        />
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => handlePayment("MTN")}
        >
          <Text style={styles.buttonText}>Pay with MTN MoMo</Text>
        </TouchableOpacity>
      </View>

      {/* Orange Money Section */}
      <View style={styles.paymentSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Orange Money</Text>
          <Image
            source={require("../../assets/images/Orange-Money-Logo.png")}
            style={styles.logo}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Orange Money account details"
          value={orangeAccount}
          onChangeText={(text) => setOrangeAccount(text)}
        />
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => handlePayment("Orange")}
        >
          <Text style={styles.buttonText}>Pay with Orange Money</Text>
        </TouchableOpacity>
      </View>
      <ActionButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  paymentSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  paymentButton: {
    backgroundColor: "#FCB121",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});