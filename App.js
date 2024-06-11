import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// Import your screens
import Dashboard from './app/(tabs)/Dashboard';
import Claim from './app/(tabs)/Claim';
import Chat from './app/(tabs)/Chat';
import Login from './app/(tabs)/Login';
import Payment from './app/(tabs)/Payment';
import Report from './app/(tabs)/Report';
import SeeMorePage from './app/(tabs)/SeeMorePage';
import SignUp from './app/(tabs)/SignUp';
import Welcome from './app/(tabs)/Welcome';
// Create a stack navigator
const Stack = createNativeStackNavigator();

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="">
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Claim" component={Claim} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Report" component={Report} />
      <Tab.Screen name="SeeMorePage" component={SeeMorePage} />
      <Tab.Screen name="SignUp" component={SignUp}/>
      <Tab.Screen name="Welcome" component={Welcome} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="(tabs)" component={MyTabs}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

