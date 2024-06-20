// HeaderComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
      <View style={{flex: 1 , marginLeft: 10 , marginTop: 30}}>
        <View  style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Items Reported Missing</Text>
        </View>
        <View style={styles.timeLine}>
        <Text style={styles.timeText}>Today</Text>
        <Text style={styles.timeTextMiddle}>{'<7days'}</Text>
        <Text style={styles.timeText}>{'>7days'}</Text>
      </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingVertical: 15,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  
  timeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    
  },
  timeText: {
    fontSize: 16,
    color: '#FFAD0F',
  },
  timeTextMiddle: {
    fontSize: 16,
    color: '#FFAD0F',
    marginHorizontal: 50,
  },
});

export default Header;
