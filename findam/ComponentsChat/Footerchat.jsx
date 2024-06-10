import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const Footerchat = () => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.footerContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          placeholderTextColor="#aaa"
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity style={styles.voiceButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/microphone.png' }} // Replace with the appropriate voice icon
            style={styles.voiceIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.sendButton}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/send.png' }} // Replace with the appropriate send icon
          style={styles.sendIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footerchat;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: '#ffffff',
  },
  voiceButton: {
    padding: 10,
  },
  voiceIcon: {
    width: 20,
    height: 20,
  },
  sendButton: {
    backgroundColor: '#FFAD0F',
    borderRadius: 25,
    padding: 10,
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
});
