import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const ProfileHeader = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState('https://www.w3schools.com/w3images/avatar2.png'); // Default profile image URL
  const [name, setName] = useState('John Doe'); // Default name
  const [email, setEmail] = useState('johndoe@example.com'); // Default email
  const [contact, setContact] = useState('123-456-7890'); // Default contact
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);

  useEffect(() => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Contact:', contact);
  }, [name, email, contact]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
            <View style={styles.editButton}>
              <Ionicons name="pencil" size={20} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Button title="Choose from Gallery" onPress={pickImage} />
              <Button title="Take a Photo" onPress={() => console.log('Take photo')} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Ionicons name="person" size={24} color="black" />
          <Text style={styles.infoTitle}>Name:</Text>
        </View>
        <View style={styles.infoItem}>
          {isEditingName ? (
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              onBlur={() => setIsEditingName(false)}
            />
          ) : (
            <TouchableOpacity style={styles.placeholder} onPress={() => setIsEditingName(true)}>
              <Text style={styles.placeholderText}>{name}</Text>
              <Ionicons name="pencil" size={18} color="black" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="mail" size={24} color="black" />
          <Text style={styles.infoTitle}>Email:</Text>
        </View>
        <View style={styles.infoItem}>
          {isEditingEmail ? (
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              onBlur={() => setIsEditingEmail(false)}
            />
          ) : (
            <TouchableOpacity style={styles.placeholder} onPress={() => setIsEditingEmail(true)}>
              <Text style={styles.placeholderText}>{email}</Text>
              <Ionicons name="pencil" size={18} color="black" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="call" size={24} color="black" />
          <Text style={styles.infoTitle}>Contact:</Text>
        </View>
        <View style={styles.infoItem}>
          {isEditingContact ? (
            <TextInput
              style={styles.input}
              value={contact}
              onChangeText={setContact}
              onBlur={() => setIsEditingContact(false)}
            />
          ) : (
            <TouchableOpacity style={styles.placeholder} onPress={() => setIsEditingContact(true)}>
              <Text style={styles.placeholderText}>{contact}</Text>
              <Ionicons name="pencil" size={18} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
}

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  profileImageContainer: {
    position: 'relative',
    borderRadius: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFAD0F',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFAD0F',
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
    color: '#333',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  placeholderText: {
    color: '#333',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    padding: 10,
    flex: 1,
    color: '#333',
  },
});
