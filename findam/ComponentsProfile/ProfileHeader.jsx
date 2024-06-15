import React from 'react';
import { StyleSheet, View, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ProfileHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 0,
    paddingHorizontal: 12,
  },
});
