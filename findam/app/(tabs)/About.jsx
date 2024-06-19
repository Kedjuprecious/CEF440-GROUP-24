import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={20} color="black" onPress={handleBack} />
        <Text style={styles.headerText}>About Us</Text>
      </View>
      <Animatable.View animation="fadeInUp" style={styles.section}>
        <MaterialIcons name="mission" size={24} color="#FFAD0F" style={styles.icon} />
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          Our mission is to create innovative and user-friendly solutions that solve real-world problems and improve the quality of life for our users.
        </Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" delay={100} style={styles.section}>
        <FontAwesome name="eye" size={24} color="#FFAD0F" style={styles.icon} />
        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.sectionText}>
          Our vision is to be a global leader in technology, setting standards for excellence and integrity while providing unmatched value to our customers.
        </Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" delay={200} style={styles.section}>
        <Ionicons name="call" size={24} color="#FFAD0F" style={styles.icon} />
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionText}>
          Email: support@ourapp.com
          {'\n'}Phone: +123 456 7890
          {'\n'}Address: 123 Tech Street, Innovation City, Country
        </Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" delay={300} style={styles.section}>
        <MaterialIcons name="info" size={24} color="#FFAD0F" style={styles.icon} />
        <Text style={styles.sectionTitle}>App Version</Text>
        <Text style={styles.sectionText}>Version 1.0.0</Text>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFAD0F',
  },
  icon: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default About;
