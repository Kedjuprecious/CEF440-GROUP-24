import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const Bodychat = () => {
  const messages = [
    { id: '1', text: 'Hello! I am Indah and the object uploaded is mine', sender: 'user' },
    { id: '2', text: 'Hi there!', sender: 'other' },
    { id: '3', text: 'I lost it on my way to school', sender: 'user' },
    { id: '4', text: 'Oh! I am sorry about that', sender: 'other' },
    { id: '5', text: 'Thank you', sender: 'user' },
    { id: '6', text: 'Thank goodness that the image matching was successful', sender: 'other' },
    { id: '7', text: 'Yeah', sender: 'user' },
    { id: '8', text: 'You will have to finish the process by going to the handover validation so that you can take your image', sender: 'other' },
    { id: '9', text: 'Yes. We will have to meet to complete the validation phase', sender: 'user' },
    { id: '10', text: 'Yes. We meet at mile 17', sender: 'other' },
    { id: '11', text: 'Okay. That works for me', sender: 'user' },
    { id: '12', text: 'Okay! Fine', sender: 'other' },
  ];

  const renderItem = ({ item }) => {
    const isUser = item.sender === 'user';
    return (
      <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.otherMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.bodyContainer}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Bodychat;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1, // Ensure the body container takes available space
    padding: 10, // Add padding around the entire FlatList
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    margin: 10,
  },
  userMessage: {
    backgroundColor: '#FFAD0F',
    alignSelf: 'flex-start', // Align user's messages to the left
  },
  otherMessage: {
    backgroundColor: '#D9D9D9',
    alignSelf: 'flex-end', // Align other user's messages to the right
  },
  messageText: {
    color: '#000000', // Set all text to black
    fontSize: 18,
  },
});
