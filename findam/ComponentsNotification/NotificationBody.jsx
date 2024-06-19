import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NotificationHeader from './NotificationHeader';

const Tab = createMaterialTopTabNavigator();

const SystemNotifications = () => {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.notification}>
        <Ionicons name="notifications" size={24} color="#FFAD0F" style={styles.icon} />
        <Text style={[styles.notificationText, styles.flexibleText]}>
          System update completed successfully.
        </Text>
      </View>
      <View style={styles.notification}>
        <Ionicons name="notifications" size={24} color="#FFAD0F" style={styles.icon} />
        <Text style={[styles.notificationText, styles.flexibleText]}>
          New feature added to the app.
        </Text>
      </View>
    </ScrollView>
  );
};

const UploadsNotifications = () => {
  return (
    <ScrollView style={styles.contentContainer}>
      {/* New upload available notification */}
      <View style={styles.notification}>
        <MaterialIcons name="file-upload" size={24} color="#FFAD0F" style={styles.icon} />
        <Text style={[styles.notificationText, styles.flexibleText]}>
          New upload available: Album XYZ.
        </Text>
      </View>
      {/* Successful image matching notification */}
      <View style={styles.notification}>
        <FontAwesome name="image" size={24} color="#FFAD0F" style={styles.icon} />
        <FontAwesome name="check-circle" size={12} color="green" style={styles.overlayIcon} />
        <Text style={[styles.notificationText, styles.successText, styles.flexibleText]}>
          Image matched successfully with your lost item.
        </Text>
      </View>
      {/* Unsuccessful image matching notification */}
      <View style={styles.notification}>
        <FontAwesome name="image" size={24} color="#FFAD0F" style={styles.icon} />
        <MaterialIcons name="error" size={12} color="red" style={styles.errorIcon} />
        <Text style={[styles.notificationText, styles.failureText, styles.flexibleText]}>
          Image matching failed. Please try again.
        </Text>
      </View>
      {/* Another successful image matching notification */}
      <View style={styles.notification}>
        <FontAwesome name="image" size={24} color="#FFAD0F" style={styles.icon} />
        <FontAwesome name="check-circle" size={12} color="green" style={styles.overlayIcon} />
        <Text style={[styles.notificationText, styles.successText, styles.flexibleText]}>
          Image matched successfully with your lost item.
        </Text>
      </View>

      {/* New upload available notification */}
      <View style={styles.notification}>
        <MaterialIcons name="file-upload" size={24} color="#FFAD0F" style={styles.icon} />
        <Text style={[styles.notificationText, styles.flexibleText]}>
          New upload available: Album XYZ.
        </Text>
      </View>

      {/* Another unsuccessful image matching notification */}
      <View style={styles.notification}>
        <FontAwesome name="image" size={24} color="#FFAD0F" style={styles.icon} />
        <MaterialIcons name="error" size={12} color="red" style={styles.errorIcon} />
        <Text style={[styles.notificationText, styles.failureText, styles.flexibleText]}>
          Image matching failed. Please try again.
        </Text>
      </View>
    </ScrollView>
  );
};

const NotificationBody = () => {
  return (
    <View style={styles.container}>
      <NotificationHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: '#FFAD0F' },
          tabBarStyle: { backgroundColor: '#D9D9D9' },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="System Notifications" component={SystemNotifications} />
        <Tab.Screen name="Uploads & Image Matching" component={UploadsNotifications} />
      </Tab.Navigator>
    </View>
  );
};

export default NotificationBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  contentContainer: {
    padding: 20,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FFAD0F',
    flexWrap: 'wrap', // Added flexWrap to allow text wrapping
  },
  icon: {
    marginRight: 10,
  },
  notificationText: {
    fontSize: 16,
    color: 'black',
  },
  // Added 'flexWrap' to allow text wrapping
  flexibleText: {
    flexWrap: 'wrap',
  },
  successText: {
    color: 'green',
  },
  failureText: {
    color: 'red',
  },
  overlayIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1, // Ensures the icon is above the text
  },
  errorIcon: {
    marginRight: 5, // Adjust as needed for spacing
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1, // Ensures the icon is above the text
  },
});
