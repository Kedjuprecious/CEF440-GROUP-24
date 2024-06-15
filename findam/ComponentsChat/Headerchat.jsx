import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';

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
        <Text style={styles.headerTitle}>Chats</Text>
      </View>
      <TouchableOpacity
        style={styles.handoverButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.handoverButtonText}>Handover Validation</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.placeholderSection}>
              <Text style={styles.heading}>Your Code</Text>
              <View style={[styles.placeholder, styles.placeholderFFAD0F]}>
                <Text style={styles.placeholderText}>{showUserCode ? '1154' : '****'}</Text>
                <TouchableOpacity onPress={toggleUserCodeVisibility} style={styles.eyeButton}>
                  <Image
                    source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/visible.png' }} // Example eye icon URL
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.placeholderSection}>
              <Text style={styles.heading}>Enter Founder's Code</Text>
              <View style={[styles.placeholder, styles.placeholderD9D9D9]}>
                <Text style={styles.placeholderText}>{showSenderCode ? '1234' : '****'}</Text>
                <TouchableOpacity onPress={toggleSenderCodeVisibility} style={styles.eyeButton}>
                  <Image
                    source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/visible.png' }} // Example eye icon URL
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default Headerchat;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D9D9D9',
    padding: 5,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000000',
  },
  headerTitle: {
    color: '#000000',
    fontSize: 22,
  },
  handoverButton: {
    backgroundColor: '#FFAD0F',
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  handoverButtonText: {
    color: '#fff',
    fontSize: 13,
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
  },
  placeholderSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  eyeIcon: {
    width: 20,
    height: 20,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#FFAD0F',
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderRadius: 5,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 13,
  },
});