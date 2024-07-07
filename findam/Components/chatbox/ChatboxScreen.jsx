import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ChatboxScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const chats = [
    
    {
      id: "1",
      name: "John Doe",
      message: "Hello!",
      time: "10:30 AM",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      id: "2",
      name: "Jane Smith",
      message: "How are you?",
      time: "11:00 AM",
      profilePic: "https://via.placeholder.com/50",
    },
    
  ];

  const handleChatPress = (chat) => {
    navigation.navigate("ChatDetail", { chat });
  };

  const handleHandoverValidation = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }} // Replace with actual profile picture
          style={styles.profilePic}
        />
      </View>

      {/* Body */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => handleChatPress(item)}
          >
            <Image
              source={{ uri: item.profilePic }}
              style={styles.chatProfilePic}
            />
            <View style={styles.chatDetails}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMessage}>{item.message}</Text>
            </View>
            <Text style={styles.chatTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Icon name="comment" size={24} color="#000" style={styles.footerIcon} />
        <Icon name="phone" size={24} color="#000" style={styles.footerIcon} />
        <Icon name="cog" size={24} color="#000" style={styles.footerIcon} />
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
    marginTop: 40,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  chatProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatMessage: {
    fontSize: 14,
    color: "#777",
  },
  chatTime: {
    fontSize: 12,
    color: "#777",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerIcon: {
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

export default ChatboxScreen;
