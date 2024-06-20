import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dashboard from '../app/(tabs)/Dashboard';
import ExplorePage from '../app/(tabs)/ExplorePage';

const Tab = createBottomTabNavigator();


const AddScreen = () => (
  <View style={styles.screen}>
    <Text>Add Screen</Text>
  </View>
);

const MeScreen = () => (
  <View style={styles.screen}>
    <Text>Me Screen</Text>
  </View>
);

const FooterTabs = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#FFAD0F',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExplorePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="explore" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: () => (
              <View style={styles.addButton}>
                <MaterialIcons name="add" color="#FFF" size={30} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={MeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle-o" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    height: 60,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#FFAD0F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});

export default FooterTabs;
