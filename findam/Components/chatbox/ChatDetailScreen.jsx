import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ChatDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { chat } = route.params;
  const [messages, setMessages] = useState([
    // Example messages data
    { id: "1", text: "Hello!", sender: "John Doe", timestamp: "10:30 AM" },
    { id: "2", text: "How are you?", sender: "You", timestamp: "10:32 AM" },
    // Add more messages as needed
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "You",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{chat.name}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.validationButton}>Handover Validation</Text>
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === "You" ? styles.yourMessage : styles.theirMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
          </View>
        )}
        inverted
      />

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Icon name="send" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>

      {/* Handover Validation Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Handover Validation</Text>
            <Text style={styles.modalText}>
              Enter the verification code from the other party
            </Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Verification Code"
              value={verificationCode}
              onChangeText={setVerificationCode}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 40
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  validationButton: {
    fontSize: 14,
    color: "#007bff",
  },
  messageContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  yourMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
  },
  theirMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  messageText: {
    fontSize: 16,
  },
  messageTimestamp: {
    fontSize: 12,
    color: "#777",
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  modalInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ChatDetailScreen;

