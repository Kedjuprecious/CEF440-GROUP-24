import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Headerchat = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showUserCode, setShowUserCode] = useState(false);
  const [showSenderCode, setShowSenderCode] = useState(false);
  const profileImageUri = 'https://www.w3schools.com/howto/img_avatar.png'; // Example user profile picture URL
  const defaultAvatarUri = 'https://www.w3schools.com/w3images/avatar2.png'; // Example default avatar URL

  const toggleUserCodeVisibility = () => {
    setShowUserCode(!showUserCode);
  };

  const toggleSenderCodeVisibility = () => {
    setShowSenderCode(!showSenderCode);
  };

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: profileImageUri || defaultAvatarUri }} // Use profileImageUri if available, otherwise use defaultAvatarUri
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.handoverButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.handoverButtonText}>Handover Validation</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.placeholderSection}>
              <Text style={styles.heading}>Your Code</Text>
              <View style={[styles.placeholder, styles.placeholderFFAD0F]}>
                <Text style={styles.placeholderText}>{showUserCode ? '1154' : '****'}</Text>
                <TouchableOpacity onPress={toggleUserCodeVisibility} style={styles.eyeButton}>
                  <Ionicons name="eye" size={24} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.placeholderSection}>
              <Text style={styles.heading}>Enter Founder's Code</Text>
              <View style={[styles.placeholder, styles.placeholderD9D9D9]}>
                <Text style={styles.placeholderText}>{showSenderCode ? '1234' : '****'}</Text>
                <TouchableOpacity onPress={toggleSenderCodeVisibility} style={styles.eyeButton}>
                  <Ionicons name="eye" size={24} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Headerchat;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D9D9D9', // #F5F5F5
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  handoverButton: {
    backgroundColor: '#FFAD0F',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  handoverButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  placeholderSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150, // Ensure consistent width for placeholders
    padding: 10,
    borderRadius: 5,
  },
  placeholderText: {
    color: '#000',
    fontSize: 16,
    marginRight: 10,
  },
  placeholderFFAD0F: {
    backgroundColor: '#FFAD0F',
  },
  placeholderD9D9D9: {
    backgroundColor: '#D9D9D9',
  },
  eyeButton: {
    padding: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FFAD0F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
