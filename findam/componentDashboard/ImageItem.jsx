
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import DescriptionPage from '../app/(tabs)/DescriptionPage';

const ImageItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <Image source={item.image } style={styles.image} />
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="share-alt" size={24}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="handshake-o" size={24}/>
          
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('DescriptionPage', { itemId: item.id })}
        >
          <MaterialIcons name="description" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  iconButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ImageItem;
