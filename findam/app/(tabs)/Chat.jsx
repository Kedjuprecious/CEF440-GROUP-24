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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={18} color="black" />
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 0,
    borderBottomColor: '#e8e8e8',
    paddingHorizontal: 12,
  },
});
