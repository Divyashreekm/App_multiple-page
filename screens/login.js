import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const login = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>login</Text>
      <Button title='click ' onPress={() => navigation.navigate('home') }/>
    </View>
  )
}

export default login

const styles = StyleSheet.create({})