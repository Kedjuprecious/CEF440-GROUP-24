import { View} from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayout = ({children}) => {
  const [fontsLoaded, error] =  useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  })

  useEffect(() =>{
   if(error) throw error;

   if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

    
  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  );
};
  
  export default RootLayout

