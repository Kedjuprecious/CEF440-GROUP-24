import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Headerchat = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.quora.com%2FWhat-do-half-Nordic-half-black-people-look-like&psig=AOvVaw0HypxI4q7mSB3EH0VzQ-Lo&ust=1718127196657000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjDgN3I0YYDFQAAAAAdAAAAABAJ' }} // Replace with user's profile picture URL
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
    // color: '#FF0000',
    
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1, // Add border width
    borderColor: '#000000', // Set border color to white
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
})