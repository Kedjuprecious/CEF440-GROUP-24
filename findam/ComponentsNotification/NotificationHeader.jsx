import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NotificationHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={18} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Notifications</Text>
    </View>
  );
};

export default NotificationHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 0,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
