import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppLoading from "expo-app-loading";
import Splash from "./Components/SplashOnboarding/Splash";
import onboard1 from "./Components/SplashOnboarding/onboard1";
import SignupScreen from "./Components/Authentication/SignupScreen";
import SigninScreen from "./Components/Authentication/SigninScreen";
import HomeScreen from "./Components/HomeDashboard/HomeScreen";
import Dashboard from "./Components/HomeDashboard/Dashboard";
import Report from "./Components/Report/Report";
import ClaimScreen from "./Components/claim/ClaimScreen";
import UploadForComparisonScreen from "./Components/claim/UploadComparisonScreen";
import ChatboxScreen from "./Components/chatbox/ChatboxScreen";
import ChatDetailScreen from "./Components/chatbox/ChatDetailScreen";
import Transactions from "./Components/Transactions/Transactions";
import Profile from "./Components/profile/Profile";
import Claim from "./Components/claim/Claim";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Claim" component={Claim} />
    <Stack.Screen name="ClaimScreen" component={ClaimScreen} />
    <Stack.Screen
      name="UploadForComparison"
      component={UploadForComparisonScreen}
    />
    <Stack.Screen name="Transaction" component={Transactions} />
    <Stack.Screen name="Chatbox" component={ChatboxScreen} />
    <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
    <Stack.Screen name="Claim" component={Claim} />
    <Stack.Screen name="Report" component={Report} />
  </Stack.Navigator>
);

const DashboardStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Claim" component={Claim} />
    <Stack.Screen name="ClaimScreen" component={ClaimScreen} />
    <Stack.Screen
      name="UploadForComparison"
      component={UploadForComparisonScreen}
    />
    <Stack.Screen name="Transaction" component={Transactions} />
    <Stack.Screen name="Chatbox" component={ChatboxScreen} />
    <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Report" component={Report} />
  </Stack.Navigator>
);

const MainDrawer = () => (
  <Drawer.Navigator initialRouteName="HomeScreen">
    <Drawer.Screen name="HomeScreen" component={HomeStack} />
    <Drawer.Screen name="Dashboard" component={DashboardStack} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Report" component={Report} />
  </Drawer.Navigator>
);

const App = () => {
  // Simulating font loading state
  let fontsLoaded = true; // Change to false if using actual font loading logic

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Onboarding"
          component={onboard1}
          initialParams={{ screenIndex: 0 }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Claim" component={Claim} />
        <Stack.Screen name="ClaimScreen" component={ClaimScreen} />
        <Stack.Screen name="Transaction" component={Transactions} />
        <Stack.Screen name="Chatbox" component={ChatboxScreen} />
        <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
        {/* Main Drawer Navigator */}
        <Stack.Screen name="MainDrawer">{() => <MainDrawer />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
