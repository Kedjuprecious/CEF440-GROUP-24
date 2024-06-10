import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Payments = () => {
  return (
    <View>
      <Text>Payment</Text>
      <Text>
        Mobile Money
        <Image src="../../assets/images/favicon.png" />
      </Text>
      <Text style={styles.label}>Item Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your account Number"
        value={name}
        onChangeText={setName}
      />

      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>Payment</Text>
      </Pressable>

      <Text>
        Orange Money
        <Image src="../../assets/images/favicon.png" />
      </Text>
      <Text style={styles.label}>Item Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your account Number"
        value={name}
        onChangeText={setName}
      />

      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>Make Payment</Text>
      </Pressable>
    </View>
  );
}

export default Payments

const styles = StyleSheet.create({})