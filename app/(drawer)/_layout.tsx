import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='main' options={{headerShown:false}} />
        <Stack.Screen name='products' options={{headerShown:false}} />
        <Stack.Screen name='Order History' options={{headerShown:false}} />
        <Stack.Screen name='order' options={{headerShown:false}} />

    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})