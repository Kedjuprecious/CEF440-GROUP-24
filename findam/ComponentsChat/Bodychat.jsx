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
        contentContainerStyle={{ paddingVertical: 12 }} // Added padding between messages
      />
    </View>
  );
};

export default Bodychat;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 16, // Adjusted horizontal padding for better spacing
    backgroundColor: '#F0F0F0', // Added a light background color
  },
  messageContainer: {
    padding: 10,
    borderRadius: 12,
    maxWidth: '70%', // Reduced maximum width for messages
    alignSelf: 'flex-end', // Align messages to the left by default
    marginBottom: 8, // Added margin bottom for spacing between messages
  },
  userMessage: {
    backgroundColor: '#FFC107', // Changed user message background color
    alignSelf: 'flex-start', // Align user messages to the right
  },
  otherMessage: {
    backgroundColor: '#FFFFFF', // Changed other user message background color
  },
  messageText: {
    fontSize: 16, // Adjusted font size for better readability
    color: '#000000', // Set text color to black
  },
});
