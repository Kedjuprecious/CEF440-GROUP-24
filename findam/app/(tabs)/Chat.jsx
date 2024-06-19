import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Headerchat from '../../ComponentsChat/Headerchat';
import Bodychat from '../../ComponentsChat/Bodychat';
import Footerchat from '../../ComponentsChat/Footerchat';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Chat() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.headerContent}>
          <Ionicons name="arrow-back" size={20} color="black" />
          <Text style={styles.headerText}>Chats</Text>
        </TouchableOpacity>
      </View>
      <Headerchat />
      <Bodychat />
      <Footerchat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#D9D9D9', // #f8f8f8
    borderBottomWidth: 0,
    borderBottomColor: '#e8e8e8',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
