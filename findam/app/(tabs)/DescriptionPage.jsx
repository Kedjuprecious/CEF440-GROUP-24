
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DescriptionPage = () => {
  const navigation = useNavigation();
  const imageSource = require('../../assets/images/cards.png'); 
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Document Details</Text>
      </View>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.description}>
          <Text>
            <Text style={{ fontWeight: 'bold' }}> Document Type:</Text> Passport
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Description:</Text>
            The missing document is a Cameroonian passport. It has a blue cover with the Cameroon emblem embossed on the front. The passport number is xxxxxxx, and 
            it was issued on January 15, 2020. The document contains personal details including a photograph of the owner, date of birth, and nationality. 
            The passport was last seen on June 10, 2024, at the XYZ Airport in Buea City.  
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5, 
    backgroundColor: '#FFAD0F',
    justifyContent: 'space-between',
    paddingVertical: 40
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color:"#FFF",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default DescriptionPage;
