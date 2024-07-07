import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Transactions = () => {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePayment = () => {
    // Handle payment logic here
    // On successful payment, navigate to the chatbox screen
    navigation.navigate("Chatbox");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Choose your payment method</Text>

      {/* Payment Method Container */}
      <View style={styles.paymentMethodContainer}>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => setSelectedMethod("mtn")}
        >
          <Icon name="mobile" size={24} color="#ffcc00" />
          <Text style={styles.paymentText}>MTN Mobile Money</Text>
          <Icon
            name={selectedMethod === "mtn" ? "dot-circle-o" : "circle-o"}
            size={24}
            color="#000"
          />
        </TouchableOpacity>

        {selectedMethod === "mtn" && (
          <View style={styles.momoDetailsContainer}>
            <Text style={styles.momoHeader}>Pa's mobile phone number</Text>
            <Text style={styles.momoBody}>
              Enter the phone number of the account you want the money to be
              withdrawn from
            </Text>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Phone Number"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        )}
      </View>

      {/* Payment Method Container */}
      <View style={styles.paymentMethodContainer}>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => setSelectedMethod("orange")}
        >
          <Icon name="mobile" size={24} color="#ffcc00" />
          <Text style={styles.paymentText}>Orange  Money</Text>
          <Icon
            name={selectedMethod === "mtn" ? "dot-circle-o" : "circle-o"}
            size={24}
            color="#000"
          />
        </TouchableOpacity>

        {selectedMethod === "orange" && (
          <View style={styles.momoDetailsContainer}>
            <Text style={styles.momoHeader}>Pa's mobile phone number</Text>
            <Text style={styles.momoBody}>
              Enter the phone number of the account you want the money to be
              withdrawn from
            </Text>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Phone Number"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        )}
      </View>

      {/* Pay Now Button */}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  paymentMethodContainer: {
    marginBottom: 20,
  },
  paymentButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  paymentText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  momoDetailsContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  momoHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  momoBody: {
    fontSize: 14,
    marginBottom: 10,
  },
  phoneNumberInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  payButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Transactions;
