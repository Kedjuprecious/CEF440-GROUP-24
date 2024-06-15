import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from "../../componentsR/Settings/SettingsScreen";
import HistoryPage from "../../componentsR/HistoryPage";
import AboutScreen from "../../componentsR/AboutScreen";
import HelpScreen from "../../componentsR/HelpScreen";
import CommunitySupportScreen from "../../componentsR/CommunitySupportScreen";

// Define HomeScreen
const HomeScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Ionicons name="menu" size={32} color="black" />
    </TouchableOpacity>
    <Text>Home Screen</Text>
  </View>
);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
    <DrawerItem
      label="History"
      onPress={() => props.navigation.navigate("History")}
    />
  </DrawerContentScrollView>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
  </Drawer.Navigator>
);

const HamburgerMenu = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="About"
      component={AboutScreen}
      options={({ navigation }) => ({
        title: "About",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={({ navigation }) => ({
        title: "Settings",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Help"
      component={HelpScreen}
      options={({ navigation }) => ({
        title: "Help",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Community Support"
      component={CommunitySupportScreen}
      options={({ navigation }) => ({
        title: "Community Support",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="History"
      component={HistoryPage}
      options={({ navigation }) => ({
        title: "History",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
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
