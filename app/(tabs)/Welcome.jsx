import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SignUp from '../../app/(tabs)/SignUp';


const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <View >
          <Image source={require('../../assets/logo.jpeg')} style={styles.logo} /> 
          <Text style={styles.phrase}>Finding what's lost, made easy</Text>
       </View>
       <View style={styles.login}>
          <Text style={styles.loginText}>LogIn</Text>
       </View>
       <View style={styles.signup}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp') }>
        <Text style={styles.signupText}>SignUp</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default Welcome

//ImageBackground source={require('../../assets/logo.jpeg')} style={styles.container}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  phrase: {
    color:'#ffad0f',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
    },
    login: {
      backgroundColor: '#ffad0f',
      padding: 12,
      borderRadius: 15,
      elevation: 20,
      width: 250,
      marginTop: 30
    },
    loginText: {
      fontSize: 24,
      textAlign: 'center',
    },
    signup: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 15,
      elevation: 20,
      width: 250,
      marginTop: 30,
      marginBottom: 0,
    },
    signupText: {
      fontSize: 24,
      textAlign: 'center',
    },
    logo: {
      justifyContent: 'flex-start',
      width: 500,
      height:100,
      marginBottom: 40,
      marginTop: 0,
      paddingBottom: 40,
    }

})