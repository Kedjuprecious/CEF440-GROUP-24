import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Login = () => {
  return (
    <View style={styles.mainSignup}>
      <View style={styles.logoheader}>
      <Image source={require('../../assets/logo.jpeg')} style={styles.logo1} />
      <Text style={styles.signUpPhrase}>Welcome back!!!</Text>
      </View>

      <View style={styles.demacation}>
         <View style={styles.line1}>
          <Text>........................</Text>
         </View>
         <View style={styles.line2}>
          <Text style={styles.lin2Text}>SignIn With</Text>
         </View >
         <View style={styles.line3}>
         <Text>........................</Text>
         </View>
      </View>

      <View style={styles.icons}>
          <View style={styles.google}>
             <AntDesign name="google" size={45} color="green" />
          </View>
          <View style={styles.facebook}>
          <EvilIcons name="sc-facebook" size={65} color="#fff" />
          </View>
      </View>

      <View style={styles.ORcontainer}>
        <Text style={styles.OR}>OR</Text>
      </View>
      <View>
        
      </View>
      
     
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  mainSignup: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  logo1: {
    width: 400,
    height: 80,
  },
  logoheader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpPhrase: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  demacation: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  line1: {
    backgroundColor: '#000',
    width: 100,
    height: 5,
  },
  lin2Text: {
    fontSize: 25,
    color: '#ffad0f',
    fontWeight: 'bold',
  },

  line3: {
    backgroundColor: '#000',
    width: 100,
    height: 5,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  google: {
    backgroundColor: '#ffad0f',
    borderRadius: 50,
  },
  facebook: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 51,
  },
  ORcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  OR: {
    paddingTop: 0,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffad0f',
  }
})