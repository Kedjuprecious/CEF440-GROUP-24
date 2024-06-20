

import React from 'react';
import { StyleSheet,  View, TextInput, TouchableOpacity } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

const DashboardH = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton}>
        <EvilIcons name="navicon" size={40} color="#FFAD0F" />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
        />
        <EvilIcons name="search" size={30} color="black" style={styles.searchIcon} />
      </View>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="notifications-outline" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardH;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    elevation: 10,
  },
  iconButton: {
    padding: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEE',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIcon: {
    padding: 10,
  },
});

