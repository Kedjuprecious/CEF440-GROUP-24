// components/hamburger/HamburgerMenu.jsx
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";

//Define Homescreen
const HomeScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Home Screen</Text>
  </View>
);
// Define your screens
const AboutScreen = () => (
  <View style={styles.screenContainer}>
    <Text>About Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Settings Screen</Text>
  </View>
);

const HelpScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Help Screen</Text>
  </View>
);

const CommunitySupportScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Community Support Screen</Text>
  </View>
);

// Create a Drawer Navigator
const Drawer = createDrawerNavigator();

// Custom Drawer Content Component
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <Image
        source={require("../../assets/images/log.jpg")}
        style={styles.drawerImage}
      />
    </View>
    <DrawerItem
      label="Home"
      onPress={() => props.navigation.navigate("Home")}
    />
    <DrawerItem
      label="About"
      onPress={() => props.navigation.navigate("About")}
    />
    <DrawerItem
      label="Settings"
      onPress={() => props.navigation.navigate("Settings")}
    />
    <DrawerItem
      label="Help"
      onPress={() => props.navigation.navigate("Help")}
    />
    <DrawerItem
      label="Community Support"
      onPress={() => props.navigation.navigate("Community Support")}
    />
  </DrawerContentScrollView>
);

const HamburgerMenu = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="Help" component={HelpScreen} />
    <Drawer.Screen
      name="Community Support"
      component={CommunitySupportScreen}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerHeader: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  drawerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default HamburgerMenu;
