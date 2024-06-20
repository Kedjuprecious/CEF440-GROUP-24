import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootLayout } from './app/_layout';
import FooterTabs from './componentDashboard/Footer';
import DescriptionPage from './app/(tabs)/DescriptionPage';


// Import your screens
import  Dashboard  from './app/(tabs)/Dashboard';
import ExplorePage from './app/(tabs)/ExplorePage';


// Create a stack navigator
const Stack = createNativeStackNavigator();



export default function App()  {
  return (
    <NavigationContainer>
      <RootLayout>
      <Stack.Navigator >
        <Stack.Screen name="FooterTabs" component={FooterTabs} options={{  headerShown: false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ExplorePage" component={ExplorePage} />
        <Stack.Screen name="DescriptionPage" component={DescriptionPage} options={{  headerShown: false}}/>
      </Stack.Navigator>
      </RootLayout>
    </NavigationContainer>
  );
}






