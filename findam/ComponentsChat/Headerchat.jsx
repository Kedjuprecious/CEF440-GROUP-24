import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Headerchat = ({ navigation }) => {
  // Default avatar image
  const defaultAvatarUri = 'https://www.w3schools.com/w3images/avatar2.png'; // Example default avatar URL
  const profileImageUri = 'https://www.w3schools.com/howto/img_avatar.png'; // Example user profile picture URL

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
        onPress={() => navigation.navigate('HandoverValidation')}
      >
        <Text style={styles.handoverButtonText}>Handover Validation</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Headerchat

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
});
